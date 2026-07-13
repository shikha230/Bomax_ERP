<script lang="ts">
	const testimonials = [
		{
			name: 'Rajesh Sharma',
			role: 'Owner, Sharma Glass Works',
			text: 'GlassERP completely transformed how we manage orders. What used to take hours now takes minutes.'
		},
		{
			name: 'Priya Nair',
			role: 'Operations Head, ClearVision Glass',
			text: 'The inventory and production modules are outstanding. We now have real-time visibility.'
		},
		{
			name: 'Ahmed Khan',
			role: 'Director, Khan Glass Enterprises',
			text: 'We manage 3 branches with GlassERP. The centralized dashboard is exactly what we needed.'
		}
	];
</script>

<section class="bg-white py-10 sm:py-10 lg:py-10">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">

		<div class="text-center">
			<div class="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600">
				Customer Stories
			</div>

			<h2 class="mt-5 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
				What Our Customers Say
			</h2>

			<p class="mx-auto mt-4 sm:mt-5 max-w-2xl text-slate-500 text-sm sm:text-base">
				Real glass business owners share how GlassERP transformed their operations.
			</p>
		</div>

		<div class="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as item (item.name)}
				<div class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
					<div class="mb-4 sm:mb-5 text-yellow-400 text-lg">
						★★★★★
					</div>

					<p class="leading-7 sm:leading-8 text-slate-600 text-sm sm:text-base">
						"{item.text}"
					</p>

					<div class="mt-6 sm:mt-8 flex items-center gap-4">
						<div class="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-200 flex-shrink-0"></div>

						<div>
							<div class="font-semibold text-slate-800 text-sm sm:text-base">
								{item.name}
							</div>

							<div class="text-xs sm:text-sm text-slate-500">
								{item.role}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

	</div>
</section>
