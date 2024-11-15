<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Main from '$lib/components/Main.svelte';
</script>

<div class="main-content">
	<Sidebar />
	<Main />
</div>

<style>
	.main-content {
		display: flex;
		flex-grow: 1; /* Ensures that the main content area grows */
		gap: 16px;
	}
</style>
