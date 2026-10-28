import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function field(value: unknown, max = 200) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEADS_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Quietly accept honeypot submissions to avoid helping bots tune their requests.
  if (field(body.website, 300)) return NextResponse.json({ ok: true });

  const audience = field(body.audience, 20);
  const name = field(body.name, 120);
  const email = field(body.email, 254);
  const goal = field(body.goal, 160);
  const businessName = field(body.businessName, 160);
  const industry = field(body.industry, 120);
  const course = field(body.course, 160);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !validEmail || !goal || !["owner", "student"].includes(audience)) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }
  if (audience === "owner" && (!businessName || !industry)) {
    return NextResponse.json({ error: "Business details are required." }, { status: 400 });
  }
  if (audience === "student" && !course) {
    return NextResponse.json({ error: "Study details are required." }, { status: 400 });
  }

  const lines = [
    `Audience: ${audience === "owner" ? "Business owner" : "Student"}`,
    `Name: ${name}`,
    `Email: ${email}`,
    audience === "owner" ? `Business: ${businessName}` : `School/course: ${course}`,
    audience === "owner" ? `Industry: ${industry}` : "",
    `Priority: ${goal}`,
  ].filter(Boolean);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["shivam@relytask.com"],
        reply_to: email,
        subject: `New Disha ${audience === "owner" ? "business owner" : "student"} signup: ${name}`,
        text: lines.join("\n"),
      }),
    });
    if (!response.ok) {
      console.error("Lead email delivery failed", response.status);
      return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
  }
}
