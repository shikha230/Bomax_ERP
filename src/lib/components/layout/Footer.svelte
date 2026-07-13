<script lang="ts">
	import { Layers } from 'lucide-svelte';
	import { resolve } from '$app/paths';

	const productLinks = [
		'Features',
		'Modules',
		// 'Pricing',
		'Changelog',
		'Roadmap'
	];

	const companyLinks = [
		'Careers',
		'Blog',
		'Press',
		'Partners'
	];

	const supportLinks = [
		'Help Center',
		'Community',
		'Status Page'
	];

	const contactLinks = [
		'+91 98765 43210',
		'hello@glasserp.in',
		'WhatsApp Chat',
		'Book a Demo'
	];
</script>

<footer class="bg-[#061330] text-white">
	<div class="mx-auto max-w-7xl px-6 py-6">
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
			<!-- Logo Section -->

			<div class="lg:col-span-1">
				<div class="flex items-center gap-2.5">
					<div
						class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-500/20"
					>
						<Layers class="h-5.5 w-5.5 text-white" />
						<div class="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse border border-[#061330]"></div>
					</div>

					<h3 class="text-2xl font-bold tracking-tight text-white font-heading">
						GlassERP
					</h3>
				</div>

				<p
					class="mt-2.5 max-w-xs text-sm leading-6 text-slate-400"
				>
					The all-in-one ERP platform built exclusively for
					glass businesses across India and beyond.
				</p>

				<div class="mt-4 flex gap-3">
					<div
						class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-slate-800 text-slate-400 transition hover:bg-slate-700"
					>
						T
					</div>

					<div
						class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-slate-800 text-slate-400 transition hover:bg-slate-700"
					>
						L
					</div>

					<div
						class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-slate-800 text-slate-400 transition hover:bg-slate-700"
					>
						I
					</div>

					<div
						class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-slate-800 text-slate-400 transition hover:bg-slate-700"
					>
						F
					</div>
				</div>
			</div>

			<!-- Product -->

			<div>
				<h4
					class="mb-3 text-sm font-semibold uppercase tracking-wider"
				>
					Product
				</h4>

				<ul class="space-y-1.5">
					{#each productLinks as item (item)}
						<li
							class="cursor-pointer text-sm text-slate-400 transition hover:text-white"
						>
							{item}
						</li>
					{/each}
				</ul>
			</div>

			<!-- Company -->

			<div>
				<h4
					class="mb-3 text-sm font-semibold uppercase tracking-wider"
				>
					Company
				</h4>

				<ul class="space-y-1.5">
					{#each companyLinks as item (item)}
						<li
							class="cursor-pointer text-sm text-slate-400 transition hover:text-white"
						>
							{#if item === 'Partners'}
								<a href={resolve('/partners')} class="block">{item}</a>
							{:else}
								{item}
							{/if}
						</li>
					{/each}
				</ul>
			</div>

			<!-- Support -->

			<div>
				<h4
					class="mb-3 text-sm font-semibold uppercase tracking-wider"
				>
					Support
				</h4>

				<ul class="space-y-1.5">
					{#each supportLinks as item (item)}
						<li
							class="cursor-pointer text-sm text-slate-400 transition hover:text-white"
						>
							{item}
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->

			<div>
				<h4
					class="mb-3 text-sm font-semibold uppercase tracking-wider"
				>
					Contact
				</h4>

				<ul class="space-y-1.5">
					{#each contactLinks as item (item)}
						<li
							class="cursor-pointer text-sm text-slate-400 transition hover:text-white"
						>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Bottom -->

		<div
			class="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-4 text-sm text-slate-500 md:flex-row"
		>
			<p>
				© 2026 GlassERP. All rights reserved.
			</p>

			<div class="flex flex-wrap gap-6">
				<a href={resolve('/privacy')} class="cursor-pointer hover:text-white">
					Privacy Policy
				</a>

				<span class="cursor-pointer hover:text-white">
					Terms of Service
				</span>

				<span class="cursor-pointer hover:text-white font-sans">
					Cookie Policy
				</span>
			</div>
		</div>
	</div>
</footer>