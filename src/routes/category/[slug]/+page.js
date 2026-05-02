import { getCategoryById, getDuasByCategory } from '$lib/data/duas.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const category = getCategoryById(params.slug);
	if (!category) {
		error(404, { message: 'Category not found' });
	}
	const duas = getDuasByCategory(params.slug);
	return { category, duas };
}
