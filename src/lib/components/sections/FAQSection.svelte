<script lang="ts">
	let open = $state(0);

	const faqs = [
		{
			q: 'Is GlassERP suitable for small glass shops?',
			a: 'Yes. Our Starter plan is designed specifically for small businesses.'
		},
		{
			q: 'How long does the implementation take?',
			a: 'Most customers go live within 3–7 days.'
		},
		{
			q: 'Can I use GlassERP on mobile devices?',
			a: 'Yes. GlassERP works perfectly on web and mobile browsers.'
		},
		{
			q: 'Does GlassERP support GST and e-Invoicing?',
			a: 'Absolutely. GST calculations and e-invoicing are built in.'
		},
		{
			q: 'What kind of support do you offer?',
			a: 'Email, chat, and phone support depending on your plan.'
		},
		{
			q: 'Can I migrate data from my existing system?',
			a: 'Yes. We assist with data migration during onboarding.'
		}
	];
</script>

<section class="bg-white py-14 sm:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6">

		<div class="text-center">
			<div class="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600">
				FAQs
			</div>

			<h2 class="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
				Frequently Asked Questions
			</h2>

			<p class="mt-3 sm:mt-4 text-slate-500 text-sm sm:text-base">
				Everything you need to know about GlassERP.
			</p>
		</div>

		<div class="mt-10 sm:mt-16 space-y-3 sm:space-y-4">
			{#each faqs as faq, index (faq.q)}
				<div class="rounded-xl border border-slate-200">
					<button
						onclick={() => (open = open === index ? -1 : index)}
						class="flex w-full items-center justify-between p-4 sm:p-6 text-left font-semibold text-sm sm:text-base text-slate-800 min-h-[3.5rem]"
					>
						<span class="pr-4">{faq.q}</span>
						<span class="flex-shrink-0 text-blue-600 text-lg font-bold">{open === index ? '−' : '+'}</span>
					</button>

					{#if open === index}
						<div class="px-4 sm:px-6 pb-4 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed">
							{faq.a}
						</div>
					{/if}
				</div>
			{/each}
		</div>

	</div>
</section>