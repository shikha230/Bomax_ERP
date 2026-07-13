<script lang="ts">
	const stats = [
		{ value: '500+', label: 'Glass Businesses' },
		{ value: '50+', label: 'Cities Covered' },
		{ value: '99.9%', label: 'Uptime SLA' },
		{ value: '24×7', label: 'Support Available' },
		{ value: '15+', label: 'Modules Available' }
	];
</script>

<section class="bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 py-8 sm:py-10 lg:py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-5">
			{#each stats as stat (stat.label)}
				<div class="border-white/20 lg:border-r last:border-r-0 px-2">
					<div class="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">
						{stat.value}
					</div>

					<div class="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-blue-100">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>