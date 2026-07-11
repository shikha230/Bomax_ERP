<script lang="ts">
	import { ArrowLeft, Factory, Warehouse, Store, CheckCircle2 } from 'lucide-svelte';

	const audiences = [
		{
			title: 'For Processors',
			description:
				'Eliminate factory floor bottlenecks and optimize CNC yields without typing complex formulas.',
			icon: Factory
		},
		{
			title: 'For Wholesalers',
			description:
				'Track thousands of glass sheets, hardware accessories, and multi-warehouse inventory without a single spreadsheet.',
			icon: Warehouse
		},
		{
			title: 'For Retailers',
			description:
				'Generate instant, 100% accurate quotes and tax invoices while the customer is still standing at your desk.',
			icon: Store
		}
	];

	const errorHighlights = [
		{
			title: 'Clean & Elegant UI',
			description: 'Say goodbye to chaotic, overwhelming data.'
		},
		{
			title: 'Intuitive Navigation',
			description: 'Find exactly what you need in three clicks or less.'
		},
		{
			title: 'No Long Training Seminars',
			description:
				'Your team will be up, running, and confidently managing orders in hours, not weeks.'
		}
	];

	function goBack() {
		if (typeof window !== 'undefined' && window.history.length > 1) {
			window.history.back();
		}
	}
</script>

<svelte:head>
	<title>Firstcut24 — Elite Power. Effortless Simplicity.</title>
	<meta
		name="description"
		content="An elite glass ERP built for real people. Zero experience needed, zero manual errors."
	/>
</svelte:head>

<div class="bg-white">
	<!-- Elite Power. Effortless Simplicity. -->
	<section class="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]"></div>

		<!-- Back button -->
		<button
			onclick={goBack}
			class="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-blue-100 transition hover:bg-white/10 hover:text-white lg:left-8 lg:top-8"
			aria-label="Go back"
		>
			<ArrowLeft class="h-4 w-4" />
			Back
		</button>

		<div class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
			<div class="mx-auto max-w-4xl text-center">
				<h1 class="text-4xl font-bold leading-tight text-white md:text-6xl">
					Elite Power.
					<span class="text-cyan-400">Effortless Simplicity.</span>
				</h1>

				<p class="mt-6 text-lg leading-8 text-blue-100">
					Whether you are a local retailer, a high-volume wholesaler, or a heavy-duty glass
					processor, it's time to permanently get rid of manual calculations, broken Excel
					sheets, and endless paperwork.
				</p>
			</div>
		</div>
	</section>

	<!-- An Elite ERP Built for Real People -->
	<section class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-3xl font-bold text-slate-900 md:text-5xl">
				An Elite ERP Built for Real People
			</h2>

			<p class="mt-6 text-lg leading-8 text-slate-600">
				We believe that powerful industrial software should work for you, not the other way
				around. Firstcut24 features an elegant visual display designed to give your business
				the premium feel of an elite ERP, without the frustrating, cluttered screens of
				traditional legacy systems.
			</p>
		</div>
	</section>

	<!-- Zero Experience? Zero Problem. -->
	<section class="bg-slate-50 py-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="text-3xl font-bold text-slate-900 md:text-5xl">
					Zero Experience? Zero Problem.
				</h2>

				<p class="mt-6 text-lg leading-8 text-slate-600">
					You don't need a degree in IT to digitize your glass business. We have engineered
					every single dashboard and module to be exceptionally user-friendly and incredibly
					easy to navigate. The interface is so intuitive that a staff member with
					<span class="font-semibold text-slate-800">"No"</span> prior software experience can
					easily understand and operate the ERP from day one.
				</p>
			</div>
		</div>
	</section>

	<!-- Built for Every Stage of the Glass Industry -->
	<section class="py-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-4xl font-bold text-slate-900">
					Built for Every Stage of the Glass Industry
				</h2>
			</div>

			<div class="mt-16 grid gap-8 md:grid-cols-3">
				{#each audiences as audience}
					<div
						class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
					>
						<div class="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
							<audience.icon class="h-6 w-6" strokeWidth={2} />
						</div>

						<h3 class="mt-5 text-xl font-semibold text-slate-900">
							{audience.title}
						</h3>

						<p class="mt-4 leading-7 text-slate-600">
							{audience.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- The End of Manual Errors -->
	<section class="bg-slate-50 py-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="text-4xl font-bold text-slate-900">The End of Manual Errors</h2>

				<p class="mt-6 text-lg leading-8 text-slate-600">
					Stop losing money to miscalculated edge polishing, wrong chargeable areas, or lost
					job cards. Firstcut24 replaces stacks of physical paperwork and confusing Excel grids
					with a clean, automated digital workflow that does the heavy lifting for you.
				</p>
			</div>

			<div class="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
				{#each errorHighlights as item}
					<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<CheckCircle2 class="h-6 w-6 text-emerald-500" strokeWidth={2} />
						<h3 class="mt-4 font-semibold text-slate-900">{item.title}</h3>
						<p class="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>