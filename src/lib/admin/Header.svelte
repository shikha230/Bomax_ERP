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
	class="sticky top-0 z-20 flex h-20 items-center justify-between border-b-2 border-blue-100 bg-white px-6 shadow-sm"
>
	<!-- Left -->

	<div>
		<h1 class="text-3xl font-bold text-blue-900" style="font-family: 'Roboto', sans-serif;">
			Dashboard
		</h1>

		<p class="mt-1 text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
			Welcome back,
			<span class="font-semibold text-blue-600">
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
				class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
			/>

			<input
				bind:value={search}
				type="text"
				placeholder="Search..."
				class="w-72 rounded-xl border-2 border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
				style="font-family: 'Roboto', sans-serif;"
			/>

		</div>

		<!-- Notification -->

		<button
			class="relative rounded-xl bg-blue-50 p-3 text-blue-600 transition hover:bg-blue-100"
		>
			<Bell size={20} />

			<span
				class="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"
			></span>

		</button>

		<!-- Date -->

		<div class="hidden rounded-xl bg-blue-50 px-4 py-3 lg:block">

			<div class="flex items-center gap-2 text-sm text-blue-700" style="font-family: 'Roboto', sans-serif;">

				<CalendarDays size={18} />

				<span>{formatter.format(currentTime)}</span>

			</div>

			<p class="mt-1 text-right font-semibold text-blue-900" style="font-family: 'Roboto', sans-serif;">
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