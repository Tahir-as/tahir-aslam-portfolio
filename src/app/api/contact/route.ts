import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolio";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  // Silently accept submissions that trigger the hidden honeypot field.
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return NextResponse.json({
      ok: true,
      message: "Thank you for your message.",
    });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name (2–100 characters)." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 150) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please enter a message between 10 and 2000 characters.",
      },
      { status: 400 }
    );
  }

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT?.trim();

  if (formspreeEndpoint && formspreeEndpoint.startsWith("https://formspree.io/")) {
    try {
      const upstream = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio inquiry from ${name}`,
        }),
      });

      if (!upstream.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: `Could not deliver your message via the mail provider. You can email ${portfolioData.profile.email} directly.`,
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        message: "Message sent successfully. Thank you for reaching out!",
      });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: `Unable to reach the mail provider right now. You can email ${portfolioData.profile.email} directly.`,
        },
        { status: 502 }
      );
    }
  }

  // Fallback when FORMSPREE_ENDPOINT is not configured yet (local dev / initial setup).
  console.info("[portfolio/contact] Received validated contact submission:", {
    name,
    email,
    messageLength: message.length,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: `Message received by the API route. To enable email delivery to your inbox, set FORMSPREE_ENDPOINT in your environment variables, or reach out directly at ${portfolioData.profile.email}.`,
  });
}
