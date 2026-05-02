<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const navItems = [
		{ href: '/', label: 'Home', labelML: 'ഹോം', icon: homeIcon },
		{ href: '/favorites', label: 'Favorites', labelML: 'ഇഷ്ടങ്ങൾ', icon: heartIcon }
	];

	function homeIcon() {
		return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
			<polyline points="9 22 9 12 15 12 15 22"/>
		</svg>`;
	}

	function heartIcon() {
		return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
		</svg>`;
	}
</script>

<nav class="bottom-nav" aria-label="Main navigation">
	<a
		href="/"
		class="nav-item"
		class:active={$page.url.pathname === '/'}
		aria-current={$page.url.pathname === '/' ? 'page' : undefined}
	>
		<span class="nav-icon">
			{@html homeIcon()}
		</span>
		<span class="nav-label">Home</span>
	</a>

	<a
		href="/favorites"
		class="nav-item"
		class:active={$page.url.pathname === '/favorites'}
		aria-current={$page.url.pathname === '/favorites' ? 'page' : undefined}
	>
		<span class="nav-icon">
			{@html heartIcon()}
		</span>
		<span class="nav-label">Favorites</span>
	</a>
</nav>

<style>
	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: var(--nav-height);
		background: var(--color-surface);
		border-top: 1px solid var(--color-border);
		display: flex;
		align-items: center;
		justify-content: space-around;
		z-index: 100;
		box-shadow: 0 -2px 12px rgba(26, 107, 60, 0.08);
	}

	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		color: var(--color-text-muted);
		padding: 8px 24px;
		border-radius: var(--radius-md);
		transition: color var(--transition-fast), background var(--transition-fast);
		text-decoration: none;
		min-width: 80px;
	}

	.nav-item:hover {
		color: var(--color-primary);
		background: var(--color-primary-50);
	}

	.nav-item.active {
		color: var(--color-primary);
	}

	.nav-item.active .nav-icon {
		background: var(--color-primary-100);
		border-radius: var(--radius-sm);
	}

	.nav-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 28px;
		padding: 4px;
		transition: background var(--transition-fast);
	}

	.nav-label {
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.02em;
	}
</style>
