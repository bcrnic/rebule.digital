// Netlify poziva ovu funkciju za svaki novi (ne-spam) upit iz Netlify Forms.
// Šalje uređen HTML mejl preko Resend API-ja, sa adresom posetioca kao Reply-To.
//
// Potrebne Netlify varijable okruženja:
//   RESEND_API_KEY  – API ključ sa resend.com (bez njega funkcija ne šalje ništa)
//   NOTIFY_EMAIL    – kome stiže mejl (podrazumevano rebule26@gmail.com)
//   RESEND_FROM     – pošiljalac (podrazumevano "rebule. digital <onboarding@resend.dev>")

type Submission = {
  form_name?: string;
  created_at?: string;
  data?: Record<string, unknown>;
};

const BRAND = "#2d6a4f";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const field = (data: Record<string, unknown>, key: string) => {
  const value = data[key];
  return typeof value === "string" ? value.trim() : "";
};

function formatDate(iso?: string) {
  const date = iso ? new Date(iso) : new Date();
  return new Intl.DateTimeFormat("sr-Latn-RS", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Belgrade",
  }).format(date);
}

function button(href: string, label: string, primary = false) {
  const style = primary
    ? `background:${BRAND};color:#ffffff;border:1px solid ${BRAND};`
    : `background:#ffffff;color:${BRAND};border:1px solid ${BRAND};`;
  return `<a href="${escapeHtml(href)}" style="${style}display:inline-block;padding:10px 18px;margin:0 8px 8px 0;border-radius:999px;font-weight:600;font-size:14px;text-decoration:none;">${label}</a>`;
}

function row(label: string, valueHtml: string) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #eceae4;color:#6b6b63;font-size:13px;width:130px;vertical-align:top;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid #eceae4;color:#1c1c18;font-size:15px;vertical-align:top;">${valueHtml}</td>
  </tr>`;
}

export function renderInquiryEmail(submission: Submission) {
  const data = submission.data ?? {};
  const name = field(data, "name") || "Nepoznat posetilac";
  const email = field(data, "email");
  const phone = field(data, "phone");
  const type = field(data, "type") || "Nije navedeno";
  const message = field(data, "message");
  const phoneDigits = phone.replace(/\D/g, "").replace(/^0/, "381");

  const subject = `Novi upit: ${name} · ${type}`;

  const actions = [
    email &&
      button(
        `mailto:${email}?subject=${encodeURIComponent("Re: Vaš upit — rebule. digital")}`,
        "Odgovori mejlom",
        true,
      ),
    phone && button(`tel:${phone.replace(/\s/g, "")}`, "Pozovi"),
    phoneDigits && button(`https://wa.me/${phoneDigits}`, "WhatsApp"),
  ]
    .filter(Boolean)
    .join("");

  const html = `<!doctype html>
<html lang="sr-Latn">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:#f4f2ec;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2ec;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;">
        <tr><td style="background:${BRAND};padding:28px 32px;color:#ffffff;">
          <div style="font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;opacity:0.8;">rebule. digital</div>
          <div style="font-size:24px;font-weight:700;margin-top:8px;">Novi upit sa sajta</div>
          <div style="font-size:14px;margin-top:6px;opacity:0.85;">${escapeHtml(formatDate(submission.created_at))}</div>
        </td></tr>
        <tr><td style="padding:28px 32px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Ime i prezime", `<strong>${escapeHtml(name)}</strong>`)}
            ${email ? row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND};">${escapeHtml(email)}</a>`) : ""}
            ${phone ? row("Telefon", `<a href="tel:${escapeHtml(phone.replace(/\s/g, ""))}" style="color:${BRAND};">${escapeHtml(phone)}</a>`) : ""}
            ${row("Tip projekta", `<span style="display:inline-block;background:#e6f0ea;color:${BRAND};padding:3px 10px;border-radius:999px;font-size:13px;font-weight:600;">${escapeHtml(type)}</span>`)}
          </table>
        </td></tr>
        <tr><td style="padding:16px 32px 8px;">
          <div style="color:#6b6b63;font-size:13px;margin-bottom:8px;">Poruka</div>
          <div style="background:#f7f6f2;border-left:4px solid ${BRAND};border-radius:12px;padding:16px 18px;color:#1c1c18;font-size:15px;line-height:1.6;">${escapeHtml(message || "—").replace(/\n/g, "<br>")}</div>
        </td></tr>
        <tr><td style="padding:20px 32px 28px;">${actions}</td></tr>
        <tr><td style="padding:16px 32px;background:#f7f6f2;color:#8a8a80;font-size:12px;">
          Poslato preko kontakt forme na rebule.rs. Odgovorom na ovaj mejl pišete direktno posetiocu.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = [
    `Novi upit sa sajta rebule.rs (${formatDate(submission.created_at)})`,
    "",
    `Ime i prezime: ${name}`,
    email ? `Email: ${email}` : null,
    phone ? `Telefon: ${phone}` : null,
    `Tip projekta: ${type}`,
    "",
    "Poruka:",
    message || "—",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject, html, text, replyTo: email };
}

export const handler = async (event: { body: string | null }) => {
  const { payload } = JSON.parse(event.body ?? "{}") as { payload?: Submission };
  if (!payload || payload.form_name !== "kontakt") return { statusCode: 200 };

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    console.warn("RESEND_API_KEY nije podešen; uređen mejl nije poslat.");
    return { statusCode: 200 };
  }

  const { subject, html, text, replyTo } = renderInquiryEmail(payload);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env["RESEND_FROM"] ?? "rebule. digital <onboarding@resend.dev>",
      to: [process.env["NOTIFY_EMAIL"] ?? "rebule26@gmail.com"],
      subject,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    console.error("Resend greška:", response.status, await response.text());
    return { statusCode: 500 };
  }
  return { statusCode: 200 };
};
