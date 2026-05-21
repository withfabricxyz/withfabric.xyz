# Newsletter Subscription System

Email capture for the withfabric.xyz blog. Collects subscriber emails via a form at the bottom of each article and adds them to a [Resend Audience](https://resend.com/audiences).

## Architecture

```
NewsletterForm (client component, React)
   │  POST /api/subscribe { email }
   ▼
app/api/subscribe/route.js  (server-side only — API key never leaves the server)
   │  validate → honeypot check → rate-limit gate → Resend
   ▼
lib/newsletter/resend.js → Resend Audiences API (contacts.create)
```

## Required Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Your Resend API key. Found at resend.com/api-keys. |
| `RESEND_AUDIENCE_ID` | UUID of the Resend Audience to subscribe users to. Found at resend.com/audiences. |
| `FROM_EMAIL` | Your verified sender address. Not used today — reserved for double opt-in and transactional emails. |

## Local Development

1. Copy the example env file and fill in your credentials:
   ```
   cp .env.local.example .env.local
   ```
2. Install dependencies (if you haven't already):
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open any article (e.g. `http://localhost:3000/posts/why-your-swap-fails`) and scroll to the bottom to see the form.

## Vercel Deployment

1. In the Vercel dashboard, go to your project → **Settings** → **Environment Variables**.
2. Add `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` for both **Production** and **Preview** environments.
3. Redeploy (or Vercel will pick them up on the next push).

`RESEND_API_KEY` is only read server-side and is never included in the client bundle.

## How Resend Audiences Are Used

- Each subscriber is added as a contact to a single Resend Audience via `contacts.create`.
- Contacts are created with `unsubscribed: false`.
- Duplicate submissions (same email, already in the audience) are treated as success — no error shown to the user.
- Resend handles unsubscribe links automatically when you send broadcasts from an Audience.

## Anti-Abuse

- **Honeypot field**: a hidden `<input name="website">` is included in the form. Real users never fill it. If it's non-empty, the server returns 200 without calling Resend, silently discarding the submission.
- **Rate limiting**: a `checkRateLimit()` stub in `lib/newsletter/rateLimit.js` currently returns `true` (always allow). See the comments in that file for the exact swap to Upstash Redis — no changes to the API route are required.

## Extension Points

**Add Cloudflare Turnstile:**
Add the `<Turnstile>` widget in `components/NewsletterForm/index.jsx`, include `turnstileToken` in the POST body, then verify it in `app/api/subscribe/route.js` before the rate-limit check. No structural changes needed.

**Add Upstash rate limiting:**
Replace the body of `lib/newsletter/rateLimit.js` with the Upstash implementation shown in the comments. Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` to your Vercel env vars.

**Add Attio sync:**
In `lib/newsletter/resend.js`, after a successful `contacts.create`, call `upsertAttioPerson(email)`. Log failures but don't let them fail the request.

**Add double opt-in:**
Change `unsubscribed: true` in `contacts.create`. Send a confirmation email via `resend.emails.send` using `FROM_EMAIL`. Add a `/api/subscribe/confirm` route that verifies a signed token and flips `unsubscribed` to `false`.

**Add analytics:**
Replace the `track()` stub in `components/NewsletterForm/index.jsx` with your analytics client (Vercel Analytics, PostHog, etc.). Events fired:
- `newsletter_subscribed` — on success
- `newsletter_failed` — on any failure, with a `reason` property

**Add subscriber metadata / multi-list segmentation:**
Extend the request body and the `addContactToAudience` function signature to accept `audienceId` and additional fields (firstName, metadata, etc.).
