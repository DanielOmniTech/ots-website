import { NextResponse } from "next/server";

const WEBHOOK_URL =
  process.env.ODOO_LEAD_WEBHOOK_URL ??
  "https://portal.omnitechsolutions.eu/web/hook/b9516af8-5f2b-4904-a8f3-cbfff5ce1554";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function normalizeWebsite(value: string) {
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  if (asString(body.fax, 80)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 120);
  const email = asString(body.email, 120).toLowerCase();
  const phone = asString(body.phone, 40);
  const company = asString(body.company, 120);
  const website = normalizeWebsite(asString(body.website, 200));

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const leadName = company ? `${name} (${company})` : name;
  const description = [
    "Website contact form",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    website ? `Website: ${website}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const payload: Record<string, string> = {
    name: leadName,
    email,
    contact_name: name,
    email_from: email,
    description,
  };

  if (phone) payload.phone = phone;
  if (company) {
    payload.company = company;
    payload.partner_name = company;
  }
  if (website) payload.website = website;

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "OTS-Website/1.0",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });

    const text = await response.text();

    if (!response.ok) {
      console.error("[contact] Odoo webhook failed", response.status, text.slice(0, 1000));
      return NextResponse.json(
        {
          error: "upstream",
          status: response.status,
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[contact] Odoo webhook request failed", error);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
