<script lang="ts">
  import { Monitor } from 'lucide-svelte';

  const screens = [
    {
      url: 'app.bomaxerp.in/quotations',
      label: 'Quotation Screen',
      caption: 'Smart quoting with auto-calculation',
      accent: 'bg-blue-600',
    },
    {
      url: 'app.bomaxerp.in/inventory',
      label: 'Inventory Screen',
      caption: 'Real-time stock tracking & alerts',
      accent: 'bg-emerald-600',
    },
    {
      url: 'app.bomaxerp.in/production',
      label: 'Production Screen',
      caption: 'Job cards & production tracking',
      accent: 'bg-indigo-600',
    },
    {
      url: 'app.bomaxerp.in/reports',
      label: 'Reports Screen',
      caption: 'Analytics & business insights',
      accent: 'bg-amber-600',
    },
  ];
</script>

<!-- Software Screens Section -->
<section
  id="screens"
  class="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
>
  <!-- Subtle background pattern -->
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Section Header -->
    <div class="text-center mb-14 sm:mb-16 lg:mb-20">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 mb-6 shadow-sm">
        <Monitor class="h-3.5 w-3.5" />
        <span class="text-xs font-bold font-jakarta tracking-wide">Software Screens</span>
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-tight font-heading mb-5">
        See Bomax ERP in Action
      </h2>

      <p class="text-sm sm:text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
        Real dashboard screenshots from the Bomax ERP platform — built for the glass industry.
      </p>
    </div>

    <!-- Screens Row — scrollable on mobile, row on desktop -->
    <div class="relative">
      <!-- Fade-out right edge -->
      <div class="absolute right-0 top-0 bottom-6 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden sm:block"></div>

      <div class="flex gap-5 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">

        <!-- ── Screen 1: Quotation ─────────────────── -->
        <div class="snap-start flex-shrink-0 w-[82vw] sm:w-[60vw] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col screen-card">
          <!-- Browser Chrome -->
          <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 flex flex-col">
            <div class="bg-slate-900 px-3 py-2.5 flex items-center gap-2 flex-shrink-0">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
              </div>
              <div class="flex-1 bg-slate-800 rounded-md px-3 py-1 flex items-center">
                <span class="text-slate-400 text-[9px] font-mono truncate">{screens[0].url}</span>
              </div>
            </div>
            <!-- Screen Content: Quotation -->
            <div class="bg-white flex overflow-hidden" style="height: 320px;">
              <!-- Sidebar -->
              <div class="bg-slate-900 w-12 flex-shrink-0 flex flex-col items-center pt-3 gap-3">
                <div class="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
                  <span class="text-white text-[7px] font-black">B</span>
                </div>
                {#each [['#3b82f6','bg-blue-600/20'], ['transparent',''], ['transparent',''], ['transparent',''], ['transparent',''], ['transparent',''], ['transparent','']] as [_, act], i}
                  <div class="w-8 h-6 rounded-md {i === 0 ? 'bg-blue-600/20' : 'hover:bg-slate-800'} flex items-center justify-center">
                    <div class="w-3 h-0.5 bg-slate-{i === 0 ? '300' : '600'} rounded"></div>
                  </div>
                {/each}
              </div>
              <!-- Main Quotation Content -->
              <div class="flex-1 flex flex-col overflow-hidden text-[8px] font-sans">
                <!-- Top bar -->
                <div class="bg-white border-b border-slate-200 px-3 py-1.5 flex items-center justify-between flex-shrink-0">
                  <span class="font-extrabold text-slate-800 text-[9px]">New Quotation</span>
                  <div class="flex gap-1.5">
                    <span class="px-1.5 py-0.5 bg-slate-100 rounded text-slate-500">Save</span>
                    <span class="px-1.5 py-0.5 bg-blue-600 text-white rounded">Submit</span>
                  </div>
                </div>
                <!-- Quotation meta info -->
                <div class="px-3 py-2 border-b border-slate-100 grid grid-cols-2 gap-2 flex-shrink-0">
                  <div>
                    <div class="text-[7px] text-slate-400 mb-0.5">Quotation No.</div>
                    <div class="font-bold text-slate-700 text-[8px]">QT-2024-00085</div>
                  </div>
                  <div>
                    <div class="text-[7px] text-slate-400 mb-0.5">Customer</div>
                    <div class="font-bold text-blue-600 text-[8px] truncate">Future Tech Solutions</div>
                  </div>
                  <div>
                    <div class="text-[7px] text-slate-400 mb-0.5">Valid Till</div>
                    <div class="font-semibold text-slate-600 text-[8px]">30/06/2024</div>
                  </div>
                  <div>
                    <div class="text-[7px] text-slate-400 mb-0.5">Sales Executive</div>
                    <div class="font-semibold text-slate-600 text-[8px]">Arjun Mehta</div>
                  </div>
                </div>
                <!-- Items table header -->
                <div class="bg-slate-800 text-white px-3 py-1 grid font-semibold text-[7px] flex-shrink-0" style="grid-template-columns: 2fr 0.8fr 0.8fr 0.8fr 1fr;">
                  <span>Item Name</span>
                  <span>Qty</span>
                  <span>Rate</span>
                  <span>Disc</span>
                  <span class="text-right">Amount</span>
                </div>
                <!-- Items rows -->
                <div class="divide-y divide-slate-100 overflow-hidden flex-shrink-0">
                  {#each [
                    ['Clear Float Glass 6mm', '25 Sqft', '₹85', '—', '₹2,125'],
                    ['Toughened Glass 10mm', '12 Sqft', '₹220', '5%', '₹2,508'],
                    ['Aluminium Channel', '8 Nos', '₹380', '—', '₹3,040'],
                    ['Silicon Sealant 300ml', '5 Nos', '₹120', '—', '₹600'],
                  ] as [nm, qt, rt, dc, am]}
                    <div class="px-3 py-1.5 grid gap-1 items-center text-[7.5px]" style="grid-template-columns: 2fr 0.8fr 0.8fr 0.8fr 1fr;">
                      <span class="text-slate-700 font-semibold truncate">{nm}</span>
                      <span class="text-slate-500">{qt}</span>
                      <span class="text-slate-600">{rt}</span>
                      <span class="text-blue-600 font-medium">{dc}</span>
                      <span class="text-slate-800 font-bold text-right">{am}</span>
                    </div>
                  {/each}
                </div>
                <!-- Totals -->
                <div class="mt-auto border-t border-slate-200 px-3 py-2 flex justify-between items-end flex-shrink-0">
                  <div class="text-[7px] text-slate-400 space-y-0.5">
                    <div>1. GST included in all prices</div>
                    <div>2. Payment: 50% Advance</div>
                  </div>
                  <div class="text-right space-y-0.5">
                    <div class="flex gap-4 text-[7.5px] text-slate-500"><span>Subtotal</span><span class="font-semibold">₹8,273</span></div>
                    <div class="flex gap-4 text-[7.5px] text-slate-500"><span>GST 18%</span><span class="font-semibold">₹1,489</span></div>
                    <div class="flex gap-4 text-[8px] font-extrabold text-emerald-600 border-t border-slate-200 pt-0.5"><span>Total</span><span>₹9,762</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Caption -->
          <div class="mt-4 text-center">
            <div class="text-[13.5px] font-bold text-slate-900 font-heading">{screens[0].label}</div>
            <div class="text-[12px] text-slate-500 font-medium mt-0.5">{screens[0].caption}</div>
          </div>
        </div>

        <!-- ── Screen 2: Inventory ─────────────────── -->
        <div class="snap-start flex-shrink-0 w-[82vw] sm:w-[60vw] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col screen-card" style="animation-delay: 100ms;">
          <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 flex flex-col">
            <div class="bg-slate-900 px-3 py-2.5 flex items-center gap-2 flex-shrink-0">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
              </div>
              <div class="flex-1 bg-slate-800 rounded-md px-3 py-1">
                <span class="text-slate-400 text-[9px] font-mono">{screens[1].url}</span>
              </div>
            </div>
            <!-- Screen Content: Inventory -->
            <div class="bg-slate-50 flex overflow-hidden" style="height: 320px;">
              <!-- Sidebar -->
              <div class="bg-slate-900 w-12 flex-shrink-0 flex flex-col items-center pt-3 gap-3">
                <div class="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center">
                  <span class="text-white text-[7px] font-black">B</span>
                </div>
                {#each Array(7) as _, i}
                  <div class="w-8 h-6 rounded-md {i === 1 ? 'bg-emerald-600/20' : ''} flex items-center justify-center">
                    <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                  </div>
                {/each}
              </div>
              <!-- Main content -->
              <div class="flex-1 flex flex-col overflow-hidden text-[8px] p-3 gap-2">
                <!-- KPI row -->
                <div class="grid grid-cols-3 gap-2 flex-shrink-0">
                  <div class="bg-white rounded-lg p-2 border border-slate-200/60 shadow-sm">
                    <div class="text-[7px] text-slate-400 mb-0.5">Total Stock</div>
                    <div class="text-[12px] font-black text-emerald-600">₹24.5L</div>
                    <div class="text-[6.5px] text-emerald-600 font-semibold">↑ 8.2%</div>
                  </div>
                  <div class="bg-white rounded-lg p-2 border border-amber-200/40 shadow-sm bg-amber-50/30">
                    <div class="text-[7px] text-slate-400 mb-0.5">Low Stock</div>
                    <div class="text-[12px] font-black text-amber-600">23</div>
                    <div class="text-[6.5px] text-amber-600 font-semibold">items</div>
                  </div>
                  <div class="bg-white rounded-lg p-2 border border-red-200/40 shadow-sm bg-red-50/20">
                    <div class="text-[7px] text-slate-400 mb-0.5">Out of Stock</div>
                    <div class="text-[12px] font-black text-red-600">5</div>
                    <div class="text-[6.5px] text-red-600 font-semibold">items</div>
                  </div>
                </div>
                <!-- Charts row -->
                <div class="grid grid-cols-2 gap-2 flex-shrink-0">
                  <!-- Bar chart mini -->
                  <div class="bg-white rounded-lg p-2 border border-slate-200/60 shadow-sm">
                    <div class="text-[7px] font-bold text-slate-600 mb-1.5">Stock Movement</div>
                    <div class="flex items-end gap-1 h-10">
                      {#each [38,52,45,68,55,72,61] as h}
                        <div class="flex-1 bg-emerald-400 rounded-t" style="height: {h}%;"></div>
                      {/each}
                    </div>
                    <div class="flex justify-between text-[6px] text-slate-400 mt-1">
                      <span>Mon</span><span>Fri</span>
                    </div>
                  </div>
                  <!-- Donut chart mini -->
                  <div class="bg-white rounded-lg p-2 border border-slate-200/60 shadow-sm flex items-center gap-2">
                    <div class="flex-shrink-0">
                      <svg class="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="12" fill="transparent" stroke="#3b82f6" stroke-width="6" stroke-dasharray="33.6 75.4" stroke-dashoffset="0" />
                        <circle cx="18" cy="18" r="12" fill="transparent" stroke="#10b981" stroke-width="6" stroke-dasharray="22.6 75.4" stroke-dashoffset="-33.6" />
                        <circle cx="18" cy="18" r="12" fill="transparent" stroke="#f59e0b" stroke-width="6" stroke-dasharray="13.6 75.4" stroke-dashoffset="-56.2" />
                        <circle cx="18" cy="18" r="12" fill="transparent" stroke="#e2e8f0" stroke-width="6" stroke-dasharray="5.6 75.4" stroke-dashoffset="-69.8" />
                      </svg>
                    </div>
                    <div class="space-y-1">
                      <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 block flex-shrink-0"></span><span class="text-[6.5px] text-slate-500">Glass</span></div>
                      <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 block flex-shrink-0"></span><span class="text-[6.5px] text-slate-500">Hardware</span></div>
                      <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-400 block flex-shrink-0"></span><span class="text-[6.5px] text-slate-500">Consumables</span></div>
                    </div>
                  </div>
                </div>
                <!-- Table header -->
                <div class="bg-slate-800 text-white px-2 py-1 grid font-semibold text-[6.5px] rounded-t-lg flex-shrink-0" style="grid-template-columns: 2fr 0.8fr 0.8fr 0.8fr;">
                  <span>Material</span><span>Category</span><span>Stock</span><span>Status</span>
                </div>
                <div class="divide-y divide-slate-100 overflow-hidden flex-shrink-0 rounded-b-lg border border-t-0 border-slate-200/60">
                  {#each [
                    ['Clear Float 5mm', 'Glass', '450 sqft', 'In Stock', 'emerald'],
                    ['Toughened 8mm', 'Glass', '45 sqft', 'Low Stock', 'amber'],
                    ['Alum. Profile', 'Hardware', '320 pcs', 'In Stock', 'emerald'],
                  ] as [nm, cat, qty, st, col]}
                    <div class="px-2 py-1.5 grid items-center text-[7px] bg-white" style="grid-template-columns: 2fr 0.8fr 0.8fr 0.8fr;">
                      <span class="text-slate-700 font-medium truncate">{nm}</span>
                      <span class="text-slate-400">{cat}</span>
                      <span class="text-slate-600 font-semibold">{qty}</span>
                      <span class="px-1 py-0.5 rounded text-[6px] font-bold bg-{col}-50 text-{col}-700 w-fit">{st}</span>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 text-center">
            <div class="text-[13.5px] font-bold text-slate-900 font-heading">{screens[1].label}</div>
            <div class="text-[12px] text-slate-500 font-medium mt-0.5">{screens[1].caption}</div>
          </div>
        </div>

        <!-- ── Screen 3: Production ────────────────── -->
        <div class="snap-start flex-shrink-0 w-[82vw] sm:w-[60vw] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col screen-card" style="animation-delay: 200ms;">
          <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 flex flex-col">
            <div class="bg-slate-900 px-3 py-2.5 flex items-center gap-2 flex-shrink-0">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
              </div>
              <div class="flex-1 bg-slate-800 rounded-md px-3 py-1">
                <span class="text-slate-400 text-[9px] font-mono">{screens[2].url}</span>
              </div>
            </div>
            <!-- Screen Content: Production -->
            <div class="bg-slate-50 flex overflow-hidden" style="height: 320px;">
              <!-- Sidebar -->
              <div class="bg-indigo-900 w-12 flex-shrink-0 flex flex-col items-center pt-3 gap-3">
                <div class="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
                  <span class="text-white text-[7px] font-black">B</span>
                </div>
                {#each Array(7) as _, i}
                  <div class="w-8 h-6 rounded-md {i === 2 ? 'bg-indigo-600/40' : ''} flex items-center justify-center">
                    <div class="w-3 h-0.5 bg-indigo-700 rounded"></div>
                  </div>
                {/each}
              </div>
              <!-- Main content -->
              <div class="flex-1 flex flex-col overflow-hidden text-[8px] p-3 gap-2">
                <!-- Header -->
                <div class="flex items-center justify-between flex-shrink-0">
                  <span class="font-extrabold text-slate-900 text-[9px]">Production Plan</span>
                  <div class="flex gap-1.5">
                    <span class="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[7px] font-semibold">Active: 12</span>
                    <span class="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded text-[7px] font-semibold">Pending: 8</span>
                    <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[7px] font-semibold">Done: 34</span>
                  </div>
                </div>
                <!-- Kanban columns -->
                <div class="grid grid-cols-3 gap-2 flex-1 overflow-hidden">
                  <!-- Pending -->
                  <div class="flex flex-col gap-1.5 overflow-hidden">
                    <div class="text-[7px] font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-amber-400 block"></span> Pending
                    </div>
                    {#each [['JOB-0456','Clear 5mm × 12'],['JOB-0457','Tough 8mm × 6']] as [id, nm]}
                      <div class="bg-amber-50/80 border border-amber-200/60 rounded-lg p-2 space-y-1 flex-shrink-0">
                        <div class="text-[7.5px] font-bold text-slate-700">{id}</div>
                        <div class="text-[7px] text-slate-500 truncate">{nm}</div>
                        <div class="flex items-center gap-1"><div class="w-3 h-3 rounded-full bg-slate-300"></div><span class="text-[7px] text-slate-400">Unassigned</span></div>
                      </div>
                    {/each}
                  </div>
                  <!-- In Progress -->
                  <div class="flex flex-col gap-1.5 overflow-hidden">
                    <div class="text-[7px] font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-400 block"></span> In Progress
                    </div>
                    {#each [['JOB-0453','Laminated × 8',65,'Ramesh K.'],['JOB-0454','Mirror Cut × 4',30,'Sunil P.']] as [id, nm, pct, who]}
                      <div class="bg-blue-50/80 border border-blue-200/60 rounded-lg p-2 space-y-1 flex-shrink-0">
                        <div class="text-[7.5px] font-bold text-slate-700">{id}</div>
                        <div class="text-[7px] text-slate-500 truncate">{nm}</div>
                        <div class="flex items-center gap-1"><div class="w-3 h-3 rounded-full bg-blue-400"></div><span class="text-[7px] text-slate-600 font-medium">{who}</span></div>
                        <div class="w-full bg-slate-200 rounded-full h-1"><div class="bg-blue-500 h-1 rounded-full" style="width: {pct}%"></div></div>
                      </div>
                    {/each}
                  </div>
                  <!-- Done -->
                  <div class="flex flex-col gap-1.5 overflow-hidden">
                    <div class="text-[7px] font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 block"></span> Completed
                    </div>
                    {#each [['JOB-0450','Clear 4mm × 20'],['JOB-0451','Frosted × 10']] as [id, nm]}
                      <div class="bg-emerald-50/80 border border-emerald-200/60 rounded-lg p-2 space-y-1 flex-shrink-0">
                        <div class="text-[7.5px] font-bold text-slate-700">{id}</div>
                        <div class="text-[7px] text-slate-500 truncate">{nm}</div>
                        <div class="text-[7px] text-emerald-600 font-bold">✓ Complete</div>
                      </div>
                    {/each}
                  </div>
                </div>
                <!-- Bottom bar -->
                <div class="border-t border-slate-200 pt-2 flex items-center justify-between flex-shrink-0">
                  <span class="text-[7px] text-slate-400">54 total jobs this month</span>
                  <button class="px-2 py-1 bg-indigo-600 text-white rounded text-[7px] font-semibold">+ New Job</button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 text-center">
            <div class="text-[13.5px] font-bold text-slate-900 font-heading">{screens[2].label}</div>
            <div class="text-[12px] text-slate-500 font-medium mt-0.5">{screens[2].caption}</div>
          </div>
        </div>

        <!-- ── Screen 4: Reports ───────────────────── -->
        <div class="snap-start flex-shrink-0 w-[82vw] sm:w-[60vw] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col screen-card" style="animation-delay: 300ms;">
          <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 flex flex-col">
            <div class="bg-slate-900 px-3 py-2.5 flex items-center gap-2 flex-shrink-0">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
              </div>
              <div class="flex-1 bg-slate-800 rounded-md px-3 py-1">
                <span class="text-slate-400 text-[9px] font-mono">{screens[3].url}</span>
              </div>
            </div>
            <!-- Screen Content: Reports -->
            <div class="bg-white flex overflow-hidden" style="height: 320px;">
              <!-- Sidebar -->
              <div class="bg-slate-900 w-12 flex-shrink-0 flex flex-col items-center pt-3 gap-3">
                <div class="w-6 h-6 rounded-md bg-amber-500 flex items-center justify-center">
                  <span class="text-white text-[7px] font-black">B</span>
                </div>
                {#each Array(7) as _, i}
                  <div class="w-8 h-6 rounded-md {i === 6 ? 'bg-amber-500/20' : ''} flex items-center justify-center">
                    <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                  </div>
                {/each}
              </div>
              <!-- Main content -->
              <div class="flex-1 flex flex-col overflow-hidden text-[8px] p-3 gap-2.5">
                <div class="flex items-center justify-between flex-shrink-0">
                  <span class="font-extrabold text-slate-900 text-[9px]">Executive Dashboard</span>
                  <span class="text-[7px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Last 30 Days</span>
                </div>
                <!-- KPI mini row -->
                <div class="grid grid-cols-3 gap-1.5 flex-shrink-0">
                  <div class="bg-blue-50 rounded-lg p-2 border border-blue-100/60 text-center">
                    <div class="text-[11px] font-black text-blue-700">₹18.5L</div>
                    <div class="text-[6.5px] text-slate-500">Revenue</div>
                    <div class="text-[6.5px] text-emerald-600 font-semibold">↑ 14%</div>
                  </div>
                  <div class="bg-emerald-50 rounded-lg p-2 border border-emerald-100/60 text-center">
                    <div class="text-[11px] font-black text-emerald-700">156</div>
                    <div class="text-[6.5px] text-slate-500">Orders</div>
                    <div class="text-[6.5px] text-emerald-600 font-semibold">↑ 22%</div>
                  </div>
                  <div class="bg-amber-50 rounded-lg p-2 border border-amber-100/60 text-center">
                    <div class="text-[11px] font-black text-amber-700">92%</div>
                    <div class="text-[6.5px] text-slate-500">Yield</div>
                    <div class="text-[6.5px] text-emerald-600 font-semibold">↑ 3%</div>
                  </div>
                </div>
                <!-- Revenue bar chart -->
                <div class="bg-slate-50 rounded-lg p-2 border border-slate-200/60 flex-shrink-0">
                  <div class="text-[7px] font-bold text-slate-600 mb-1.5">Revenue Trend (6 Months)</div>
                  <div class="flex items-end gap-1.5 h-14">
                    {#each [[40,'Jan'],[48,'Feb'],[36,'Mar'],[56,'Apr'],[52,'May'],[68,'Jun']] as [h, lbl]}
                      <div class="flex-1 flex flex-col items-center gap-0.5">
                        <div class="w-full bg-blue-400 rounded-t transition-all duration-500" style="height: {h}px;"></div>
                        <span class="text-[6px] text-slate-400">{lbl}</span>
                      </div>
                    {/each}
                  </div>
                </div>
                <!-- Top clients -->
                <div class="bg-slate-50 rounded-lg p-2 border border-slate-200/60 flex-shrink-0">
                  <div class="text-[7px] font-bold text-slate-600 mb-1.5">Top Clients by Revenue</div>
                  <div class="space-y-1.5">
                    {#each [['Future Tech ₹4.2L', 85, '#3b82f6'],['GlassCo ₹3.4L', 68, '#10b981'],['BuildRight ₹2.6L', 52, '#f59e0b']] as [lbl, pct, clr]}
                      <div class="flex items-center gap-2">
                        <div class="flex-1 bg-slate-200 rounded-full h-1.5">
                          <div class="h-1.5 rounded-full" style="width: {pct}%; background: {clr};"></div>
                        </div>
                        <span class="text-[7px] text-slate-600 font-medium w-20 text-right">{lbl}</span>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 text-center">
            <div class="text-[13.5px] font-bold text-slate-900 font-heading">{screens[3].label}</div>
            <div class="text-[12px] text-slate-500 font-medium mt-0.5">{screens[3].caption}</div>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom divider bar -->
    <div class="mt-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

  </div>
</section>

<style>
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .screen-card {
    animation: fadeSlideUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
    animation-fill-mode: both;
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
