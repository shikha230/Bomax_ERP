<script lang="ts">
	let {
		text,
		variant = 'primary',
		type = 'button'
	} = $props<{
		text: string;
		variant?: 'primary' | 'secondary';
		type?: 'button' | 'submit' | 'reset';
	}>();
</script>

<button
	type={type}
	class={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-all duration-300 ${
		variant === 'primary'
			? 'bg-blue-600 text-white hover:bg-blue-700'
			: 'border border-slate-300 text-slate-700 hover:bg-slate-100'
	}`}
>
	{text}
</button>