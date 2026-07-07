<script lang="ts">
	const plans = [
		{
			name: 'Starter',
			price: '₹4,999',
			description: 'Perfect for small glass shops and single-branch operations',
			button: 'Get Started',
			featured: false,
			features: [
				'Up to 3 users',
				'Order & Inventory Management',
				'Basic Quotations',
				'GST Billing',
				'Email Support'
			]
		},
		{
			name: 'Professional',
			price: '₹9,999',
			description: 'For growing glass businesses needing full ERP capabilities',
			button: 'Start Free Trial',
			featured: true,
			features: [
				'Up to 15 users',
				'All Starter Features',
				'AI Cutting Optimizer',
				'Production Planning',
				'HR & Payroll',
				'WhatsApp Integration',
				'Priority Support'
			]
		},
		{
			name: 'Enterprise',
			price: 'Custom',
			description: 'For large enterprises with multi-branch operations',
			button: 'Contact Sales',
			featured: false,
			features: [
				'Unlimited users',
				'All Professional Features',
				'Multi-branch Management',
				'Custom Integrations',
				'Dedicated Account Manager',
				'24×7 Phone Support'
			]
		}
	];
</script>

<section class="bg-white py-14 sm:py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">

		<div class="text-center">
			<div class="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600">
				Simple Pricing
			</div>

			<h2 class="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
				Transparent, Scalable Pricing
			</h2>

			<p class="mt-4 text-slate-500 text-sm sm:text-base">
				No hidden fees. Choose the plan that fits your business.
			</p>
		</div>

		<div class="mt-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each plans as plan (plan.name)}
				<div
					class={`relative rounded-2xl border p-6 sm:p-8 ${
						plan.featured
							? 'bg-blue-600 text-white shadow-2xl'
							: 'border-slate-200 bg-white'
					}`}
				>
					{#if plan.featured}
						<div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-semibold text-white">
							Most Popular
						</div>
					{/if}

					<h3 class="font-semibold text-lg">{plan.name}</h3>

					<p class="mt-2 text-sm opacity-80">
						{plan.description}
					</p>

					<div class="mt-5 sm:mt-6 text-4xl sm:text-5xl font-bold">
						{plan.price}
					</div>

					<div class="mt-1 text-sm opacity-80">
						per month
					</div>

					<div class="mt-6 sm:mt-8 space-y-3">
						{#each plan.features as feature (feature)}
							<div class="flex gap-3 text-sm sm:text-base">
								<span>✓</span>
								<span>{feature}</span>
							</div>
						{/each}
					</div>

					<button
						class={`mt-8 sm:mt-10 w-full rounded-lg py-3 font-semibold ${
							plan.featured
								? 'bg-white text-blue-600'
								: 'border border-blue-600 text-blue-600'
						}`}
					>
						{plan.button}
					</button>
				</div>
			{/each}
		</div>

	</div>
</section>