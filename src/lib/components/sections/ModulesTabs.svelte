<script lang="ts">
	import moduleImage from '$lib/assets/Images/Module.png';

	let activeTab = $state('Quotations');

	const tabs = ['Quotations', 'Purchase', 'Production', 'HR & Payroll', 'Reports', 'Dispatch'];

	const features = [
		'Auto pricing with glass area calculations',
		'Multiple glass types and thickness support',
		'One-click conversion to sales order',
		'PDF quotation with your brand logo',
		'Customer approval tracking via WhatsApp'
	];

	import { resolve } from '$app/paths';
</script>

<section class="bg-slate-50 pt-16 sm:pt-20 lg:pt-24 pb-24">
	<div class="mx-auto max-w-7xl px-6">


		<!-- Heading -->

		<h2 class="mt-6 text-center text-4xl font-bold tracking-tight text-slate-800">
			Explore Every Module
		</h2>

		<p class="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-500">
			Deeply integrated modules that work together seamlessly—from quotation to dispatch and beyond.
		</p>

		<!-- Tabs -->

		<div class="mt-10 flex flex-wrap justify-center gap-3">
			{#each tabs as tab (tab)}
				<button
					onclick={() => (activeTab = tab)}
					class={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
						activeTab === tab
							? 'border-blue-600 bg-blue-600 text-white'
							: 'border-slate-300 bg-white text-slate-500 hover:border-blue-300'
					}`}
				>
					{tab}
				</button>
			{/each}
		</div>

		<!-- Content Section -->

		<div class="mt-14 grid items-stretch gap-14 lg:grid-cols-2">
			<!-- Left Image -->

			<div class="relative w-full h-full min-h-[300px] lg:min-h-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
				<img src={moduleImage} alt="Module Dashboard" class="w-full h-full object-cover object-top lg:absolute lg:inset-0" />
			</div>

			<!-- Right Content -->

			<div>
				<h3 class="text-4xl font-bold leading-tight text-slate-800">
					Accurate Quotations in Minutes
				</h3>

				<p class="mt-5 leading-8 text-slate-500">
					Generate professional, accurate quotations for any glass type—tempered, laminated, IGU, or
					custom shapes—in just a few clicks with our smart pricing engine.
				</p>

				<div class="mt-8 space-y-4">
					{#each features as feature (feature)}
						<div class="flex items-center gap-3">
							<div
								class="flex h-6 w-6 items-center justify-center rounded-full border border-green-200 bg-green-50 text-sm text-green-600"
							>
								✓
							</div>

							<span class="text-slate-600">
								{feature}
							</span>
						</div>
					{/each}
				</div>

				<a
	href={resolve('/modules')}
	class="mt-10 inline-block rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-700"
>
					Explore Quotations Module →
				</a>
			</div>
		</div>
	</div>
</section>