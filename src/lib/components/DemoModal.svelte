<script lang="ts">
	import { X, Calendar, Clock, Sparkles } from 'lucide-svelte';

	// Props in Svelte 5
	let { isOpen = false, onClose = () => {} } = $props();

	let company = $state('');
	let email = $state('');
	let name = $state('');
	let date = $state('');
	let timeId = $state('09:00 AM - 10:00 AM');
	let isSubmitting = $state(false);
	let isSuccess = $state(false);

	const times = [
		'09:00 AM - 10:00 AM',
		'10:00 AM - 11:00 AM',
		'11:00 AM - 12:00 PM',
		'12:00 PM - 01:00 PM',
		'01:00 PM - 02:00 PM',
		'02:00 PM - 03:00 PM',
		'03:00 PM - 04:00 PM',
		'04:00 PM - 05:00 PM',
		'05:00 PM - 06:00 PM'
	];

	function handleBook(e: SubmitEvent) {
		e.preventDefault();
		if (!name || !email || !company || !date) {
			alert('Please fill out all fields.');
			return;
		}
		isSubmitting = true;
		setTimeout(() => {
			isSubmitting = false;
			isSuccess = true;
		}, 1200);
	}

	function resetAndClose() {
		onClose();
		setTimeout(() => {
			company = '';
			email = '';
			name = '';
			date = '';
			timeId = '10:00 AM';
			isSuccess = false;
		}, 300);
	}
</script>

{#if isOpen}
	<!-- Backdrop -->
	<!-- eslint-disable-next-line svelte/valid-compile -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm transition-opacity duration-300"
		role="presentation"
		onclick={resetAndClose}
	>
		<!-- Modal Card -->
		<!-- eslint-disable-next-line svelte/valid-compile -->
		<div
			class="relative w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl transition-all duration-300 md:p-8"
			role="dialog"
			aria-modal="true"
			aria-label="Book a Live Demo"
			tabindex="-1"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => {
				if (e.key === 'Escape') resetAndClose();
			}}
		>
			<!-- Close Button -->
			<button
				onclick={resetAndClose}
				class="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-105 hover:text-slate-700 transition-colors"
				aria-label="Close Modal"
			>
				<X class="h-6 w-6" />
			</button>

			{#if isSuccess}
				<div class="py-8 text-center flex flex-col items-center">
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-md"
					>
						<Sparkles class="h-7 w-7" />
					</div>
					<h3 class="text-xl font-extrabold text-slate-900 font-heading">Demo Scheduled!</h3>
					<p class="mt-2 text-sm text-slate-500 max-w-sm">
						Thank you, <strong class="text-slate-800">{name}</strong>. We've sent a calendar
						invitation for <strong class="text-slate-850">{date} at {timeId}</strong> to
						<span class="text-blue-600 underline">{email}</span>.
					</p>
					<button
						onclick={resetAndClose}
						class="mt-8 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
					>
						Done
					</button>
				</div>
			{:else}
				<div class="mb-6 flex items-start gap-3.5">
					<div
						class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-650 shrink-0"
					>
						<Calendar class="h-5.5 w-5.5" />
					</div>
					<div>
						<div class="flex flex-wrap items-center gap-2">
							<h3 class="text-lg font-extrabold text-slate-900 font-heading">Book a Live Demo</h3>
							<span class="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200/60 uppercase tracking-wider animate-pulse">Launching Soon</span>
						</div>
						<p class="text-sm text-slate-480 mt-0.5">
							Experience how Bomax ERP optimizes your glass business operations.
						</p>
					</div>
				</div>

				<form onsubmit={handleBook} class="space-y-4">
					<div>
						<label for="modal-company" class="block text-xs font-bold text-slate-700 mb-1"
							>Company Name</label
						>
						<input
							id="modal-company"
							type="text"
							bind:value={company}
							required
							placeholder="Apex Glass Solutions"
							class="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
						/>
					</div>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label for="modal-name" class="block text-xs font-bold text-slate-700 mb-1"
								>Your Name</label
							>
							<input
								id="modal-name"
								type="text"
								bind:value={name}
								required
								placeholder="John Doe"
								class="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
							/>
						</div>
						<div>
							<label for="modal-email" class="block text-xs font-bold text-slate-700 mb-1"
								>Work Email</label
							>
							<input
								id="modal-email"
								type="email"
								bind:value={email}
								required
								placeholder="john@company.com"
								class="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label for="modal-date" class="block text-xs font-bold text-slate-700 mb-1"
								>Preferred Date</label
							>
							<input
								id="modal-date"
								type="date"
								bind:value={date}
								required
								class="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
							/>
						</div>
						<div>
							<span class="block text-xs font-bold text-slate-705 mb-1">Best Time to Contact *</span>
							<div class="relative">
								<Clock
									class="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none"
								/>
								<select
									id="modal-time"
									bind:value={timeId}
									class="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50/50 hover:bg-slate-50 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer appearance-none"
								>
									{#each times as t}
										<option value={t}>{t}</option>
									{/each}
								</select>
							</div>
						</div>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						class="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors disabled:bg-blue-400"
					>
						{isSubmitting ? 'Scheduling Demo...' : 'Launching Soon'}
					</button>
				</form>
			{/if}
		</div>
	</div>
{/if}
