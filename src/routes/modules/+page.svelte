<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import ModuleExplorer from '$lib/components/features/ModuleExplorer.svelte';
	import ModulesTabs from '$lib/components/sections/ModulesTabs.svelte';
	import DemoModal from '$lib/components/features/DemoModal.svelte';
	import ContactModal from '$lib/components/features/ContactModal.svelte';

	import { Grid, Shield, Zap } from 'lucide-svelte';

	let isDemoModalOpen = $state(false);
	let isContactModalOpen = $state(false);
</script>

<svelte:head>
	<title>Firstcut24</title>
	<meta name="description" content="Discover Svelte-fast modules specifically built for glass fabricators. Manage operations, customer requests, job card dispatches, and glass optimization." />
	<link rel="canonical" href="https://firstcut24.com/modules" />
</svelte:head>

<Header />

<main class="min-h-screen bg-slate-50/40 selection:bg-blue-500 selection:text-white relative overflow-hidden">
	<!-- Background grid and glow -->
	<div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
		<div class="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-400/20 to-cyan-300/10 blur-3xl opacity-60"></div>
		<div class="absolute top-1/4 right-0 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-indigo-300/15 to-blue-400/20 blur-3xl opacity-50"></div>
		<div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
	</div>

	<!-- Hero Banner -->
	<div class="mx-auto max-w-7xl py-10 sm:py-8 lg:py-8 text-center">

		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-6 max-w-4xl mx-auto">
			Integrated Modules Built for <br class="hidden sm:inline" />
			<span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Glass Fabrication ERP</span>
		</h1>

		<p class="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
			Connect every department of your glass enterprise. From quoting with templates and optimizing glass yield, to job card dispatching and payroll management.
		</p>

		<!-- Sub Features Badges -->
		<div class="flex flex-wrap justify-center gap-6 text-sm text-slate-600 font-medium">
			<div class="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-xs">
				<Grid class="h-4.5 w-4.5 text-blue-500" />
				<span>8 Core Modules</span>
			</div>
			<div class="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-xs">
				<Shield class="h-4.5 w-4.5 text-indigo-500" />
				<span>100% Compliant</span>
			</div>
			<div class="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-xs">
				<Zap class="h-4.5 w-4.5 text-cyan-500" />
				<span>Zero-Lag Sync</span>
			</div>
		</div>
	</div>

	<!-- Interactive Explorer Section -->
	<ModuleExplorer />

	<!-- Additional Overview Tabs -->
	<ModulesTabs />
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