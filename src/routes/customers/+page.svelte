<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import StatsSection from '$lib/components/sections/StatsSection.svelte';
	import CTASection from '$lib/components/features/CTASection.svelte';
	import DemoModal from '$lib/components/features/DemoModal.svelte';
	import ContactModal from '$lib/components/features/ContactModal.svelte';

	import { Star, Quote, TrendingUp, Award } from 'lucide-svelte';

	let isDemoModalOpen = $state(false);
	let isContactModalOpen = $state(false);

	const featuredStories = [
		{
			company: 'Apex Glass Fabrication',
			location: 'Mumbai, MH',
			stat: '22% Scrap Decrease',
			metricName: 'via Optimizer nesting',
			leadName: 'Vikram Saluja',
			role: 'Managing Director',
			quote: 'Before Bomax, estimating toughened glass and nesting cuts was a manual bottleneck. Now we quote 4x faster and our scrap is at an all-time low. The return on investment was visible within the first month itself.',
			tag: 'Fabricator'
		},
		{
			company: 'Royal Glass House & Hardware',
			location: 'Bengaluru, KA',
			stat: '90%+ On-time Dispatch',
			metricName: 'with digital job cards',
			leadName: 'M. K. Swamy',
			role: 'Operations Head',
			quote: 'Tracking orders across our polishing, tempering, and double-glazing lines used to require constant phone calls. Bomax digital job cards keep everyone synced, drastically reducing shop floor delays.',
			tag: 'Retailer & Supplier'
		}
	];

	const stars = [1, 2, 3, 4, 5];
</script>

<svelte:head>
	<title>Bomax ERP Customer Spotlight & Reviews</title>
	<meta name="description" content="Read reviews and success stories from over 500+ glass industry leaders running on Bomax ERP. Learn how they optimized glass fabrication workflows." />
	<link rel="canonical" href="https://bomax-erp-vercel-app.vercel.app/customers" />
</svelte:head>

<Header />

<main class="min-h-screen bg-slate-50/40 selection:bg-blue-500 selection:text-white relative overflow-hidden">
	<!-- Background grid and glow -->
	<div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
		<div class="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-blue-300/10 to-indigo-300/10 blur-3xl opacity-50"></div>
		<div class="absolute bottom-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-cyan-300/15 to-blue-200/10 blur-3xl opacity-50"></div>
	</div>

	<!-- Customers Page Hero -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 text-center">
		<div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/50 text-emerald-700 shadow-sm mb-6">
			<Award class="h-3.5 w-3.5" />
			<span class="text-xs font-bold tracking-wide">Client Success</span>
		</div>

		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-5 max-w-4xl mx-auto">
			Trusted by Over 500+ <br class="hidden sm:inline" />
			<span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Glass Industry Leaders</span>
		</h1>
		<p class="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-4">
			Discover how fabricators, retail showrooms, glazing contractors, and glass traders improve yield, automate billing, and coordinate shop floor jobs.
		</p>
	</div>

	<!-- <TrustedCompanies /> -->

	<!-- Stats Insights Banner -->
	<StatsSection />

	<!-- Customer Spotlight Case Studies -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-extrabold tracking-tight text-slate-900">Featured Success Stories</h2>
			<p class="text-sm text-slate-500 mt-2">Deeper look at how distinct operations scaled their business productivity</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
			{#each featuredStories as story (story.company)}
				<div class="bg-white rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-300 group">
					<!-- Color Accent Top -->
					<div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>

					<div class="absolute top-8 right-8 text-slate-200 group-hover:text-blue-50/70 transition-colors">
						<Quote class="h-16 w-16" strokeWidth={1} />
					</div>

					<div class="relative z-10">
						<!-- Tag & Location -->
						<div class="flex items-center gap-2 mb-6">
							<span class="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
								{story.tag}
							</span>
							<span class="text-xs text-slate-400 font-medium">
								{story.location}
							</span>
						</div>

						<h3 class="text-2xl font-black text-slate-950 font-heading mb-1">{story.company}</h3>

						<!-- Star rating -->
						<div class="flex items-center gap-1 mb-6">
							{#each stars as star (star)}
								<Star class="h-4 w-4 fill-amber-400 text-amber-400" />
							{/each}
						</div>

						<p class="text-[14.5px] text-slate-600 leading-relaxed italic mb-8">
							"{story.quote}"
						</p>
					</div>

					<div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-slate-100 pt-6 gap-6">
						<div>
							<div class="font-bold text-slate-900">{story.leadName}</div>
							<div class="text-xs text-slate-400 font-medium">{story.role}</div>
						</div>
						<div class="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3 flex items-center gap-3">
							<TrendingUp class="h-5 w-5 text-emerald-600" />
							<div>
								<div class="text-sm font-extrabold text-emerald-700 leading-none">{story.stat}</div>
								<div class="text-[10px] text-emerald-500 font-medium mt-0.5 leading-none">{story.metricName}</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Testimonials grid component -->
	<Testimonials />

	<!-- CTA Section -->
	<CTASection
		onBookDemo={() => (isDemoModalOpen = true)}
		onContactSales={() => (isContactModalOpen = true)}
	/>
</main>

<DemoModal
	isOpen={isDemoModalOpen}
	onClose={() => (isDemoModalOpen = false)}
/>

<ContactModal
	isOpen={isContactModalOpen}
	onClose={() => (isContactModalOpen = false)}
/>

<Footer />