'use client';

import { useState } from 'react';
import './NewsletterForm.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ERROR_MESSAGES = {
	invalid_email: 'Please enter a valid email address.',
	rate_limited: 'Too many requests. Please try again in a moment.',
	server_error: 'Something went wrong. Please try again.',
	network_error: 'Something went wrong. Please try again.',
	bad_request: 'Something went wrong. Please try again.',
};

export default function NewsletterForm() {
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState(''); // honeypot
	const [status, setStatus] = useState('idle'); // idle | loading | success | error
	const [errorKey, setErrorKey] = useState(null);

	async function handleSubmit(e) {
		e.preventDefault();
		if (status === 'loading') return;

		const trimmed = email.trim();

		if (!EMAIL_RE.test(trimmed)) {
			setErrorKey('invalid_email');
			setStatus('error');
			return;
		}

		setStatus('loading');
		setErrorKey(null);

		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: trimmed, website }),
			});

			const data = await res.json().catch(() => ({}));

			if (res.ok && data.ok) {
				setEmail('');
				setStatus('success');
			} else {
				setErrorKey(data.error || 'server_error');
				setStatus('error');
			}
		} catch {
			setErrorKey('network_error');
			setStatus('error');
		}
	}

	function handleEmailChange(e) {
		setEmail(e.target.value);
		if (status === 'error') {
			setStatus('idle');
			setErrorKey(null);
		}
	}

	const isLoading = status === 'loading';
	const isError = status === 'error';
	const isSuccess = status === 'success';
	const errorMessage = ERROR_MESSAGES[errorKey] ?? ERROR_MESSAGES.server_error;

	return (
		<form className="newsletter-form" onSubmit={handleSubmit} noValidate>
			{/* Honeypot — hidden from users, ignored by screen readers */}
			<input
				type="text"
				name="website"
				value={website}
				onChange={(e) => setWebsite(e.target.value)}
				tabIndex={-1}
				autoComplete="off"
				aria-hidden="true"
				className="newsletter-honeypot"
			/>

			<label htmlFor="newsletter-email" className="sr-only">
				Email address
			</label>
			<div className={`newsletter-input-wrapper${isError ? ' is-error' : ''}`}>
				<input
					id="newsletter-email"
					type="email"
					data-1p-ignore
					data-lpignore="true"
					value={email}
					onChange={handleEmailChange}
					placeholder="Email"
					autoComplete="off"
					required
					disabled={isLoading}
					aria-invalid={isError}
					aria-describedby={
						isError
							? 'newsletter-error'
							: isSuccess
								? 'newsletter-success'
								: undefined
					}
					className={`newsletter-input${isError ? ' is-error' : ''}`}
				/>
				<div className="newsletter-input-icon" aria-hidden="true" />
			</div>

			<button
				type="submit"
				disabled={isLoading || email.trim().length === 0}
				className="newsletter-button"
			>
				{isLoading ? 'Subscribing' : 'Subscribe'}
			</button>

			{isSuccess && (
				<p
					id="newsletter-success"
					role="status"
					className="newsletter-message"
				>
					Success. New posts will arrive in your inbox.
				</p>
			)}

			{isError && (
				<p
					id="newsletter-error"
					role="alert"
					className="newsletter-message newsletter-message--error"
				>
					{errorMessage}
				</p>
			)}
		</form>
	);
}
