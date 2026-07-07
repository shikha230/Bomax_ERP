<script lang="ts">
	const steps = [
		{
			number: 1,
			title: '30 Minutes',
			description:
				'Sign up and complete your business profile with our guided wizard.'
		},
		{
			number: 2,
			title: 'Initial Setup',
			description:
				'Import your products, customers, and price lists-we help you'
		},
		{
			number: 3,
			title: 'One-Day Training',
			description:
				'Live training session with your dedicated implementation expert'
		},
		{
			number: 4,
			title: 'Team Onboarding',
			description:
				'Add your team, set roles and permissions, ready to go!'
		},
		{
			number: 5,
			title: 'Go Live!',
			description:
				'Start managing your glass business from day one. We’re with you.'
		}
	];
</script>

<section class="bg-[#F8FAFC] py-14 sm:py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<!-- Heading -->

		<div class="text-center">
			<h2
				class="text-2xl sm:text-3xl font-bold text-[#374151] md:text-4xl lg:text-5xl"
			>
				Go Live in Days, Not Months
			</h2>

			<p
				class="mx-auto mt-4 sm:mt-5 max-w-xl text-sm leading-7 text-slate-400"
			>
				Our guided onboarding gets your business up and running
				in record time with dedicated support.
			</p>
		</div>

		<!-- Timeline -->

		<div class="relative mt-12 sm:mt-20">
			<!-- Line (desktop only) -->

			<div
				class="absolute left-[10%] right-[10%] top-5 hidden h-0.5 bg-blue-100 lg:block"
			></div>

			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 sm:gap-10 lg:gap-12">
				{#each steps as step (step.number)}
					<div class="relative flex lg:block items-start lg:text-center gap-5 lg:gap-0">
						<!-- Circle -->

						<div
							class="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-md"
						>
							{step.number}
						</div>

						<div class="lg:mt-4">
							<!-- Title -->
							<h3
								class="text-base font-medium text-slate-800"
							>
								{step.title}
							</h3>

							<!-- Description -->

							<p
								class="mt-1 sm:mt-3 text-xs sm:text-xs leading-6 text-slate-400"
							>
								{step.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>