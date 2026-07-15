<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import FAQSection from '$lib/components/sections/FAQSection.svelte';

	const timeline = [
		{
			id: 'breaking-point',
			year: '2018',
			title: 'The Breaking Point',
			description:
				'Having worked closely with the glass industry for 20 years—collaborating on extensive projects alongside retailers, processors, and wholesalers, as well as handling glass hardware and aluminum—the massive gaps in the unorganized sector were impossible to ignore. The daily reality for most businesses was manual quoting and billing. This reliance on outdated methods consistently led to costly errors, wasted time, and a complete inability to track expenses accurately. The industry needed a change.',
			icon: 'lightbulb',
			iconBg: 'bg-cyan-500',
			iconShadow: 'shadow-cyan-500/40',
			badgeBg: 'bg-cyan-50',
			badgeText: 'text-cyan-700',
			heroX: 20,
			heroY: 7,
			hex: '#06b6d4'
		},
		{
			id: 'reality-check',
			year: '2019',
			title: 'The Software Reality Check',
			description:
				'The search for a digital solution revealed a stark truth: there was absolutely no dedicated software designed specifically for the retail sector. The existing international software available on the market (such as A+W, LiSEC, or GlassTrax) was prohibitively expensive for Indian businesses and highly complicated, requiring massive IT infrastructure and extensive training to operate. Even the domestic Indian glass software options fell short; they remained costly and complex to navigate, yet severely lacked the essential, day-to-day features needed to run a modern business effectively.',
			icon: 'search',
			iconBg: 'bg-sky-500',
			iconShadow: 'shadow-sky-500/40',
			badgeBg: 'bg-sky-50',
			badgeText: 'text-sky-700',
			heroX: 62,
			heroY: 23,
			hex: '#0ea5e9'
		},
		{
			id: 'core-architecture',
			year: '2022',
			title: 'Defining the Core Architecture',
			description:
				'Realizing the perfect solution didn\'t exist, we decided to build it. With the blueprint ready, the technical foundation was laid. Development started with a core team of experienced developers from India, Italy, and the UK. The primary goal was to build a system tailored for the Indian market that didn\'t feel like a slow, clunky web page. It needed to be incredibly lightweight to ensure "Tally-like" keyboard navigation and lightning-fast data entry for accountants and floor managers.',
			icon: 'layers',
			iconBg: 'bg-indigo-500',
			iconShadow: 'shadow-indigo-500/40',
			badgeBg: 'bg-indigo-50',
			badgeText: 'text-indigo-700',
			heroX: 24,
			heroY: 41,
			hex: '#6366f1'
		},
		{
			id: 'prototyping',
			year: '2023',
			title: 'Prototyping and Live Testing',
			description:
				'Software is only as good as its real-world application. As and when the initial modules were being built, live testing immediately commenced with various retailers and processors to gather crucial feedback. Testing the system in these diverse, high-pressure conditions allowed for instant insights into how the software handled live custom dimensions, CNC workflows, tempering batches, and UV printing requirements. This ensured Firstcut24 could meet the exact, uncompromising needs of different businesses across the industry.',
			icon: 'flask',
			iconBg: 'bg-violet-500',
			iconShadow: 'shadow-violet-500/40',
			badgeBg: 'bg-violet-50',
			badgeText: 'text-violet-700',
			heroX: 66,
			heroY: 58,
			hex: '#8b5cf6'
		},
		{
			id: 'birth-of-Firstcut24',
			year: '2024',
			title: 'The Birth of Firstcut24',
			description:
				'After nearly four years of rigorous testing and continuous industry feedback, the scattered modules were finally unified into a single, cohesive system. Firstcut24 officially took shape. It successfully bridged the gap between retail quoting and wholesale production, allowing users to generate complex custom quotes in minutes rather than hours, while seamlessly pushing that data directly to the production floor. Marking its readiness for commercial use, the Firstcut24 trademark was officially registered, and the platform established its digital presence through the domains firstcut24.com and Firstcut24tech.com.',
			icon: 'rocket',
			iconBg: 'bg-amber-500',
			iconShadow: 'shadow-amber-500/40',
			badgeBg: 'bg-amber-50',
			badgeText: 'text-amber-700',
			heroX: 28,
			heroY: 75,
			hex: '#f59e0b'
		},
		{
			id: 'enterprise-scaling',
			year: '2026',
			title: 'Enterprise Infrastructure Scaling',
			description:
				'To prepare for commercial availability and handle heavy enterprise workloads without a hint of lag, Firstcut24 was migrated to a robust Hostinger environment backed by Google Cloud infrastructure. This critical step secured the database, improved query speeds, and provided the solid foundation necessary for multi-tenant scaling.',
			icon: 'server',
			iconBg: 'bg-emerald-500',
			iconShadow: 'shadow-emerald-500/40',
			badgeBg: 'bg-emerald-50',
			badgeText: 'text-emerald-700',
			heroX: 68,
			heroY: 92,
			hex: '#10b981'
		}
	];

	// Decorative floating bubbles for the hero banner
	const bubbles = [
		{ id: 'b1', size: 70, top: '15%', left: '10%', opacity: 0.4, delay: '0s', duration: '6s' },
		{ id: 'b2', size: 34, top: '70%', left: '20%', opacity: 0.45, delay: '1.2s', duration: '8s' },
		{ id: 'b3', size: 100, top: '18%', left: '80%', opacity: 0.3, delay: '0.5s', duration: '7s' },
		{ id: 'b4', size: 45, top: '78%', left: '72%', opacity: 0.4, delay: '2s', duration: '5.5s' },
		{ id: 'b5', size: 20, top: '45%', left: '48%', opacity: 0.5, delay: '1.5s', duration: '5s' },
		{ id: 'b6', size: 55, top: '85%', left: '42%', opacity: 0.3, delay: '0.8s', duration: '9s' },
		{ id: 'b7', size: 28, top: '8%', left: '55%', opacity: 0.4, delay: '2.5s', duration: '6.5s' }
	];

	// Reveals each timeline item one-by-one as it scrolls into view
	function reveal(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.classList.add('is-visible');
						observer.unobserve(node);
					}
				});
			},
			{ threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
		);
		observer.observe(node);
		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<svelte:head>
	<title>Firstcut24</title>
	<meta
		name="description"
		content="The story of Firstcut24 — the software solution engineered for the unique demands of the glass industry."
	/>
</svelte:head>

<Header />

<div class="bg-white overflow-x-hidden">
	<!-- About Us: The Story of Firstcut24 -->
	<section class="relative isolate overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-indigo-950">
		<!-- animated glow orbs -->
		<div class="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse"></div>
		<div class="pointer-events-none absolute top-1/2 -right-32 h-112 w-md -translate-y-1/2 rounded-full bg-indigo-500/30 blur-3xl animate-pulse [animation-delay:1s]"></div>
		<div class="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse [animation-delay:2s]"></div>

		<!-- floating bubbles -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			{#each bubbles as bubble (bubble.id)}
				<span
					class="absolute rounded-full bg-linear-to-br from-cyan-300/30 to-white/10 border border-cyan-200/40 animate-bounce"
					style="
						width: {bubble.size}px;
						height: {bubble.size}px;
						top: {bubble.top};
						left: {bubble.left};
						opacity: {bubble.opacity};
						animation-delay: {bubble.delay};
						animation-duration: {bubble.duration};
					"
				></span>
			{/each}
		</div>

		<div class="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
			<div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
				<!-- left: copy -->
				<div class="text-center md:text-left">
					<h1 class="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
						About Us
						<span class="block bg-linear-to-r from-cyan-300 via-sky-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
							The Story of Firstcut24
						</span>
					</h1>

					<p class="mx-auto mt-5 max-w-lg text-lg leading-8 text-blue-100/90 md:mx-0">
						Welcome to Firstcut24, the definitive software solution engineered specifically for the
						unique demands of the glass industry. Born from decades of hands-on experience and
						frustration with the status quo, Firstcut24 was built to transform how retailers,
						processors, and wholesalers operate.
					</p>
				</div>

				<!-- right: the journey, at a glance -->
				<div class="relative mx-auto h-80 w-full max-w-sm sm:h-95 md:h-110 lg:h-120">
					<svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-0 h-full w-full">
						<defs>
							<linearGradient id="heroPathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
								<stop offset="0%" stop-color="#22d3ee" />
								<stop offset="50%" stop-color="#818cf8" />
								<stop offset="100%" stop-color="#34d399" />
							</linearGradient>
						</defs>
						<path
							d="M20,7 C40,11 50,17 62,23 C50,31 30,33 24,41 C38,51 54,53 66,58 C54,68 34,70 28,75 C42,83 58,87 68,92"
							fill="none"
							stroke="url(#heroPathGradient)"
							stroke-width="0.6"
							stroke-linecap="round"
							stroke-dasharray="2.2 2.2"
							opacity="0.55"
						/>
					</svg>

					{#each timeline as event (event.id)}
						<div
							class="absolute flex flex-col items-center gap-1.5"
							style="top: {event.heroY}%; left: {event.heroX}%; transform: translate(-50%, -50%);"
						>
							<div
								class="flex {event.id === 'birth-of-Firstcut24' ? 'h-16 w-16' : 'h-12 w-12'} items-center justify-center rounded-full {event.iconBg} text-white shadow-lg {event.iconShadow} ring-4 ring-blue-950/50 transition-transform duration-300 hover:scale-110"
							>
								{#if event.icon === 'lightbulb'}
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
										<path d="M9 18h6" />
										<path d="M10 22h4" />
										<path d="M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.3V16h6v-1.2c0-.9.4-1.7 1-2.3A6 6 0 0 0 12 2Z" />
									</svg>
								{:else if event.icon === 'search'}
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
										<circle cx="11" cy="11" r="7" />
										<line x1="21" y1="21" x2="16.5" y2="16.5" />
									</svg>
								{:else if event.icon === 'layers'}
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
										<path d="M12 3 3 8l9 5 9-5-9-5Z" />
										<path d="M3 12l9 5 9-5" />
										<path d="M3 16l9 5 9-5" />
									</svg>
								{:else if event.icon === 'flask'}
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
										<path d="M9 2h6" />
										<path d="M10 2v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 8.5V2" />
										<path d="M6.5 15h11" />
									</svg>
								{:else if event.icon === 'rocket'}
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
										<path d="M12 2c2.8 1.2 5 4.2 5 8 0 2.7-1 5.4-2.6 7.4L12 20l-2.4-2.6C8 15.4 7 12.7 7 10c0-3.8 2.2-6.8 5-8Z" />
										<circle cx="12" cy="9" r="1.6" />
										<path d="M9 16l-2.5 1.5L6 21l3.5-1.5" />
										<path d="M15 16l2.5 1.5L18 21l-3.5-1.5" />
									</svg>
								{:else if event.icon === 'server'}
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
										<rect x="3" y="4" width="18" height="6" rx="1.5" />
										<rect x="3" y="14" width="18" height="6" rx="1.5" />
										<line x1="7" y1="7" x2="7.01" y2="7" />
										<line x1="7" y1="17" x2="7.01" y2="17" />
									</svg>
								{/if}
							</div>
							<span class="max-w-24 rounded-md bg-white/10 px-2 py-1 text-center leading-tight text-white backdrop-blur-sm">
								<span class="block text-[9px] font-bold tracking-wider text-cyan-200">{event.year}</span>
								<span class="block text-[10px] font-semibold sm:text-[11px]">{event.title}</span>
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- bottom fade so next section blends in -->
		<div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white/0 to-transparent"></div>
	</section>

	<!-- Journey Intro -->
	

	<!-- Timeline -->
	<section class="relative overflow-hidden bg-slate-50 py-16 md:py-20">
	
		<div class="mx-auto max-w-4xl text-center  pb-10">
	<h2 class="text-4xl font-bold text-slate-900 md:text-5xl">
		Here Is How Our
		<span class="bg-linear-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
			Journey Unfolded
		</span>
	</h2>
</div>
	
		<div class="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-blue-100 blur-3xl"></div>
		<div class="pointer-events-none absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-cyan-100 blur-3xl"></div>

		<div class="relative mx-auto max-w-3xl px-6 lg:px-8">
			<div class="relative">
				<div class="space-y-10 md:space-y-12">
					{#each timeline as event, i (event.id)}
						<div class="timeline-item group relative flex gap-5 md:gap-7" use:reveal style="transition-delay: {i * 80}ms;">
							<!-- icon node -->
							<div
								class="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full {event.iconBg} text-white shadow-lg {event.iconShadow} ring-4 ring-slate-50 transition-all duration-300 ease-out group-hover:scale-115 group-hover:-rotate-6 group-hover:shadow-xl group-hover:ring-8"
							>
								<span class="absolute inset-0 rounded-full {event.iconBg} opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"></span>
								<span class="relative">
									{#if event.icon === 'lightbulb'}
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
											<path d="M9 18h6" />
											<path d="M10 22h4" />
											<path d="M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.3V16h6v-1.2c0-.9.4-1.7 1-2.3A6 6 0 0 0 12 2Z" />
										</svg>
									{:else if event.icon === 'search'}
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
											<circle cx="11" cy="11" r="7" />
											<line x1="21" y1="21" x2="16.5" y2="16.5" />
										</svg>
									{:else if event.icon === 'layers'}
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
											<path d="M12 3 3 8l9 5 9-5-9-5Z" />
											<path d="M3 12l9 5 9-5" />
											<path d="M3 16l9 5 9-5" />
										</svg>
									{:else if event.icon === 'flask'}
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
											<path d="M9 2h6" />
											<path d="M10 2v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 8.5V2" />
											<path d="M6.5 15h11" />
										</svg>
									{:else if event.icon === 'rocket'}
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
											<path d="M12 2c2.8 1.2 5 4.2 5 8 0 2.7-1 5.4-2.6 7.4L12 20l-2.4-2.6C8 15.4 7 12.7 7 10c0-3.8 2.2-6.8 5-8Z" />
											<circle cx="12" cy="9" r="1.6" />
											<path d="M9 16l-2.5 1.5L6 21l3.5-1.5" />
											<path d="M15 16l2.5 1.5L18 21l-3.5-1.5" />
										</svg>
									{:else if event.icon === 'server'}
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
											<rect x="3" y="4" width="18" height="6" rx="1.5" />
											<rect x="3" y="14" width="18" height="6" rx="1.5" />
											<line x1="7" y1="7" x2="7.01" y2="7" />
											<line x1="7" y1="17" x2="7.01" y2="17" />
										</svg>
									{/if}
								</span>
							</div>

							<!-- content card -->
							<div class="flex-1 pt-1">
								<div
									class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-transparent group-hover:shadow-2xl"
								>
									<!-- gradient wash on hover -->
									<div
										class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07] {event.iconBg}"
									></div>
									<!-- glowing border ring on hover -->
									<div
										class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-offset-0 transition-opacity duration-300 group-hover:opacity-100"
										style="box-shadow: 0 0 0 1px {event.hex}33, 0 20px 40px -12px {event.hex}55;"
									></div>

									<span class="relative inline-flex rounded-full {event.badgeBg} px-3 py-1 text-xs font-bold tracking-wide {event.badgeText} transition-transform duration-300 group-hover:scale-105">
										{event.year}
									</span>
									<h3 class="relative mt-3 text-xl font-semibold text-slate-900 transition-colors duration-300">
										{event.title}
									</h3>
									<p class="relative mt-3 text-[15px] leading-7 text-slate-600">
										{event.description}
									</p>
									<div class="relative mt-4 h-0.5 w-8 rounded-full {event.iconBg} opacity-70 transition-all duration-300 group-hover:w-20"></div>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- present-day marker -->
				<div class="timeline-item relative mt-8 flex items-center gap-5 md:gap-7" use:reveal style="transition-delay: {timeline.length * 80}ms;">
					<div class="flex h-14 w-14 shrink-0 items-center justify-center">
						<span class="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.25)]"></span>
					</div>
					<span class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
						<span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
						Live &amp; growing today
					</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Mission -->
	<!-- Our Mission -->
	<section class="py-14">
		<div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
			<div class="group relative overflow-hidden rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 p-10 text-white md:p-16 max-w-5xl text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30">
				<div class="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-500 group-hover:scale-125"></div>
				<div class="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl transition-transform duration-500 group-hover:scale-125"></div>

				<h2 class="relative text-4xl font-bold">
					Our Mission
				</h2>

				<p class="relative mt-5 text-lg text-blue-50 mx-auto">
					At Firstcut24, our mission is simple: to bring order, speed, and absolute precision to the
					unorganized glass sector. We are here to empower your business with technology that
					works exactly the way you need it to—simplifying your workflow from the very first
					cut to the final invoice.
				</p>
			</div>
		</div>
	</section>
</div>

<FAQSection />

<Footer />

<style>
	.timeline-item {
		opacity: 0;
		transform: translateY(36px);
		transition:
			opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
			transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
	}
	.timeline-item.is-visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>