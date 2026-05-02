<script>
	import DuaCard from '$lib/components/DuaCard.svelte';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	let { category, duas } = $derived(data);
</script>

<svelte:head>
	<title>{category.name} Duas — Way to Jenna</title>
	<meta name="description" content="{category.description}" />
</svelte:head>

<div class="page page-enter">
	<!-- Page Header -->
	<header class="page-header">
		<div class="container header-content">
			<a href="/" class="back-btn" aria-label="Go back to home">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
					stroke-linejoin="round">
					<polyline points="15 18 9 12 15 6" />
				</svg>
			</a>
			<div class="header-text">
				<span class="category-icon" aria-hidden="true">{category.icon}</span>
				<div>
					<h1 class="header-title">{category.name}</h1>
					<p class="header-subtitle malayalam-text">{category.nameML}</p>
				</div>
			</div>
		</div>
	</header>

	<!-- Description -->
	<div class="container">
		<p class="category-desc">{category.descriptionML}</p>
	</div>

	<!-- Duas List -->
	<section class="container duas-list">
		{#if duas.length === 0}
			<p class="empty-state">No duas found for this category.</p>
		{:else}
			{#each duas as dua (dua.id)}
				<DuaCard {dua} />
			{/each}
		{/if}
	</section>
</div>

<style>
	.page-header {
		background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
		color: white;
		padding: var(--space-md) 0;
	}

	.header-content {
		display: flex;
		align-items: center;
		gap: var(--space-md);
	}

	.back-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: var(--radius-full);
		background: rgba(255, 255, 255, 0.15);
		color: white;
		flex-shrink: 0;
		transition: background var(--transition-fast);
	}

	.back-btn:hover {
		background: rgba(255, 255, 255, 0.25);
	}

	.header-text {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.category-icon {
		font-size: 1.8rem;
	}

	.header-title {
		font-size: 1.4rem;
		font-weight: 700;
		color: white;
	}

	.header-subtitle {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.category-desc {
		font-family: var(--font-malayalam);
		color: var(--color-text-secondary);
		font-size: 0.9rem;
		padding: var(--space-md) 0 0;
	}

	.duas-list {
		display: grid;
		gap: var(--space-sm);
		padding-top: var(--space-md);
		padding-bottom: var(--space-xl);
	}

	.empty-state {
		text-align: center;
		color: var(--color-text-muted);
		padding: var(--space-2xl) 0;
	}
</style>
