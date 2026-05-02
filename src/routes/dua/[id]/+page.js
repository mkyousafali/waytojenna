import { getDuaById, getCategoryById } from '$lib/data/duas.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const dua = getDuaById(params.id);
	if (!dua) {
		error(404, { message: 'Dua not found' });
	}
	const category = getCategoryById(dua.category);
	return { dua, category };
}
