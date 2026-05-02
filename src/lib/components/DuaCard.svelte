<script>
	import { favoritesStore } from '$lib/stores/favorites.svelte.js';

	/** @type {{ dua: import('$lib/data/duas').duas[0], compact?: boolean }} */
	let { dua, compact = false } = $props();

	let isFav = $derived(favoritesStore.isFavorite(dua.id));
</script>

<a href="/dua/{dua.id}" class="dua-card" class:compact>
	<div class="dua-header">
		<div class="dua-titles">
			<h3 class="dua-title">{dua.title}</h3>
			<p class="dua-title-ml">{dua.titleML}</p>
		</div>
		{#if isFav}
			<span class="fav-badge" title="Favorite" aria-label="Saved to favorites">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
					fill="#e53e3e" stroke="#e53e3e" stroke-width="2" stroke-linecap="round"
					stroke-linejoin="round">
					<path
						d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
					/>
				</svg>
			</span>
		{/if}
	</div>

	{#if !compact}
		<p class="dua-arabic arabic-text">{dua.arabic}</p>
	{/if}

	<p class="dua-malayalam malayalam-text">{dua.malayalam}</p>

	{#if dua.reference}
		<p class="dua-reference">📖 {dua.reference}</p>
	{/if}
</a>

<style>
	.dua-card {
		display: block;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-lg);
		text-decoration: none;
		color: var(--color-text);
		transition: box-shadow var(--transition-base), border-color var(--transition-base),
			transform var(--transition-base);
	}

	.dua-card:hover {
		box-shadow: var(--shadow-md);
		border-color: var(--color-primary-200);
		transform: translateY(-1px);
	}

	.dua-card:active {
		transform: translateY(0);
	}

	.dua-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--space-sm);
		margin-bottom: var(--space-sm);
	}

	.dua-titles {
		flex: 1;
		min-width: 0;
	}

	.dua-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-primary-dark);
		line-height: 1.3;
	}

	.dua-title-ml {
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		font-family: var(--font-malayalam);
		margin-top: 2px;
	}

	.fav-badge {
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	.dua-arabic {
		font-size: 1.25rem;
		color: var(--color-primary-dark);
		margin-bottom: var(--space-sm);
		border-right: 3px solid var(--color-gold);
		padding-right: var(--space-sm);
		/* Clamp to 2 lines in card view */
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.dua-malayalam {
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		line-height: 1.7;
		/* Clamp to 3 lines in card view */
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.dua-reference {
		font-size: 0.75rem;
		color: var(--color-text-muted);
		margin-top: var(--space-sm);
		font-style: italic;
	}

	/* Compact mode (used in category list) */
	.compact .dua-arabic {
		display: none;
	}

	.compact {
		padding: var(--space-md);
	}
</style>
