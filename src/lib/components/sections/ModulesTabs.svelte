<script lang="ts">
	import { resolve } from '$app/paths';
	import { CheckCircle2 } from 'lucide-svelte';
	import ModuleMockup from './ModuleMockup.svelte';

	let activeTab = $state('AI Optimizer');

	const tabs = [
		'AI Optimizer',
		'Financial & Accounting',
		'HR & Payroll',
		'OpEx Dashboard',
		'Production & Tracking',
		'Quotation',
		'Sales & Purchase',
		'Inventory'
	];

	type TabContent = {
		title: string;
		description: string;
		features: string[];
		ctaText: string;
		ctaLink: string;
	};

	const tabContent: Record<string, TabContent> = {
		'AI Optimizer': {
			title: 'AI-Powered Optimization Engine',
			description: 'Maximize yield, eliminate waiting times, and slash raw material costs with a background AI that works faster than your machines.',
			features: [
				'Always-On Background Optimization',
				'Instant Production Triggers',
				'Zero CNC Bottlenecks',
				'Intelligent Auto-Separation of Quote Data',
				'Smart Cost-Based Material Routing'
			],
			ctaText: 'Explore AI Optimizer Module →',
			ctaLink: '/modules'
		},
		'Financial & Accounting': {
			title: 'Financial & Accounting Module',
			description: 'Gain total control over your factory’s finances with an automated, GST-compliant accounting engine built specifically for the speed of the glass industry.',
			features: [
				'True Double-Entry Foundation',
				'Zero-Touch Ledger Automation',
				'Frictionless GST Compliance',
				'Seamless Tally Prime Export',
				'Live P&L and Balance Sheets'
			],
			ctaText: 'Explore Accounts Module →',
			ctaLink: '/modules'
		},
		'HR & Payroll': {
			title: 'HR & Payroll Management Module',
			description: 'Empower your workforce and automate your payroll with a system designed specifically for the dynamic shifts and complex labor requirements of a manufacturing floor.',
			features: [
				'Paperless Employee Onboarding',
				'Centralized Digital Profiles',
				'Seamless Biometric Integration',
				'Real-Time Factory Attendance',
				'Smart Shift & Overtime Tracking'
			],
			ctaText: 'Explore HR Module →',
			ctaLink: '/modules'
		},
		'OpEx Dashboard': {
			title: 'Operational Expenditure (OpEx) Dashboard',
			description: 'Stop waiting for month-end accountant reports to find out where your money went. Track, control, and optimize your factory’s daily running costs in real-time to fiercely protect your profit margins.',
			features: [
				'Real-Time Expense Master View',
				'True Cost-Per-Square-Meter (SqM) Analytics',
				'Integrated Labor & Overtime Costing',
				'Energy & Power Consumption Tracking',
				'Financial Impact of Breakage (Wastage Value)'
			],
			ctaText: 'Explore OpEx Module →',
			ctaLink: '/modules'
		},
		'Production & Tracking': {
			title: 'Production & Tracking Module',
			description: 'Transform your factory floor into a smart, transparent, and highly efficient assembly line with real-time visibility.',
			features: [
				'Automated Job Card Generation',
				'Granular Piece-by-Piece Barcode Tracking',
				'Fully Customizable Factory Routing',
				'Multi-Department Workflow Scanning',
				'Integrated Quality Inspection Gates'
			],
			ctaText: 'Explore Production Module →',
			ctaLink: '/modules'
		},
		'Quotation': {
			title: 'Smart Quotation Module: Built for the Complexities of Glass',
			description: 'Stop losing money on miscalculated edge polishing, wrong chargeable areas, and forgotten transport fees. Create 100% accurate project quotes in seconds.',
			features: [
				'Total Dimensional & Pricing Freedom',
				'Error-Free Area & Polish Calculations',
				'Built-In Logistics & Jumbo Detection',
				'Unified Project Quoting (Beyond Just Glass)',
				'Smart Tax & 1-Click Invoicing'
			],
			ctaText: 'Explore Quotation Module →',
			ctaLink: '/modules/quotation'
		},
		'Sales & Purchase': {
			title: 'Sales & Purchase Management Module',
			description: 'Gain absolute control over your cash flow. Seamlessly manage client orders, track supplier purchases, and monitor your bottom line from a single, unified command center.',
			features: [
				'The Unified Cash Flow Dashboard',
				'Seamless Quote-to-Order Conversion',
				'Automated Purchase Order (PO) Generation',
				'Comprehensive Client Credit Tracking',
				'Intelligent Vendor Management'
			],
			ctaText: 'Explore Sales & Purchase Module →',
			ctaLink: '/modules'
		},
		'Inventory': {
			title: 'Smart Inventory Module: Total Control Over Every Sheet, Fitting, and Profile',
			description: 'Stop losing track of expensive jumbo sheets, misplacing hardware, and halting production due to unexpected stock-outs. Supply chain real-time visibility.',
			features: [
				'Universal Dimensional Tracking for Glass',
				'Granular Glass Attribute Filters',
				'Unified Multi-Material Management',
				'Seamless Multi-Warehouse Transfers',
				'Smart Low-Stock Alerts & Automation'
			],
			ctaText: 'Explore Inventory Module →',
			ctaLink: '/modules'
		}
	};

	let currentContent = $derived(tabContent[activeTab]);
