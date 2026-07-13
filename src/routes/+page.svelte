<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import TrustedCompanies from '$lib/components/sections/TrustedCompanies.svelte';
	import FeaturesGrid from '$lib/components/sections/FeaturesGrid.svelte';
	import ModulesTabs from '$lib/components/sections/ModulesTabs.svelte';
	import DashboardShowcase from '$lib/components/sections/DashboardShowcase.svelte';
	import BusinessTypes from '$lib/components/sections/BusinessTypes.svelte';
	import TimelineSection from '$lib/components/sections/TimelineSection.svelte';
	import StatsSection from '$lib/components/sections/StatsSection.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	// import PricingSection from '$lib/components/sections/PricingSection.svelte';
	import CTASection from '$lib/components/sections/CTASection.svelte';
</script>

<svelte:head>
	<title>Intelligent ERP Software for the Glass Industry — Bomax ERP</title>
	<meta name="description" content="Bomax ERP is the all-in-one cloud platform for glass fabrication businesses. Streamline quotations, inventory levels, job tracking, and nesting optimization." />
	<link rel="canonical" href="https://bomax-erp-vercel-app.vercel.app/" />
</svelte:head>

<Header />
<HeroSection />
<!-- <TrustedCompanies /> -->

<div id="features">
	<FeaturesGrid />
</div>

<div id="modules">
	<ModulesTabs />
</div>

<DashboardShowcase />
<BusinessTypes />
<TimelineSection />
<StatsSection />

<!-- <div id="customers">
	<Testimonials />
</div> -->

<!-- <div id="pricing">
	<PricingSection />
</div> -->


<div id="contact">
	<CTASection />
</div>

<Footer />