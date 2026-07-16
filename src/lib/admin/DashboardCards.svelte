<script lang="ts">
	import {
		Users,
		UserPlus,
		UserCheck,
		Activity
	} from 'lucide-svelte';

	const {
		totalUsers = 0,
		todayUsers = 0,
		activeUsers = 0,
		totalRegistrations = 0
	} = $props();

	function cards() {
		return [
			{
				title: 'Total Users',
				value: totalUsers,
				icon: Users,
				bg: 'bg-blue-500'
			},
			{
				title: 'Today Registrations',
				value: todayUsers,
				icon: UserPlus,
				bg: 'bg-green-500'
			},
			{
				title: 'Active Users',
				value: activeUsers,
				icon: UserCheck,
				bg: 'bg-purple-500'
			},
			{
				title: 'Total Registrations',
				value: totalRegistrations,
				icon: Activity,
				bg: 'bg-orange-500'
			}
		];
	}
</script>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

	{#each cards() as card (card.title)}

		<div
			class="rounded-2xl bg-white p-6 shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl"
		>

			<div class="flex items-center justify-between">

				<div>

					<p class="text-sm text-slate-500">
						{card.title}
					</p>

					<h2 class="mt-3 text-4xl font-bold text-slate-800">
						{card.value}
					</h2>

				</div>

				<div
					class={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.bg} text-white`}
			>

				{@const Icon = card.icon}
				<Icon size={30} />

			</div>
		</div>
	{/each}
</div>