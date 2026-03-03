import type { APIRoute } from 'astro'
import { Resend } from 'resend'

export const prerender = false

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json()
		const { name, email, message } = body

		if (!name || !email || !message) {
			return new Response(
				JSON.stringify({ error: 'All fields are required.' }),
				{ status: 400, headers: { 'Content-Type': 'application/json' } },
			)
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			})
		}

		const { error } = await resend.emails.send({
			from: 'Portfolio <onboarding@resend.dev>',
			to: import.meta.env.CONTACT_EMAIL,
			subject: `New message from ${name} — Portfolio`,
			html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563f0;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px;"><strong>Name</strong></td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Message</strong></td>
              <td style="padding: 8px 0;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
        </div>
      `,
		})

		if (error) {
			return new Response(
				JSON.stringify({
					error: 'Failed to send the message. Please try again.',
				}),
				{ status: 500, headers: { 'Content-Type': 'application/json' } },
			)
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
	} catch {
		return new Response(
			JSON.stringify({ error: 'Unexpected error. Please try again.' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } },
		)
	}
}
