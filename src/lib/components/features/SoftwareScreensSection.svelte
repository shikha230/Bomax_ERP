<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';

  interface Screen {
    url: string;
    label: string;
    caption: string;
    accent: string;
  }

  const screens: Screen[] = [
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
    {
      url: 'app.bomaxerp.in/purchase',
      label: 'Purchase Screen',
      caption: 'Vendor orders & purchase tracking',
      accent: 'bg-purple-600',
    },
  ];

  // Static data (typed tuples) — kept outside markup so each block keys are simple.
  const quotationItems: [string, string, string, string, string][] = [
    ['Clear Float Glass 6mm', '25 Sqft', '₹85', '—', '₹2,125'],
    ['Toughened Glass 10mm', '12 Sqft', '₹220', '5%', '₹2,508'],
    ['Aluminium Channel', '8 Nos', '₹380', '—', '₹3,040'],
    ['Silicon Sealant 300ml', '5 Nos', '₹120', '—', '₹600'],
  ];

  const stockMovement: number[] = [38, 52, 45, 68, 55, 72, 61];

  const inventoryRows: [string, string, string, string, string][] = [
    ['Clear Float 5mm', 'Glass', '450 sqft', 'In Stock', 'emerald'],
    ['Toughened 8mm', 'Glass', '45 sqft', 'Low Stock', 'amber'],
    ['Alum. Profile', 'Hardware', '320 pcs', 'In Stock', 'emerald'],
  ];

  const pendingJobs: [string, string][] = [
    ['JOB-0456', 'Clear 5mm × 12'],
    ['JOB-0457', 'Tough 8mm × 6'],
  ];

  const inProgressJobs: [string, string, number, string][] = [
    ['JOB-0453', 'Laminated × 8', 65, 'Ramesh K.'],
    ['JOB-0454', 'Mirror Cut × 4', 30, 'Sunil P.'],
  ];

  const completedJobs: [string, string][] = [
    ['JOB-0450', 'Clear 4mm × 20'],
    ['JOB-0451', 'Frosted × 10'],
  ];

  const revenueTrend: [number, string][] = [
    [40, 'Jan'],
    [48, 'Feb'],
    [36, 'Mar'],
    [56, 'Apr'],
    [52, 'May'],
    [68, 'Jun'],
  ];

  const topClients: [string, number, string][] = [
    ['Future Tech ₹4.2L', 85, '#3b82f6'],
    ['GlassCo ₹3.4L', 68, '#10b981'],
    ['BuildRight ₹2.6L', 52, '#f59e0b'],
  ];

  const purchaseOrders: [string, string, string, string, string][] = [
    ['PO-1032', 'Saint Gobain Ltd', '450 sqft Float', '₹38,250', 'Approved'],
    ['PO-1033', 'Asahi Glass Co.', '120 sqft Tough', '₹26,400', 'Pending'],
    ['PO-1034', 'Alu Hardware Inc.', '80 Channel Nos', '₹30,400', 'Approved'],
    ['PO-1035', 'Seal Chem Pvt Ltd', '30 Sealant Nos', '₹3,600', 'Received'],
  ];

  // ── Auto-scroll animation (left → right, continuous, loops back) ──
  // Design/markup is untouched — this just moves the existing scroll
  // container's scrollLeft on every frame.
  let trackEl: HTMLDivElement;
  let rafId: number;
  let paused = false;
  const speed = 0.6; // px per frame — increase for faster, decrease for slower

  function animate() {
    if (trackEl && !paused) {
      const maxScroll = trackEl.scrollWidth - trackEl.clientWidth;
      if (maxScroll > 0) {
        trackEl.scrollLeft += speed;
        if (trackEl.scrollLeft >= maxScroll) {
          trackEl.scrollLeft = 0;
        }
      }
    }
    rafId = requestAnimationFrame(animate);
  }

  onMount(() => {
    rafId = requestAnimationFrame(animate);
  });

  onDestroy(() => {
    if (rafId) cancelAnimationFrame(rafId);
  });
</script>

<!-- Software Screens Section -->
<section
  id="screens"
  class="relative w-full bg-white py-10 sm:py-10 lg:py-10 overflow-hidden"
