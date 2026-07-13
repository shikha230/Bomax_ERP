<script lang="ts">
	let {
		badge = '',
		title = '',
		description = ''
	} = $props<{
		badge?: string;
		title?: string;
		description?: string;
	}>();
</script>

<div class="mx-auto mb-12 max-w-3xl text-center">
	{#if badge}
		<div
			class="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-1 text-xs font-medium text-blue-600"
		>
			{badge}
		</div>
	{/if}

	<h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
		{title}
	</h2>

	<p class="text-slate-500">
		{description}
	</p>
</div>