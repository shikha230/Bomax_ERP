<script lang="ts">
	const stats = [
		{ value: '500+', label: 'Glass Businesses' },
		{ value: '50+', label: 'Cities Covered' },
		{ value: '99.9%', label: 'Uptime SLA' },
		{ value: '24×7', label: 'Support Available' },
		{ value: '15+', label: 'Modules Available' }
	];
</script>

<section class="bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 py-10 sm:py-12 lg:py-14">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-5">
			{#each stats as stat (stat.label)}
				<div class="border-white/20 lg:border-r last:border-r-0 px-2">
					<div class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
						{stat.value}
					</div>

					<div class="mt-2 sm:mt-3 text-sm sm:text-base text-blue-100">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>