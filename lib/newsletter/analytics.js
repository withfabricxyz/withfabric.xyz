// Plug in Vercel Analytics, PostHog, etc. by replacing this function.
// Called server-side only — for client-side events, use the hook in NewsletterForm.
export function track(event, properties = {}) {
	if (process.env.NODE_ENV === 'development') {
		console.log('[analytics]', event, properties);
	}
}
