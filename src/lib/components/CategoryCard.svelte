<script>
	/** @type {{ category: import('$lib/data/duas').categories[0] }} */
	let { category } = $props();
</script>

<a href="/category/{category.id}" class="category-card">
	<div class="card-icon" aria-hidden="true">{category.icon}</div>
	<div class="card-content">
		<h3 class="card-title">{category.name}</h3>
		<p class="card-subtitle">{category.nameML}</p>
	</div>
	<span class="card-arrow" aria-hidden="true">
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
			stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="9 18 15 12 9 6"/>
		</svg>
	</span>
</a>

<style>
	.category-card {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-md) var(--space-lg);
		text-decoration: none;
		color: var(--color-text);
		transition: box-shadow var(--transition-base), transform var(--transition-base),
			border-color var(--transition-base);
		cursor: pointer;
	}

	.category-card:hover {
		box-shadow: var(--shadow-md);
		border-color: var(--color-primary-200);
		transform: translateY(-1px);
	}

	.category-card:active {
		transform: translateY(0);
		box-shadow: var(--shadow-sm);
	}

	.card-icon {
		font-size: 2rem;
		width: 52px;
		height: 52px;
		background: var(--color-primary-50);
		border-radius: var(--radius-md);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.card-content {
		flex: 1;
		min-width: 0;
	}

	.card-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
		line-height: 1.3;
	}

	.card-subtitle {
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		font-family: var(--font-malayalam);
		margin-top: 2px;
	}

	.card-arrow {
		color: var(--color-text-muted);
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}
</style>
