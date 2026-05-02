<script>
	import { favoritesStore } from '$lib/stores/favorites.svelte.js';
	import { duas, getCategoryById } from '$lib/data/duas.js';
	import DuaCard from '$lib/components/DuaCard.svelte';
	import { showToast } from '$lib/utils/toast.js';

	// Derive the actual dua objects from stored IDs
	let favDuas = $derived(
		favoritesStore.list
			.map((id) => duas.find((d) => d.id === id))
			.filter(Boolean)
	);

	function clearAll() {
		if (favDuas.length === 0) return;
		favoritesStore.clear();
		showToast('Cleared all favorites');
	}
</script>

<svelte:head>
	<title>Favorites — Way to Jenna</title>
	<meta name="description" content="Your saved duas in Way to Jenna." />
</svelte:head>

<div class="page page-enter">
	<!-- Header -->
	<header class="page-header">
		<div class="container header-row">
			<div class="header-left">
				<h1 class="header-title">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
						fill="#e53e3e" stroke="#e53e3e" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" aria-hidden="true">
						<path
							d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
						/>
					</svg>
					Favorites
				</h1>
				<p class="header-subtitle malayalam-text">ഇഷ്ടപ്പെട്ട ദുആകൾ</p>
			</div>

			{#if favDuas.length > 0}
				<button class="clear-btn" onclick={clearAll} aria-label="Clear all favorites">
					Clear All
				</button>
			{/if}
		</div>
	</header>

	<div class="container fav-content">
		{#if favDuas.length === 0}
			<!-- Empty State -->
			<div class="empty-state" role="status">
				<div class="empty-icon" aria-hidden="true">
					<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
						fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
						stroke-linejoin="round">
						<path
							d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
						/>
					</svg>
				</div>
				<h2 class="empty-title">No Favorites Yet</h2>
				<p class="empty-desc malayalam-text">
					ഇഷ്ടപ്പെട്ട ദുആകൾ ഇതുവരെ ചേർത്തിട്ടില്ല.
				</p>
				<p class="empty-desc">
					Open any dua and tap the ❤️ button to save it here.
				</p>
				<a href="/" class="go-home-btn">Browse Duas</a>
			</div>
		{:else}
			<p class="fav-count">{favDuas.length} dua{favDuas.length !== 1 ? 's' : ''} saved</p>
			<div class="fav-list">
				{#each favDuas as dua (dua.id)}
					<DuaCard {dua} />
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.page-header {
		background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
		color: white;
		padding: var(--space-md) 0;
	}

	.header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
	}

	.header-title {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: 1.4rem;
		font-weight: 700;
		color: white;
	}

	.header-subtitle {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.8);
		margin-top: 2px;
	}

	.clear-btn {
		font-size: 0.8rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.8);
		background: rgba(255, 255, 255, 0.15);
		border-radius: var(--radius-full);
		padding: 6px 14px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		transition: background var(--transition-fast);
		white-space: nowrap;
	}

	.clear-btn:hover {
		background: rgba(255, 255, 255, 0.25);
		color: white;
	}

	.fav-content {
		padding-top: var(--space-xl);
		padding-bottom: var(--space-2xl);
	}

	.fav-count {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		margin-bottom: var(--space-md);
	}

	.fav-list {
		display: grid;
		gap: var(--space-sm);
	}

	/* Empty state */
	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: var(--space-2xl) var(--space-md);
		gap: var(--space-sm);
	}

	.empty-icon {
		color: var(--color-border);
		margin-bottom: var(--space-md);
	}

	.empty-title {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--color-text-secondary);
	}

	.empty-desc {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		max-width: 280px;
		line-height: 1.6;
	}

	.go-home-btn {
		margin-top: var(--space-md);
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-xl);
		background: var(--color-primary);
		color: white;
		border-radius: var(--radius-full);
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		transition: background var(--transition-fast), box-shadow var(--transition-fast);
		box-shadow: var(--shadow-sm);
	}

	.go-home-btn:hover {
		background: var(--color-primary-light);
		box-shadow: var(--shadow-md);
	}
</style>
