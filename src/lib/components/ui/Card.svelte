<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		className = '',
		children
	} = $props<{
		className?: string;
		children?: Snippet;
	}>();
</script>

<div
	class={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${className}`}
>
	{@render children?.()}
</div>