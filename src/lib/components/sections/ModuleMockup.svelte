<script lang="ts">
	import { Search, ChevronRight, User, Mail, Phone } from 'lucide-svelte';

	let { activeTab } = $props<{ activeTab: string }>();
</script>

<div class="w-full text-[11px] font-sans">
	{#if activeTab === 'AI Optimizer'}
		<!-- AI Optimizer Mockup -->
		<div>
			<div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
				<Search class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400 text-[10px]">Glass optimizer...</span>
			</div>
			<div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
				<h4 class="font-bold text-slate-800 text-sm">Cutting Layout - Sheet #42</h4>
				<span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[9px] font-semibold">Yield: 94.2%</span>
			</div>
			<div class="p-4">
				<div class="bg-sky-50 border-2 border-sky-300 rounded-lg p-3 relative" style="aspect-ratio: 16/10;">
					<div class="grid grid-cols-4 grid-rows-3 gap-1 h-full font-sans">
						<div class="col-span-2 row-span-2 bg-blue-200 border border-blue-400 rounded flex items-center justify-center text-[8px] font-bold text-blue-800">A1 — 800×600</div>
						<div class="bg-emerald-200 border border-emerald-400 rounded flex items-center justify-center text-[8px] font-bold text-emerald-800">B1</div>
						<div class="bg-amber-200 border border-amber-400 rounded flex items-center justify-center text-[8px] font-bold text-amber-800">C1</div>
						<div class="bg-purple-200 border border-purple-400 rounded flex items-center justify-center text-[8px] font-bold text-purple-800">B2</div>
						<div class="bg-rose-200 border border-rose-400 rounded flex items-center justify-center text-[8px] font-bold text-rose-800">C2</div>
						<div class="col-span-2 bg-indigo-200 border border-indigo-400 rounded flex items-center justify-center text-[8px] font-bold text-indigo-800">D1 — 400×300</div>
						<div class="bg-teal-200 border border-teal-400 rounded flex items-center justify-center text-[8px] font-bold text-teal-800">E1</div>
						<div class="bg-slate-200 border border-slate-400 rounded flex items-center justify-center text-[7px] text-slate-500 italic">Scrap</div>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-3 mt-4">
					<div class="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-200/60">
						<div class="text-[16px] font-black text-emerald-600">94.2%</div>
						<div class="text-[8px] text-slate-500 font-medium">Yield Rate</div>
					</div>
					<div class="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-200/60">
						<div class="text-[16px] font-black text-blue-600">7</div>
						<div class="text-[8px] text-slate-500 font-medium">Pieces Cut</div>
					</div>
					<div class="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-200/60">
						<div class="text-[16px] font-black text-amber-600">5.8%</div>
						<div class="text-[8px] text-slate-500 font-medium">Scrap</div>
					</div>
				</div>
				<div class="mt-3 flex items-center justify-between px-1">
					<span class="text-[8.5px] text-slate-400">AI running in background · Order #SO-1182</span>
					<span class="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-[8px] font-semibold">Ready for Production</span>
				</div>
			</div>
		</div>

	{:else if activeTab === 'Financial & Accounting'}
		<!-- Financials Mockup -->
		<div>
			<div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
				<Search class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400 text-[10px]">Search accounts...</span>
			</div>
			<div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
				<h4 class="font-bold text-slate-800 text-sm">Profit & Loss Statement</h4>
				<span class="text-[9px] text-slate-400 font-medium">FY 2024-25 | April - June</span>
			</div>
			<div class="p-4 space-y-3">
				<div class="bg-emerald-50/50 rounded-lg p-3 border border-emerald-200/40">
					<div class="text-[9px] font-bold text-emerald-700 uppercase tracking-wider mb-2">Revenue</div>
					<div class="space-y-1.5 font-sans">
						<div class="flex justify-between text-[10px]">
							<span class="text-slate-600">Sales Revenue</span>
							<span class="text-emerald-700 font-semibold">₹24,56,000</span>
						</div>
						<div class="flex justify-between text-[10px]">
							<span class="text-slate-600">Service Income</span>
							<span class="text-emerald-700 font-semibold">₹3,82,000</span>
						</div>
						<div class="flex justify-between text-[10.5px] font-bold border-t border-emerald-200/50 pt-1.5 mt-1">
							<span class="text-slate-800">Total Revenue</span>
							<span class="text-emerald-700 font-semibold">₹28,38,000</span>
						</div>
					</div>
				</div>
				<div class="bg-rose-50/50 rounded-lg p-3 border border-rose-200/40">
					<div class="text-[9px] font-bold text-rose-700 uppercase tracking-wider mb-2 font-sans">Expenses</div>
					<div class="space-y-1.5 font-sans">
						<div class="flex justify-between text-[10px]">
							<span class="text-slate-600">Raw Materials</span>
							<span class="text-rose-600 font-semibold">₹12,45,000</span>
						</div>
						<div class="flex justify-between text-[10px]">
							<span class="text-slate-600">Labour Cost</span>
							<span class="text-rose-600 font-semibold">₹4,20,000</span>
						</div>
						<div class="flex justify-between text-[10px]">
							<span class="text-slate-600">Overhead & Admin</span>
							<span class="text-rose-600 font-semibold">₹2,85,000</span>
						</div>
						<div class="flex justify-between text-[10.5px] font-bold border-t border-rose-200/50 pt-1.5 mt-1">
							<span class="text-slate-800">Total Expenses</span>
							<span class="text-rose-600 font-semibold">₹19,50,000</span>
						</div>
					</div>
				</div>
				<div class="bg-blue-50 rounded-lg p-3 border border-blue-200/40 flex justify-between items-center">
					<span class="text-[11px] font-bold text-slate-800">Net Profit</span>
					<div class="text-right">
						<span class="text-lg font-black text-blue-700">₹8,88,000</span>
						<div class="text-[8px] text-emerald-600 font-semibold mt-0.5">↑ 12.4% vs last quarter</div>
					</div>
				</div>
			</div>
		</div>

	{:else if activeTab === 'HR & Payroll'}
		<!-- HR Mockup -->
		<div>
			<div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
				<Search class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400 text-[10px]">Search employees...</span>
			</div>
			<div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
				<h4 class="font-bold text-slate-800 text-sm">Payroll - June 2024</h4>
				<div class="flex gap-2">
					<span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[9px] font-semibold">Processed: 42</span>
					<span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-md text-[9px] font-semibold">Pending: 6</span>
				</div>
			</div>
			<div class="mx-4 mt-3 border border-slate-200 rounded-lg overflow-hidden mb-3">
				<div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-6 gap-1 text-[9px] font-semibold">
					<span class="col-span-2">Employee</span><span>Dept</span><span>Days</span><span>Gross (₹)</span><span>Net (₹)</span>
				</div>
				<div class="divide-y divide-slate-100">
					<div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
						<div class="col-span-2 flex items-center gap-2">
							<div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600">RS</div>
							<span class="text-slate-700 font-medium">Rajesh Singh</span>
						</div>
						<span class="text-slate-500">Production</span>
						<span class="text-slate-600">26</span>
						<span class="text-slate-600">28,000</span>
						<span class="text-emerald-600 font-semibold font-sans">24,650</span>
					</div>
					<div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-slate-50/50">
						<div class="col-span-2 flex items-center gap-2">
							<div class="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-[8px] font-bold text-purple-600">PM</div>
							<span class="text-slate-700 font-medium">Priya Mehta</span>
						</div>
						<span class="text-slate-500">Accounts</span>
						<span class="text-slate-600">24</span>
						<span class="text-slate-600">35,000</span>
						<span class="text-emerald-600 font-semibold font-sans">30,240</span>
					</div>
					<div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
						<div class="col-span-2 flex items-center gap-2">
							<div class="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-[8px] font-bold text-amber-600">AK</div>
							<span class="text-slate-700 font-medium">Amit Kumar</span>
						</div>
						<span class="text-slate-500">Sales</span>
						<span class="text-slate-600 font-sans">25</span>
						<span class="text-slate-600 font-sans">32,000</span>
						<span class="text-emerald-600 font-semibold font-sans">27,880</span>
					</div>
					<div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-slate-50/50">
						<div class="col-span-2 flex items-center gap-2">
							<div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[8px] font-bold text-emerald-600">SK</div>
							<span class="text-slate-700 font-medium">Sunita Kumari</span>
						</div>
						<span class="text-slate-500">HR</span>
						<span class="text-slate-600 font-sans">26</span>
						<span class="text-slate-600 font-sans">30,000</span>
						<span class="text-emerald-600 font-semibold font-sans">26,100</span>
					</div>
				</div>
			</div>
			<div class="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
				<span class="text-[9px] text-slate-400">Total Payroll: ₹12,45,000</span>
				<button type="button" class="px-3 py-1.5 bg-blue-600 text-white rounded-md text-[9px] font-semibold cursor-pointer">Process All</button>
			</div>
		</div>

	{:else if activeTab === 'OpEx Dashboard'}
		<!-- OpEx Mockup -->
		<div>
			<div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
				<Search class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400 text-[10px]">Search expenses...</span>
			</div>
			<div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
				<h4 class="font-bold text-slate-800 text-sm">OpEx Overview</h4>
				<span class="text-[9px] text-slate-400 font-medium font-sans">June 2024</span>
			</div>
			<div class="p-4 space-y-4">
				<div class="grid grid-cols-3 gap-3">
					<div class="bg-blue-50 rounded-lg p-3 text-center border border-blue-200/40">
						<div class="text-[15px] font-black text-blue-700">₹19.5L</div>
						<div class="text-[8px] text-slate-500 font-medium">Total OpEx</div>
					</div>
					<div class="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-200/40">
						<div class="text-[15px] font-black text-emerald-700">₹142</div>
						<div class="text-[8px] text-slate-500 font-medium">Cost / SqM</div>
					</div>
					<div class="bg-rose-50 rounded-lg p-3 text-center border border-rose-200/40">
						<div class="text-[15px] font-black text-rose-600">₹38K</div>
						<div class="text-[8px] text-slate-500 font-medium">Breakage Loss</div>
					</div>
				</div>
				<div class="bg-slate-50 rounded-lg p-3 border border-slate-200/40 font-sans">
					<div class="text-[9px] font-bold text-slate-600 mb-2">Expense Breakdown</div>
					<div class="space-y-2">
						<div class="flex items-center gap-2">
							<div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full" style="width: 64%"></div></div>
							<span class="text-[8px] text-slate-600 font-medium w-28 text-right font-sans">Raw Material ₹12.4L</span>
						</div>
						<div class="flex items-center gap-2">
							<div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-amber-500 h-2 rounded-full" style="width: 22%"></div></div>
							<span class="text-[8px] text-slate-600 font-medium w-28 text-right font-sans">Labour ₹4.2L</span>
						</div>
						<div class="flex items-center gap-2">
							<div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-purple-500 h-2 rounded-full" style="width: 10%"></div></div>
							<span class="text-[8px] text-slate-600 font-medium w-28 text-right font-sans">Power ₹1.9L</span>
						</div>
						<div class="flex items-center gap-2">
							<div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-rose-500 h-2 rounded-full" style="width: 8%"></div></div>
							<span class="text-[8px] text-slate-600 font-medium w-28 text-right font-sans">Consumables ₹1.0L</span>
						</div>
					</div>
				</div>
				<div class="bg-amber-50 border border-amber-200/50 rounded-lg p-2.5 flex items-center justify-between">
					<span class="text-[9px] font-semibold text-amber-700 font-sans">⚠ Power budget 92% utilized</span>
					<span class="text-[8px] text-amber-600 font-medium cursor-pointer">View Detail</span>
				</div>
			</div>
		</div>

	{:else if activeTab === 'Production & Tracking'}
		<!-- Production & Tracking Mockup -->
		<div>
			<div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
				<Search class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400 text-[10px]">Search jobs...</span>
			</div>
			<div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
				<h4 class="font-bold text-slate-800 text-sm">Production Board</h4>
				<div class="flex gap-2">
					<span class="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-[9px] font-semibold font-sans">Active: 12</span>
					<span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-md text-[9px] font-semibold font-sans">Pending: 8</span>
				</div>
			</div>
			<div class="p-4 grid grid-cols-3 gap-3 font-sans">
				<div class="space-y-2">
					<div class="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
						<div class="w-2 h-2 rounded-full bg-amber-400"></div> Pending
					</div>
					<div class="bg-amber-50/60 border border-amber-200/50 rounded-lg p-2.5 space-y-1.5 font-sans">
						<div class="text-[9.5px] font-semibold text-slate-700 font-sans">JOB-0456</div>
						<div class="text-[8.5px] text-slate-500 font-sans">Clear Glass 5mm × 12 pcs</div>
						<div class="flex items-center gap-1.5 mt-1 font-sans">
							<div class="w-4 h-4 rounded-full bg-slate-300"></div>
							<span class="text-[8px] text-slate-400 font-sans">Unassigned</span>
						</div>
					</div>
					<div class="bg-amber-50/60 border border-amber-200/50 rounded-lg p-2.5 space-y-1.5">
						<div class="text-[9.5px] font-semibold text-slate-700">JOB-0457</div>
						<div class="text-[8.5px] text-slate-500">Toughened 8mm × 6 pcs</div>
						<div class="flex items-center gap-1.5 mt-1">
							<div class="w-4 h-4 rounded-full bg-slate-300"></div>
							<span class="text-[8px] text-slate-400 font-sans">Unassigned</span>
						</div>
					</div>
				</div>
				<div class="space-y-2">
					<div class="text-[9px] font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
						<div class="w-2 h-2 rounded-full bg-blue-400"></div> In Progress
					</div>
					<div class="bg-blue-50/60 border border-blue-200/50 rounded-lg p-2.5 space-y-1.5">
						<div class="text-[9.5px] font-semibold text-slate-700">JOB-0453</div>
						<div class="text-[8.5px] text-slate-500">Laminated Glass × 8 pcs</div>
						<div class="flex items-center gap-1.5 mt-1">
							<div class="w-4 h-4 rounded-full bg-blue-400"></div>
							<span class="text-[8px] text-slate-600 font-medium">Ramesh K.</span>
						</div>
						<div class="w-full bg-slate-200 rounded-full h-1 mt-1.5">
							<div class="bg-blue-500 h-1 rounded-full" style="width: 65%"></div>
						</div>
					</div>
					<div class="bg-blue-50/60 border border-blue-200/50 rounded-lg p-2.5 space-y-1.5">
						<div class="text-[9.5px] font-semibold text-slate-700">JOB-0454</div>
						<div class="text-[8.5px] text-slate-500">Mirror Cut × 4 pcs</div>
						<div class="flex items-center gap-1.5 mt-1">
							<div class="w-4 h-4 rounded-full bg-emerald-400"></div>
							<span class="text-[8px] text-slate-600 font-medium font-sans">Sunil P.</span>
						</div>
						<div class="w-full bg-slate-200 rounded-full h-1 mt-1.5">
							<div class="bg-blue-500 h-1 rounded-full" style="width: 30%"></div>
						</div>
					</div>
				</div>
				<div class="space-y-2 font-sans">
					<div class="text-[9px] font-bold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
						<div class="w-2 h-2 rounded-full bg-emerald-400"></div> Completed
					</div>
					<div class="bg-emerald-50/60 border border-emerald-200/50 rounded-lg p-2.5 space-y-1.5">
						<div class="text-[9.5px] font-semibold text-slate-700">JOB-0450</div>
						<div class="text-[8.5px] text-slate-500">Clear Glass 4mm × 20 pcs</div>
						<div class="flex items-center justify-between mt-1">
							<span class="text-[8px] text-emerald-600 font-semibold">✓ Complete</span>
						</div>
					</div>
					<div class="bg-emerald-50/60 border border-emerald-200/50 rounded-lg p-2.5 space-y-1.5">
						<div class="text-[9.5px] font-semibold text-slate-700">JOB-0451</div>
						<div class="text-[8.5px] text-slate-500">Frosted Glass × 10 pcs</div>
						<div class="flex items-center justify-between mt-1">
							<span class="text-[8px] text-emerald-600 font-semibold font-sans">✓ Complete</span>
						</div>
					</div>
				</div>
			</div>
		</div>

	{:else if activeTab === 'Quotation'}
		<!-- Quotations Mockup -->
		<div>
			<div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
				<Search class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400 text-[10px]">Search anything...</span>
			</div>
			<div class="px-4 py-2 border-b border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400">
				<span>...</span>
				<ChevronRight class="h-2.5 w-2.5" />
				<span class="text-slate-600 font-medium">New Quotation</span>
			</div>
			<div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
				<h4 class="font-bold text-slate-800 text-sm">New Quotation</h4>
				<span class="text-slate-400 text-[10px] cursor-pointer hover:text-slate-600">Cancel</span>
			</div>
			<div class="grid grid-cols-2 divide-x divide-slate-100 font-sans">
				<div class="p-4 space-y-3">
					<div class="text-[10px] font-semibold text-slate-500 mb-2">Client Details</div>
					<div class="space-y-2">
						<div class="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 rounded-md border border-slate-200/60">
							<User class="h-3 w-3 text-slate-400" />
							<span class="text-slate-600">Future Tech Solutions Pvt. Ltd.</span>
						</div>
						<div class="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 rounded-md border border-slate-200/60">
							<User class="h-3 w-3 text-slate-400" />
							<span class="text-slate-600">Rahul Sharma</span>
						</div>
						<div class="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 rounded-md border border-slate-200/60 overflow-hidden min-w-0">
							<Mail class="h-3 w-3 text-slate-400 shrink-0" />
							<span class="text-slate-500 truncate min-w-0 font-sans">rahul.sharma@futuretech.com</span>
						</div>
						<div class="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 rounded-md border border-slate-200/60 font-sans">
							<Phone class="h-3 w-3 text-slate-400" />
							<span class="text-slate-500">+91 98765 43210</span>
						</div>
					</div>
				</div>
				<div class="p-4 space-y-3 font-sans">
					<div class="text-[10px] font-semibold text-slate-500 mb-2 font-sans">Quotation Details</div>
					<div class="space-y-2 col-span-1">
						<div class="flex items-center justify-between text-[10px]">
							<span class="text-slate-500 font-sans">Quotation No. *</span>
							<span class="font-mono text-slate-700 font-medium">QUO/24-25/00125</span>
						</div>
						<div class="flex items-center justify-between text-[10px]">
							<span class="text-slate-500 font-sans">Valid Till *</span>
							<span class="text-slate-700 font-medium">23/06/2024</span>
						</div>
						<div class="flex items-center justify-between text-[10px]">
							<span class="text-slate-500">Currency</span>
							<span class="text-slate-700 font-medium">INR - Indian Rupee</span>
						</div>
						<div class="flex items-center justify-between text-[10px]">
							<span class="text-slate-500">Sales Executive</span>
							<span class="text-slate-700 font-medium">Arjun Mehta</span>
						</div>
					</div>
				</div>
			</div>
			<div class="mx-4 border border-slate-200 rounded-lg overflow-hidden mb-3 font-sans">
				<div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-7 gap-1 text-[9px] font-semibold">
					<span class="col-span-2 font-sans">Item Name</span>
					<span>HSN/SAC</span>
					<span>Qty</span>
					<span>Rate (₹)</span>
					<span>Disc</span>
					<span>Amount (₹)</span>
				</div>
				<div class="divide-y divide-slate-100 font-sans">
					<div class="px-3 py-2 grid grid-cols-7 gap-1 text-[9.5px]">
						<span class="col-span-2 text-slate-700 font-medium">Wireless Mouse</span>
						<span class="text-slate-500">84716060</span>
						<span class="text-slate-600">10</span>
						<span class="text-slate-600">450.00</span>
						<span class="text-slate-500">0.00</span>
						<span class="text-slate-800 font-semibold">4,500.00</span>
					</div>
					<div class="px-3 py-2 grid grid-cols-7 gap-1 text-[9.5px] bg-blue-50/30">
						<span class="col-span-2 text-slate-700 font-medium">Wireless Keyboard</span>
						<span class="text-slate-500">84716060</span>
						<span class="text-slate-600">10</span>
						<span class="text-slate-600 opacity-90">900.00</span>
						<span class="text-blue-600">5.00%</span>
						<span class="text-slate-800 font-semibold font-sans">8,550.00</span>
					</div>
					<div class="px-3 py-2 grid grid-cols-7 gap-1 text-[9.5px]">
						<span class="col-span-2 text-slate-700 font-medium font-sans">USB-C Hub</span>
						<span class="text-slate-500 font-sans">84718090</span>
						<span class="text-slate-600">5</span>
						<span class="text-slate-600">1,200.00</span>
						<span class="text-slate-500">0.00</span>
						<span class="text-slate-800 font-semibold">6,000.00</span>
					</div>
				</div>
			</div>
			<div class="px-4 py-3 border-t border-slate-100 grid grid-cols-2 gap-4 font-sans mb-1">
				<div>
					<div class="text-[9px] font-semibold text-slate-500 mb-1.5">Terms & Conditions</div>
					<div class="text-[8.5px] text-slate-400 space-y-0.5 leading-relaxed">
						<p>1. Prices are inclusive of all taxes.</p>
						<p>2. Payment Terms: 100% Advance.</p>
					</div>
				</div>
				<div class="text-right space-y-1 font-sans">
					<div class="flex justify-between text-[9.5px]">
						<span class="text-slate-400">Subtotal</span>
						<span class="text-slate-700 font-medium font-sans">₹19,050.00</span>
					</div>
					<div class="flex justify-between text-[9.5px]">
						<span class="text-slate-400">GST (18%)</span>
						<span class="text-slate-700 font-medium font-sans">₹3,429.00</span>
					</div>
					<div class="flex justify-between text-[10px] font-bold border-t border-slate-200 pt-1 mt-1 font-sans">
						<span class="text-slate-600 font-sans">Grand Total</span>
						<span class="text-emerald-600 font-semibold font-sans">₹22,479.00</span>
					</div>
				</div>
			</div>
		</div>

	{:else if activeTab === 'Sales & Purchase'}
		<!-- Sales & Purchase Mockup -->
		<div>
			<div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
				<Search class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400 text-[10px]">Search orders...</span>
			</div>
			<div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between font-sans">
				<h4 class="font-bold text-slate-800 text-sm">Sales & Purchase Dashboard</h4>
				<span class="text-[9px] text-slate-400 font-medium">This Month</span>
			</div>
			<div class="p-4 space-y-3 font-sans">
				<div class="grid grid-cols-2 gap-3">
					<div class="bg-emerald-50/50 rounded-lg p-3 border border-emerald-200/40">
						<div class="text-[9px] font-bold text-emerald-700 uppercase tracking-wider mb-1">Sales</div>
						<div class="text-[16px] font-black text-emerald-700">₹18.5L</div>
						<div class="text-[8px] text-slate-500 font-sans">156 orders</div>
					</div>
					<div class="bg-rose-50/50 rounded-lg p-3 border border-rose-200/40">
						<div class="text-[9px] font-bold text-rose-700 uppercase tracking-wider mb-1">Purchases</div>
						<div class="text-[16px] font-black text-rose-600">₹9.2L</div>
						<div class="text-[8px] text-slate-500 font-sans font-medium">34 POs</div>
					</div>
				</div>
				<div class="border border-slate-200 rounded-lg overflow-hidden font-sans">
					<div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-5 gap-1 text-[9px] font-semibold">
						<span class="col-span-2 font-sans font-semibold">Client / Vendor</span>
						<span>Type</span>
						<span>Amount</span>
						<span>Status</span>
					</div>
					<div class="divide-y divide-slate-100 font-sans">
						<div class="px-3 py-2 grid grid-cols-5 gap-1 text-[9.5px] items-center">
							<span class="col-span-2 text-slate-700 font-medium">Future Tech Pvt Ltd</span>
							<span class="text-slate-500">Sale</span>
							<span class="text-slate-700">₹4,20,000</span>
							<span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit">Confirmed</span>
						</div>
						<div class="px-3 py-2 grid grid-cols-5 gap-1 text-[9.5px] items-center bg-slate-50/40 font-sans">
							<span class="col-span-2 text-slate-700 font-medium">AGC Glass Suppliers</span>
							<span class="text-slate-500">Purchase</span>
							<span class="text-slate-700 font-sans font-semibold">₹2,80,000</span>
							<span class="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded text-[8px] font-semibold w-fit font-sans">Pending GRN</span>
						</div>
						<div class="px-3 py-2 grid grid-cols-5 gap-1 text-[9.5px] items-center">
							<span class="col-span-2 text-slate-700 font-medium">BuildRight Interiors</span>
							<span class="text-slate-500">Sale</span>
							<span class="text-slate-700">₹2,60,000</span>
							<span class="px-1.5 py-0.5 bg-red-50 text-red-600 rounded text-[8px] font-semibold w-fit">Credit Hold</span>
						</div>
					</div>
				</div>
				<button class="w-full px-3 py-2 bg-blue-600 text-white rounded-md text-[9px] font-semibold cursor-pointer">New Purchase Order</button>
			</div>
		</div>

	{:else if activeTab === 'Inventory'}
		<!-- Inventory Mockup -->
		<div>
			<div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
				<Search class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400 text-[10px]">Search inventory...</span>
			</div>
			<div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between font-sans">
				<h4 class="font-bold text-slate-800 text-sm">Stock Overview</h4>
				<div class="flex gap-2">
					<span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[9px] font-semibold leading-none">In Stock: 1,245</span>
					<span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-md text-[9px] font-semibold leading-none">Low: 23</span>
					<span class="px-2 py-1 bg-red-50 text-red-600 rounded-md text-[9px] font-semibold leading-none">Out: 5</span>
				</div>
			</div>
			<div class="mx-4 mt-3 border border-slate-200 rounded-lg overflow-hidden mb-3 font-sans">
				<div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-6 gap-1 text-[9px] font-semibold">
					<span class="col-span-2">Material</span>
					<span>Category</span>
					<span>In Stock</span>
					<span>Min Qty</span>
					<span>Status</span>
				</div>
				<div class="divide-y divide-slate-100 font-sans">
					<div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
						<span class="col-span-2 text-slate-700 font-medium">Clear Float Glass 5mm</span>
						<span class="text-slate-500 font-normal">Glass</span>
						<span class="text-slate-600 font-medium">450 sqft</span>
						<span class="text-slate-500">100 sqft</span>
						<span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit leading-none">In Stock</span>
					</div>
					<div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-amber-50/30">
						<span class="col-span-2 text-slate-700 font-medium">Toughened Glass 8mm</span>
						<span class="text-slate-500">Glass</span>
						<span class="text-amber-600 font-semibold font-sans">45 sqft</span>
						<span class="text-slate-500 font-sans">50 sqft</span>
						<span class="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded text-[8px] font-semibold w-fit leading-none">Low Stock</span>
					</div>
					<div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
						<span class="col-span-2 text-slate-700 font-medium">Aluminium Profile 40mm</span>
						<span class="text-slate-500 font-normal">Hardware</span>
						<span class="text-slate-600 font-medium font-sans">320 pcs</span>
						<span class="text-slate-500">50 pcs</span>
						<span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit leading-none">In Stock</span>
					</div>
					<div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-red-50/20 font-sans">
						<span class="col-span-2 text-slate-700 font-medium">Mirror Glass 4mm</span>
						<span class="text-slate-500">Glass</span>
						<span class="text-red-600 font-semibold font-sans font-bold">0 sqft</span>
						<span class="text-slate-500">80 sqft</span>
						<span class="px-1.5 py-0.5 bg-red-50 text-red-600 rounded text-[8px] font-semibold w-fit leading-none">Out of Stock</span>
					</div>
					<div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center font-sans">
						<span class="col-span-2 text-slate-700 font-medium">Silicone Sealant</span>
						<span class="text-slate-500">Consumable</span>
						<span class="text-slate-600 font-medium">125 tubes</span>
						<span class="text-slate-500">20 tubes</span>
						<span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit leading-none">In Stock</span>
					</div>
				</div>
			</div>
			<div class="px-4 py-3 border-t border-slate-100 flex items-center justify-between font-sans">
				<span class="text-[9px] text-slate-400">Last synced: 2 min ago</span>
				<button class="px-3 py-1.5 bg-blue-600 text-white rounded-md text-[9px] font-semibold cursor-pointer">+ Add Stock</button>
			</div>
		</div>
	{/if}
</div>
