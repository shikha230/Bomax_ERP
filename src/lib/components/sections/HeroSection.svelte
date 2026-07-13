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

<section class="bg-[#E8F4FF] m-0 p-0 pt-6 sm:pt-8 lg:pt-10 overflow-hidden">
	<div
		class="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 pt-8 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:flex-row lg:items-start lg:gap-10 lg:pb-24"
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
					class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-transparent bg-blue-600 px-7 py-3.5 sm:px-8 sm:py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
				>
					Try Free Optimizer
				</button>

				<button
					onclick={openDemo}
					class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3.5 sm:px-8 sm:py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
				>
					Book Demo
				</button>
			</div>

		</div>

		<!-- Right Animated Dashboard Mockup -->
		<div class="w-full lg:w-7/12 flex justify-center lg:justify-end mt-8 lg:mt-0">
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
		border-radius: 24px;
		overflow: hidden;
		border: 1px solid rgba(226, 232, 240, 0.8);
		box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.12),
		            0 0 0 1px rgba(0, 0, 0, 0.04);
	}

	@media (min-width: 1024px) {
		.mockup-scaling-wrapper {
			width: 655px;
			height: 484px;
		}

		.mockup-scaled-container {
			width: 840px;
			height: 620px;
			transform: scale(0.78);
			transform-origin: top left;
		}
	}
</style>