import { Resend } from 'resend';

let client;

function getClient() {
	if (!client) {
		const key = process.env.RESEND_API_KEY;
		if (!key) throw new Error('RESEND_API_KEY is not set');
		client = new Resend(key);
	}
	return client;
}

export async function addContactToAudience(email) {
	const audienceId = process.env.RESEND_AUDIENCE_ID;
	if (!audienceId) {
		return { ok: false, error: 'RESEND_AUDIENCE_ID is not set' };
	}

	try {
		const { data, error } = await getClient().contacts.create({
			email,
			audienceId,
			unsubscribed: false,
		});

		if (error) {
			// Treat duplicate contacts as success — re-subscribing is fine
			if (/already exists|duplicate/i.test(error.message ?? '')) {
				return { ok: true };
			}
			return { ok: false, error };
		}

		return { ok: true, data };
	} catch (err) {
		return { ok: false, error: err };
	}
}
