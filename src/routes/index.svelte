<script>
	import { isLoggedIn } from '$lib/stores/user';
	import { goto } from '$app/navigation';
	import { browser } from "$app/env";
	
</script>

{#if !$isLoggedIn}
	{#if browser }
		{goto('/login')}
	{/if}
{:else}
	<div class="p-2">
		<h1 class="text-4xl text-primary font-bold">Home Page</h1>
	</div>
{/if}
