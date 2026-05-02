<script>
	import { categories } from '$lib/data/duas.js';
	import CategoryCard from '$lib/components/CategoryCard.svelte';
</script>

<svelte:head>
	<title>Way to Jenna — Islamic Dua App</title>
	<meta
		name="description"
		content="Daily Islamic duas in Arabic with Malayalam translation. Way to Jenna dua app."
	/>
</svelte:head>

<div class="page page-enter">
	<!-- Hero Header -->
	<header class="hero">
		<div class="hero-pattern" aria-hidden="true"></div>
		<div class="container hero-content">
			<div class="bismillah arabic-text">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
			<h1 class="app-title">Way to Jenna</h1>
			<p class="app-subtitle malayalam-text">ദൈനംദിന ദുആ ആപ്ലിക്കേഷൻ</p>
			<p class="app-desc">Daily Islamic Duas · Arabic & Malayalam</p>
		</div>
	</header>

	<!-- Categories -->
	<section class="container categories-section">
		<h2 class="section-title">
			<span>Categories</span>
			<span class="section-title-ml malayalam-text">വിഭാഗങ്ങൾ</span>
		</h2>

		<div class="categories-grid">
			{#each categories as category (category.id)}
				<CategoryCard {category} />
			{/each}
		</div>
	</section>

	<!-- Footer note -->
	<footer class="container footer-note">
		<p>Made with ♥ for the Ummah</p>
		<p class="footer-arabic arabic-text">اللَّهُمَّ اجْعَلْهُ فِي مِيزَانِ حَسَنَاتِنَا</p>
	</footer>
</div>

<style>
	/* Hero */
	.hero {
		position: relative;
		background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 60%, var(--color-primary-light) 100%);
		color: white;
		overflow: hidden;
	}

	.hero-pattern {
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(circle at 20% 50%, rgba(255,255,255,0.07) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%);
		pointer-events: none;
	}

	.hero-content {
		position: relative;
		padding-top: var(--space-2xl);
		padding-bottom: var(--space-2xl);
		text-align: center;
	}

	.bismillah {
		font-size: 1.4rem;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: var(--space-md);
		text-shadow: 0 1px 3px rgba(0,0,0,0.2);
	}

	.app-title {
		font-size: clamp(1.8rem, 6vw, 2.6rem);
		font-weight: 700;
		color: white;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-xs);
	}

	.app-subtitle {
		font-size: 1.1rem;
		color: rgba(255,255,255,0.85);
		margin-bottom: var(--space-xs);
	}

	.app-desc {
		font-size: 0.85rem;
		color: rgba(255,255,255,0.65);
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	/* Categories */
	.categories-section {
		padding-top: var(--space-xl);
		padding-bottom: var(--space-xl);
	}

	.section-title {
		display: flex;
		align-items: baseline;
		gap: var(--space-sm);
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--color-primary-dark);
		margin-bottom: var(--space-lg);
	}

	.section-title-ml {
		font-size: 0.95rem;
		font-weight: 400;
		color: var(--color-text-secondary);
	}

	.categories-grid {
		display: grid;
		gap: var(--space-sm);
	}

	/* Footer */
	.footer-note {
		padding-bottom: var(--space-xl);
		text-align: center;
		color: var(--color-text-muted);
		font-size: 0.8rem;
	}

	.footer-arabic {
		font-size: 1rem;
		color: var(--color-primary);
		margin-top: var(--space-sm);
	}
</style>
