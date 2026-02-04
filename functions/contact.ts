// Cloudflare Pages Function (functions/contact.ts)
// This is a minimal example that accepts POST requests with JSON { name, email, message }
// and returns a JSON response. Replace the "// TODO" section with real emailing logic
// (SendGrid, Mailgun, or any HTTP API). Store API keys in Cloudflare Pages environment
// variables (e.g., SENDGRID_API_KEY) and reference them here via environment.SENDGRID_API_KEY.

export async function onRequest(context: any) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  try {
    const payload = await request.json();
    const { name, email, message } = payload || {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // TODO: Send email using an external provider (example: SendGrid)
    // Example pseudocode (don't run as-is):
    // await fetch('https://api.sendgrid.com/v3/mail/send', { method: 'POST', headers: { Authorization: `Bearer ${env.SENDGRID_API_KEY}` }, body: JSON.stringify(...) })

    // For now, just log the submission to Cloudflare logs and return success.
    console.log('Contact form submission:', { name, email, message });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error handling contact form:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
