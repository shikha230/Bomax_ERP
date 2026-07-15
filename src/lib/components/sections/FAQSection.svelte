<script lang="ts">
	let open = $state(0);

	const faqs = [
		{
			q: 'Is Firstcut24 suitable for small glass shops?',
			a: 'Absolutely. Firstcut24 is built for every stage of the glass industry—from local retailers and wholesalers to heavy-duty processors. Because our interface requires 0 prior software experience, small shop owners can easily transition away from calculators, broken Excel sheets, and paper quote books without needing to hire dedicated IT staff. It scales perfectly as your business grows.'
		},
		{
			q: 'How long does the implementation take?',
			a: 'Unlike generic traditional ERPs that take 6 to 12 months of expensive custom coding to understand "glass dimensions," Firstcut24 is natively built for the glass industry. All the complex math (sqm conversions, edge polishing, jumbo surcharges) is pre-configured out-of-the-box. Most factories are fully implemented, trained, and live within hours.'
		},
		{
			q: 'Does Firstcut24 support GST and e-Invoicing?',
			a: 'Yes, it is fully compliant with Indian taxation laws. The system automatically calculates the correct GST brackets based on item categories (glass vs. hardware vs. services). It also features direct API integrations to instantly generate E-Invoices and E-Way Bills directly from the dashboard, keeping your dispatches moving fast.'
		},
		{
			q: 'What kind of support do you offer?',
			a: "We don't just hand you the software and leave. We provide dedicated onboarding and training for your team. Post-launch, you get comprehensive technical support to ensure your factory floor never stops moving. Plus, because the UI is so intuitive, your team will rely far less on support than they would with legacy systems."
		},
		{
			q: 'Can I migrate data from my existing system?',
			a: 'Yes. Firstcut24 features a dedicated "Data Sync & Migration" module. Whether your current customer lists and inventory are stuck in Excel spreadsheets (.csv), legacy software (.json), or Tally (.xml), our system allows for clean, secure bulk uploads so you don\'t have to start from scratch.'
		},
		{
			q: 'Do I need to replace Tally if I use Firstcut24?',
			a: 'No! We know your Chartered Accountant loves Tally, and we respect that. Firstcut24 handles all your complex factory operations (nesting, inventory, production, invoicing), and features a 1-Click Tally Sync that exports perfect .xml double-entry ledgers for your accountant. You get the best of both worlds.'
		},
		{
			q: 'Will the factory floor tracking work if our internet is slow?',
			a: 'Yes. We know factory floors often run on weak 3G networks. Firstcut24 is engineered with an "Optimistic UI," meaning when a worker scans a barcode or updates a job card on a tablet, the screen updates instantly without waiting for a slow loading spinner.'
		},
		{
			q: 'Do I need to buy expensive servers to run Firstcut24?',
			a: 'No. Firstcut24 is a 100% Cloud-based SaaS (Software as a Service) platform. You do not need to build a server room or hire an IT guy to maintain it. You can access the entire ERP securely from any standard web browser, laptop, or tablet.'
		},
		{
			q: 'Is my factory data secure on the cloud?',
			a: 'Your data is infinitely safer on our enterprise-grade cloud servers than it is on a local factory computer (which is vulnerable to hard drive crashes, theft, or ransomware). We use bank-level encryption, regular automated backups, and strict data-isolation protocols.'
		},
		{
			q: 'My factory floor workers are not highly educated. Can they use the tablets?',
			a: 'Yes, this was our top priority during design. The factory floor tablet interface uses big, color-coded buttons, visual icons, and simple barcode scanning. A worker with zero software experience can be taught to punch in, scan a job card, and mark glass as "Completed" in less than 10 minutes.'
		},
		{
			q: 'Can I manage multiple branches or warehouses with one account?',
			a: 'Yes. If you have a retail showroom in the city and a processing plant on the highway, Firstcut24 links them seamlessly. You can transfer inventory between warehouses, restrict user access by location, and see consolidated revenue on your Master Dashboard.'
		},
		{
			q: 'How does Firstcut24 handle hardware fittings and accessories?',
			a: 'We know you sell more than just glass. Firstcut24 features unified quoting and inventory. You can add glass panes, aluminum profiles, silicones, and patch fittings onto the exact same quotation and track them all in the same inventory system.'
		},
		{
			q: 'Does the system send automated updates to my customers?',
			a: "Yes. Through our native WhatsApp Cloud API integration, your sales team can instantly push PDF Quotations, Order Confirmations, and Dispatch Delivery Challans directly to your customer's WhatsApp, providing a premium, high-trust experience."
		},
		{
			q: 'Do I have to pay extra for software updates?',
			a: 'Never. Because Firstcut24 is a modern Cloud ERP, all system updates, new features, and security patches are pushed to your account automatically and for free. You will never be stuck on an "old version" or forced to pay upgrade fees like you would with legacy ERPs.'
		},
		{
			q: 'Can I see my profit margins before confirming a quote?',
			a: 'Yes. Because our Quotation module is linked to your Inventory and OpEx (Operational Expenditure) modules, the system dynamically calculates the cost of the raw glass, labor, and expected wastage, showing your sales team the true profit margin before they hit "Confirm."'
		},
		{
			q: 'Does the AI Optimizer work in the background?',
			a: 'Yes. Unlike older nesting software where you have to manually export files, wait for optimization, and import them back, the Firstcut24 AI Optimizer runs dynamically. When a sales order is confirmed, it automatically groups the glass types and calculates the highest yield routing in the background.'
		},
		{
			q: 'Can I restrict what certain employees can see?',
			a: 'Absolutely. We feature granular Role-Based Access Control. You can configure the system so that your CNC operator only sees the production queue, your sales reps only see their own clients, and only the business owners can view the Profit & Loss and OpEx Dashboards.'
		},
		{
			q: 'What if I want to leave? Who owns my data?',
			a: 'You own 100% of your data. While we are confident you will love Firstcut24, if you ever decide to leave, our "Export" features allow you to download all your customers, inventory, and invoices in clean .csv or .json formats. We do not hold your business hostage.'
		},
		{
			q: 'How do you handle custom pricing for different clients?',
			a: 'Firstcut24 supports dynamic pricing tiers. You can set up standard retail rates, discounted wholesaler rates, or assign specific fixed price lists to your VIP contractors and architects. The system automatically applies the correct math when a client is selected.'
		},
		{
			q: 'Do you offer a free trial?',
			a: 'Because Firstcut24 is a comprehensive enterprise system customized to your exact factory parameters, a blind "free trial" is often overwhelming. Instead, we offer a completely free, customized Live Guided Demo where we use your actual factory data to show you exactly how the software will solve your specific bottlenecks.'
		}
	];
</script>

<section class="bg-slate-100 py-10 sm:py-10 lg:py-10">
	<div class="mx-auto max-w-4xl px-4 sm:px-6">

		<div class="text-center">

			<h2 class="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
				Frequently Asked Questions
			</h2>

			<p class="mt-3 sm:mt-4 text-slate-500 text-sm sm:text-base">
				Everything you need to know about Firstcut24.
			</p>
		</div>

		<div class="mt-10 sm:mt-16 space-y-3 sm:space-y-4">
			{#each faqs as faq, index (faq.q)}
				<div class="rounded-xl border border-slate-200/80 bg-white shadow-xs hover:shadow-sm transition-all duration-200">
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