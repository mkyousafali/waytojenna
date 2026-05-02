<script>
	import { favoritesStore } from '$lib/stores/favorites.svelte.js';
	import { speak, stopSpeech } from '$lib/utils/tts.js';
	import { showToast } from '$lib/utils/toast.js';
	import { browser } from '$app/environment';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	let { dua, category } = $derived(data);

	// Reactive favorite state
	let isFav = $derived(favoritesStore.isFavorite(dua.id));

	// TTS state
	let speakingAr = $state(false);

	async function playArabic() {
		if (speakingAr) {
			stopSpeech();
			speakingAr = false;
			return;
		}
		stopSpeech();
		speakingAr = true;
		try {
			await speak(dua.arabic, 'ar');
		} catch (e) {
			showToast('Could not play audio. Check browser support.');
		} finally {
			speakingAr = false;
		}
	}

	function toggleFavorite() {
		favoritesStore.toggle(dua.id);
		showToast(isFav ? 'Removed from Favorites' : 'Added to Favorites ❤️');
	}

	async function copyText() {
		if (!browser) return;
		const text = `${dua.title}\n\n${dua.arabic}\n\n${dua.malayalam}${dua.reference ? `\n\nRef: ${dua.reference}` : ''}`;
		try {
			await navigator.clipboard.writeText(text);
			showToast('Copied to clipboard ✓');
		} catch {
			showToast('Could not copy. Please copy manually.');
		}
	}
</script>

<svelte:head>
	<title>{dua.title} — Way to Jenna</title>
	<meta name="description" content="{dua.malayalam.slice(0, 160)}" />
</svelte:head>

