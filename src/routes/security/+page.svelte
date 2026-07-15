<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Shield, Lock, Globe, Server, HardDrive, EyeOff,
		Database, Users, Key, Mail
	} from 'lucide-svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let activeSection = $state('encryption');

	const sectionsList = [
		{ id: 'encryption', label: '1 \u00A0 Unbreakable Encryption' },
		{ id: 'infrastructure', label: '2 \u00A0 Isolated Infrastructure' },
		{ id: 'access-control', label: '3 \u00A0 Access Control' },
		{ id: 'privacy-promise', label: '4 \u00A0 Our Privacy Promise' }
	];

	const activeIndex = $derived(sectionsList.findIndex(s => s.id === activeSection));
	const progressPercent = $derived(((activeIndex + 1) / sectionsList.length) * 100);

	function scrollToSection(id: string) {
		activeSection = id;
		const element = document.getElementById(id);
		if (element) {
			const offset = 100;
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
					}
				});
			},
			{ rootMargin: '-15% 0px -65% 0px' }
		);

		sectionsList.forEach((sec) => {
			const el = document.getElementById(sec.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Firstcut24</title>
	<meta name="description" content="Learn about Firstcut24's bank-grade security model. Explore our data encryption, isolated servers, and access controls." />
</svelte:head>

<Header />

<main class="min-h-screen bg-slate-50/40 text-slate-650 selection:bg-blue-500 selection:text-white font-sans">
	<!-- Hero Banner -->
	<section class="relative overflow-hidden text-center py-20 px-4 md:px-8 bg-[radial-gradient(circle_at_center,#0B1936_0%,#050E24_60%,#020715_100%)]">
		<!-- Background watermark glows -->
		<div class="absolute inset-0 bg-radial-[circle_at_center,_var(--color-blue-950)_0%,_#050e24_60%,_#020612_100%] z-0"></div>
		<div class="absolute top-1/4 left-10 md:left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
		<div class="absolute bottom-1/4 right-10 md:right-28 w-80 h-80 rounded-full bg-blue-500/10 blur-[90px] pointer-events-none"></div>

		<!-- Left Watermark: Shield -->
		<div class="absolute left-6 lg:left-16 top-1/2 -translate-y-1/2 text-white/[0.02] pointer-events-none select-none hidden md:block">
			<svg class="h-60 w-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
			</svg>
		</div>

		<!-- Right Watermark: Lock -->
		<div class="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 text-white/[0.02] pointer-events-none select-none hidden md:block">
			<svg class="h-60 w-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
			</svg>
		</div>

		<div class="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
			<div class="hidden lg:flex absolute left-8 top-12 items-center gap-1.5 px-3 py-1 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-lg text-[11px] font-semibold text-slate-450 tracking-wider">
				<Lock class="h-3.5 w-3.5 text-blue-400" />
				Bank-Grade Security
			</div>

			<div class="hidden lg:flex absolute right-8 bottom-12 items-center gap-1.5 px-3 py-1 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-lg text-[11px] font-semibold text-slate-450 tracking-wider">
				<Shield class="h-3.5 w-3.5 text-green-400" />
				Protected Ledgers
			</div>

			<!-- Top Pill -->
			<div class="inline-flex items-center gap-1.5 px-3 py-1 border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-full text-xs font-semibold text-slate-300 tracking-wide">
				<Shield class="h-3.5 w-3.5 text-blue-400" />
				Fiercely Protected
			</div>

			<!-- Main Title -->
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mt-6">
				Security <span class="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Policies</span>
			</h1>

			<!-- Subtitle -->
			<p class="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mt-4 px-4 leading-relaxed font-medium">
				At Firstcut24, we understand that an ERP is the central nervous system of your business.
				Your trust is our greatest responsibility.
			</p>

			<!-- Lower details pills -->
			<div class="flex flex-wrap justify-center items-center gap-3 lg:gap-4 mt-8 px-4 font-sans">
				<div class="flex items-center gap-1.5 px-4 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-xs font-medium text-slate-200">
					<span class="text-slate-400">Platform:</span> &nbsp;<span class="font-semibold text-white">firstcut24.com</span>
				</div>
				<div class="flex items-center gap-1.5 px-4 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-xs font-medium text-slate-200">
					<span class="text-slate-400">Encryption:</span> &nbsp;<span class="font-semibold text-white">256-Bit SSL/TLS</span>
				</div>
				<div class="flex items-center gap-1.5 px-4 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-xs font-medium text-slate-200">
					<span class="text-slate-400">Hosting:</span> &nbsp;<span class="font-semibold text-white">Isolated Server Environments</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Highlight Cards Section -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 font-sans">
		<div class="bg-white border border-slate-100/80 rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-xl shadow-slate-200/20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-slate-100">
			<!-- Col 1 -->
			<div class="flex items-start md:items-center gap-4 px-2 md:px-5 py-2">
				<div class="bg-blue-50 text-blue-600 border border-blue-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
					<Lock class="h-5 w-5" />
				</div>
				<div>
					<div class="text-xl md:text-2xl font-black text-slate-900 leading-tight">256-Bit</div>
					<div class="text-[11px] font-semibold text-slate-400 tracking-wide uppercase mt-0.5 whitespace-nowrap">SSL Data encryption</div>
				</div>
			</div>

			<!-- Col 2 -->
			<div class="flex items-start md:items-center gap-4 px-2 md:px-5 py-2">
				<div class="bg-emerald-50 text-emerald-600 border border-emerald-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
					<Server class="h-5 w-5" />
				</div>
				<div>
					<div class="text-xl md:text-2xl font-black text-slate-900 leading-tight">Isolated</div>
					<div class="text-[11px] font-semibold text-slate-400 tracking-wide uppercase mt-0.5 whitespace-nowrap">VPS Servers Infrastructure</div>
				</div>
			</div>

			<!-- Col 3 -->
			<div class="flex items-start md:items-center gap-4 px-2 md:px-5 py-2">
				<div class="bg-amber-50 text-amber-600 border border-amber-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
					<Users class="h-5 w-5" />
				</div>
				<div>
					<div class="text-xl md:text-2xl font-black text-slate-900 leading-tight">RBAC</div>
					<div class="text-[11px] font-semibold text-slate-400 tracking-wide uppercase mt-0.5 whitespace-nowrap">Role Access Controls</div>
				</div>
			</div>

			<!-- Col 4 -->
			<div class="flex items-start md:items-center gap-4 px-2 md:px-5 py-2">
				<div class="bg-violet-50 text-violet-600 border border-violet-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
					<Shield class="h-5 w-5" />
				</div>
				<div>
					<div class="text-xl md:text-2xl font-black text-slate-900 leading-tight">Zero-Sell</div>
					<div class="text-[11px] font-semibold text-slate-400 tracking-wide uppercase mt-0.5 whitespace-nowrap">Strict Privacy Promise</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Welcome & Overview section -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 font-sans">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			<!-- Welcome text -->
			<div class="lg:col-span-12">
				<div class="border-l-4 border-blue-600 pl-4 py-1">
					<h2 class="text-lg md:text-2xl font-extrabold text-slate-900 tracking-tight">
						Security Foundation of firstcut24.com
					</h2>
				</div>
				<p class="text-slate-500 font-medium text-sm md:text-base mt-4 leading-relaxed max-w-5xl">
					When you use firstcut24.com to manage your financial ledgers, inventory, and customer data, you are placing immense trust in us. We take that responsibility seriously. We have built firstcut24.com on a foundation of bank-grade security, ensuring that your business operations remain fast, private, and fiercely protected.
				</p>
			</div>
		</div>
	</section>

	<!-- Main Details Table of Contents & Content Sections -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			<!-- Sidebar catalogue -->
			<div class="lg:col-span-4 sticky top-24 space-y-4 font-sans">
				<div class="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
					<!-- Sidebar header -->
					<div class="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-6 shadow-inner relative overflow-hidden">
						<h4 class="text-[10px] font-bold uppercase tracking-widest text-slate-200">TABLE OF CONTENTS</h4>
						<h3 class="text-sm font-bold mt-1 text-white">4 Pillars of Security</h3>
						<!-- Progress bar under header -->
						<div class="h-1 bg-white/20 rounded-full mt-4 overflow-hidden">
							<div 
								class="h-full bg-cyan-400 transition-all duration-300 rounded-full" 
								style="width: {progressPercent}%"
							></div>
						</div>
					</div>

					<!-- Navigation list -->
					<nav class="p-4 space-y-1">
						{#each sectionsList as sec (sec.id)}
							<button 
								class="w-full text-left px-3.5 py-3 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-3 border-l-2 {activeSection === sec.id ? 'bg-blue-50/70 border-l-2 border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:bg-slate-50/50 hover:text-slate-900'}"
								onclick={() => scrollToSection(sec.id)}
							>
								{sec.label}
							</button>
						{/each}
					</nav>

					<!-- Have Questions panel -->
					<div class="bg-blue-50/50 border border-blue-100/50 rounded-2xl p-5 mx-4 mb-4 mt-6 text-center flex flex-col items-center">
						<p class="text-[11px] text-slate-500 font-semibold leading-relaxed">
							Want to learn more about our security model?
						</p>
						<button
  type="button"
  class="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/10 cursor-pointer"
>
  <Mail class="h-3.5 w-3.5" />
  Contact security team
</button>
					</div>
				</div>
			</div>

			<!-- Detailed Security Sections -->
			<div class="lg:col-span-8 space-y-12">
				<!-- Section 1: Unbreakable Data Encryption -->
				<div id="encryption" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">1</div>
							<h3 class="text-md md:text-lg font-extrabold text-slate-900">Unbreakable Data Encryption</h3>
						</div>
						<Lock class="h-5 w-5 text-slate-350" />
					</div>
					<p class="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
						Your data is protected at every stage—whether you are actively running a report or securely storing ledgers for the financial year.
					</p>
					
					<div class="space-y-4">
						<!-- Card 1 -->
						<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-blue-50 text-blue-600 border border-blue-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<Globe class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800">256-Bit SSL/TLS Encryption (Data in Transit)</h4>
								<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
									Every piece of data that moves between your browser and firstcut24.com is protected by strict SSL encryption. We force HTTPS on all connections, ensuring your business data, invoices, and credentials can never be intercepted.
								</p>
							</div>
						</div>
						<!-- Card 2 -->
						<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-emerald-50 text-emerald-600 border border-emerald-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<Database class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800">Data at Rest</h4>
								<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
									The sensitive information stored in our databases is encrypted. Even in the highly unlikely event of a server breach, your confidential records remain scrambled and unreadable.
								</p>
							</div>
						</div>
						<!-- Card 3 -->
						<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-amber-50 text-amber-600 border border-amber-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<Key class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800">Zero-Knowledge Passwords</h4>
								<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
									We never store your passwords in plain text. We use advanced cryptographic hashing, meaning no one—not even our own database administrators—can see or access your password.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Section 2: Isolated Server Infrastructure -->
				<div id="infrastructure" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">2</div>
							<h3 class="text-md md:text-lg font-extrabold text-slate-900">Isolated Server Infrastructure</h3>
						</div>
						<Server class="h-5 w-5 text-slate-350" />
					</div>
					<p class="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
						We don't mix your business data with the open internet.
					</p>

					<div class="space-y-4">
						<!-- Card 1 -->
						<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-blue-50 text-blue-600 border border-blue-105 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<Server class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800">Dedicated Virtual Private Servers (VPS)</h4>
								<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
									firstcut24.com operates on isolated, high-performance server environments. Your database is strictly firewalled and completely hidden from public access. It only accepts commands directly from the verified firstcut24.com application.
								</p>
							</div>
						</div>
						<!-- Card 2 -->
						<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-emerald-50 text-emerald-600 border border-emerald-105 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<HardDrive class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800">Automated Off-Site Backups</h4>
								<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
									Hardware fails, but your business shouldn't. We maintain automated, encrypted backups of your ERP data stored in secure off-site locations. In the event of a system emergency, your data is safe and recoverable.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Section 3: Total Access Control -->
				<div id="access-control" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">3</div>
							<h3 class="text-md md:text-lg font-extrabold text-slate-900">Total Access Control for Business Owners</h3>
						</div>
						<Users class="h-5 w-5 text-slate-350" />
					</div>
					<p class="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
						Security isn't just about keeping hackers out; it is about controlling who sees what inside your own company.
					</p>

					<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
						<div class="bg-violet-50 text-violet-600 border border-violet-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
							<Shield class="h-5 w-5" />
						</div>
						<div>
							<h4 class="text-xs md:text-sm font-bold text-slate-800">Role-Based Access Control (RBAC)</h4>
							<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
								You are in complete control of your data. Our strict permission system allows you to define exactly what your staff can see. A warehouse clerk can manage inventory without ever having access to your financial profit margins or management ledgers.
							</p>
						</div>
					</div>
				</div>

				<!-- Section 4: Our Privacy Promise -->
				<div id="privacy-promise" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">4</div>
							<h3 class="text-md md:text-lg font-extrabold text-slate-900">Our Privacy Promise</h3>
						</div>
						<EyeOff class="h-5 w-5 text-slate-350" />
					</div>
					
					<div class="bg-blue-50/50 border-l-[3.5px] border-blue-600 p-5 rounded-r-2xl shadow-xs">
						<div class="flex items-center gap-2 mb-3">
							<Shield class="h-5 w-5 text-blue-600" />
							<h4 class="text-xs md:text-sm font-extrabold text-blue-900">Strict Non-Negotiable Privacy Philosophy</h4>
						</div>
						<p class="text-xs md:text-[13px] text-slate-655 leading-relaxed font-bold font-sans">
							Your data belongs to you. We do not, and will never, sell your customer lists, financial records, or operational data to third-party advertisers or data brokers. The information you put into firstcut24.com is used for one purpose only: to run your business efficiently.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />