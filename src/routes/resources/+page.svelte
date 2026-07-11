<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import FAQSection from '$lib/components/sections/FAQSection.svelte';
	import CTASection from '$lib/components/features/CTASection.svelte';
	import DemoModal from '$lib/components/features/DemoModal.svelte';
	import ContactModal from '$lib/components/features/ContactModal.svelte';

	import { BookOpen, PlayCircle, FileText, Code2, Sparkles, HelpCircle, ArrowUpRight } from 'lucide-svelte';

	let isDemoModalOpen = $state(false);
	let isContactModalOpen = $state(false);

	const resources = [
		{
			title: 'Product Documentation',
			description: 'Deep dive into user profiles, custom glass pricing equations, inventory alerts configuration and basic settings.',
			icon: BookOpen,
			badge: 'Docs',
			badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
			linkText: 'Browse User Manuals'
		},
		{
			title: 'Video Tutorials Library',
			description: 'Step-by-step videos on setting up job cards, creating nesting optimization layouts, and exporting ledgers to Tally.',
			icon: PlayCircle,
			badge: 'Videos',
			badgeColor: 'bg-red-50 text-red-700 border-red-100',
			linkText: 'Watch Video Guides'
		},
		{
			title: 'Glass Industry Guides',
			description: 'Industry articles on reducing cutting scraps, machinery upkeep checklists, and managing glass dispatch safety protocols.',
			icon: FileText,
			badge: 'Best Practices',
			badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
			linkText: 'Read Whitepapers'
		}
	];
</script>

<Header />

<main class="min-h-screen bg-slate-50/40 selection:bg-blue-500 selection:text-white relative overflow-hidden">
	<!-- Decorative background -->
	<div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
		<div class="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-300/10 to-indigo-300/10 blur-3xl opacity-50"></div>
		<div class="absolute bottom-1/3 left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-cyan-300/15 to-blue-200/10 blur-3xl opacity-40"></div>
	</div>

	<!-- Resources Header -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 text-center">
		<div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/50 text-indigo-600 shadow-sm mb-6">
			<Sparkles class="h-3.5 w-3.5" />
			<span class="text-xs font-bold tracking-wide">Resource Hub</span>
		</div>
		
		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-5 max-w-4xl mx-auto">
			Knowledge & Support Center
		</h1>
		<p class="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
			Everything you need to successfully configure, run, and scale operations using your Bomax ERP platform.
		</p>
	</div>

	<!-- Main Directory Sections -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 mb-8">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each resources as item}
				{@const Icon = item.icon}
				<div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
					<div>
						<div class="flex items-center justify-between mb-6">
							<!-- Icon Container -->
							<div class="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
								<Icon class="h-6 w-6" />
							</div>
							<span class="px-2.5 py-1 text-xs font-bold rounded-lg border {item.badgeColor}">
								{item.badge}
							</span>
						</div>

						<h3 class="text-xl font-bold font-heading text-slate-950 mb-3">{item.title}</h3>
						<p class="text-sm text-slate-500 leading-relaxed mb-6">{item.description}</p>
					</div>

					<a href="#link" class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
						<span>{item.linkText}</span>
						<ArrowUpRight class="h-4 w-4" />
					</a>
				</div>
			{/each}
		</div>
	</div>

	<!-- FAQs -->
	<FAQSection />

	<!-- CTA -->
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