<div class="page page-enter">
	<!-- Header -->
	<header class="page-header">
		<div class="container header-row">
			<a
				href="/category/{dua.category}"
				class="back-btn"
				aria-label="Go back to {category?.name ?? 'category'}"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
					stroke-linejoin="round">
					<polyline points="15 18 9 12 15 6" />
				</svg>
			</a>

			<div class="header-center">
				{#if category}
					<span class="breadcrumb">{category.icon} {category.name}</span>
				{/if}
				<h1 class="header-title">{dua.title}</h1>
			</div>

			<button
				class="fav-btn"
				class:active={isFav}
				onclick={toggleFavorite}
				aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
				aria-pressed={isFav}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill={isFav ? '#e53e3e' : 'none'}
					stroke={isFav ? '#e53e3e' : 'currentColor'}
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
					/>
				</svg>
			</button>
		</div>
	</header>

	<div class="container dua-content">
		<!-- Arabic Block -->
		<section class="arabic-block">
			<div class="gold-bar" aria-hidden="true"></div>
			<p class="arabic-text dua-arabic-text" lang="ar" dir="rtl">
				{dua.arabic}
			</p>
		</section>

		<!-- Audio Controls -->
		<div class="audio-controls" role="group" aria-label="Audio controls">
			<button
				class="audio-btn"
				class:playing={speakingAr}
				onclick={playArabic}
				aria-label={speakingAr ? 'Stop Arabic audio' : 'Play Arabic audio'}
			>
				{#if speakingAr}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
						fill="currentColor">
						<rect x="6" y="4" width="4" height="16" />
						<rect x="14" y="4" width="4" height="16" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
						fill="currentColor">
						<polygon points="5 3 19 12 5 21 5 3" />
					</svg>
				{/if}
				<span>{speakingAr ? 'Stop' : 'Play Arabic'}</span>
			</button>


		</div>

		<!-- Transliteration -->
		{#if dua.transliteration}
			<section class="section-block">
				<h2 class="section-label">Transliteration</h2>
				<p class="transliteration-text">{dua.transliteration}</p>
			</section>
		{/if}

		<!-- Malayalam Translation -->
		<section class="section-block translation-block">
			<h2 class="section-label">
				<span class="malayalam-text">അർഥം (Translation)</span>
			</h2>
			<p class="malayalam-text translation-text" lang="ml">
				{dua.malayalam}
			</p>
		</section>

		<!-- Reference -->
		{#if dua.reference}
			<section class="reference-block">
				<span class="ref-icon">📖</span>
				<div>
					<span class="ref-label">Reference</span>
					<p class="ref-text">{dua.reference}</p>
				</div>
			</section>
		{/if}

		<!-- Action Buttons -->
		<div class="action-row">
			<button class="action-btn" onclick={copyText} aria-label="Copy dua text">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
					stroke-linejoin="round">
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
				</svg>
				Copy Text
			</button>

			<button
				class="action-btn"
				class:action-btn-fav={isFav}
				onclick={toggleFavorite}
				aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill={isFav ? '#e53e3e' : 'none'}
					stroke={isFav ? '#e53e3e' : 'currentColor'}
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
					/>
				</svg>
				{isFav ? 'Saved' : 'Save'}
			</button>
		</div>
	</div>
</div>

<style>
	/* Header */
	.page-header {
		background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
		color: white;
		padding: var(--space-md) 0;
		position: sticky;
		top: 0;
		z-index: 50;
	}

	.header-row {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
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

	.header-center {
		flex: 1;
		min-width: 0;
	}

	.breadcrumb {
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.7);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.header-title {
		font-size: 1.1rem;
		font-weight: 700;
		color: white;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.fav-btn {
		width: 40px;
		height: 40px;
		border-radius: var(--radius-full);
		background: rgba(255, 255, 255, 0.15);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: background var(--transition-fast), transform var(--transition-fast);
	}

	.fav-btn:hover {
		background: rgba(255, 255, 255, 0.25);
	}

	.fav-btn:active {
		transform: scale(0.9);
	}

	/* Content */
	.dua-content {
		padding-top: var(--space-xl);
		padding-bottom: var(--space-2xl);
	}

	/* Arabic block */
	.arabic-block {
		background: var(--color-primary-50);
		border: 1px solid var(--color-primary-100);
		border-radius: var(--radius-lg);
		padding: var(--space-xl) var(--space-lg);
		margin-bottom: var(--space-lg);
		position: relative;
		overflow: hidden;
	}

	.gold-bar {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--color-gold), var(--color-gold-light), var(--color-gold));
	}

	.dua-arabic-text {
		font-size: clamp(1.5rem, 5vw, 2rem);
		color: var(--color-primary-dark);
		line-height: 2.2;
		text-align: right;
		user-select: text;
	}

	/* Audio controls */
	.audio-controls {
		display: flex;
		gap: var(--space-sm);
		margin-bottom: var(--space-lg);
		flex-wrap: wrap;
	}

	.audio-btn {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--radius-full);
		font-size: 0.9rem;
		font-weight: 500;
		background: var(--color-primary);
		color: white;
		transition: background var(--transition-fast), transform var(--transition-fast),
			box-shadow var(--transition-fast);
		box-shadow: var(--shadow-sm);
	}

	.audio-btn:hover {
		background: var(--color-primary-light);
		box-shadow: var(--shadow-md);
	}

	.audio-btn:active {
		transform: scale(0.97);
	}

	.audio-btn.playing {
		background: var(--color-primary-dark);
		animation: pulse 1.5s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.7; }
	}

	/* Section blocks */
	.section-block {
		margin-bottom: var(--space-lg);
	}

	.section-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-muted);
		margin-bottom: var(--space-sm);
	}

	.transliteration-text {
		font-style: italic;
		color: var(--color-text-secondary);
		line-height: 1.8;
		font-size: 0.95rem;
	}

	.translation-block {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-lg);
	}

	.translation-text {
		font-size: 1rem;
		line-height: 1.9;
		color: var(--color-text);
		user-select: text;
	}

	/* Reference */
	.reference-block {
		display: flex;
		align-items: flex-start;
		gap: var(--space-sm);
		background: var(--color-surface-alt);
		border-radius: var(--radius-md);
		padding: var(--space-md);
		margin-bottom: var(--space-lg);
	}

	.ref-icon {
		font-size: 1.1rem;
		flex-shrink: 0;
	}

	.ref-label {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-text-muted);
		display: block;
	}

	.ref-text {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		line-height: 1.5;
	}

	/* Action row */
	.action-row {
		display: flex;
		gap: var(--space-sm);
		flex-wrap: wrap;
	}

	.action-btn {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--radius-md);
		font-size: 0.9rem;
		font-weight: 500;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		color: var(--color-text);
		transition: background var(--transition-fast), border-color var(--transition-fast),
			transform var(--transition-fast);
	}

	.action-btn:hover {
		background: var(--color-surface-alt);
		border-color: var(--color-primary-200);
	}

	.action-btn:active {
		transform: scale(0.97);
	}

	.action-btn-fav {
		border-color: #e53e3e;
		color: #e53e3e;
	}

	.action-btn-fav:hover {
		background: #fff5f5;
	}
</style>
