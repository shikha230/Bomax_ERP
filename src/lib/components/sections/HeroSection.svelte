<script lang="ts">
	import DashboardMockup from '$lib/components/features/DashboardMockup.svelte';
	import HomeFormModal from './HomeFormModal.svelte';

	let isModalOpen = $state(false);
	let modalMode: 'optimizer' | 'demo' = $state('optimizer');

	function openOptimizer() {
		modalMode = 'optimizer';
		isModalOpen = true;
	}

	function openDemo() {
		modalMode = 'demo';
		isModalOpen = true;
	}
</script>

<section class="bg-[#E8F4FF] m-0 p-0 py-0 sm:py-0 lg:py-0 overflow-hidden">
	<div
		class="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 pt-8 sm:pt-10 lg:pt-2 pb-0 lg:flex-row lg:items-start lg:gap-10 lg:pb-0"
	>
		<!-- Left Content -->
		<div class="w-full lg:w-5/12 text-center lg:text-left">
			<h1
				class="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-800 lg:text-5xl"
			>
				ONE ERP EVERY

				<span class="block text-blue-600 whitespace-nowrap">
					GLASS BUSINESS
				</span>

				<span class="block text-cyan-500 whitespace-nowrap">
					COMPLETE CONTROL
				</span>
			</h1>

			<p
				class="mt-6 sm:mt-8 mx-auto lg:mx-0 max-w-xl text-lg sm:text-xl leading-8 sm:leading-9 text-slate-700"
			>
				Streamline operations, manage inventory,
				automate cutting, and grow your glass business
				all from one powerful platform built exclusively
				for the glass industry.
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
				<button
					onclick={openOptimizer}
					class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-transparent bg-blue-600 px-7 py-3.5 sm:px-8 sm:py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 cursor-pointer"
				>
					Try Free Optimizer
				</button>

				<div class="relative w-full sm:w-auto">
					<button
						onclick={openDemo}
						class="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3.5 sm:px-8 sm:py-4 font-semibold text-slate-700 transition hover:bg-slate-50 cursor-pointer"
					>
						Book Demo
					</button>
					<span class="absolute -top-2.5 -right-2 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-[0_2px_8px_rgba(245,158,11,0.4)] whitespace-nowrap uppercase tracking-wider animate-pulse">
						Launching Soon
					</span>
				</div>
			</div>

			<!-- Early Bird Promo Text -->
			<div class="mt-5 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
				<p class="text-sm text-slate-900 leading-snug">
					<strong class="font-extrabold">Early Bird Special: Get 50% Off Your First Year.</strong>
				</p>
				<p class="mt-1 text-xs text-slate-500 leading-relaxed">
					Register your interest today and secure a 50% discount on any annual subscription when we launch.
				</p>
			</div>

		</div>

		<!-- Right Animated Dashboard Mockup -->
		<div class="w-full lg:w-7/12 flex justify-center lg:justify-end mt-4 lg:-mt-6">
			<div class="mockup-scaling-wrapper relative">
				<div class="mockup-scaled-container">
					<DashboardMockup />
				</div>
			</div>
		</div>
	</div>
</section>

<HomeFormModal
	isOpen={isModalOpen}
	mode={modalMode}
	onClose={() => (isModalOpen = false)}
/>

<style>
	.mockup-scaling-wrapper {
		width: 100%;
		max-width: 660px;
	}

	.mockup-scaled-container {
		width: 100%;
		position: relative;
		border-radius: 0;
		overflow: hidden;
		border: none;
		box-shadow: none;
	}

	@media (min-width: 1024px) {
		.mockup-scaling-wrapper {
			width: 655px;
			height: 600px;
		}

		.mockup-scaled-container {
			width: 840px;
			height: 770px;
			transform: scale(0.78);
			transform-origin: top left;
		}
	}
</style>