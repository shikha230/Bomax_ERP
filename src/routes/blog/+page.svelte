<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { Factory, Warehouse, Store, CheckCircle2 } from 'lucide-svelte';

	const audiences = [
		{
			id: 'processors',
			title: 'For Processors',
			description:
				'Eliminate factory floor bottlenecks and optimize CNC yields without typing complex formulas.',
			icon: Factory
		},
		{
			id: 'wholesalers',
			title: 'For Wholesalers',
			description:
				'Track thousands of glass sheets, hardware accessories, and multi-warehouse inventory without a single spreadsheet.',
			icon: Warehouse
		},
		{
			id: 'retailers',
			title: 'For Retailers',
			description:
				'Generate instant, 100% accurate quotes and tax invoices while the customer is still standing at your desk.',
			icon: Store
		}
	];

	const errorHighlights = [
		{
			id: 'clean-ui',
			title: 'Clean & Elegant UI',
			description: 'Say goodbye to chaotic, overwhelming data.'
		},
		{
			id: 'intuitive-nav',
			title: 'Intuitive Navigation',
			description: 'Find exactly what you need in three clicks or less.'
		},
		{
			id: 'no-training',
			title: 'No Long Training Seminars',
			description:
				'Your team will be up, running, and confidently managing orders in hours, not weeks.'
		}
	];

	// Decorative floating bubbles for the hero banner
	const bubbles = [
		{ id: 'b1', size: 70, top: '15%', left: '10%', opacity: 0.4, delay: '0s', duration: '6s' },
		{ id: 'b2', size: 34, top: '70%', left: '20%', opacity: 0.45, delay: '1.2s', duration: '8s' },
		{ id: 'b3', size: 100, top: '18%', left: '80%', opacity: 0.3, delay: '0.5s', duration: '7s' },
		{ id: 'b4', size: 45, top: '78%', left: '72%', opacity: 0.4, delay: '2s', duration: '5.5s' },
		{ id: 'b5', size: 20, top: '45%', left: '48%', opacity: 0.5, delay: '1.5s', duration: '5s' },
		{ id: 'b6', size: 55, top: '85%', left: '42%', opacity: 0.3, delay: '0.8s', duration: '9s' },
		{ id: 'b7', size: 28, top: '8%', left: '55%', opacity: 0.4, delay: '2.5s', duration: '6.5s' }
	];
</script>

<svelte:head>
	<title>About Us — Firstcut24</title>
	<meta
		name="description"
		content="An elite glass ERP built for real people. Zero experience needed, zero manual errors."
	/>
</svelte:head>

<Header />

<div class="bg-white overflow-x-hidden">
	<!-- Elite Power. Effortless Simplicity. -->
	<section class="relative isolate overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-indigo-950">
		<!-- animated glow orbs -->
		<div class="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse"></div>
		<div class="pointer-events-none absolute top-1/2 -right-32 h-112 w-md -translate-y-1/2 rounded-full bg-indigo-500/30 blur-3xl animate-pulse [animation-delay:1s]"></div>
		<div class="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse [animation-delay:2s]"></div>

		<!-- floating bubbles -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			{#each bubbles as bubble (bubble.id)}
				<span
					class="absolute rounded-full bg-linear-to-br from-cyan-300/30 to-white/10 border border-cyan-200/40 animate-bounce"
					style="
						width: {bubble.size}px;
						height: {bubble.size}px;
						top: {bubble.top};
						left: {bubble.left};
						opacity: {bubble.opacity};
						animation-delay: {bubble.delay};
						animation-duration: {bubble.duration};
					"
				></span>
			{/each}
		</div>

		<div class="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
			<div class="mx-auto max-w-4xl text-center">
				<h1 class="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
					Elite Power.
					<span class="block bg-linear-to-r from-cyan-300 via-sky-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
						Effortless Simplicity.
					</span>
				</h1>

				<p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100/90">
					Whether you are a local retailer, a high-volume wholesaler, or a heavy-duty glass
					processor, it's time to permanently get rid of manual calculations, broken Excel
					sheets, and endless paperwork.
				</p>
			</div>
		</div>

		<!-- bottom fade so next section blends in -->
		<div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white/0 to-transparent"></div>
	</section>

	<!-- An Elite ERP Built for Real People -->
	<section class="mx-auto max-w-7xl px-6 py-14 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-4xl font-bold text-slate-900 md:text-5xl">
				An Elite ERP Built for
				<span class="bg-linear-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Real People</span>
			</h2>

			<p class="mt-5 text-lg leading-8 text-slate-600">
				We believe that powerful industrial software should work for you, not the other way
				around. Firstcut24 features an elegant visual display designed to give your business
				the premium feel of an elite ERP, without the frustrating, cluttered screens of
				traditional legacy systems.
			</p>
		</div>
	</section>

	<!-- Zero Experience? Zero Problem. -->
	<section class="relative overflow-hidden bg-slate-50 py-14">
		<div class="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-blue-100 blur-3xl"></div>
		<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="text-4xl font-bold text-slate-900 md:text-5xl">
					Zero Experience? <span class="text-cyan-600">Zero Problem.</span>
				</h2>

				<p class="mt-5 text-lg leading-8 text-slate-600">
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
	<section class="py-14">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-4xl font-bold text-slate-900 md:text-5xl">
					Built for Every Stage of the <span class="bg-linear-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">Glass Industry</span>
				</h2>
			</div>

			<div class="mt-12 grid gap-8 md:grid-cols-3">
				{#each audiences as audience (audience.id)}
					<div
						class="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-500/10"
					>
						<div class="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-50/0 via-cyan-50/0 to-blue-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

						<div class="relative inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
							<audience.icon class="h-6 w-6" strokeWidth={2} />
						</div>

						<h3 class="relative mt-5 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
							{audience.title}
						</h3>

						<p class="relative mt-4 leading-7 text-slate-600">
							{audience.description}
						</p>

						<div class="relative mt-5 h-0.5 w-8 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-400"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- The End of Manual Errors -->
	<section class="bg-slate-50 py-14">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="text-4xl font-bold text-slate-900 md:text-5xl">
					The End of
					<span class="bg-linear-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
						Manual Errors
					</span>
				</h2>

				<p class="mt-5 text-lg leading-8 text-slate-600">
					Stop losing money to miscalculated edge polishing, wrong chargeable areas, or lost
					job cards. Firstcut24 replaces stacks of physical paperwork and confusing Excel grids
					with a clean, automated digital workflow that does the heavy lifting for you.
				</p>
			</div>

			<div class="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
				{#each errorHighlights as item (item.id)}
					<div class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
						<CheckCircle2 class="h-6 w-6 text-emerald-500 transition-transform duration-300 group-hover:scale-125" strokeWidth={2} />
						<h3 class="mt-4 font-semibold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">{item.title}</h3>
						<p class="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<Footer />