</script>

<section class="bg-slate-50 pt-10 pb-14 sm:pt-10 sm:pb-16 lg:pt-10 lg:pb-20">
	<div class="mx-auto max-w-7xl px-6">

		<!-- Heading -->
		<h2 class="mt-6 text-center text-4xl font-bold tracking-tight text-slate-800">
			Explore Every Module
		</h2>

		<p class="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-500">
			Deeply integrated modules that work together seamlessly—from quotation to dispatch and beyond.
		</p>

		<!-- Tabs Outer Scroller -->
		<div class="mt-10 w-full overflow-x-auto pb-4 scrollbar-hidden">
			<div class="flex flex-nowrap md:justify-center gap-3 min-w-max px-4">
				{#each tabs as tab (tab)}
					<button
						onclick={() => (activeTab = tab)}
						class={`rounded-full border px-5 py-2 text-sm font-medium transition-all cursor-pointer shrink-0 ${
							activeTab === tab
								? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/20'
								: 'border-slate-300 bg-white text-slate-500 hover:border-blue-300 hover:text-slate-700'
						}`}
					>
						{tab}
					</button>
				{/each}
			</div>
		</div>

		<!-- Content Section -->
		<div class="mt-14 grid items-stretch gap-14 lg:grid-cols-2">
			<!-- Left: Mockup UI -->
			<div class="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
				{#key activeTab}
					<div class="w-full animate-fadeIn">
						<ModuleMockup {activeTab} />
					</div>
				{/key}
			</div>

			<!-- Right Content (dynamic) -->
			<div>
				{#key activeTab}
					<div class="animate-fadeIn">
						<h3 class="text-4xl font-bold leading-tight text-slate-800">
							{currentContent.title}
						</h3>

						<p class="mt-5 leading-8 text-slate-500">
							{currentContent.description}
						</p>

						<div class="mt-8 space-y-4">
							{#each currentContent.features as feature (feature)}
								<div class="flex items-center gap-3">
									<div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-green-200 bg-green-50">
										<CheckCircle2 class="h-3.5 w-3.5 text-green-600" strokeWidth={2.2} />
									</div>
									<span class="text-slate-600">{feature}</span>
								</div>
							{/each}
						</div>

						<a
							href={resolve(currentContent.ctaLink as Parameters<typeof resolve>[0])}
							class="mt-10 inline-block rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-700"
						>
							{currentContent.ctaText}
						</a>
					</div>
				{/key}
			</div>
		</div>
	</div>
</section>

<style>
	.animate-fadeIn {
		animation: fadeIn 0.35s ease-out forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.scrollbar-hidden::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hidden {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>