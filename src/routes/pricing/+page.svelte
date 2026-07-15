<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import PricingSection from '$lib/components/sections/PricingSection.svelte';
	import FAQSection from '$lib/components/sections/FAQSection.svelte';
	import CTASection from '$lib/components/features/CTASection.svelte';
	import DemoModal from '$lib/components/features/DemoModal.svelte';
	import ContactModal from '$lib/components/features/ContactModal.svelte';

	import { Sparkles, Shield, CreditCard, RefreshCw } from 'lucide-svelte';

	let isDemoModalOpen = $state(false);
	let isContactModalOpen = $state(false);

	const comparisonFeatures = [
		{ category: 'Core Capabilities', items: [
			{ name: 'Quotations & Estmations', starter: 'Basic Templates', professional: 'Advanced + Auto glass cost', enterprise: 'Custom Workflows' },
			{ name: 'Order Management', starter: '✓', professional: '✓', enterprise: '✓' },
			{ name: 'Inventory & Stock Track', starter: 'Up to 500 items', professional: 'Unlimited', enterprise: 'Multi-Warehouse' },
			{ name: 'GST Billing & e-Invoicing', starter: 'Standard GST', professional: 'Built-in e-Invoicing', enterprise: 'Custom Integrations' },
		]},
		{ category: 'Advanced Features', items: [
			{ name: 'AI Glass Cutting Optimizer', starter: '—', professional: '✓ Included', enterprise: 'Advanced Nested Yield' },
			{ name: 'Production Planning & Job Cards', starter: '—', professional: '✓', enterprise: 'Multi-plant Orchestration' },
			{ name: 'HR & Payroll Management', starter: '—', professional: 'Up to 15 employees', enterprise: 'Unlimited employees' },
			{ name: 'WhatsApp & SMS Alerts', starter: '—', professional: '✓', enterprise: 'Dedicated Channel API' },
		]},
		{ category: 'Support & Security', items: [
			{ name: 'Max Active Users', starter: '3 Users', professional: '15 Users', enterprise: 'Unlimited' },
			{ name: 'Customer Support', starter: 'Email Support', professional: 'Priority Chat & Email', enterprise: '24/7 Dedicated Account Manager' },
			{ name: 'Uptime SLA', starter: '99.9%', professional: '99.9%', enterprise: '99.99% SLA' },
			{ name: 'Daily Cloud Backups', starter: '✓', professional: '✓', enterprise: 'Hourly + Self-service Restore' },
		]}
	];
</script>

<svelte:head>
	<title>Firstcut24</title>
	<meta name="description" content="Choose from Starter, Professional, or Enterprise tiers of Firstcut24. Flexible cloud pricing packages tailored for glass fabrication and tempering plants." />
	<link rel="canonical" href="https://firstcut24.com/pricing" />
</svelte:head>

<Header />

<main class="min-h-screen bg-slate-50/40 selection:bg-blue-500 selection:text-white relative overflow-hidden">
	<!-- Background glow effects -->
	<div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
		<div class="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-300/10 blur-3xl opacity-60"></div>
		<div class="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-300/10 to-blue-400/20 blur-3xl opacity-40"></div>
	</div>

	<!-- Pricing Header -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-6 text-center">
		<div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/50 text-indigo-600 shadow-sm mb-6">
			<Sparkles class="h-3.5 w-3.5" />
			<span class="text-xs font-bold tracking-wide">Flexible Plans</span>
		</div>

		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-5 max-w-3xl mx-auto">
			Fair & Transparent Pricing
		</h1>
		<p class="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-8">
			Unlock the best optimization, quotation and production planning tools for your business. Choose a plan that aligns with your scale.
		</p>
	</div>

	<!-- Pricing Cards Section -->
	<PricingSection onContactSales={() => (isContactModalOpen = true)} />

	<!-- Core Values Info Grid -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
				<div class="h-10 w-10 flex-shrink-0 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
					<CreditCard class="h-5 w-5" />
				</div>
				<div>
					<h3 class="font-bold text-slate-950 mb-2">No Hype, Free Trial</h3>
					<p class="text-sm text-slate-500 leading-relaxed">
						Try all professional features for 14 days without inputting any credit card details.
					</p>
				</div>
			</div>
			<div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
				<div class="h-10 w-10 flex-shrink-0 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
					<RefreshCw class="h-5 w-5" />
				</div>
				<div>
					<h3 class="font-bold text-slate-950 mb-2">Cancel Any Time</h3>
					<p class="text-sm text-slate-500 leading-relaxed">
						No long-term lock-in commitments. Upgrade, downgrade, or cancel your subscription whenever you wish.
					</p>
				</div>
			</div>
			<div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
				<div class="h-10 w-10 flex-shrink-0 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
					<Shield class="h-5 w-5" />
				</div>
				<div>
					<h3 class="font-bold text-slate-950 mb-2">Secure Backups</h3>
					<p class="text-sm text-slate-500 leading-relaxed">
						Your client databases are isolated, encrypted, and backed up across regions automatically.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Plan Comparison Matrix -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20" id="compare-matrix">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-extrabold tracking-tight text-slate-900">Compare Plans & Features</h2>
			<p class="text-sm text-slate-500 mt-2">A technical breakdown of what is included in each plan tier</p>
		</div>

		<div class="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
			<table class="w-full text-left border-collapse min-w-[700px]">
				<thead>
					<tr class="bg-slate-50/70 border-b border-slate-200/80 text-sm text-slate-800">
						<th class="p-5 font-semibold text-slate-900 w-1/3">Feature Category</th>
						<th class="p-5 font-semibold text-slate-900">Starter</th>
						<th class="p-5 font-semibold text-slate-900 bg-blue-50/20 text-blue-800">Professional</th>
						<th class="p-5 font-semibold text-slate-950">Enterprise</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-100 text-sm">
					{#each comparisonFeatures as section (section.category)}
						<tr class="bg-slate-50/40">
							<td colspan="4" class="px-5 py-3 font-semibold text-xs text-slate-500 uppercase tracking-wider">
								{section.category}
							</td>
						</tr>
						{#each section.items as item (item.name)}
							<tr class="hover:bg-slate-50/40 transition">
								<td class="px-5 py-4 font-medium text-slate-800">{item.name}</td>
								<td class="px-5 py-4 text-slate-500">{item.starter}</td>
								<td class="px-5 py-4 text-slate-900 bg-blue-50/10 font-medium">{item.professional}</td>
								<td class="px-5 py-4 text-slate-700">{item.enterprise}</td>
							</tr>
						{/each}
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- FAQ and CTA Support -->
	<FAQSection />

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