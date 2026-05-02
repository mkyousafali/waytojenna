/**
 * Toast notification helper
 */

import { browser } from '$app/environment';

let toastEl = /** @type {HTMLElement | null} */ (null);
let toastTimeout = /** @type {ReturnType<typeof setTimeout> | null} */ (null);

/**
 * Show a brief toast notification.
 * @param {string} message
 * @param {number} [duration=2000]
 */
export function showToast(message, duration = 2000) {
	if (!browser) return;

	// Remove existing toast
	if (toastEl) {
		toastEl.remove();
		toastEl = null;
	}
	if (toastTimeout) {
		clearTimeout(toastTimeout);
		toastTimeout = null;
	}

	const el = document.createElement('div');
	el.className = 'toast';
	el.textContent = message;
	document.body.appendChild(el);
	toastEl = el;

	toastTimeout = setTimeout(() => {
		el.remove();
		toastEl = null;
	}, duration);
}