>
  <!-- Subtle background pattern -->
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Section Header -->
    <div class="text-center mb-14 sm:mb-16 lg:mb-20">
      <h2 class="text-4xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-tight font-heading mb-5">
        SEE Bomax ERP In Action
      </h2>

      <p class="text-sm sm:text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
        Real dashboard screenshots from the Bomax ERP platform built for the glass industry.
      </p>
    </div>

    <!-- Screens Row — auto-animates left to right, pauses on hover/touch -->
    <div class="relative">

      <div
        bind:this={trackEl}
        class="flex gap-5 sm:gap-6 overflow-x-auto pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Bomax ERP screens carousel"
        onmouseenter={() => (paused = true)}
        onmouseleave={() => (paused = false)}
        ontouchstart={() => (paused = true)}
        ontouchend={() => (paused = false)}
      >

        <!-- ── Screen 1: Quotation ─────────────────── -->
        <div
          class="shrink-0 w-[82vw] sm:w-[60vw] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col"
          in:fly={{ y: 28, duration: 550, delay: 0 }}
        >
          <!-- Browser Chrome -->
          <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 flex flex-col">
            <div class="bg-slate-900 px-3 py-2.5 flex items-center gap-2 shrink-0">
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
              <div class="bg-slate-900 w-12 shrink-0 flex flex-col items-center pt-3 gap-3">
                <div class="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
                  <span class="text-white text-[7px] font-black">B</span>
                </div>
                <div class="w-8 h-6 rounded-md bg-blue-600/20 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-300 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md hover:bg-slate-800 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md hover:bg-slate-800 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md hover:bg-slate-800 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md hover:bg-slate-800 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md hover:bg-slate-800 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md hover:bg-slate-800 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
              </div>
              <!-- Main Quotation Content -->
              <div class="flex-1 flex flex-col overflow-hidden text-[8px] font-sans">
                <!-- Top bar -->
                <div class="bg-white border-b border-slate-200 px-3 py-1.5 flex items-center justify-between shrink-0">
                  <span class="font-extrabold text-slate-800 text-[9px]">New Quotation</span>
                  <div class="flex gap-1.5">
                    <span class="px-1.5 py-0.5 bg-slate-100 rounded text-slate-500">Save</span>
                    <span class="px-1.5 py-0.5 bg-blue-600 text-white rounded">Submit</span>
                  </div>
                </div>
                <!-- Quotation meta info -->
                <div class="px-3 py-2 border-b border-slate-100 grid grid-cols-2 gap-2 shrink-0">
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
                <div class="bg-slate-800 text-white px-3 py-1 grid font-semibold text-[7px] shrink-0" style="grid-template-columns: 2fr 0.8fr 0.8fr 0.8fr 1fr;">
                  <span>Item Name</span>
                  <span>Qty</span>
                  <span>Rate</span>
                  <span>Disc</span>
                  <span class="text-right">Amount</span>
                </div>
                <!-- Items rows -->
                <div class="divide-y divide-slate-100 overflow-hidden shrink-0">
                  {#each quotationItems as [nm, qt, rt, dc, am] (nm)}
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
                <div class="mt-auto border-t border-slate-200 px-3 py-2 flex justify-between items-end shrink-0">
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
        <div
          class="shrink-0 w-[82vw] sm:w-[60vw] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col"
          in:fly={{ y: 28, duration: 550, delay: 100 }}
        >
          <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 flex flex-col">
            <div class="bg-slate-900 px-3 py-2.5 flex items-center gap-2 shrink-0">
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
              <div class="bg-slate-900 w-12 shrink-0 flex flex-col items-center pt-3 gap-3">
                <div class="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center">
                  <span class="text-white text-[7px] font-black">B</span>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md bg-emerald-600/20 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
              </div>
              <!-- Main content -->
              <div class="flex-1 flex flex-col overflow-hidden text-[8px] p-3 gap-2">
                <!-- KPI row -->
                <div class="grid grid-cols-3 gap-2 shrink-0">
                  <div class="bg-white rounded-lg p-2 border border-slate-200/60 shadow-sm">
                    <div class="text-[7px] text-slate-400 mb-0.5">Total Stock</div>
                    <div class="text-[12px] font-black text-emerald-600">₹24.5L</div>
                    <div class="text-[6.5px] text-emerald-600 font-semibold">↑ 8.2%</div>
                  </div>
                  <div class="bg-amber-50/30 rounded-lg p-2 border border-amber-200/40 shadow-sm">
                    <div class="text-[7px] text-slate-400 mb-0.5">Low Stock</div>
                    <div class="text-[12px] font-black text-amber-600">23</div>
                    <div class="text-[6.5px] text-amber-600 font-semibold">items</div>
                  </div>
                  <div class="bg-red-50/20 rounded-lg p-2 border border-red-200/40 shadow-sm">
                    <div class="text-[7px] text-slate-400 mb-0.5">Out of Stock</div>
                    <div class="text-[12px] font-black text-red-600">5</div>
                    <div class="text-[6.5px] text-red-600 font-semibold">items</div>
                  </div>
                </div>
                <!-- Charts row -->
                <div class="grid grid-cols-2 gap-2 shrink-0">
                  <!-- Bar chart mini -->
                  <div class="bg-white rounded-lg p-2 border border-slate-200/60 shadow-sm">
                    <div class="text-[7px] font-bold text-slate-600 mb-1.5">Stock Movement</div>
                    <div class="flex items-end gap-1 h-10">
                      {#each stockMovement as h, i (i)}
                        <div class="flex-1 bg-emerald-400 rounded-t" style="height: {h}%;"></div>
                      {/each}
                    </div>
                    <div class="flex justify-between text-[6px] text-slate-400 mt-1">
                      <span>Mon</span><span>Fri</span>
                    </div>
                  </div>
                  <!-- Donut chart mini -->
                  <div class="bg-white rounded-lg p-2 border border-slate-200/60 shadow-sm flex items-center gap-2">
                    <div class="shrink-0">
                      <svg class="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="12" fill="transparent" stroke="#3b82f6" stroke-width="6" stroke-dasharray="33.6 75.4" stroke-dashoffset="0" />
                        <circle cx="18" cy="18" r="12" fill="transparent" stroke="#10b981" stroke-width="6" stroke-dasharray="22.6 75.4" stroke-dashoffset="-33.6" />
                        <circle cx="18" cy="18" r="12" fill="transparent" stroke="#f59e0b" stroke-width="6" stroke-dasharray="13.6 75.4" stroke-dashoffset="-56.2" />
                        <circle cx="18" cy="18" r="12" fill="transparent" stroke="#e2e8f0" stroke-width="6" stroke-dasharray="5.6 75.4" stroke-dashoffset="-69.8" />
                      </svg>
                    </div>
                    <div class="space-y-1">
                      <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 block shrink-0"></span><span class="text-[6.5px] text-slate-500">Glass</span></div>
                      <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 block shrink-0"></span><span class="text-[6.5px] text-slate-500">Hardware</span></div>
                      <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-400 block shrink-0"></span><span class="text-[6.5px] text-slate-500">Consumables</span></div>
                    </div>
                  </div>
                </div>
                <!-- Table header -->
                <div class="bg-slate-800 text-white px-2 py-1 grid font-semibold text-[6.5px] rounded-t-lg shrink-0" style="grid-template-columns: 2fr 0.8fr 0.8fr 0.8fr;">
                  <span>Material</span><span>Category</span><span>Stock</span><span>Status</span>
                </div>
                <div class="divide-y divide-slate-100 overflow-hidden shrink-0 rounded-b-lg border border-t-0 border-slate-200/60">
                  {#each inventoryRows as [nm, cat, qty, st, col] (nm)}
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
        <div
          class="shrink-0 w-[82vw] sm:w-[60vw] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col"
          in:fly={{ y: 28, duration: 550, delay: 200 }}
        >
          <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 flex flex-col">
            <div class="bg-slate-900 px-3 py-2.5 flex items-center gap-2 shrink-0">
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
              <div class="bg-indigo-900 w-12 shrink-0 flex flex-col items-center pt-3 gap-3">
                <div class="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
                  <span class="text-white text-[7px] font-black">B</span>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-indigo-700 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-indigo-700 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md bg-indigo-600/40 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-indigo-700 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-indigo-700 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-indigo-700 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-indigo-700 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-indigo-700 rounded"></div>
                </div>
              </div>
              <!-- Main content -->
              <div class="flex-1 flex flex-col overflow-hidden text-[8px] p-3 gap-2">
                <!-- Header -->
                <div class="flex items-center justify-between shrink-0">
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
                    {#each pendingJobs as [id, nm] (id)}
                      <div class="bg-amber-50/80 border border-amber-200/60 rounded-lg p-2 space-y-1 shrink-0">
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
                    {#each inProgressJobs as [id, nm, pct, who] (id)}
                      <div class="bg-blue-50/80 border border-blue-200/60 rounded-lg p-2 space-y-1 shrink-0">
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
                    {#each completedJobs as [id, nm] (id)}
                      <div class="bg-emerald-50/80 border border-emerald-200/60 rounded-lg p-2 space-y-1 shrink-0">
                        <div class="text-[7.5px] font-bold text-slate-700">{id}</div>
                        <div class="text-[7px] text-slate-500 truncate">{nm}</div>
                        <div class="text-[7px] text-emerald-600 font-bold">✓ Complete</div>
                      </div>
                    {/each}
                  </div>
                </div>
                <!-- Bottom bar -->
                <div class="border-t border-slate-200 pt-2 flex items-center justify-between shrink-0">
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
        <div
          class="shrink-0 w-[82vw] sm:w-[60vw] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col"
          in:fly={{ y: 28, duration: 550, delay: 300 }}
        >
          <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 flex flex-col">
            <div class="bg-slate-900 px-3 py-2.5 flex items-center gap-2 shrink-0">
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
              <div class="bg-slate-900 w-12 shrink-0 flex flex-col items-center pt-3 gap-3">
                <div class="w-6 h-6 rounded-md bg-amber-500 flex items-center justify-center">
                  <span class="text-white text-[7px] font-black">B</span>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md bg-amber-500/20 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
              </div>
              <!-- Main content -->
              <div class="flex-1 flex flex-col overflow-hidden text-[8px] p-3 gap-2.5">
                <div class="flex items-center justify-between shrink-0">
                  <span class="font-extrabold text-slate-900 text-[9px]">Executive Dashboard</span>
                  <span class="text-[7px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Last 30 Days</span>
                </div>
                <!-- KPI mini row -->
                <div class="grid grid-cols-3 gap-1.5 shrink-0">
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
                <div class="bg-slate-50 rounded-lg p-2 border border-slate-200/60 shrink-0">
                  <div class="text-[7px] font-bold text-slate-600 mb-1.5">Revenue Trend (6 Months)</div>
                  <div class="flex items-end gap-1.5 h-14">
                    {#each revenueTrend as [h, lbl] (lbl)}
                      <div class="flex-1 flex flex-col items-center gap-0.5">
                        <div class="w-full bg-blue-400 rounded-t transition-all duration-500" style="height: {h}px;"></div>
                        <span class="text-[6px] text-slate-400">{lbl}</span>
                      </div>
                    {/each}
                  </div>
                </div>
                <!-- Top clients -->
                <div class="bg-slate-50 rounded-lg p-2 border border-slate-200/60 shrink-0">
                  <div class="text-[7px] font-bold text-slate-600 mb-1.5">Top Clients by Revenue</div>
                  <div class="space-y-1.5">
                    {#each topClients as [lbl, pct, clr] (lbl)}
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

        <!-- ── Screen 5: Purchase ──────────────────── -->
        <div
          class="shrink-0 w-[82vw] sm:w-[60vw] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col"
          in:fly={{ y: 28, duration: 550, delay: 400 }}
        >
          <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 flex flex-col">
            <div class="bg-slate-900 px-3 py-2.5 flex items-center gap-2 shrink-0">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
              </div>
              <div class="flex-1 bg-slate-800 rounded-md px-3 py-1">
                <span class="text-slate-400 text-[9px] font-mono">{screens[4].url}</span>
              </div>
            </div>
            <!-- Screen Content: Purchase -->
            <div class="bg-white flex overflow-hidden" style="height: 320px;">
              <!-- Sidebar -->
              <div class="bg-slate-900 w-12 shrink-0 flex flex-col items-center pt-3 gap-3">
                <div class="w-6 h-6 rounded-md bg-purple-600 flex items-center justify-center">
                  <span class="text-white text-[7px] font-black">B</span>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md bg-purple-600/20 flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-300 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
                <div class="w-8 h-6 rounded-md flex items-center justify-center">
                  <div class="w-3 h-0.5 bg-slate-600 rounded"></div>
                </div>
              </div>
              <!-- Main Purchase Content -->
              <div class="flex-1 flex flex-col overflow-hidden text-[8px] font-sans">
                <!-- Top bar -->
                <div class="bg-white border-b border-slate-200 px-3 py-1.5 flex items-center justify-between shrink-0">
                  <span class="font-extrabold text-slate-800 text-[9px]">Purchase Orders</span>
                  <div class="flex gap-1.5">
                    <span class="px-1.5 py-0.5 bg-slate-100 rounded text-slate-500">Filter</span>
                    <span class="px-1.5 py-0.5 bg-purple-600 text-white rounded">+ New PO</span>
                  </div>
                </div>
                <!-- KPI mini row -->
                <div class="grid grid-cols-3 gap-1.5 px-3 py-2 shrink-0">
                  <div class="bg-purple-50 rounded-lg p-2 border border-purple-100/60 text-center">
                    <div class="text-[11px] font-black text-purple-700">18</div>
                    <div class="text-[6.5px] text-slate-500">Open POs</div>
                  </div>
                  <div class="bg-emerald-50 rounded-lg p-2 border border-emerald-100/60 text-center">
                    <div class="text-[11px] font-black text-emerald-700">₹9.8L</div>
                    <div class="text-[6.5px] text-slate-500">This Month</div>
                  </div>
                  <div class="bg-amber-50 rounded-lg p-2 border border-amber-100/60 text-center">
                    <div class="text-[11px] font-black text-amber-700">4</div>
                    <div class="text-[6.5px] text-slate-500">Awaiting Approval</div>
                  </div>
                </div>
                <!-- Table header -->
                <div class="bg-slate-800 text-white px-3 py-1 grid font-semibold text-[7px] shrink-0" style="grid-template-columns: 1fr 1.6fr 1.4fr 1fr 1fr;">
                  <span>PO No.</span>
                  <span>Vendor</span>
                  <span>Items</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>
                <!-- Table rows -->
                <div class="divide-y divide-slate-100 overflow-hidden shrink-0">
                  {#each purchaseOrders as [po, vendor, items, amt, status] (po)}
                    <div class="px-3 py-1.5 grid gap-1 items-center text-[7.5px]" style="grid-template-columns: 1fr 1.6fr 1.4fr 1fr 1fr;">
                      <span class="text-slate-700 font-semibold truncate">{po}</span>
                      <span class="text-slate-600 truncate">{vendor}</span>
                      <span class="text-slate-500 truncate">{items}</span>
                      <span class="text-slate-800 font-bold">{amt}</span>
                      <span
                        class="px-1 py-0.5 rounded text-[6.5px] font-bold w-fit"
                        class:bg-emerald-50={status === 'Approved' || status === 'Received'}
                        class:text-emerald-700={status === 'Approved' || status === 'Received'}
                        class:bg-amber-50={status === 'Pending'}
                        class:text-amber-700={status === 'Pending'}
                      >{status}</span>
                    </div>
                  {/each}
                </div>
                <!-- Bottom note -->
                <div class="mt-auto border-t border-slate-200 px-3 py-2 flex items-center justify-between shrink-0">
                  <span class="text-[7px] text-slate-400">Auto reorder alerts enabled</span>
                  <span class="text-[7.5px] font-bold text-purple-600">View All →</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Caption -->
          <div class="mt-4 text-center">
            <div class="text-[13.5px] font-bold text-slate-900 font-heading">{screens[4].label}</div>
            <div class="text-[12px] text-slate-500 font-medium mt-0.5">{screens[4].caption}</div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>