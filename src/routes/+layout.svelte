<script>
	import '$src/app.css';
	import { animateOnload } from '$lib/animations';
	import { state as s } from '$stores/state.svelte';
	let { children } = $props();
	let loading = $state(true);

	$effect(() => {
		loading = false;
		if (!loading) animateOnload(document.body);
	});

	const title = 'Svelte 5 Project';
	const description = 'Svelte 5 Project';
</script>

<svelte:head>
	<title>{title}</title>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-BYFLZ1T07N"></script>

	<meta name="description" content={description} />
	<meta name="keywords" content="" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:url" content="" />
	<meta property="og:image" content="/og-cover.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/og-cover.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

{#if loading}
	<div class="visible! absolute inset-0 z-50 flex size-full items-center justify-center">Loading...</div>
{:else}
	<main>{@render children?.()}</main>
{/if}
