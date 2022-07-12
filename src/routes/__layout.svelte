<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let theme = 'retro';
</script>

<div data-theme={theme} class="container mx-auto">
	<Navbar />
	<slot />
	<Footer />
</div>
