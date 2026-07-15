<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	const benefits = [
		{
			id: 'high-demand',
			title: 'High Demand, Low Competition',
			description:
				'Most glass factories still rely on outdated systems. Offer the ERP solution they have been waiting for.'
		},
		{
			id: 'sticky-product',
			title: 'Sticky Product',
			description:
				'Factories depend on Firstcut24 daily for production, inventory, and accounting, resulting in high retention.'
		},
		{
			id: 'no-headache',
			title: 'No Implementation Headache',
			description:
				'Our team handles technical setup, training, and support while you focus on relationships and sales.'
		},
		{
			id: 'exclusivity',
			title: 'State-Wise Exclusivity',
			description:
				'Become an exclusive partner in your state with limited appointments to maximize growth opportunities.'
		}
	];

	const partnerTypes = [
		{ id: 'vendors', label: 'Glass Machinery Vendors' },
		{ id: 'consultants', label: 'Business Consultants' },
		{ id: 'influencers', label: 'Industry Influencers & Associations' },
		{ id: 'implementers', label: 'Independent Software Implementers' }
	];

	const steps = [
		{
			id: 'step-1',
			step: 'Step 1',
			title: 'Application',
			description:
				'Submit your profile, business focus, and the state you wish to represent.'
		},
		{
			id: 'step-2',
			step: 'Step 2',
			title: 'Credential Verification',
			description:
				'Our team conducts a brief interview to understand your network and capabilities.'
		},
		{
			id: 'step-3',
			step: 'Step 3',
			title: 'Certification & Training',
			description:
				'Receive partner certification and complete product training.'
		},
		{
			id: 'step-4',
			step: 'Step 4',
			title: 'Marketing Enablement',
			description:
				'Gain access to brochures, pricing sheets, demo scripts, and marketing assets.'
		},
		{
			id: 'step-5',
			step: 'Step 5',
			title: 'Client Onboarding',
			description:
				'Identify leads while we support demos, technical discussions, and closing.'
		},
		{
			id: 'step-6',
			step: 'Step 6',
			title: 'Start Earning',
			description:
				'Receive recurring commissions as long as your referred clients remain active.'
		}
	];

	// Decorative floating bubbles for the hero banner
	const bubbles = [
		{ id: 'b1', size: 70, top: '15%', left: '8%', opacity: 0.4, delay: '0s', duration: '6s' },
		{ id: 'b2', size: 34, top: '68%', left: '18%', opacity: 0.45, delay: '1.2s', duration: '8s' },
		{ id: 'b3', size: 100, top: '20%', left: '82%', opacity: 0.3, delay: '0.5s', duration: '7s' },
		{ id: 'b4', size: 45, top: '75%', left: '74%', opacity: 0.4, delay: '2s', duration: '5.5s' },
		{ id: 'b5', size: 20, top: '42%', left: '48%', opacity: 0.5, delay: '1.5s', duration: '5s' },
		{ id: 'b6', size: 55, top: '85%', left: '40%', opacity: 0.3, delay: '0.8s', duration: '9s' },
		{ id: 'b7', size: 28, top: '10%', left: '55%', opacity: 0.4, delay: '2.5s', duration: '6.5s' }
	];
</script>

<svelte:head>
	<title>Firstcut24 Channel Partner Program</title>
	<meta
		name="description"
		content="Become an exclusive Firstcut24 State-Wise Channel Partner and earn recurring passive income."
	/>
</svelte:head>

<Header />

