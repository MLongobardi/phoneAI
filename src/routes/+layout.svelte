<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<!-- Import Roboto font into the <head> -->
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
	/>
</svelte:head>

<Header />
<!-- Reuse Header.svelte component -->

<!-- The page-specific content is rendered here -->
<slot></slot>
<!-- This will render the page-specific content from +page.svelte -->

<Footer />

<!-- Reuse Footer.svelte component -->

<style>
	/* Global styles applied to the whole app */
	:global(body) {
		margin: 0;
		font-family: 'Roboto', sans-serif;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
