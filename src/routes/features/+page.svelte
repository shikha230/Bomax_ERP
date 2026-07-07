<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import DashboardMockup from '$lib/components/features/DashboardMockup.svelte';
	import FeaturesSection from '$lib/components/features/FeaturesSection.svelte';
	import ModuleExplorer from '$lib/components/features/ModuleExplorer.svelte';
	import SoftwareScreensSection from '$lib/components/features/SoftwareScreensSection.svelte';
	import ResultsSection from '$lib/components/features/ResultsSection.svelte';
	import ComparisonSection from '$lib/components/features/ComparisonSection.svelte';
	import TestimonialsSection from '$lib/components/features/TestimonialsSection.svelte';
	import CTASection from '$lib/components/features/CTASection.svelte';
	import DemoModal from '$lib/components/features/DemoModal.svelte';
	import ContactModal from '$lib/components/features/ContactModal.svelte';

	import {
		Calendar,
		Phone,
		Sparkles
	} from 'lucide-svelte';

	let isDemoModalOpen = $state(false);
	let isContactModalOpen = $state(false);

	const trustIndicators = [
		'500+ Glass Businesses',
		'14-Day Free Trial',
		'No Credit Card'
	];
</script>
<Header />

<main
	class="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-20 flex items-center justify-center"
>
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-14 items-start w-full">
		<section
			class="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 md:space-y-8 animate-slide-up-fade"
		>
			<div
				class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-blue-600 shadow-sm"
			>
				<Sparkles class="h-3.5 w-3.5" />
				<span class="text-xs font-bold tracking-wide">
					Powerful ERP Features
				</span>
			</div>

			<h1
				class="text-3xl sm:text-4xl lg:text-[40px] xl:text-[54px] font-black tracking-tight text-slate-900 leading-[1.08]"
			>
				Everything Your Glass
				<br class="hidden sm:inline" />
				Business
				<br />
				Needs in
				<span
					class="whitespace-nowrap bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
				>
					One ERP
				</span>
			</h1>

			<p class="text-sm sm:text-[15px] text-slate-500 max-w-md leading-relaxed">
				Bomax ERP combines quotations, inventory, production,
				accounting, HR, reporting and AI-powered glass optimization into
				one intelligent cloud platform.
			</p>

			<div class="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
				<button
					type="button"
					onclick={() => (isDemoModalOpen = true)}
					class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 sm:py-4 text-sm font-semibold text-white"
				>
					<Calendar class="h-4 w-4" />
					<span>Book Live Demo</span>
				</button>

				<button
					type="button"
					onclick={() => (isContactModalOpen = true)}
					class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-white px-6 py-3.5 sm:py-4 text-sm font-semibold text-blue-600"
				>
					<Phone class="h-4 w-4" />
					<span>Contact Sales</span>
				</button>
			</div>

			<div class="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
				{#each trustIndicators as text (text)}
  <div class="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
    <span class="text-emerald-500 font-bold">✓</span>
    {text}
  </div>
{/each}
			</div>
		</section>

		<section class="hidden lg:flex lg:col-span-7 w-full justify-end lg:mt-28">
			<div class="mockup-scaling-wrapper relative">
				<div class="mockup-scaled-container">
					<DashboardMockup />
				</div>
			</div>
		</section>
	</div>
</main>


<FeaturesSection />
<ModuleExplorer />
<SoftwareScreensSection />
<ResultsSection />
<ComparisonSection />
<TestimonialsSection />

<CTASection
	onBookDemo={() => (isDemoModalOpen = true)}
	onContactSales={() => (isContactModalOpen = true)}
/>

<DemoModal
	isOpen={isDemoModalOpen}
	onClose={() => (isDemoModalOpen = false)}
/>

<ContactModal
	isOpen={isContactModalOpen}
	onClose={() => (isContactModalOpen = false)}
/>

<Footer />




<style>
	.animate-slide-up-fade {
		animation: slideUpFade 0.6s ease forwards;
	}

	@keyframes slideUpFade {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.mockup-scaling-wrapper {
		width: 100%;
		max-width: 660px;
	}

	.mockup-scaled-container {
		width: 100%;
		position: relative;
	}

	@media (min-width: 1024px) {
		.mockup-scaling-wrapper {
			width: 655px;
			height: 484px;
		}

		.mockup-scaled-container {
			width: 840px;
			height: 620px;
			transform: scale(0.78);
			transform-origin: top left;
		}
	}
</style>


<!-- <div class="min-h-screen bg-slate-50/40 selection:bg-blue-500 selection:text-white flex flex-col relative overflow-hidden">
	<div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
		<div class="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-400/20 to-cyan-300/10 blur-3xl opacity-60"></div>

	</div>
	<div class="absolute top-1/4 right-0 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-indigo-300/10 to-blue-400/20 blur-3xl opacity-50"></div>

	<div class="absolute bottom-0 left-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-200/10 to-blue-300/15 blur-3xl opacity-40"></div>

	<div
		class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"
	></div>
</div> -->