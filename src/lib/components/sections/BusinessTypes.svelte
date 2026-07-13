<script lang="ts">
	const businesses = [
		'Glass Fabricators',
		'Glass Retailers',
		'Glazing Contractors',
		'Glass Processors',
		'Multi-Branch Units'
	];
</script>

<section class="bg-white py-14 sm:py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="text-center">
			<h2
				class="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800"
			>
				Built for Every Glass Business
			</h2>

			<p
				class="mx-auto mt-3 sm:mt-4 max-w-2xl text-slate-500 text-sm sm:text-base"
			>
				Whether you're a small retailer or a large processor,
				GlassERP scales with your business type.
			</p>
		</div>

		<div
			class="mt-10 sm:mt-16 grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3 lg:grid-cols-5"
		>
			{#each businesses as business (business)}
				<div class="text-center">
					<div
						class="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-blue-50 text-xl"
					>
						🏢
					</div>

					<h3
						class="mt-3 sm:mt-4 font-semibold text-slate-800 text-sm sm:text-base"
					>
						{business}
					</h3>

					<button
						class="mt-2 sm:mt-3 text-sm text-blue-600"
					>
						Explore →
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>