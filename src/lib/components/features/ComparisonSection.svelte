<script lang="ts">
  import { XCircle, CheckCircle2, MinusCircle } from 'lucide-svelte';

  // ─────────────────────────────────────────────────────────────
  // Types
  // ─────────────────────────────────────────────────────────────
  interface Row {
    no: string;
    capability: string;
    firstcut24: string;
    legacy: string;
    cloud: string;
    tally: string;
  }

  interface Section {
    heading: string;
    rows: Row[];
  }

  interface Competitor {
    key: 'firstcut24' | 'legacy' | 'cloud' | 'tally';
    label: string;
    sub: string;
  }

  interface Verdict {
    name: string;
    text: string;
  }

  // ─────────────────────────────────────────────────────────────
  // Data — word-for-word from "The Ultimate Glass ERP Comparison:
  // Firstcut24 vs. The Market"
  // ─────────────────────────────────────────────────────────────
  const competitors: Competitor[] = [
    { key: 'firstcut24', label: 'Firstcut24', sub: 'Native Glass ERP Cloud-based, Built specifically for glass' },
    { key: 'legacy', label: 'Generic ERPs (Legacy)', sub: 'SAP Business One, Microsoft Dynamics, local custom ERPs' },
    { key: 'cloud', label: 'Generic Cloud ERPs', sub: 'Zoho One, Odoo, NetSuite' },
    { key: 'tally', label: 'Tally Prime', sub: "India's standard accounting software" },
  ];

  const sections: Section[] = [
    {
      heading: '1. Quotation & Sales (The Glass Complexities)',
      rows: [
        { no: '1', capability: 'Built for Glass Logic', firstcut24: 'Native, out-of-the-box', legacy: 'Requires 6+ months of custom coding', cloud: 'Requires heavy workflow customization', tally: 'Pure accounting focus' },
        { no: '2', capability: 'W × H Dimension Input', firstcut24: 'Native (mm, inch, ft, m)', legacy: 'Workarounds / Custom tables needed', cloud: 'Custom fields required', tally: 'Requires custom TDL scripts' },
        { no: '3', capability: 'Auto Edge Polishing Math', firstcut24: 'Automated (CP, Bevel, Full-C)', legacy: 'Manual calculation required', cloud: 'Manual entry only', tally: 'Manual entry only' },
        { no: '4', capability: 'Jumbo Glass Surcharges', firstcut24: 'Auto-detects & flags', legacy: 'Custom scripting required', cloud: 'Custom formulas required', tally: 'Manual entry' },
        { no: '5', capability: 'Glass Weight Auto-Calc', firstcut24: 'Instant (for logistics)', legacy: 'Highly complex to implement', cloud: 'Requires external formula fields', tally: 'No native support' },
        { no: '6', capability: 'Multi-Item Quotes', firstcut24: 'Seamless (Glass + Hardware)', legacy: 'Good', cloud: 'Excellent', tally: 'Good' },
        { no: '7', capability: 'Chargeable Area Roundoffs', firstcut24: 'Pre-built standard glass rules', legacy: 'Requires complex logic building', cloud: 'Custom scripting needed', tally: 'Manual calculation' },
        { no: '8', capability: '1-Click WhatsApp PDF', firstcut24: 'Native Integration', legacy: 'Clunky / Requires 3rd-party APIs', cloud: 'Excellent', tally: 'Yes (Tally Prime 4.0+)' },
        { no: '9', capability: 'Strict Credit Limit Blocks', firstcut24: 'Yes (Blocks floor production)', legacy: 'Yes', cloud: 'Yes', tally: 'Yes' },
      ],
    },
    {
      heading: '2. AI Optimizer & Yield Module',
      rows: [
        { no: '10', capability: 'Background AI Optimizer', firstcut24: 'Built-in (Zero waiting time)', legacy: 'Needs expensive 3rd-party integration', cloud: 'Requires 3rd-party plugins', tally: 'Not available' },
        { no: '11', capability: 'Auto-Sorting by Glass Type', firstcut24: 'AI auto-groups mixed quotes', legacy: 'Manual sorting required', cloud: 'Manual sorting required', tally: 'Not available' },
        { no: '12', capability: 'Primary/Secondary Routing', firstcut24: 'Yes (Prioritizes cheap stock)', legacy: 'No', cloud: 'No', tally: 'Not available' },
        { no: '13', capability: 'Off-Cut / Half-Cut Saving', firstcut24: 'Smart tracking for future reuse', legacy: 'Rarely available natively', cloud: 'Hard to map to inventory', tally: 'Not available' },
        { no: '14', capability: 'Predictive Jumbo Count', firstcut24: 'Yes (Before production starts)', legacy: 'Complex Customization', cloud: 'No', tally: 'Not available' },
      ],
    },
    {
      heading: '3. Production & Shop Floor Tracking',
      rows: [
        { no: '15', capability: 'Piece-by-Piece Barcoding', firstcut24: 'Native via tablets', legacy: 'Requires expensive MES add-ons', cloud: 'Needs 3rd-party app integration', tally: 'Not available' },
        { no: '16', capability: 'Tablet UI for 3G Networks', firstcut24: 'Yes (Optimistic UI, instant)', legacy: 'Desktop/Hardware heavy', cloud: 'Often laggy on factory 3G internet', tally: 'Desktop PC only' },
        { no: '17', capability: 'Multi-Dept Factory Routing', firstcut24: 'Yes (Cutting, Tempering, etc.)', legacy: 'Yes (Heavy setup required)', cloud: 'Standard manufacturing steps', tally: 'Basic manufacturing journal' },
        { no: '18', capability: 'Auto Job Card Generation', firstcut24: '1-Click from Sales Order', legacy: 'Yes', cloud: 'Yes', tally: 'Requires TDL developer' },
        { no: '19', capability: 'Quality Inspection Gates', firstcut24: 'Integrated into floor workflow', legacy: 'Complex to configure', cloud: 'Basic checkpoints', tally: 'Not available' },
        { no: '20', capability: 'Machine Downtime Logging', firstcut24: 'Yes', legacy: 'Requires separate MES software', cloud: 'Basic logging only', tally: 'Not available' },
        { no: '21', capability: 'Dispatch & Truck Loading', firstcut24: 'Live visual tracking', legacy: 'Basic Delivery Notes', cloud: 'Good', tally: 'Delivery Note only' },
      ],
    },
    {
      heading: '4. Advanced Inventory & Procurement',
      rows: [
        { no: '22', capability: 'Multi-Dimensional Stock', firstcut24: 'SqM, SqFt, & Pieces simultaneously', legacy: 'Complex Unit-of-Measure setup', cloud: 'Hard to set up dual tracking', tally: 'Single UOM (or basic Alt UOM)' },
        { no: '23', capability: 'Deep Glass Attribute Filters', firstcut24: 'Filter by Tint, Thickness, Type', legacy: 'Custom database tags needed', cloud: 'Basic variant tags', tally: 'Uses Stock Groups' },
        { no: '24', capability: 'Hardware & Consumables', firstcut24: 'Yes (Silicones, profiles, wheels)', legacy: 'Yes', cloud: 'Yes', tally: 'Yes' },
        { no: '25', capability: 'Barcode Label Printing', firstcut24: 'Native (1-Click)', legacy: 'Requires Add-on', cloud: 'Requires Add-on / Plugin', tally: 'Requires TDL' },
        { no: '26', capability: 'Real-Time Low Stock Alerts', firstcut24: 'Dashboard automated triggers', legacy: 'Yes', cloud: 'Yes', tally: 'Manual Reorder levels' },
        { no: '27', capability: 'Multi-Warehouse Transfers', firstcut24: 'Seamless', legacy: 'Yes', cloud: 'Yes', tally: 'Yes' },
        { no: '28', capability: 'Fast GRN Automation', firstcut24: 'Instantly syncs with Accounts', legacy: 'Yes', cloud: 'Yes', tally: 'Yes' },
      ],
    },
    {
      heading: '5. Accounting & Billing',
      rows: [
        { no: '29', capability: 'Double-Entry Accounting', firstcut24: 'Yes (Automated ledgers)', legacy: 'Yes', cloud: 'Yes', tally: 'Gold Standard' },
        { no: '30', capability: 'India GST Compliance', firstcut24: 'Native (GSTR ready)', legacy: 'Cumbersome / Requires local add-on', cloud: 'Excellent (If Indian ERP like Zoho)', tally: 'Gold Standard' },
        { no: '31', capability: '1-Click Tally Sync (.xml)', firstcut24: 'Highly Optimized & Seamless', legacy: 'Requires custom API middleware', cloud: 'Varies (Often buggy)', tally: 'N/A (Native)' },
        { no: '32', capability: 'Auto E-Way & E-Invoicing', firstcut24: 'Yes (API Integrated)', legacy: 'Varies', cloud: 'Excellent', tally: 'Gold Standard' },
        { no: '33', capability: 'Job-wise Advance Tracking', firstcut24: 'Yes (Strictly linked to orders)', legacy: 'Yes', cloud: 'Yes', tally: 'Bill-wise tracking' },
      ],
    },
    {
      heading: '6. OpEx, Costing, HR & Payroll',
      rows: [
        { no: '34', capability: 'True Cost-Per-SqMeter', firstcut24: 'Live (Cross-references all data)', legacy: 'Overnight batch processing needed', cloud: 'Very difficult to configure', tally: 'Requires manual offline math' },
        { no: '35', capability: 'Energy & Breakage Value', firstcut24: 'Live monetary dashboard', legacy: 'Complex BI configuration needed', cloud: 'No native mapping', tally: 'N/A' },
        { no: '36', capability: 'Factory Shift & Overtime', firstcut24: 'Native manufacturing HR rules', legacy: 'Heavy HR module setup', cloud: 'Standard office payroll', tally: 'Basic Payroll' },
        { no: '37', capability: 'Biometric Hardware Sync', firstcut24: 'Seamless', legacy: 'Custom hardware integration', cloud: 'Zapier / API webhooks needed', tally: 'No' },
        { no: '38', capability: 'Indian PF/ESI Statutory', firstcut24: 'Native', legacy: 'Usually needs 3rd party payroll', cloud: 'Excellent (If Indian ERP)', tally: 'Good' },
      ],
    },
    {
      heading: '7. BI & Executive Dashboards',
      rows: [
        { no: '39', capability: 'Unified Executive Master', firstcut24: '360° view (Sales to Floor to HR)', legacy: 'Expensive BI module required', cloud: 'Excellent', tally: 'Basic ratios' },
        { no: '40', capability: 'Profit-Per-Job Analytics', firstcut24: 'Exact (Material + Labor + OpEx)', legacy: 'Good', cloud: 'Good', tally: 'Uses standard costing' },
        { no: '41', capability: 'Scheduled Email Reports', firstcut24: 'Yes', legacy: 'Yes', cloud: 'Yes', tally: 'Add-on required' },
        { no: '42', capability: 'Granular Role Permissions', firstcut24: 'Floor vs. Sales vs. Admin', legacy: 'Excellent', cloud: 'Excellent', tally: 'Basic security' },
      ],
    },
    {
      heading: '8. Technology & Implementation',
      rows: [
        { no: '43', capability: 'Implementation Time', firstcut24: '2 to 4 Weeks (Pre-configured)', legacy: '6 to 12 Months', cloud: '2 to 4 Months', tally: 'Hours (But accounting only)' },
        { no: '44', capability: 'Cost of Customization', firstcut24: 'Zero (Glass logic is built-in)', legacy: 'High (Lakhs of Rupees)', cloud: 'Medium (Requires Implementer)', tally: 'TDL Developer costs' },
        { no: '45', capability: 'Keyboard-First Speed', firstcut24: 'Yes (Tally-like hotkeys)', legacy: 'Mouse-heavy & clunky', cloud: 'Mouse-heavy', tally: 'Gold Standard' },
      ],
    },
  ];

  const verdicts: Verdict[] = [
    { name: 'Tally Prime', text: 'Keep it for your Chartered Accountant. It is the gold standard for taxes, but it knows absolutely nothing about square meters, edge polishing, yield optimization, or tracking glass on a factory floor.' },
    { name: 'Generic ERPs (Legacy/On-Premise)', text: 'These are powerful but incredibly slow and expensive. You will pay lakhs of rupees to a consultant just to teach the software how to multiply width by height for glass dimensions.' },
    { name: 'Generic Cloud ERPs (Zoho/Odoo)', text: 'Fantastic software for standard trading companies. However, they completely lack AI nesting/optimization, native barcode floor-tracking on slow 3G networks, and out-of-the-box glass pricing formulas.' },
    { name: 'Firstcut24', text: 'The ultimate bridge. You get the data-entry speed of Tally, the accessibility of a modern Cloud ERP, and the deep, pre-configured industry intelligence of a system built purely for glass manufacturing.' },
  ];

  // ─────────────────────────────────────────────────────────────
  // Scroll-triggered "slide in from the right" animation
  // ─────────────────────────────────────────────────────────────
  function slideInRTL(node: HTMLElement, params: { delay?: number } = {}) {
    const delay = params.delay ?? 0;

    node.style.opacity = '0';
    node.style.transform = 'translateX(64px)';
    node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.style.opacity = '1';
            node.style.transform = 'translateX(0)';
            observer.unobserve(node);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      },
    };
  }

  function cellIcon(value: string): 'yes' | 'no' | 'text' {
    const v = value.trim().toLowerCase();
    if (v === 'yes') return 'yes';
    if (v === 'no' || v === 'not available' || v === 'n/a') return 'no';
    return 'text';
  }
