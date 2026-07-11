<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';

	const benefits = [
		{
			title: 'High Demand, Low Competition',
			description:
				'Most glass factories still rely on outdated systems. Offer the ERP solution they have been waiting for.'
		},
		{
			title: 'Sticky Product',
			description:
				'Factories depend on Firstcut24 daily for production, inventory, and accounting, resulting in high retention.'
		},
		{
			title: 'No Implementation Headache',
			description:
				'Our team handles technical setup, training, and support while you focus on relationships and sales.'
		},
		{
			title: 'State-Wise Exclusivity',
			description:
				'Become an exclusive partner in your state with limited appointments to maximize growth opportunities.'
		}
	];

	const partnerTypes = [
		'Glass Machinery Vendors',
		'Business Consultants',
		'Industry Influencers & Associations',
		'Independent Software Implementers'
	];

	const steps = [
		{
			step: 'Step 1',
			title: 'Application',
			description:
				'Submit your profile, business focus, and the state you wish to represent.'
		},
		{
			step: 'Step 2',
			title: 'Credential Verification',
			description:
				'Our team conducts a brief interview to understand your network and capabilities.'
		},
		{
			step: 'Step 3',
			title: 'Certification & Training',
			description:
				'Receive partner certification and complete product training.'
		},
		{
			step: 'Step 4',
			title: 'Marketing Enablement',
			description:
				'Gain access to brochures, pricing sheets, demo scripts, and marketing assets.'
		},
		{
			step: 'Step 5',
			title: 'Client Onboarding',
			description:
				'Identify leads while we support demos, technical discussions, and closing.'
		},
		{
			step: 'Step 6',
			title: 'Start Earning',
			description:
				'Receive recurring commissions as long as your referred clients remain active.'
		}
	];

	function goBack() {
		if (typeof window !== 'undefined' && window.history.length > 1) {
			window.history.back();
		}
	}
</script>

<svelte:head>
	<title>Firstcut24 Channel Partner Program</title>
	<meta
		name="description"
		content="Become an exclusive Firstcut24 State-Wise Channel Partner and earn recurring passive income."
	/>
</svelte:head>

<div class="bg-white">
	<!-- Hero -->
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
			<div class="max-w-4xl">
				<span
					class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100"
				>
					Exclusive State-Wise Partnership Opportunity
				</span>

				<h1
					class="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl"
				>
					Become a Firstcut24
					<span class="text-cyan-400">State-Wise Channel Partner</span>
				</h1>

				<p class="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
					Unlock recurring passive income by helping glass manufacturers digitize,
					optimize, and scale with the industry's most advanced AI-powered ERP.
				</p>

				<div class="mt-10 flex flex-wrap gap-4">
					<a
						href="#apply"
						class="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
					>
						Apply Now
					</a>

					<a
						href="#benefits"
						class="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
					>
						Learn More
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Intro -->
	<section class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-3xl font-bold text-slate-900 md:text-5xl">
				Transform the Glass Manufacturing Industry
			</h2>

			<p class="mt-6 text-lg leading-8 text-slate-600">
				Stop selling one-time hardware. Start building a predictable monthly
				revenue stream by helping glass factories modernize their operations
				with Firstcut24.
			</p>
		</div>
	</section>

	<!-- Benefits -->
	<section id="benefits" class="bg-slate-50 py-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-4xl font-bold text-slate-900">
					Why Partner with Firstcut24?
				</h2>

				<p class="mx-auto mt-4 max-w-3xl text-slate-600">
					The glass industry is undergoing rapid digital transformation. Firstcut24
					is leading this shift with modern ERP technology.
				</p>
			</div>

			<div class="mt-16 grid gap-8 md:grid-cols-2">
				{#each benefits as benefit}
					<div
						class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
					>
						<h3 class="text-xl font-semibold text-slate-900">
							{benefit.title}
						</h3>

						<p class="mt-4 leading-7 text-slate-600">
							{benefit.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Passive Income -->
	<section class="py-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 text-white md:p-16"
			>
				<h2 class="text-4xl font-bold">
					The Passive Income Model
				</h2>

				<p class="mt-5 max-w-3xl text-lg text-blue-50">
					Every client you onboard generates recurring subscription revenue.
					Instead of earning once, you continue earning for the lifetime of the
					customer.
				</p>

				<div class="mt-10 grid gap-6 md:grid-cols-3">
					<div class="rounded-2xl bg-white/10 p-6 backdrop-blur">
						<h3 class="font-semibold">Recurring Revenue</h3>
						<p class="mt-3 text-blue-100">
							Earn a percentage of monthly or yearly subscriptions.
						</p>
					</div>

					<div class="rounded-2xl bg-white/10 p-6 backdrop-blur">
						<h3 class="font-semibold">Monthly Payouts</h3>
						<p class="mt-3 text-blue-100">
							Commissions are credited every month while clients remain active.
						</p>
					</div>

					<div class="rounded-2xl bg-white/10 p-6 backdrop-blur">
						<h3 class="font-semibold">Zero Inventory Risk</h3>
						<p class="mt-3 text-blue-100">
							No stock, logistics, or delivery management required.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Who Should Apply -->
	<section class="bg-slate-50 py-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-4xl font-bold text-slate-900">
					Who Should Apply?
				</h2>
			</div>

			<div class="mt-14 grid gap-6 md:grid-cols-2">
				{#each partnerTypes as type}
					<div
						class="rounded-2xl border border-slate-200 bg-white p-6 font-medium shadow-sm"
					>
						✓ {type}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Steps -->
	<section class="py-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-4xl font-bold text-slate-900">
					Your Path to Partnership
				</h2>
			</div>

			<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each steps as item}
					<div
						class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
					>
						<div
							class="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
						>
							{item.step}
						</div>

						<h3 class="mt-5 text-xl font-semibold text-slate-900">
							{item.title}
						</h3>

						<p class="mt-4 text-slate-600">
							{item.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section
		id="apply"
		class="bg-gradient-to-r from-slate-900 to-slate-800 py-24"
	>
		<div class="mx-auto max-w-4xl px-6 text-center">
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

			<div class="mt-10">
				<button
					class="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-600"
				>
					Apply Now
				</button>
			</div>
		</div>
	</section>
</div>