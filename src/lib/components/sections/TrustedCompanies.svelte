<script lang="ts">
	const companies: string[] = [
		'ClearGlass Co.',
		'ArcoPlex',
		'VisionPane',
		'GlazeTech',
		'CrystalWorks',
		'AlphaGlass'
	];
</script>

<section class="bg-white py-10 sm:py-10 lg:py-10">
	<div class="mx-auto max-w-7xl px-6">
		<p
			class="text-center text-sm font-bold uppercase tracking-wide text-slate-900"
		>
			TRUSTED BY 500+ GLASS BUSINESSES WORLDWIDE
		</p>

		<div
			class="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 lg:gap-x-20"
		>
			{#each companies as company (company)}
				<div
					class="text-xl font-bold text-slate-900 transition hover:text-blue-600"
				>
					{company}
				</div>
			{/each}
		</div>
	</div>
</section>