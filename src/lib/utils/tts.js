/**
 * Text-to-Speech utility using Web Speech API
 * Supports Arabic and Malayalam voices
 */

import { browser } from '$app/environment';

/** @type {SpeechSynthesisVoice[]} */
let voices = [];
let voicesLoaded = false;

/**
 * Load available voices (may be async in some browsers)
 * @returns {Promise<SpeechSynthesisVoice[]>}
 */
function loadVoices() {
	return new Promise((resolve) => {
		if (!browser || !('speechSynthesis' in window)) {
			resolve([]);
			return;
		}

		const available = window.speechSynthesis.getVoices();
		if (available.length > 0) {
			voices = available;
			voicesLoaded = true;
			resolve(voices);
			return;
		}

		// Voices load asynchronously on some browsers
		window.speechSynthesis.onvoiceschanged = () => {
			voices = window.speechSynthesis.getVoices();
			voicesLoaded = true;
			resolve(voices);
		};

		// Fallback timeout
		setTimeout(() => {
			voices = window.speechSynthesis.getVoices();
			voicesLoaded = true;
			resolve(voices);
		}, 1000);
	});
}

/**
 * Find the best voice for a given BCP-47 language tag.
 * @param {string} lang  e.g. 'ar', 'ml-IN'
 * @returns {SpeechSynthesisVoice | undefined}
 */
function findVoice(lang) {
	const lower = lang.toLowerCase();
	// Prefer exact match, then language prefix match
	return (
		voices.find((v) => v.lang.toLowerCase() === lower) ??
		voices.find((v) => v.lang.toLowerCase().startsWith(lower.split('-')[0]))
	);
}

/** @type {SpeechSynthesisUtterance | null} */
let currentUtterance = null;

/**
 * Check whether the device has a voice for the given language.
 * Loads voices first if needed.
 * @param {'ar' | 'ml'} lang
 * @returns {Promise<boolean>}
 */
export async function hasVoiceForLang(lang) {
	if (!browser || !('speechSynthesis' in window)) return false;
	if (!voicesLoaded) await loadVoices();
	if (lang === 'ar') return !!findVoice('ar');
	return !!(findVoice('ml-IN') ?? findVoice('ml'));
}

/**
 * Speak text in a given language.
 * Cancels any currently speaking utterance first.
 *
 * @param {string} text
 * @param {'ar' | 'ml' | 'en'} lang
 * @returns {Promise<void>}
 */
export async function speak(text, lang) {
	if (!browser || !('speechSynthesis' in window)) {
		console.warn('Web Speech API not supported in this browser.');
		return;
	}

	// Ensure voices are loaded
	if (!voicesLoaded) {
		await loadVoices();
	}

	// Cancel any ongoing speech
	window.speechSynthesis.cancel();

	const utterance = new SpeechSynthesisUtterance(text);

	if (lang === 'ar') {
		utterance.lang = 'ar';
		const voice = findVoice('ar');
		if (voice) utterance.voice = voice;
		utterance.rate = 0.85;
		utterance.pitch = 1.0;
	} else if (lang === 'ml') {
		utterance.lang = 'ml-IN';
		const voice = findVoice('ml-IN') ?? findVoice('ml');
		if (voice) utterance.voice = voice;
		utterance.rate = 0.85;
		utterance.pitch = 1.0;
	} else {
		// English fallback for transliteration
		utterance.lang = 'en-US';
		const voice = findVoice('en-US') ?? findVoice('en');
		if (voice) utterance.voice = voice;
		utterance.rate = 0.82;
		utterance.pitch = 1.0;
	}

	utterance.volume = 1.0;
	currentUtterance = utterance;

	return new Promise((resolve, reject) => {
		utterance.onend = () => {
			currentUtterance = null;
			resolve();
		};
		utterance.onerror = (e) => {
			currentUtterance = null;
			// 'interrupted' is not a real error — ignore it
			if (e.error === 'interrupted') {
				resolve();
			} else {
				reject(new Error(`TTS error: ${e.error}`));
			}
		};
		window.speechSynthesis.speak(utterance);
	});
}

/**
 * Stop any currently playing speech.
 */
export function stopSpeech() {
	if (browser && 'speechSynthesis' in window) {
		window.speechSynthesis.cancel();
		currentUtterance = null;
	}
}

/**
 * Returns true while speech is in progress.
 * @returns {boolean}
 */
export function isSpeaking() {
	if (!browser || !('speechSynthesis' in window)) return false;
	return window.speechSynthesis.speaking;
}
