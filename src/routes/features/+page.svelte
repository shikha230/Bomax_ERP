<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import heroImage from '$lib/assets/Images/hero.png';
	import FeaturesSection from '$lib/components/features/FeaturesSection.svelte';
	import SoftwareScreensSection from '$lib/components/features/SoftwareScreensSection.svelte';
	import ResultsSection from '$lib/components/features/ResultsSection.svelte';
	import ComparisonSection from '$lib/components/features/ComparisonSection.svelte';
	import TestimonialsSection from '$lib/components/features/TestimonialsSection.svelte';
	import CTASection from '$lib/components/features/CTASection.svelte';
	import DemoModal from '$lib/components/features/DemoModal.svelte';
	import ContactModal from '$lib/components/features/ContactModal.svelte';

	import {
		Calendar,
	} from 'lucide-svelte';

	let isDemoModalOpen = $state(false);
	let isContactModalOpen = $state(false);


</script>

<svelte:head>
	<title>Firstcut24</title>
	<meta name="description" content="Explore advanced glass ERP features including cutting optimization, CRM, and inventory dispatching tailored specifically for glass fabricators." />
	<link rel="canonical" href="https://firstcut24.com/features" />
</svelte:head>

<Header />

<main
	class="bg-[#E8F4FF] w-full pt-3 lg:pt-5 pb-10 lg:pb-20 overflow-hidden"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-14 items-center w-full">
		<section
			class="  lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 md:space-y-8 animate-slide-up-fade"
		>


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
				Firstcut24 combines quotations, inventory, production,
				accounting, HR, reporting and AI-powered glass optimization into
				one intelligent cloud platform.
			</p>

			<div class="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
	<div class="relative w-full sm:w-auto">
		<button
			type="button"
			onclick={() => (isDemoModalOpen = true)}
			class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
		>
			<Calendar class="h-4 w-4" />
			<span>Book Live Demo</span>
		</button>
		<span class="absolute -top-2 -right-2 bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
			Launching Soon
		</span>
	</div>
</div>


		</section>

		<section class="lg:col-span-5 w-full flex justify-center lg:justify-end mt-8 lg:mt-8">
			<div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl w-full">
				<img
					src={heroImage}
					alt="Glass ERP Dashboard"
					class="w-full h-96"

				/>
			</div>
		</section>
	</div>
	</div>
</main>


<FeaturesSection />
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
</style>