</script>

<!-- ═══════════════════════════════════════════════════════════
     Firstcut24 vs. The Market — 45-Point Comparison
═══════════════════════════════════════════════════════════ -->
<section class="relative w-full bg-white py-10 sm:py-10 lg:py-10 overflow-hidden ">
  <!-- Background pattern -->
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30"></div>
  </div>

  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- ── Page Header ── -->
    <div use:slideInRTL class="text-center mb-6">

      <h1 class="text-2xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-tight mb-5">
        The Ultimate Glass ERP Comparison<br />
        <span class="text-blue-600">Firstcut24</span> vs <span class="text-blue-600">The Market</span>
      </h1>

      <p class="text-sm sm:text-[15px] text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
        When choosing software for your glass processing factory, making the wrong choice costs months of lost
        time and lakhs of rupees in "customization fees." Here is a realistic, 45-point, module-by-module
        breakdown of how Firstcut24 compares to standard market alternatives.
      </p>
    </div>

    <!-- ── The Competitors ── -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14 sm:mb-20">
      {#each competitors as c, i (c.key)}
        <div use:slideInRTL={{ delay: i * 90 }} class="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-3 text-center">
          <p class="text-[12px] font-bold text-slate-800">{c.label}</p>
          <p class="text-[10.5px] text-slate-400 font-medium mt-0.5 leading-snug">{c.sub}</p>
        </div>
      {/each}
    </div>

    <!-- ── Sections ── -->
    {#each sections as section (section.heading)}
      <div class="mb-12 sm:mb-16">
        <div use:slideInRTL class="flex items-center gap-3 mb-5">
          <span class="text-[20px] font-black text-blue-600 mb-4">{section.heading}</span>
          <span class="flex-1 h-px bg-slate-200"></span>
        </div>

        <!-- MOBILE: stacked cards -->
        <div class="flex flex-col gap-3 md:hidden">
          {#each section.rows as row, rIdx (row.no)}
            <div use:slideInRTL={{ delay: rIdx * 70 }} class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                <span class="text-[10px] font-bold text-blue-300">#{row.no}</span>
                <span class="text-xs font-bold text-white uppercase tracking-widest">{row.capability}</span>
              </div>
              <div class="flex flex-col divide-y divide-slate-100">
                {#each competitors as c (c.key)}
                  {@const value = row[c.key]}
                  {@const kind = cellIcon(value)}
                  <div class="px-4 py-2.5 flex items-center justify-between gap-3 {c.key === 'firstcut24' ? 'bg-blue-50/60' : 'bg-white'}">
                    <span class="text-[10px] font-bold uppercase tracking-wider {c.key === 'firstcut24' ? 'text-blue-600' : 'text-slate-400'} w-28 shrink-0">{c.label}</span>
                    <span class="flex items-center gap-1.5 text-[11.5px] font-semibold text-right leading-snug {c.key === 'firstcut24' ? 'text-emerald-700' : 'text-slate-600'}">
                      {#if c.key === 'firstcut24'}
                        <CheckCircle2 class="h-3.5 w-3.5 text-emerald-500 shrink-0" strokeWidth={2.5} />
                      {:else if kind === 'no'}
                        <XCircle class="h-3.5 w-3.5 text-slate-400 shrink-0" strokeWidth={1.5} />
                      {:else if kind === 'yes'}
                        <CheckCircle2 class="h-3.5 w-3.5 text-slate-400 shrink-0" strokeWidth={1.5} />
                      {:else}
                        <MinusCircle class="h-3.5 w-3.5 text-slate-300 shrink-0" strokeWidth={1.5} />
                      {/if}
                      {value}
                    </span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>

        <!-- DESKTOP: 5-column table -->
        <div class="hidden md:block rounded-2xl border border-slate-200/80 overflow-hidden shadow-lg shadow-slate-200/40">
          <div class="grid grid-cols-[0.5fr_1.6fr_1.5fr_1.5fr_1.5fr_1.5fr]">
            <div class="bg-white px-4 py-3 border-b border-r border-slate-200/80 flex items-center justify-center">
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest">#</span>
            </div>
            <div class="bg-white px-6 py-3 border-b border-r border-slate-200/80 flex items-center">
              <span class="text-[14px] font-bold text-slate-800 ">Feature / Capability</span>
            </div>
            <div class="bg-blue-600 px-4 py-3 border-b border-r border-slate-200/80 flex items-center justify-center">
              <span class="text-[14px] font-bold text-white">Firstcut24</span>
            </div>
            <div class="bg-slate-100/80 px-4 py-3 border-b border-r border-slate-200/80 flex items-center justify-center">
              <span class="text-[14px] font-bold text-slate-600 text-center leading-tight">Generic ERPs<br /><span class="text-[10px] font-medium text-slate-400">(Legacy)</span></span>
            </div>
            <div class="bg-slate-100/80 px-4 py-3 border-b border-r border-slate-200/80 flex items-center justify-center">
              <span class="text-[14px] font-bold text-slate-600 text-center leading-tight">Generic Cloud<br /><span class="text-[10px] font-medium text-slate-400">ERPs</span></span>
            </div>
            <div class="bg-slate-100/80 px-4 py-3 border-b border-slate-200/80 flex items-center justify-center">
              <span class="text-[14px] font-bold text-slate-600">Tally Prime</span>
            </div>
          </div>

          {#each section.rows as row, rIdx (row.no)}
            <div
              use:slideInRTL={{ delay: rIdx * 60 }}
              class="grid grid-cols-[0.5fr_1.6fr_1.5fr_1.5fr_1.5fr_1.5fr] group transition-colors duration-150 {rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30"
            >
              <div class="px-4 py-3.5 border-r border-slate-200/60 flex items-center justify-center {rIdx < section.rows.length - 1 ? 'border-b' : ''}">
                <span class="text-[11px] font-bold text-slate-300">{row.no}</span>
              </div>

              <div class="px-6 py-3.5 border-r border-slate-200/60 flex items-center {rIdx < section.rows.length - 1 ? 'border-b' : ''}">
                <span class="text-[13px] font-bold text-slate-800">{row.capability}</span>
              </div>

              <div class="px-4 py-3.5 border-r border-slate-200/60 bg-blue-50/40 flex items-center justify-center {rIdx < section.rows.length - 1 ? 'border-b' : ''}">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11.5px] font-semibold text-center leading-snug">
                  <CheckCircle2 class="h-3.5 w-3.5 text-emerald-500 shrink-0" strokeWidth={2.5} />
                  {row.firstcut24}
                </span>
              </div>

              {#each [row.legacy, row.cloud, row.tally] as value, ci (ci)}
                {@const kind = cellIcon(value)}
                <div class="px-4 py-3.5 {ci < 2 ? 'border-r border-slate-200/60' : ''} flex items-center justify-center {rIdx < section.rows.length - 1 ? 'border-b' : ''}">
                  {#if kind === 'no'}
                    <div class="flex items-center gap-1.5">
                      <XCircle class="h-3.5 w-3.5 text-slate-300 shrink-0" strokeWidth={1.5} />
                      <span class="text-[11.5px] text-slate-400 font-medium">{value}</span>
                    </div>
                  {:else}
                    <span class="text-[11.5px] text-slate-500 font-medium text-center leading-snug">{value}</span>
                  {/if}
                </div>
              {/each}
            </div>
          {/each}
        </div>
      </div>
    {/each}

    <!-- ── Final Verdict ── -->
    <div use:slideInRTL class="mt-16 sm:mt-20">
      <div class="text-center mb-10">
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">The Final Verdict for Glass Processors</h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        {#each verdicts as v, i (v.name)}
          <div
            use:slideInRTL={{ delay: i * 100 }}
            class="group rounded-2xl border p-5 sm:p-6 bg-slate-50/60 border-slate-200 hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300 cursor-pointer"
          >
            <p class="text-[15px] font-black mb-2 text-slate-800 group-hover:text-white transition-colors duration-300">{v.name}</p>
            <p class="text-[12.5px] leading-relaxed font-medium text-slate-500 group-hover:text-blue-50 transition-colors duration-300">{v.text}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Bottom note -->
    <p use:slideInRTL class="text-center text-[12.5px] text-slate-400 font-medium mt-10">
      A realistic, module-by-module breakdown Firstcut24 vs Generic ERPs (Legacy), Generic Cloud ERPs, and Tally Prime.
    </p>

  </div>
</section>