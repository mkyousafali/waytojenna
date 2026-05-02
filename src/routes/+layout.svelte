<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<div class="app-shell">
	<main class="main-content">
		{@render children()}
	</main>
	<NavBar />
</div>

<style>
	.app-shell {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}

	.main-content {
		flex: 1;
		padding-bottom: var(--nav-height);
	}
</style>
