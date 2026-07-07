<script lang="ts">
	let { text } = $props<{
		text: string;
	}>();
</script>

<div
	class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
>
	{text}
</div>