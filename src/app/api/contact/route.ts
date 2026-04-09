import { NextRequest, NextResponse } from "next/server";
import https from "https";

// Force Node.js runtime — avoids Next.js fetch patching that breaks Resend SDK
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Direct HTTPS call to Resend REST API — bypasses Next.js fetch patching
function sendViaResend(payload: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  apiKey: string;
}): Promise<{ id?: string; error?: string }> {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      from: payload.from,
      to: payload.to,
      reply_to: payload.replyTo,
      subject: payload.subject,
      html: payload.html,
    });

    const options = {
      hostname: "api.resend.com",
      port: 443,
      path: "/emails",
      method: "POST",
      headers: {
        Authorization: `Bearer ${payload.apiKey}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
      // Allow corporate proxy self-signed certs in local dev only
      rejectUnauthorized: process.env.NODE_ENV === "production",
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ id: parsed.id });
          } else {
            resolve({ error: parsed.message ?? `HTTP ${res.statusCode}` });
          }
        } catch {
          resolve({ error: "Invalid response from Resend" });
        }
      });
    });

    req.on("error", (err) => reject(err));
    req.write(body);
    req.end();
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, message } = body;

    // Server-side validation
    if (!name?.trim() || name.trim().length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!email?.trim() || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!message?.trim() || message.trim().length < 20) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY ?? "";
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "rahul.ankit30@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.error("[contact] RESEND_API_KEY not configured");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const result = await sendViaResend({
      apiKey,
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio contact from ${name.trim()}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 580px; margin: 0 auto; background: #0f0f1a; color: #f0f0f5; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: white;">New Portfolio Message</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #9898b0; font-size: 13px; width: 80px;">From</td>
                <td style="padding: 10px 0; font-weight: 600;">${name.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #9898b0; font-size: 13px;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #818cf8;">${email}</a></td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 20px; background: #1a1a2e; border-radius: 8px; border-left: 3px solid #6366f1;">
              <p style="margin: 0; color: #9898b0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">Message</p>
              <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message.trim()}</p>
            </div>
            <p style="margin-top: 24px; color: #5c5c78; font-size: 12px; text-align: center;">
              Sent via your portfolio contact form · Reply directly to this email to respond.
            </p>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    console.log("[contact] Email sent successfully, id:", result.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
