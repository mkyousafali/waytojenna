/**
 * Favorites store — persisted to localStorage
 * Svelte 5 runes-based reactive store
 */

import { browser } from '$app/environment';

const STORAGE_KEY = 'way-to-jenna-favorites';

function createFavoritesStore() {
	let favorites = $state(/** @type {string[]} */ ([]));

	// Initialise from localStorage on client
	if (browser) {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			favorites = raw ? JSON.parse(raw) : [];
		} catch {
			favorites = [];
		}
	}

	function persist() {
		if (browser) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
		}
	}

	return {
		get list() {
			return favorites;
		},
		isFavorite(id) {
			return favorites.includes(id);
		},
		toggle(id) {
			if (favorites.includes(id)) {
				favorites = favorites.filter((f) => f !== id);
			} else {
				favorites = [...favorites, id];
			}
			persist();
		},
		clear() {
			favorites = [];
			persist();
		}
	};
}

export const favoritesStore = createFavoritesStore();
