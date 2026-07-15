<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import {
		Shield, Lock, Globe, Calendar, MapPin, FileText, Landmark,
		CheckCircle2, Mail, Clock, Ban, Monitor,
		AlertTriangle, Scale, Server, RefreshCw, UserPlus, Sliders, Tag, Bell,
		Users, BookOpen, Database, Hash, Wifi, Archive, ChevronRight,
		AlertCircle
	} from 'lucide-svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let activeSection = $state('service');
	let activeTab = $state('service');

	const sectionsList = [
		{ id: 'service', num: 1, label: '1 \u00A0 Description of Service', shortLabel: 'Service' },
		{ id: 'accounts', num: 2, label: '2 \u00A0 User Accounts', shortLabel: 'Accounts' },
		{ id: 'modifications', num: 3, label: '3 \u00A0 Modifications & Pricing', shortLabel: 'Modifications' },
		{ id: 'data-privacy', num: 4, label: '4 \u00A0 Data Ownership & Privacy', shortLabel: 'Data & Privacy' },
		{ id: 'acceptable-use', num: 5, label: '5 \u00A0 Acceptable Use', shortLabel: 'Acceptable Use' },
		{ id: 'availability', num: 6, label: '6 \u00A0 Service & Backups', shortLabel: 'Availability' },
		{ id: 'liability', num: 7, label: '7 \u00A0 Limitation of Liability', shortLabel: 'Liability' },
		{ id: 'governing-law', num: 8, label: '8 \u00A0 Governing Law', shortLabel: 'Governing Law' }
	];

	const summaryTags = ['Service', 'Accounts', 'Pricing', 'Data', 'Usage', 'Backups', 'Liability', 'Law'];

	const prohibitedActivities = [
		'Upload or process illegal, fraudulent, or malicious data.',
		'Attempt to hack, reverse-engineer, decompile, or disrupt the integrity of the Service, its servers, or its security protocols.',
		'Use the system to transmit malware, viruses, or harmful code.',
		'Exceed reasonable usage limits or launch denial-of-service attacks that could impact the performance of the system for other users.'
	];

	const activeIndex = $derived(sectionsList.findIndex(s => s.id === activeSection));
	const progressPercent = $derived(((activeIndex + 1) / sectionsList.length) * 100);

	function scrollToSection(id: string) {
		activeSection = id;
		activeTab = id;
		const element = document.getElementById(id);
		if (element) {
			const offset = 160;
			const elementRect = element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementRect - offset,
				behavior: 'smooth'
			});
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
						activeTab = entry.target.id;
					}
				});
			},
			{ rootMargin: '-20% 0px -55% 0px' }
		);

		sectionsList.forEach((sec) => {
			const el = document.getElementById(sec.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Terms of Service - Firstcut24</title>
	<meta name="description" content="Read the Terms of Service for Firstcut24's firstcut24.com platform." />
</svelte:head>

<Header />

<main class="min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white font-sans">
	<!-- Hero Banner (STAYS BLUE & DARK) -->
	<section class="hero-banner relative overflow-hidden py-16 md:py-24 px-4 md:px-8 border-b border-[#1e293b]">
		<div class="absolute inset-0 bg-[#061026]/90 z-0 bg-grid"></div>
		<div class="absolute top-1/4 left-10 md:left-20 w-72 h-72 rounded-full bg-[#06b6d4]/10 blur-[90px] pointer-events-none"></div>
		<div class="absolute bottom-1/4 right-10 md:right-28 w-80 h-80 rounded-full bg-[#3b82f6]/15 blur-[110px] pointer-events-none"></div>

		<div class="absolute left-6 lg:left-16 top-1/2 -translate-y-1/2 text-white/[0.015] pointer-events-none select-none hidden md:block">
			<svg class="h-64 w-64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.0">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
			</svg>
		</div>

		<div class="relative z-10 max-w-7xl mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
				<div class="text-left lg:col-span-7">
					<div class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 bg-white/[0.04] backdrop-blur-md rounded-full text-xs font-semibold text-slate-300 tracking-wide mb-6">
						<Shield class="h-3.5 w-3.5 text-blue-400" />
						Legal & Compliance Document
					</div>
					<p class="text-[11px] md:text-sm text-slate-400 font-bold uppercase tracking-[0.25em] mb-4">Firstcut24 · Firstcut24.COM</p>
					<h1 class="text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-tight leading-[1.05] mb-6">
						Terms of<br />
						<span class="bg-gradient-to-r from-[#6366f1] via-[#a78bfa] to-[#38bdf8] bg-clip-text text-transparent">Service</span>
					</h1>
					<p class="text-slate-400 text-sm md:text-base max-w-lg mt-5 leading-relaxed font-semibold">
						These Terms govern your access to and use of the firstcut24.com ERP
						platform provided by Firstcut24. By registering or using the Service, you
						agree to be fully bound by these Terms.
					</p>

					<div class="flex flex-wrap items-center gap-2.5 mt-8">
						<div class="flex items-center gap-1.5 px-3.5 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-[11px] font-semibold text-slate-300 shadow-sm">
							<Landmark class="h-3.5 w-3.5 text-slate-400" />
							<span class="text-slate-400">Company:</span> <span class="font-bold text-white">Firstcut24</span>
						</div>
						<div class="flex items-center gap-1.5 px-3.5 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-[11px] font-semibold text-slate-300 shadow-sm">
							<Globe class="h-3.5 w-3.5 text-slate-400" />
							<span class="text-slate-400">Platform:</span> <span class="font-bold text-white">firstcut24.com</span>
						</div>
						<div class="flex items-center gap-1.5 px-3.5 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-[11px] font-semibold text-slate-300 shadow-sm">
							<Calendar class="h-3.5 w-3.5 text-slate-400" />
							<span class="text-slate-400">Effective:</span> <span class="font-bold text-white">June 2025</span>
						</div>
						<div class="flex items-center gap-1.5 px-3.5 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-[11px] font-bold text-slate-200">
							<MapPin class="h-3.5 w-3.5 text-slate-400" />
							<span class="font-bold text-white">New Delhi, India</span>
						</div>
					</div>
				</div>

				<div class="lg:col-span-5 flex justify-center lg:justify-end pr-4">
					<div
						class="w-full max-w-[380px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
					>
						<div class="bg-gradient-to-r from-blue-900/60 to-violet-900/60 backdrop-blur-md px-6 py-5 border-b border-white/[0.06] flex items-center gap-3.5">
							<div class="bg-white/10 text-white p-2.5 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
								<FileText class="h-5 w-5" />
							</div>
							<div>
								<h3 class="text-white font-bold text-sm tracking-wide">Terms of Service</h3>
								<p class="text-slate-400 text-[10px] font-medium mt-0.5">firstcut24.com · Firstcut24 Platform</p>
							</div>
						</div>

						<div class="px-6 py-5 space-y-3.5">
							<div class="flex items-center justify-between py-2 border-b border-white/[0.04]">
								<div class="flex items-center gap-2">
									<Hash class="h-3.5 w-3.5 text-blue-400 shrink-0" />
									<span class="text-slate-400 text-[11px] font-semibold">Document Version</span>
								</div>
								<span class="text-white text-[11px] font-bold">v1.4 — Jun 2025</span>
							</div>
							<div class="flex items-center justify-between py-2 border-b border-white/[0.04]">
								<div class="flex items-center gap-2">
									<BookOpen class="h-3.5 w-3.5 text-blue-450 shrink-0" />
									<span class="text-slate-400 text-[11px] font-semibold">Total Sections</span>
								</div>
								<span class="text-white text-[11px] font-bold">8 Sections</span>
							</div>
							<div class="flex items-center justify-between py-2 border-b border-white/[0.04]">
								<div class="flex items-center gap-2">
									<Clock class="h-3.5 w-3.5 text-blue-455 shrink-0" />
									<span class="text-slate-400 text-[11px] font-semibold">Price Notice Period</span>
								</div>
								<span class="text-white text-[11px] font-bold text-right font-sans">30 Days Written</span>
							</div>
							<div class="flex items-center justify-between py-2 border-b border-white/[0.04]">
								<div class="flex items-center gap-2">
									<MapPin class="h-3.5 w-3.5 text-blue-455 shrink-0" />
									<span class="text-slate-400 text-[11px] font-semibold">Jurisdiction</span>
								</div>
								<span class="text-white text-[11px] font-bold text-right font-sans">New Delhi, India</span>
							</div>
							<div class="flex items-center justify-between py-2 border-b border-white/[0.04]">
								<div class="flex items-center gap-2">
									<Lock class="h-3.5 w-3.5 text-blue-455 shrink-0" />
									<span class="text-slate-400 text-[11px] font-semibold">Data Encryption</span>
								</div>
								<span class="text-white text-[11px] font-bold">256-bit SSL/TLS</span>
							</div>
							<div class="flex items-center justify-between py-2 border-b border-white/[0.04]">
								<div class="flex items-center gap-2">
									<Landmark class="h-3.5 w-3.5 text-blue-455 shrink-0" />
									<span class="text-slate-400 text-[11px] font-semibold">Governing Law</span>
								</div>
								<span class="text-white text-[11px] font-bold">Laws of India</span>
							</div>
						</div>

						<div class="px-6 pb-2.5">
							<div class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
								<div class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
								<span class="text-emerald-400 text-[10px] font-bold">Active & Enforceable</span>
							</div>
						</div>

						<div class="px-6 pb-6">
							<div class="grid grid-cols-4 gap-1.5">
								{#each summaryTags as tag (tag)}
									<div class="bg-white/[0.04] border border-white/[0.06] rounded-lg py-1.5 text-center text-[9px] text-slate-300 font-bold hover:bg-white/[0.08] transition-colors cursor-default">{tag}</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Horizontal Tab Navigation (WHITE BACKGROUND) -->
	<section class="border-b border-slate-200 bg-white sticky top-20 z-30 shadow-sm">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<nav class="flex items-center gap-0 overflow-x-auto scrollbar-hide -mb-px" id="terms-tabs">
				{#each sectionsList as sec (sec.id)}
					<button
						class="flex items-center gap-1.5 px-4 py-4 text-xs font-bold whitespace-nowrap border-b-2 transition-all duration-200 shrink-0 {activeTab === sec.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-200'}"
						onclick={() => scrollToSection(sec.id)}
					>
						<span class="inline-flex items-center justify-center h-4.5 w-4.5 rounded text-[9px] font-extrabold {activeTab === sec.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}">{sec.num}</span>
						{sec.shortLabel}
					</button>
				{/each}
			</nav>
		</div>
	</section>

	<!-- Welcome block (WHITE BACKGROUND) -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-200">
			<div class="lg:col-span-8">
				<div class="relative">
					<div class="h-1 w-12 bg-gradient-to-r from-blue-650 to-cyan-500 rounded-full mb-4"></div>
					<h2 class="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
						Welcome to firstcut24.com, operated by Firstcut24
					</h2>
				</div>
				<p class="text-slate-600 font-semibold text-sm md:text-[14.5px] mt-4 leading-relaxed max-w-3xl">
					These Terms of Service ("Terms") govern your access to and use of the enterprise resource planning (ERP) software,
					websites, and related services (collectively, the "Service") provided by Firstcut24 ("we," "our," or "us"). By registering for an
					account or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use
					the Service.
				</p>
			</div>
		</div>
	</section>

	<!-- Main content area (WHITE BACKGROUND) -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 bg-white">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
			<!-- Sidebar Table of Contents (WHITE BACKGROUND CARD) -->
			<div class="lg:col-span-4 sticky top-40 space-y-4 hidden lg:block">
				<div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg shadow-slate-100">
					<div class="bg-gradient-to-r from-blue-700 to-indigo-800 p-5 border-b border-slate-100">
						<h4 class="text-[9px] font-bold uppercase tracking-widest text-white/80">TABLE OF CONTENTS</h4>
						<h3 class="text-sm font-bold mt-1 text-white">8 sections covering all terms</h3>
						<div class="h-1 bg-white/20 rounded-full mt-4 overflow-hidden">
							<div
								class="h-full bg-cyan-400 transition-all duration-300 rounded-full shadow-glow"
								style="width: {progressPercent}%"
							></div>
						</div>
					</div>

					<nav class="p-3 space-y-0.5">
						{#each sectionsList as sec (sec.id)}
							<button
								class="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-205 flex items-center justify-between {activeSection === sec.id ? 'bg-blue-50/70 text-blue-600 font-extrabold border-l-2 border-l-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-850'}"
								onclick={() => scrollToSection(sec.id)}
							>
								<span>{sec.label}</span>
								<ChevronRight class="h-3.5 w-3.5 opacity-60" />
							</button>
						{/each}
					</nav>

					<div class="bg-slate-50/60 border border-slate-200/80 rounded-xl p-4 m-4 text-center">
						<p class="text-[11px] text-slate-550 font-semibold leading-relaxed">
							Questions about these Terms? Our legal team is here to help.
						</p>
						<button
							type="button"
							class="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/10 cursor-pointer"
						>
							<Mail class="h-3.5 w-3.5" />
							Contact Us
						</button>
					</div>
				</div>
			</div>

			<!-- Detailed Sections -->
			<div class="lg:col-span-8 space-y-12">

				<!-- Section 1 -->
				<div id="service" class="scroll-mt-40 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm">
					<div class="relative overflow-hidden bg-gradient-to-r from-[#4f46e5] to-[#6366f1] px-6 py-5 flex items-center justify-between text-white border-b border-white/10">
						<!-- Background Circles -->
						<div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
						<div class="absolute right-10 -bottom-16 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div>

						<div class="relative z-10 flex items-center gap-4">
							<div class="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/15 border border-white/20 shadow-inner font-extrabold text-[16px] text-white">
								1
							</div>
							<div class="text-left font-sans">
								<span class="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/70 leading-none mb-1.5">SECTION 01</span>
								<h3 class="text-base md:text-lg font-bold text-white leading-tight">Description of Service</h3>
							</div>
						</div>
						<div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 shadow-sm shrink-0">
							<Monitor class="h-6 w-6 text-white" />
						</div>
					</div>
					<div class="p-6 space-y-5">
						<p class="text-slate-600 text-xs font-semibold leading-relaxed">
							firstcut24.com is a cloud-based ERP platform designed and operated by Firstcut24 to help glass and enterprise businesses manage workflows.
						</p>
						<div class="bg-slate-50 border border-slate-205 p-5 rounded-2xl flex items-start gap-4">
							<div class="bg-blue-50 text-blue-600 border border-blue-100 p-2 rounded-xl shrink-0"><Globe class="h-5 w-5" /></div>
							<p class="text-slate-600 font-medium text-[11px] md:text-xs leading-relaxed">
								<span class="font-extrabold text-slate-800">firstcut24.com</span> is a <span class="font-extrabold text-slate-800">cloud-based ERP platform</span> designed to help businesses manage operations, financial ledgers, inventory, and other administrative tasks. We provide the software infrastructure, but we are not responsible for the accuracy, legality, or operational outcome of the data you enter into the system.
							</p>
						</div>
					</div>
				</div>

				<!-- Section 2 -->
				<div id="accounts" class="scroll-mt-40 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm">
					<div class="relative overflow-hidden bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] px-6 py-5 flex items-center justify-between text-white border-b border-white/10">
						<!-- Background Circles -->
						<div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
						<div class="absolute right-10 -bottom-16 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div>

						<div class="relative z-10 flex items-center gap-4">
							<div class="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/15 border border-white/20 shadow-inner font-extrabold text-[16px] text-white">
								2
							</div>
							<div class="text-left font-sans">
								<span class="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/70 leading-none mb-1.5">SECTION 02</span>
								<h3 class="text-base md:text-lg font-bold text-white leading-tight">User Accounts and Responsibilities</h3>
							</div>
						</div>
						<div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 shadow-sm shrink-0">
							<Users class="h-6 w-6 text-white" />
						</div>
					</div>
					<div class="p-6 divide-y divide-slate-100">
						<!-- Sub-row 1 -->
						<div class="py-4 first:pt-0 flex gap-4 items-start">
							<div class="bg-blue-50/80 text-blue-600 p-2 rounded-xl border border-blue-100 shrink-0"><UserPlus class="h-4.5 w-4.5" /></div>
							<div>
								<h4 class="text-xs font-bold text-slate-800">Account Creation</h4>
								<p class="text-[11px] text-slate-550 leading-relaxed font-semibold mt-1">
									You must provide accurate and complete information when registering an account, including business registration details (such as GST ID) if applicable.
								</p>
							</div>
						</div>
						<!-- Sub-row 2 -->
						<div class="py-4 flex gap-4 items-start">
							<div class="bg-blue-550/10 text-blue-600 p-2 rounded-xl border border-blue-100 shrink-0"><Lock class="h-4.5 w-4.5" /></div>
							<div>
								<h4 class="text-xs font-bold text-slate-800">Security</h4>
								<p class="text-[11px] text-slate-550 leading-relaxed font-semibold mt-1">
									You are entirely responsible for maintaining the confidentiality of your credentials and for all activities under your account. Notify Firstcut24 instantly of unauthorized breaches.
								</p>
							</div>
						</div>
						<!-- Sub-row 3 -->
						<div class="py-4 last:pb-0 flex gap-4 items-start">
							<div class="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100 shrink-0"><Shield class="h-4.5 w-4.5" /></div>
							<div>
								<h4 class="text-xs font-bold text-slate-800">Access Control</h4>
								<p class="text-[11px] text-slate-550 leading-relaxed font-semibold mt-1">
									The Service includes Role-Based Access Control (RBAC). You, as the owner, are solely responsible for assigning correct permissions. Firstcut24 is not liable for data exposure due to team misconfiguration.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Section 3 -->
				<div id="modifications" class="scroll-mt-40 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm">
					<div class="relative overflow-hidden bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] px-6 py-5 flex items-center justify-between text-white border-b border-white/10">
						<!-- Background Circles -->
						<div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
						<div class="absolute right-10 -bottom-16 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div>

						<div class="relative z-10 flex items-center gap-4">
							<div class="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/15 border border-white/20 shadow-inner font-extrabold text-[16px] text-white">
								3
							</div>
							<div class="text-left font-sans">
								<span class="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/70 leading-none mb-1.5">SECTION 03</span>
								<h3 class="text-base md:text-lg font-bold text-white leading-tight">Modifications to the Service, Features, and Pricing</h3>
							</div>
						</div>
						<div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 shadow-sm shrink-0">
							<RefreshCw class="h-6 w-6 text-white" />
						</div>
					</div>
					<div class="p-6 space-y-4">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div class="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
								<div class="bg-violet-50 text-violet-650 p-2 rounded-lg w-fit"><Sliders class="h-4 w-4" /></div>
								<h4 class="text-xs font-bold text-slate-850 mt-3.5">System Upgrades and Features</h4>
								<p class="text-[11px] text-slate-550 font-semibold leading-relaxed mt-1.5">
									Firstcut24 reserves the right to modify, upgrade, update, or discontinue features of the firstcut24.com ERP system at any time without prior notice. We deploy updates regularly to improve security.
								</p>
							</div>
							<div class="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
								<div class="bg-blue-50 text-blue-650 p-2 rounded-lg w-fit"><Tag class="h-4 w-4" /></div>
								<h4 class="text-xs font-bold text-slate-850 mt-3.5">Changes to Plans & Pricing</h4>
								<p class="text-[11px] text-slate-550 font-semibold leading-relaxed mt-1.5">
									Firstcut24 reserves the right to adjust, upgrade, downgrade, or modify our subscription plans, pricing structures, and promotional offerings at our sole discretion.
								</p>
							</div>
						</div>

						<div class="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3">
							<div class="bg-amber-100 text-amber-700 border border-amber-100 p-1.5 rounded-lg shrink-0 mt-0.5"><Bell class="h-4 w-4" /></div>
							<div>
								<h4 class="text-xs font-bold text-amber-900">Notice of Price Changes</h4>
								<p class="text-[11px] text-amber-800 font-semibold leading-relaxed mt-0.5">
									If a pricing change directly impacts your active subscription, we will provide a minimum of <span class="font-extrabold">30 days' written notice</span> before the new rates take effect on your next billing cycle.
								</p>
							</div>
						</div>

						<div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-start gap-3">
							<div class="bg-emerald-100 text-emerald-700 border border-emerald-100 p-1.5 rounded-lg shrink-0 mt-0.5"><CheckCircle2 class="h-4 w-4" /></div>
							<div>
								<h4 class="text-xs font-bold text-emerald-950">Acceptance of Changes</h4>
								<p class="text-[11px] text-emerald-850 font-semibold leading-relaxed mt-0.5">
									Your continued use of firstcut24.com after system upgrades, feature modifications, or pricing changes constitute your <span class="font-bold">formal agreement and acceptance</span> of those changes.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Section 4 -->
				<div id="data-privacy" class="scroll-mt-40 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm">
					<div class="relative overflow-hidden bg-gradient-to-r from-[#047857] to-[#10b981] px-6 py-5 flex items-center justify-between text-white border-b border-white/10">
						<!-- Background Circles -->
						<div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
						<div class="absolute right-10 -bottom-16 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div>

						<div class="relative z-10 flex items-center gap-4">
							<div class="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/15 border border-white/20 shadow-inner font-extrabold text-[16px] text-white">
								4
							</div>
							<div class="text-left font-sans">
								<span class="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/70 leading-none mb-1.5">SECTION 04</span>
								<h3 class="text-base md:text-lg font-bold text-white leading-tight">Data Ownership and Privacy</h3>
							</div>
						</div>
						<div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 shadow-sm shrink-0">
							<Database class="h-6 w-6 text-white" />
						</div>
					</div>
					<div class="p-6 space-y-4">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div class="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
								<div class="bg-emerald-50 text-emerald-650 p-2 rounded-lg w-fit"><FileText class="h-4 w-4" /></div>
								<h4 class="text-xs font-bold text-slate-850 mt-3.5">Your Data</h4>
								<p class="text-[11px] text-slate-550 font-semibold leading-relaxed mt-1.5">
									You retain full ownership of all data, customer orders, design sketches, and financial documents you input into the Service. Firstcut24 claims no ownership rights.
								</p>
							</div>
							<div class="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
								<div class="bg-blue-50 text-blue-650 p-2 rounded-lg w-fit"><Shield class="h-4 w-4" /></div>
								<h4 class="text-xs font-bold text-slate-850 mt-3.5">Data Security</h4>
								<p class="text-[11px] text-slate-550 font-semibold leading-relaxed mt-1.5">
									We apply stringent industry protocols, including 256-bit encryption and secure network infrastructure as detailed in our Privacy Policy.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Section 5 -->
				<div id="acceptable-use" class="scroll-mt-40 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm">
					<div class="relative overflow-hidden bg-gradient-to-r from-[#b91c1c] to-[#ef4444] px-6 py-5 flex items-center justify-between text-white border-b border-white/10">
						<!-- Background Circles -->
						<div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
						<div class="absolute right-10 -bottom-16 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div>

						<div class="relative z-10 flex items-center gap-4">
							<div class="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/15 border border-white/20 shadow-inner font-extrabold text-[16px] text-white">
								5
							</div>
							<div class="text-left font-sans">
								<span class="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/70 leading-none mb-1.5">SECTION 05</span>
								<h3 class="text-base md:text-lg font-bold text-white leading-tight">Acceptable Use and Prohibited Activities</h3>
							</div>
						</div>
						<div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 shadow-sm shrink-0">
							<Ban class="h-6 w-6 text-white" />
						</div>
					</div>
					<div class="p-6 space-y-4">
						<p class="text-slate-600 text-xs font-bold">You agree not to use firstcut24.com to:</p>

						<div class="space-y-2">
							{#each prohibitedActivities as illegal (illegal)}
								<div class="bg-rose-50/40 border border-rose-150 p-3.5 rounded-xl flex items-center gap-3 text-rose-950 font-semibold text-[11px] md:text-xs">
									<Ban class="h-4 w-4 text-rose-600 shrink-0" />
									{illegal}
								</div>
							{/each}
						</div>

						<div class="bg-rose-50 border border-rose-200 p-4 rounded-xl flex items-start gap-3 mt-4">
							<div class="bg-rose-100 text-rose-700 p-1.5 rounded-lg shrink-0 mt-0.5"><AlertTriangle class="h-4.5 w-4.5" /></div>
							<p class="text-[11px] text-rose-950 font-bold leading-relaxed">
								We reserve the right to <span class="text-rose-700 font-extrabold">immediately suspend or terminate your account without notice</span> if we suspect you have violated these acceptable use policies.
							</p>
						</div>
					</div>
				</div>

				<!-- Section 6 -->
				<div id="availability" class="scroll-mt-40 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm">
					<div class="relative overflow-hidden bg-gradient-to-r from-[#0e7490] to-[#06b6d4] px-6 py-5 flex items-center justify-between text-white border-b border-white/10">
						<!-- Background Circles -->
						<div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
						<div class="absolute right-10 -bottom-16 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div>

						<div class="relative z-10 flex items-center gap-4">
							<div class="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/15 border border-white/20 shadow-inner font-extrabold text-[16px] text-white">
								6
							</div>
							<div class="text-left font-sans">
								<span class="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/70 leading-none mb-1.5">SECTION 06</span>
								<h3 class="text-base md:text-lg font-bold text-white leading-tight">Service Availability and Backups</h3>
							</div>
						</div>
						<div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 shadow-sm shrink-0">
							<Server class="h-6 w-6 text-white" />
						</div>
					</div>
					<div class="p-6 space-y-4">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div class="bg-slate-50 border border-slate-205 p-5 rounded-2xl">
								<div class="bg-cyan-50 text-cyan-600 p-2 rounded-lg w-fit"><Wifi class="h-4 w-4" /></div>
								<h4 class="text-xs font-bold text-slate-850 mt-3.5">Uptime</h4>
								<p class="text-[11px] text-slate-550 font-semibold leading-relaxed mt-1.5">
									We strive to maintain maximum uptime and availability for firstcut24.com. However, the Service may occasionally be unavailable during scheduled maintenance or due to emergencies.
								</p>
							</div>
							<div class="bg-slate-50 border border-slate-205 p-5 rounded-2xl">
								<div class="bg-amber-50 text-amber-600 p-2 rounded-lg w-fit"><Archive class="h-4 w-4" /></div>
								<h4 class="text-xs font-bold text-slate-850 mt-3.5">Backups</h4>
								<p class="text-[11px] text-slate-550 font-semibold leading-relaxed mt-1.5">
									While Firstcut24 performs regular, automated off-site backups of the database, you are strongly encouraged to periodically export and back up your critical financial ledgers independently.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Section 7 (WHITE BACKGROUND DETAILED STYLE MATCHING SCREENSHOT) -->
				<div id="liability" class="scroll-mt-40 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm">
					<div class="relative overflow-hidden bg-gradient-to-r from-[#b45309] to-[#f59e0b] px-6 py-5 flex items-center justify-between text-white border-b border-white/10">
						<!-- Background Circles -->
						<div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
						<div class="absolute right-10 -bottom-16 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div>

						<div class="relative z-10 flex items-center gap-4">
							<div class="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/15 border border-white/20 shadow-inner font-extrabold text-[16px] text-white">
								7
							</div>
							<div class="text-left font-sans">
								<span class="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/70 leading-none mb-1.5">SECTION 07</span>
								<h3 class="text-base md:text-lg font-bold text-white leading-tight">Limitation of Liability</h3>
							</div>
						</div>
						<div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 shadow-sm shrink-0">
							<AlertCircle class="h-6 w-6 text-white" />
						</div>
					</div>
					<div class="p-6 space-y-4">
						<!-- Triaged Red Box matching screenshot, lightened for white background -->
						<div class="bg-rose-50/40 border border-rose-200 p-5 rounded-2xl flex items-start gap-4">
							<div class="bg-rose-50 text-rose-600 border border-rose-200/50 p-2.5 rounded-xl shrink-0"><AlertTriangle class="h-4.5 w-4.5" /></div>
							<p class="text-[11px] md:text-xs text-slate-700 font-semibold leading-relaxed">
								To the maximum extent permitted by applicable law, <span class="text-slate-900 font-extrabold">Firstcut24 and its developers, partners, and employees shall not be liable</span> for any indirect, incidental, special, consequential, or punitive damages. This includes, without limitation, loss of profits, data loss, business interruption, or financial penalties incurred by your business arising out of your use or inability to use the Service.
							</p>
						</div>

						<!-- Triaged Yellow Box matching screenshot, lightened for white background -->
						<div class="bg-amber-50/40 border border-amber-200 p-5 rounded-2xl flex items-start gap-4">
							<div class="bg-amber-50 text-amber-700 border border-amber-200/50 p-2.5 rounded-xl shrink-0"><AlertCircle class="h-4.5 w-4.5" /></div>
							<p class="text-[11px] md:text-xs text-slate-700 font-semibold leading-relaxed">
								The software is provided on an <span class="text-slate-900 font-extrabold">"AS IS"</span> and <span class="text-slate-900 font-extrabold">"AS AVAILABLE"</span> basis without any warranties of any kind, either express or implied, including warranties of merchantability or fitness for a particular purpose.
							</p>
						</div>
					</div>
				</div>

				<!-- Section 8 (WHITE BACKGROUND DETAILED STYLE MATCHING SCREENSHOT) -->
				<div id="governing-law" class="scroll-mt-40 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm">
					<div class="relative overflow-hidden bg-gradient-to-r from-[#374151] to-[#6b7280] px-6 py-5 flex items-center justify-between text-white border-b border-white/10">
						<!-- Background Circles -->
						<div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
						<div class="absolute right-10 -bottom-16 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div>

						<div class="relative z-10 flex items-center gap-4">
							<div class="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/15 border border-white/20 shadow-inner font-extrabold text-[16px] text-white">
								8
							</div>
							<div class="text-left font-sans">
								<span class="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/70 leading-none mb-1.5">SECTION 08</span>
								<h3 class="text-base md:text-lg font-bold text-white leading-tight">Governing Law and Jurisdiction</h3>
							</div>
						</div>
						<div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 shadow-sm shrink-0">
							<Landmark class="h-6 w-6 text-white" />
						</div>
					</div>
					<div class="p-6 space-y-4">
						<!-- Custom Blue Box matching screenshot, lightened for white background -->
						<div class="bg-indigo-50/40 border border-indigo-200 p-5 rounded-2xl flex items-start gap-4 animate-fade-in">
							<div class="bg-indigo-50 text-indigo-650 border border-indigo-200/50 p-2.5 rounded-xl shrink-0"><Scale class="h-4.5 w-4.5" /></div>
							<p class="text-[11px] md:text-xs text-slate-700 font-semibold leading-relaxed mt-0.5">
								These Terms shall be governed by and construed in accordance with the <span class="text-slate-900 font-extrabold">laws of India</span>. Any legal disputes, claims, or proceedings arising out of or relating to these Terms or the use of firstcut24.com shall be subject to the exclusive jurisdiction of the competent courts in <span class="text-slate-900 font-extrabold">New Delhi</span>.
							</p>
						</div>
					</div>
				</div>

				<!-- Call to Action Banner (MATCHING SCREENSHOT) -->
				<div class="relative overflow-hidden bg-gradient-to-r from-[#593cfb] via-[#6366f1] to-[#3b82f6] p-8 md:p-12 rounded-[2rem] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
					<!-- Glow circles -->
					<div class="absolute -left-16 -top-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none"></div>
					<div class="absolute -left-10 -bottom-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
					<div class="absolute right-12 -top-20 w-72 h-72 rounded-full bg-white/[0.07] pointer-events-none"></div>
					<div class="absolute -right-16 -bottom-16 w-60 h-60 rounded-full bg-white/5 pointer-events-none"></div>

					<div class="relative z-10 max-w-2xl text-left font-sans">
						<span class="block text-xs font-bold tracking-widest text-[#c7d2fe] uppercase mb-2">HAVE QUESTIONS ABOUT THESE TERMS?</span>
						<h3 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">Talk to Our Legal Team</h3>
						<p class="text-white/80 text-[14px] md:text-[15px] font-medium leading-relaxed max-w-xl">
							Our legal and compliance experts are available to clarify any clauses and help your team feel confident about using firstcut24.com.
						</p>
					</div>

					<div class="relative z-10 flex flex-wrap items-center gap-4 shrink-0 w-full lg:w-auto mt-4 lg:mt-0 justify-start lg:justify-end">
						<a
							href={resolve('/privacy')}
							class="text-center rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-4 text-xs font-bold text-white transition-all backdrop-blur-sm w-full sm:w-auto"
						>
							Read Privacy Policy
						</a>
					</div>
				</div>

			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	.hero-banner {
		background: radial-gradient(circle at center, #0B1936 0%, #050E24 60%, #020715 100%);
	}
	.bg-grid {
		background-size: 32px 32px;
		background-image:
			linear-gradient(to right, rgba(99, 102, 241, 0.04) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(99, 102, 241, 0.04) 1px, transparent 1px);
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.shadow-glow {
		box-shadow: 0 0 8px rgba(34, 211, 238, 0.7);
	}
</style>