<div class="bg-white overflow-x-hidden">
	<!-- Hero -->
	<section class="relative isolate overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-indigo-950">
		<!-- animated glow orbs -->
		<div class="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse"></div>
		<div class="pointer-events-none absolute top-1/2 -right-32 h-112 w-md -translate-y-1/2 rounded-full bg-indigo-500/30 blur-3xl animate-pulse [animation-delay:1s]"></div>
		<div class="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse [animation-delay:2s]"></div>
		<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]"></div>

		<!-- floating bubbles -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			{#each bubbles as bubble (bubble.id)}
				<span
					class="absolute rounded-full bg-linear-to-br from-cyan-300/30 to-white/10 border border-cyan-200/40 animate-bounce"
					style="width: {bubble.size}px; height: {bubble.size}px; top: {bubble.top}; left: {bubble.left}; opacity: {bubble.opacity}; animation-delay: {bubble.delay}; animation-duration: {bubble.duration};"
				></span>
			{/each}
		</div>

		<div class="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
			<div class="max-w-4xl">
				<h1 class="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
					Become a Firstcut24
					<span class="block bg-linear-to-r from-cyan-300 via-sky-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
						State-Wise Channel Partner
					</span>
				</h1>

				<p class="mt-5 max-w-3xl text-lg leading-8 text-blue-100/90">
					Unlock recurring passive income by helping glass manufacturers digitize,
					optimize, and scale with the industry's most advanced AI-powered ERP.
				</p>

				<div class="mt-8 flex flex-wrap gap-4">
  <a
    href="#apply"
    class="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white shadow-md shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30"
  >
    Apply Now
  </a>

  <a
    href="#benefits"
    class="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
  >
    Learn More
  </a>
</div>
			</div>
		</div>

		<!-- bottom fade so next section blends in -->
		<div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white/0 to-transparent"></div>
	</section>

	<!-- Intro -->
	<section class="mx-auto max-w-7xl px-6 py-14 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-4xl font-bold text-slate-900 md:text-5xl">
				Transform the
				<span class="bg-linear-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Glass Manufacturing Industry</span>
			</h2>

			<p class="mt-5 text-lg leading-8 text-slate-600">
				Stop selling one-time hardware. Start building a predictable monthly
				revenue stream by helping glass factories modernize their operations
				with Firstcut24.
			</p>
		</div>
	</section>

	<!-- Benefits -->
	<section id="benefits" class="relative overflow-hidden bg-slate-50 py-14">
		<div class="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-blue-100 blur-3xl"></div>
		<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-4xl font-bold text-slate-900 md:text-5xl">
					Why Channel Partner with <span class="text-cyan-600">Firstcut24?</span>
				</h2>

				<p class="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
					The glass industry is undergoing rapid digital transformation. Firstcut24
					is leading this shift with modern ERP technology.
				</p>
			</div>

			<div class="mt-12 grid gap-8 md:grid-cols-2">
				{#each benefits as benefit (benefit.id)}
					<div class="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-500/10">
						<div class="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-50/0 via-cyan-50/0 to-blue-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

						<h3 class="relative text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
							{benefit.title}
						</h3>

						<p class="relative mt-4 leading-7 text-slate-600">
							{benefit.description}
						</p>

						<div class="relative mt-5 h-0.5 w-8 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-400"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Passive Income -->
	<section class="py-14">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="relative overflow-hidden rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 p-10 text-white md:p-16">
				<div class="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
				<div class="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>

				<h2 class="relative text-4xl font-bold">
					The Passive Income Model
				</h2>

				<p class="relative mt-5 max-w-3xl text-lg text-blue-50">
					Every client you onboard generates recurring subscription revenue.
					Instead of earning once, you continue earning for the lifetime of the
					customer.
				</p>

				<div class="relative mt-10 grid gap-6 md:grid-cols-3">
					<div class="group rounded-2xl bg-white/10 p-6 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
						<h3 class="font-semibold transition-colors duration-300 group-hover:text-cyan-100">Recurring Revenue</h3>
						<p class="mt-3 text-blue-100">
							Earn a percentage of monthly or yearly subscriptions.
						</p>
					</div>

					<div class="group rounded-2xl bg-white/10 p-6 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
						<h3 class="font-semibold transition-colors duration-300 group-hover:text-cyan-100">Monthly Payouts</h3>
						<p class="mt-3 text-blue-100">
							Commissions are credited every month while clients remain active.
						</p>
					</div>

					<div class="group rounded-2xl bg-white/10 p-6 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
						<h3 class="font-semibold transition-colors duration-300 group-hover:text-cyan-100">Zero Inventory Risk</h3>
						<p class="mt-3 text-blue-100">
							No stock, logistics, or delivery management required.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Who Should Apply -->
	<section class="bg-slate-50 py-14">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-4xl font-bold text-slate-900 md:text-5xl">
					Who Should Apply?
				</h2>
			</div>

			<div class="mt-10 grid gap-6 md:grid-cols-2">
				{#each partnerTypes as type (type.id)}
					<div class="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
						<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white">
							✓
						</span>
						<span class="text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
							{type.label}
						</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Steps -->
	<section class="py-14">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-4xl font-bold text-slate-900 md:text-5xl">
					Your Path to Partnership
				</h2>
			</div>

			<div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each steps as item (item.id)}
					<div class="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-500/10">
						<div class="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-50/0 via-cyan-50/0 to-blue-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

						<div class="relative inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
							{item.step}
						</div>

						<h3 class="relative mt-5 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
							{item.title}
						</h3>

						<p class="relative mt-4 leading-7 text-slate-600">
							{item.description}
						</p>

						<div class="relative mt-5 h-0.5 w-8 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-400"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section id="apply" class="relative overflow-hidden bg-linear-to-r from-slate-900 to-slate-800 py-20">
		<div class="pointer-events-none absolute -top-16 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
		<div class="pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

		<div class="relative mx-auto max-w-4xl px-6 text-center">
			<h2 class="text-4xl font-bold text-white">
				Limited Slots Available
			</h2>

			<p class="mt-6 text-lg text-slate-300">
				To maintain high commission margins and market exclusivity, we are
				limiting the number of partnerships per state.
			</p>

			<p class="mt-4 text-slate-400">
				Are you ready to secure your territory?
			</p>

			<div class="mt-8">
				<button class="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-md shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30">
					Apply Now
				</button>
			</div>
		</div>
	</section>
</div>

<Footer />