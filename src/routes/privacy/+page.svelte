<script lang="ts">
	import { onMount } from 'svelte';
	import { 
		Shield, Lock, Globe, Calendar, MapPin, Ban, Clock, 
		Landmark, User, Briefcase, CreditCard, Activity, 
		CheckCircle2, Cloud, Bell, Server, HardDrive, Trash2, Mail, 
		Database, Settings, Share2, EyeOff, Download, Cookie, RefreshCw,
		XCircle
	} from 'lucide-svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let activeSection = $state('info-collect');

	const sectionsList = [
		{ id: 'info-collect', label: '1 \u00A0 Information We Collect' },
		{ id: 'use-info', label: '2 \u00A0 How We Use Your Info' },
		{ id: 'data-sharing', label: '3 \u00A0 Data Sharing' },
		{ id: 'data-security', label: '4 \u00A0 Data Security' },
		{ id: 'retention-deletion', label: '5 \u00A0 Retention & Deletion' },
		{ id: 'cookies-tracking', label: '6 \u00A0 Cookies & Tracking' },
		{ id: 'governing-law', label: '7 \u00A0 Governing Law' },
		{ id: 'policy-changes', label: '8 \u00A0 Policy Changes' }
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
	<title>Privacy Policy - Firstcut24</title>
	<meta name="description" content="Read the privacy policy of Firstcut24. Learn how we collect, secure, and manage your data." />
</svelte:head>

<Header />

<main class="min-h-screen bg-slate-50/40 text-slate-650 selection:bg-blue-500 selection:text-white font-sans">
	<!-- Hero Banner -->
	<section class="hero-banner relative overflow-hidden text-center py-20 px-4 md:px-8">
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
				256-bit SSL
			</div>

			<div class="hidden lg:flex absolute right-8 bottom-12 items-center gap-1.5 px-3 py-1 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-lg text-[11px] font-semibold text-slate-450 tracking-wider">
				<Shield class="h-3.5 w-3.5 text-green-400" />
				GDPR Ready
			</div>

			<!-- Top Pill -->
			<div class="inline-flex items-center gap-1.5 px-3 py-1 border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-full text-xs font-semibold text-slate-300 tracking-wide">
				<Shield class="h-3.5 w-3.5 text-blue-400" />
				Legal & Compliance
			</div>

			<!-- Main Title -->
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mt-6">
				Privacy <span class="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Policy</span>
			</h1>

			<!-- Subtitle -->
			<p class="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mt-4 px-4 leading-relaxed font-medium">
				We are committed to protecting the privacy and security of the data
				you entrust to our Enterprise Resource/Resource Planning (ERP) software.
			</p>

			<!-- Lower details pills -->
			<div class="flex flex-wrap justify-center items-center gap-3 lg:gap-4 mt-8 px-4 font-sans">
				<div class="flex items-center gap-1.5 px-4 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-xs font-medium text-slate-200">
					<Landmark class="h-3.5 w-3.5 text-slate-400" />
					<span class="text-slate-400">Company:</span> &nbsp;<span class="font-semibold text-white">Firstcut24</span>
				</div>
				<div class="flex items-center gap-1.5 px-4 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-xs font-medium text-slate-200">
					<Globe class="h-3.5 w-3.5 text-slate-400" />
					<span class="text-slate-400">Website:</span> &nbsp;<span class="font-semibold text-white">firstcut24.com</span>
				</div>
				<div class="flex items-center gap-1.5 px-4 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-xs font-medium text-slate-200">
					<Calendar class="h-3.5 w-3.5 text-slate-400" />
					<span class="text-slate-400">Effective:</span> &nbsp;<span class="font-semibold text-white">June 2025</span>
				</div>
				<div class="flex items-center gap-1.5 px-4 py-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm rounded-full text-xs font-medium text-slate-200">
					<MapPin class="h-3.5 w-3.5 text-slate-400" />
					<span class="text-slate-400">Governed by:</span> &nbsp;<span class="font-semibold text-white">Laws of India</span>
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
					<div class="text-xl md:text-2xl font-black text-slate-900 leading-tight">256-bit</div>
					<div class="text-[11px] font-semibold text-slate-400 tracking-wide uppercase mt-0.5 whitespace-nowrap">SSL/TLS Encryption</div>
				</div>
			</div>

			<!-- Col 2 -->
			<div class="flex items-start md:items-center gap-4 px-2 md:px-5 py-2">
				<div class="bg-emerald-50 text-emerald-600 border border-emerald-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
					<Ban class="h-5 w-5" />
				</div>
				<div>
					<div class="text-xl md:text-2xl font-black text-slate-900 leading-tight">0</div>
					<div class="text-[11px] font-semibold text-slate-400 tracking-wide uppercase mt-0.5 whitespace-nowrap">Data Sold to Third Parties</div>
				</div>
			</div>

			<!-- Col 3 -->
			<div class="flex items-start md:items-center gap-4 px-2 md:px-5 py-2">
				<div class="bg-amber-50 text-amber-600 border border-amber-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
					<Clock class="h-5 w-5" />
				</div>
				<div>
					<div class="text-xl md:text-2xl font-black text-slate-900 leading-tight">30 days</div>
					<div class="text-[11px] font-semibold text-slate-400 tracking-wide uppercase mt-0.5 whitespace-nowrap">Data Deletion SLA</div>
				</div>
			</div>

			<!-- Col 4 -->
			<div class="flex items-start md:items-center gap-4 px-2 md:px-5 py-2">
				<div class="bg-violet-50 text-violet-600 border border-violet-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
					<Shield class="h-5 w-5" />
				</div>
				<div>
					<div class="text-xl md:text-2xl font-black text-slate-900 leading-tight">Bank-Grade</div>
					<div class="text-[11px] font-semibold text-slate-400 tracking-wide uppercase mt-0.5 whitespace-nowrap">Security Standards</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Welcome & Overview section -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 font-sans">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			<!-- Welcome text -->
			<div class="lg:col-span-8">
				<div class="border-l-4 border-blue-600 pl-4 py-1">
					<h2 class="text-lg md:text-2xl font-extrabold text-slate-900 tracking-tight">
						Welcome to firstcut24.com, operated by Firstcut24
					</h2>
				</div>
				<p class="text-slate-500 font-medium text-sm md:text-base mt-4 leading-relaxed max-w-3xl">
					We are committed to protecting the privacy and security of the data you entrust to our Enterprise Resource/Resource Planning (ERP) software. This Privacy Policy outlines how we collect, use, protect, and handle your personal and business information.
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
						<h3 class="text-sm font-bold mt-1 text-white">8 sections covering all policies</h3>
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
							Have questions about our privacy practices? Our team is ready to help.
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

			<!-- Detailed Policy Sections -->
			<div class="lg:col-span-8 space-y-12">
				<!-- Section 1 -->
				<div id="info-collect" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">1</div>
							<h3 class="text-md md:text-lg font-extrabold text-slate-900">Information We Collect</h3>
						</div>
						<Database class="h-5 w-5 text-slate-350" />
					</div>
					<p class="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
						To provide our ERP services, we collect the following types of information:
					</p>
					<div class="space-y-4">
						<!-- Card 1 -->
						<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-blue-50 text-blue-600 border border-blue-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<User class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800">Account & Registration Information</h4>
								<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
									When you create an account, we collect your name, business name, email address, phone number, GST registration details, and billing address.
								</p>
							</div>
						</div>
						<!-- Card 2 -->
						<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-emerald-50 text-emerald-600 border border-emerald-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<Briefcase class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800">Business & Operational Data</h4>
								<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
									This includes all the data you actively upload, input, or generate using firstcut24.com, such as financial ledgers, inventory records, customer lists, and invoices.
								</p>
							</div>
						</div>
						<!-- Card 3 -->
						<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-amber-50 text-amber-600 border border-amber-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<CreditCard class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800">Payment Information</h4>
								<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
									For subscription billing, we collect payment details. Note: Sensitive payment credentials (like full credit card numbers) are processed securely by our third-party payment gateways and are not stored directly on our servers.
								</p>
							</div>
						</div>
						<!-- Card 4 -->
						<div class="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-violet-50 text-violet-600 border border-violet-100 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<Activity class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800">Usage Data & Logs</h4>
								<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold mt-1">
									We automatically collect standard diagnostic data when you access the platform, including IP addresses, browser types, log-in timestamps, and system activity logs to monitor performance and security.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Section 2 -->
				<div id="use-info" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">2</div>
							<h3 class="text-md md:text-lg font-extrabold text-slate-900">How We Use Your Information</h3>
						</div>
						<Settings class="h-5 w-5 text-slate-350" />
					</div>
					<p class="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed font-sans">
						We use your data strictly to operate and improve our software. Specifically, we use your information to:
					</p>
					<div class="space-y-3 font-sans">
						<div class="bg-slate-50 border border-slate-105 rounded-2xl p-4 flex items-center gap-3 text-xs md:text-sm text-slate-650 font-bold">
							<CheckCircle2 class="h-5 w-5 text-emerald-500 shrink-0" />
							Provide, maintain, and secure the firstcut24.com platform.
						</div>
						<div class="bg-slate-50 border border-slate-105 rounded-2xl p-4 flex items-center gap-3 text-xs md:text-sm text-slate-650 font-bold">
							<CheckCircle2 class="h-5 w-5 text-emerald-500 shrink-0" />
							Process your subscription payments and generate billing statements.
						</div>
						<div class="bg-slate-50 border border-slate-105 rounded-2xl p-4 flex items-center gap-3 text-xs md:text-sm text-slate-650 font-bold">
							<CheckCircle2 class="h-5 w-5 text-emerald-500 shrink-0" />
							Authenticate user access and enforce Role-Based Access Control (RBAC) within your organization.
						</div>
						<div class="bg-slate-50 border border-slate-105 rounded-2xl p-4 flex items-center gap-3 text-xs md:text-sm text-slate-650 font-bold">
							<CheckCircle2 class="h-5 w-5 text-emerald-500 shrink-0" />
							Provide customer support and respond to technical issues.
						</div>
						<div class="bg-slate-50 border border-slate-105 rounded-2xl p-4 flex items-center gap-3 text-xs md:text-sm text-slate-650 font-bold">
							<CheckCircle2 class="h-5 w-5 text-emerald-500 shrink-0" />
							Monitor server health and investigate potential security breaches.
						</div>
					</div>
				</div>

				<!-- Section 3 -->
				<div id="data-sharing" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">3</div>
							<h3 class="text-md md:text-lg font-extrabold text-slate-900">Data Sharing and Third-Party Sub-Processors</h3>
						</div>
						<Share2 class="h-5 w-5 text-slate-350" />
					</div>

					<!-- Blue Indicator Banner -->
					<div class="bg-blue-50/50 border-l-[3.5px] border-blue-600 p-4 rounded-r-2xl flex items-start gap-3 shadow-xs">
						<Shield class="h-[21px] w-[21px] text-blue-600 mt-0.5 shrink-0" />
						<p class="text-xs md:text-[13.5px] text-slate-650 leading-relaxed font-bold">
							Your data belongs to you. <span class="text-slate-500 font-semibold font-sans">Firstcut24 will never sell, rent, or trade your personal or business data to third-party advertisers or data brokers.</span>
						</p>
					</div>

					<p class="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
						We only share data with trusted third-party service providers (sub-processors) when it is strictly necessary to run our platform. These include:
					</p>

					<!-- Three Cards Row -->
					<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
						<!-- Card 1 -->
						<div class="bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-xs flex flex-col items-center text-center gap-3">
							<div class="bg-blue-50 text-blue-600 p-2.5 rounded-xl flex items-center justify-center shrink-0">
								<Cloud class="h-5 w-5" />
							</div>
							<h4 class="text-xs font-bold text-slate-900">Cloud & Hosting Providers</h4>
							<p class="text-[10px] text-slate-450 leading-relaxed font-semibold">
								To securely host our databases and application files on Virtual Private Servers (VPS).
							</p>
						</div>

						<!-- Card 2 -->
						<div class="bg-white border border-slate-105 rounded-3xl p-5 md:p-6 shadow-xs flex flex-col items-center text-center gap-3">
							<div class="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">
								<CreditCard class="h-5 w-5" />
							</div>
							<h4 class="text-xs font-bold text-slate-900">Payment Gateways</h4>
							<p class="text-[10px] text-slate-450 leading-relaxed font-semibold">
								To securely process your subscription fees via certified payment processors.
							</p>
						</div>

						<!-- Card 3 -->
						<div class="bg-white border border-slate-105 rounded-3xl p-5 md:p-6 shadow-xs flex flex-col items-center text-center gap-3">
							<div class="bg-violet-50 text-violet-600 p-2.5 rounded-xl flex items-center justify-center shrink-0 border border-violet-100">
								<Bell class="h-5 w-5" />
							</div>
							<h4 class="text-xs font-bold text-slate-900">Communication Services</h4>
							<p class="text-[10px] text-slate-450 leading-relaxed font-semibold">
								To send automated system alerts, password resets, and account notices.
							</p>
						</div>
					</div>

					<p class="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed mt-4">
						These providers are legally bound to strictly protect your data and cannot use it for their own purposes. We may also disclose information if required to do so by law or in response to valid requests by public authorities.
					</p>
				</div>

				<!-- Section 4 -->
				<div id="data-security" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">4</div>
							<h3 class="text-md md:text-lg font-extrabold text-slate-900">Data Security</h3>
						</div>
						<Shield class="h-5 w-5 text-slate-350" />
					</div>
					<p class="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
						We implement robust, bank-grade security measures to protect your data from unauthorized access, alteration, or destruction:
					</p>

					<!-- Cards Grid -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<!-- Card 1 -->
						<div class="bg-white border border-slate-100 rounded-3xl p-5 md:p-6 flex flex-col gap-2">
							<div class="bg-blue-50 text-blue-600 p-2.5 rounded-xl flex items-center justify-center w-fit shrink-0">
								<Lock class="h-5 w-5" />
							</div>
							<h4 class="text-xs md:text-sm font-bold text-slate-900 mt-1">Encryption</h4>
							<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold">
								All data transmitted between your browser and our servers is encrypted using 256-bit SSL/TLS protocols. Sensitive credentials, such as user passwords, are secured using one-way cryptographic hashing.
							</p>
						</div>
						<!-- Card 2 -->
						<div class="bg-white border border-slate-105 rounded-3xl p-5 md:p-6 flex flex-col gap-2">
							<div class="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl flex items-center justify-center w-fit shrink-0 border border-emerald-100">
								<Server class="h-5 w-5" />
							</div>
							<h4 class="text-xs md:text-sm font-bold text-slate-900 mt-1">Infrastructure</h4>
							<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold">
								firstcut24.com operates on isolated, firewalled servers. Database access is strictly limited to authorized backend application requests.
							</p>
						</div>
						<!-- Card 3 -->
						<div class="bg-white border border-slate-105 rounded-3xl p-5 md:p-6 flex flex-col gap-2">
							<div class="bg-amber-50 text-amber-600 p-2.5 rounded-xl flex items-center justify-center w-fit shrink-0 border border-amber-100">
								<HardDrive class="h-5 w-5" />
							</div>
							<h4 class="text-xs md:text-sm font-bold text-slate-900 mt-1">Backups</h4>
							<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold">
								We perform automated, encrypted off-site backups to ensure your business data can be recovered in the event of a critical hardware failure.
							</p>
						</div>
						<!-- Card 4 -->
						<div class="bg-white border border-slate-105 rounded-3xl p-5 md:p-6 flex flex-col gap-2">
							<div class="bg-violet-50 text-violet-600 p-2.5 rounded-xl flex items-center justify-center w-fit shrink-0 border border-violet-100">
								<EyeOff class="h-5 w-5" />
							</div>
							<h4 class="text-xs md:text-sm font-bold text-slate-900 mt-1">Access Control</h4>
							<p class="text-[11px] md:text-xs text-slate-450 leading-relaxed font-semibold">
								Role-Based Access Control (RBAC) ensures that users can only access data and features relevant to their assigned role within your organization.
							</p>
						</div>
					</div>
				</div>

				<!-- Section 5 -->
				<div id="retention-deletion" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">5</div>
							<h3 class="text-md md:text-lg font-extrabold text-slate-900">Data Retention and Deletion</h3>
						</div>
						<Clock class="h-5 w-5 text-slate-350" />
					</div>

					<div class="space-y-4">
						<!-- Item 1 -->
						<div class="bg-white border border-slate-105 rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-blue-50 text-blue-600 p-2.5 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
								<Server class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800 font-sans">Active Accounts</h4>
								<p class="text-[11px] md:text-xs text-slate-550 leading-relaxed font-semibold mt-0.5">
									We retain your account and business data for as long as your subscription is active.
								</p>
							</div>
						</div>
						<!-- Item 2 -->
						<div class="bg-white border border-slate-105 rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-blue-50 text-blue-600 p-2.5 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
								<Download class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800 font-sans">Account Cancellation</h4>
								<p class="text-[11px] md:text-xs text-slate-550 leading-relaxed font-semibold mt-0.5">
									If you cancel your subscription, you may request a full export of your data.
								</p>
							</div>
						</div>
						<!-- Item 3 -->
						<div class="bg-white border border-slate-105 rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:border-slate-200 transition-colors">
							<div class="bg-blue-50 text-blue-600 p-2.5 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
								<Trash2 class="h-5 w-5" />
							</div>
							<div>
								<h4 class="text-xs md:text-sm font-bold text-slate-800 font-sans">Right to Erasure</h4>
								<p class="text-[11px] md:text-xs text-slate-550 leading-relaxed font-semibold mt-0.5">
									You have the right to request the permanent deletion of your account and all associated business data. Upon receiving a verified deletion request, we will purge your operational data from our active databases within 30 days, subject to legal and tax retention requirements.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Section 6 -->
				<div id="cookies-tracking" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">6</div>
							<h3 class="text-md md:text-lg font-bold text-slate-900">Cookies and Tracking Technologies</h3>
						</div>
						<Cookie class="h-5 w-5 text-slate-350" />
					</div>

					<!-- Green Indicator Banner -->
					<div class="bg-[#f0fdf4]/50 border border-[#bbf7d0]/40 border-l-4 border-l-[#22c55e] p-4 rounded-r-2xl flex items-start gap-3 shadow-xs">
						<!-- Custom check icon box -->
						<div class="bg-[#dcfce7] text-[#15803d] border border-[#bbf7d0] p-1.5 rounded-lg flex items-center justify-center shrink-0">
							<CheckCircle2 class="h-[15px] w-[15px]" />
						</div>
						<p class="text-xs md:text-[13.5px] text-[#15803d] leading-relaxed font-bold font-sans">
							firstcut24.com uses <span class="text-[#166534] font-extrabold">essential cookies only</span> to manage user sessions, keep you logged in securely, and remember your system preferences. We do not use intrusive third-party tracking cookies for targeted advertising inside the ERP application.
						</p>
					</div>

					<!-- 2x2 Grid from screenshots -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs md:text-sm">
						<!-- Card 1 (Green) -->
						<div class="bg-[#f0fdf4] border border-[#dcfce7] rounded-2xl p-4 flex items-center gap-3 text-[#15803d] font-bold">
							<CheckCircle2 class="h-5 w-5 text-[#22c55e] shrink-0" />
							Session management cookies to keep you securely logged in.
						</div>
						<!-- Card 2 (Green) -->
						<div class="bg-[#f0fdf4] border border-[#dcfce7] rounded-2xl p-4 flex items-center gap-3 text-[#15803d] font-bold">
							<CheckCircle2 class="h-5 w-5 text-[#22c55e] shrink-0" />
							Preference cookies to remember your system settings.
						</div>
						<!-- Card 3 (Red) -->
						<div class="bg-[#fff1f2] border border-[#ffe4e6] rounded-2xl p-4 flex items-center gap-3 text-[#be123c] font-bold">
							<XCircle class="h-5 w-5 text-[#f43f5e] shrink-0" />
							No third-party advertising or behavioral tracking cookies.
						</div>
						<!-- Card 4 (Red) -->
						<div class="bg-[#fff1f2] border border-[#ffe4e6] rounded-2xl p-4 flex items-center gap-3 text-[#be123c] font-bold">
							<XCircle class="h-5 w-5 text-[#f43f5e] shrink-0" />
							No data shared with advertisers or data brokers.
						</div>
					</div>
				</div>

				<!-- Section 7 -->
				<div id="governing-law" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">7</div>
							<h3 class="text-md md:text-lg font-bold text-slate-900">Governing Law</h3>
						</div>
						<Landmark class="h-5 w-5 text-slate-350" />
					</div>

					<!-- Blue Indicator Banner -->
					<div class="bg-[#eff6ff]/35 border border-[#dbeafe]/70 border-l-4 border-l-[#2563eb] p-4 rounded-r-2xl flex items-start gap-4 shadow-xs">
						<div class="bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]/80 p-2.5 rounded-xl flex items-center justify-center shrink-0">
							<Landmark class="h-5 w-5" />
						</div>
						<p class="text-xs md:text-[13.5px] text-slate-655 leading-relaxed font-bold font-sans mt-0.5">
							This Privacy Policy shall be governed by and construed in accordance with the <span class="text-[#2563eb] font-extrabold">laws of India</span>. Any disputes arising under or in connection with this policy shall be subject to the exclusive jurisdiction of the courts in <span class="text-[#2563eb] font-extrabold">New Delhi</span>.
						</p>
					</div>
				</div>

				<!-- Section 8 -->
				<div id="policy-changes" class="scroll-mt-24 space-y-6">
					<div class="flex items-center justify-between pb-3 border-b border-slate-100">
						<div class="flex items-center gap-3">
							<div class="bg-blue-600 text-white font-extrabold flex items-center justify-center rounded-lg h-9 w-9 text-xs">8</div>
							<h3 class="text-md md:text-lg font-bold text-slate-900">Changes to This Privacy Policy</h3>
						</div>
						<RefreshCw class="h-5 w-5 text-slate-350" />
					</div>

					<!-- Yellow/Amber Indicator Banner -->
					<div class="bg-[#fffbeb]/45 border border-[#fef3c7]/70 border-l-4 border-l-[#d97706] p-4 rounded-r-2xl flex items-start gap-4 shadow-xs">
						<div class="bg-[#fff9db] text-[#d97706] border border-[#fde68a]/80 p-2.5 rounded-xl flex items-center justify-center shrink-0">
							<Bell class="h-5 w-5" />
						</div>
						<p class="text-xs md:text-[13.5px] text-slate-655 leading-relaxed font-bold font-sans mt-0.5">
							We may update this Privacy Policy from time to time to reflect changes in our technology or legal obligations. We will notify account administrators of any significant material changes via <span class="text-[#b45309] font-extrabold">email or an in-app notification</span> before they take effect.
						</p>
					</div>

					<p class="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed mt-4 font-sans">
						We encourage you to review this policy periodically. Your continued use of firstcut24.com after any changes constitutes your acceptance of the updated Privacy Policy.
					</p>
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
</style>