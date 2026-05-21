import { addContactToAudience } from '@/lib/newsletter/resend';
import { isValidEmail } from '@/lib/newsletter/validate';

export async function POST(request) {
	try {
		const body = await request.json().catch(() => null);
		if (!body || typeof body !== 'object') {
			return Response.json({ error: 'bad_request' }, { status: 400 });
		}

		// Honeypot — bots fill this field; return 200 without touching Resend
		if (body.website) {
			return Response.json({ ok: true }, { status: 200 });
		}

		const email =
			typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

		if (!isValidEmail(email)) {
			return Response.json({ error: 'invalid_email' }, { status: 400 });
		}

		const result = await addContactToAudience(email);

		if (result.ok) {
			return Response.json({ ok: true }, { status: 200 });
		}

		console.error('[newsletter] resend error', result.error);
		return Response.json({ error: 'server_error' }, { status: 500 });
	} catch (err) {
		console.error('[newsletter] unhandled error', err);
		return Response.json({ error: 'server_error' }, { status: 500 });
	}
}

export async function GET() {
	return Response.json({ error: 'method_not_allowed' }, { status: 405 });
}
