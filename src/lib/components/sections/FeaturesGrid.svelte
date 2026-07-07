<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	type Feature = {
		title: string;
		description: string;
		icon: string;
		bgColor: string;
		iconColor: string;
	};

	const features: Feature[] = [
		{
			title: 'Order Management',
			description:
				'Create, track, and manage orders from quotation to delivery with full traceability and real-time status updates.',
			icon: '📄',
			bgColor: 'bg-blue-50',
			iconColor: 'text-blue-600'
		},
		{
			title: 'Inventory Management',
			description:
				'Real-time stock tracking, automatic reorder points and multi-warehouse support for glass and accessories.',
			icon: '📦',
			bgColor: 'bg-blue-50',
			iconColor: 'text-blue-600'
		},
		{
			title: 'Production Planning',
			description:
				'Schedule jobs, assign tasks to machines and workers, and monitor production progress in real time.',
			icon: '⚙️',
			bgColor: 'bg-blue-50',
			iconColor: 'text-blue-600'
		},
		{
			title: 'Accounting & GST',
			description:
				'Integrated accounting with auto GST calculations, e-invoicing, and complete financial reporting built in.',
			icon: '₹',
			bgColor: 'bg-green-50',
			iconColor: 'text-green-600'
		},
		{
			title: 'Employee Management',
			description:
				'Attendance, payroll, performance tracking, and HR workflows — manage your entire workforce seamlessly.',
			icon: '👥',
			bgColor: 'bg-yellow-50',
			iconColor: 'text-yellow-600'
		},
		{
			title: 'Site Customers CRM',
			description:
				'Manage customer relationships, project sites, follow-ups, and after-sales service all in one place.',
			icon: '🚚',
			bgColor: 'bg-purple-50',
			iconColor: 'text-purple-600'
		}
	];
</script>

<section class="bg-white py-14 sm:py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<SectionHeading
			badge="Everything You Need"
			title="Everything Your Glass Business Needs"
			description="Built from the ground up for glass fabricators, retailers, and contractors—every feature designed for your workflow"
		/>

		<div class="grid gap-6 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3">
			{#each features as feature (feature.title)}
				<div
					class="group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					<div
						class={`mb-5 sm:mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}
					>
						<span class={`text-xl ${feature.iconColor}`}>
							{feature.icon}
						</span>
					</div>

					<h3 class="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-slate-900">
						{feature.title}
					</h3>

					<p class="mb-5 sm:mb-6 leading-7 text-slate-500 text-sm sm:text-base">
						{feature.description}
					</p>

					<button
						class="text-sm font-medium text-blue-600 transition hover:text-blue-700"
					>
						Learn more →
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>