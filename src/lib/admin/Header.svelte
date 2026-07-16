<script lang="ts">
	import { admin } from '$lib/stores/auth';
	import {
		Bell,
		Search,
		CalendarDays
	} from 'lucide-svelte';

	let search = $state('');
	let currentTime = $state(new Date());

	$effect(() => {
		const interval = setInterval(() => {
			currentTime = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});

	const formatter = new Intl.DateTimeFormat('en-IN', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const timeFormatter = new Intl.DateTimeFormat('en-IN', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<header
	class="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm"
>
	<!-- Left -->

	<div>
		<h1 class="text-3xl font-bold text-slate-800">
			Dashboard
		</h1>

		<p class="mt-1 text-sm text-slate-500">
			Welcome back,
			<span class="font-semibold text-cyan-600">
				{$admin?.name ?? 'Admin'}
			</span>
		</p>
	</div>

	<!-- Right -->

	<div class="flex items-center gap-5">

		<!-- Search -->

		<div class="relative hidden md:block">

			<Search
				size={18}
				class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
			/>

			<input
				bind:value={search}
				type="text"
				placeholder="Search..."
				class="w-72 rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-cyan-500"
			/>

		</div>

		<!-- Notification -->

		<button
			class="relative rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200"
		>
			<Bell size={20} />

			<span
				class="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"
			></span>

		</button>

		<!-- Date -->

		<div class="hidden rounded-xl bg-slate-100 px-4 py-3 lg:block">

			<div class="flex items-center gap-2 text-sm text-slate-600">

				<CalendarDays size={18} />

				<span>{formatter.format(currentTime)}</span>

			</div>

			<p class="mt-1 text-right font-semibold text-slate-800">
				{timeFormatter.format(currentTime)}
			</p>

		</div>

		<!-- Avatar -->

		<div class="flex items-center gap-3">

			<div
				class="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-white"
			>
				{$admin?.name?.charAt(0).toUpperCase() ?? 'A'}
			</div>

			<div class="hidden lg:block">

				<p class="font-semibold text-slate-800">
					{$admin?.name ?? 'Admin'}
				</p>

				<p class="text-sm text-slate-500">
					Administrator
				</p>

			</div>

		</div>

	</div>

</header>