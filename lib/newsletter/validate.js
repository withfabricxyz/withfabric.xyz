const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(input) {
	if (typeof input !== 'string') return false;
	if (input.length > 254) return false;
	return EMAIL_RE.test(input);
}
