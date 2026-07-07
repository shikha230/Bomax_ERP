<script lang="ts">
  import { GitCompare, XCircle, CheckCircle2 } from 'lucide-svelte';

  const rows = [
    {
      capability: 'Inventory Management',
      traditional: { text: 'Manual spreadsheets, no real-time sync', type: 'text' },
      bomax: 'Real-time tracking + auto alerts',
    },
    {
      capability: 'Billing & Invoicing',
      traditional: { text: 'Manual invoices, prone to errors', type: 'text' },
      bomax: 'Auto GST billing in seconds',
    },
    {
      capability: 'Production Planning',
      traditional: { text: '', type: 'cross' },
      bomax: 'Full job card & floor tracking',
    },
    {
      capability: 'Accounting',
      traditional: { text: 'Separate Tally, manual entry', type: 'text' },
      bomax: 'Built-in, Tally-compatible',
    },
    {
      capability: 'Reporting',
      traditional: { text: 'Monthly static reports', type: 'text' },
      bomax: 'Real-time live dashboards',
    },
    {
      capability: 'Cloud Access',
      traditional: { text: '', type: 'cross' },
      bomax: 'Web + Mobile, access anywhere',
    },
    {
      capability: 'Automation',
      traditional: { text: '', type: 'cross' },
      bomax: 'AI-powered, fully automated',
    },
    {
      capability: 'Analytics',
      traditional: { text: 'Basic / None', type: 'warning' },
      bomax: 'Profit-per-job BI insights',
    },
  ];
</script>

<!-- Feature Comparison Section -->
<section
  id="comparison"
  class="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
>
  <!-- Background pattern -->
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
  </div>

  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Section Header -->
    <div class="text-center mb-10 sm:mb-14 lg:mb-20">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 mb-6 shadow-sm">
        <GitCompare class="h-3.5 w-3.5" />
        <span class="text-xs font-bold font-jakarta tracking-wide">Feature Comparison</span>
      </div>

      <!-- Title -->
      <h2 class="text-2xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-tight font-heading mb-5">
        Traditional Software vs.<br />
        <span class="text-blue-600">Bomax ERP</span>
      </h2>

      <!-- Subtitle -->
      <p class="text-sm sm:text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
        See why hundreds of glass businesses switched from spreadsheets and legacy software to Bomax ERP.
      </p>
    </div>

    <!-- ── MOBILE: stacked cards (< md) ── -->
    <div class="flex flex-col gap-3 md:hidden">
      {#each rows as row}
        <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <!-- Capability header -->
          <div class="bg-slate-800 px-4 py-2.5">
            <span class="text-xs font-bold text-white uppercase tracking-widest">{row.capability}</span>
          </div>

          <div class="grid grid-cols-2">
            <!-- Traditional -->
            <div class="px-4 py-3 border-r border-slate-200 bg-white flex flex-col gap-1">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Traditional</span>
              {#if row.traditional.type === 'cross'}
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100">
                    <XCircle class="h-3.5 w-3.5 text-slate-400" strokeWidth={1.5} />
                  </div>
                  <span class="text-[11px] text-slate-500">Not available</span>
                </div>
              {:else if row.traditional.type === 'warning'}
                <span class="text-[11.5px] font-bold text-amber-500 leading-snug">{row.traditional.text}</span>
              {:else}
                <span class="text-[11.5px] text-slate-500 font-medium leading-snug">{row.traditional.text}</span>
              {/if}
            </div>

            <!-- Bomax -->
            <div class="px-4 py-3 bg-blue-50/60 flex flex-col gap-1">
              <span class="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">Bomax ERP</span>
              <span class="inline-flex items-start gap-1.5 text-emerald-700 text-[11.5px] font-semibold leading-snug">
                <CheckCircle2 class="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-px" strokeWidth={2.5} />
                {row.bomax}
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- ── DESKTOP: 3-column table (≥ md) ── -->
    <div class="hidden md:block rounded-2xl border border-slate-200/80 overflow-hidden shadow-lg shadow-slate-200/40">

      <!-- Table Header -->
      <div class="grid grid-cols-[1.4fr_2fr_2fr]">
        <!-- Capability header -->
        <div class="bg-white px-6 py-4 border-b border-r border-slate-200/80">
          <span class="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Capability</span>
        </div>
        <!-- Traditional Software header -->
        <div class="bg-slate-100/80 px-6 py-4 border-b border-r border-slate-200/80 flex items-center justify-center">
          <span class="text-[13px] font-bold text-slate-600 font-heading">Traditional Software</span>
        </div>
        <!-- Bomax ERP header -->
        <div class="bg-blue-600 px-6 py-4 border-b border-slate-200/80 flex items-center justify-center">
          <span class="text-[13px] font-bold text-white font-heading">Bomax ERP</span>
        </div>
      </div>

      <!-- Table Rows -->
      {#each rows as row, i}
        <div
          class="grid grid-cols-[1.4fr_2fr_2fr] group transition-colors duration-150 {i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30"
        >
          <!-- Capability Name -->
          <div class="px-6 py-4 border-r border-slate-200/60 flex items-center {i < rows.length - 1 ? 'border-b' : ''}">
            <span class="text-[13px] font-bold text-slate-800">{row.capability}</span>
          </div>

          <!-- Traditional Software Cell -->
          <div class="px-6 py-4 border-r border-slate-200/60 flex items-center justify-center {i < rows.length - 1 ? 'border-b' : ''}">
            {#if row.traditional.type === 'cross'}
              <div class="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100">
                <XCircle class="h-4 w-4 text-slate-400" strokeWidth={1.5} />
              </div>
            {:else if row.traditional.type === 'warning'}
              <span class="text-[12.5px] font-bold text-amber-500">{row.traditional.text}</span>
            {:else}
              <span class="text-[12.5px] text-slate-500 font-medium text-center leading-snug">{row.traditional.text}</span>
            {/if}
          </div>

          <!-- Bomax ERP Cell -->
          <div class="px-6 py-4 bg-blue-50/40 flex items-center justify-center {i < rows.length - 1 ? 'border-b border-slate-200/60' : ''}">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11.5px] font-semibold font-jakarta text-center leading-snug">
              <CheckCircle2 class="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
              {row.bomax}
            </span>
          </div>
        </div>
      {/each}

    </div>

    <!-- Bottom note -->
    <p class="text-center text-[12.5px] text-slate-400 font-medium mt-8">
      * All features included in every Bomax ERP plan. No hidden add-ons or extra charges.
    </p>

  </div>
</section>
