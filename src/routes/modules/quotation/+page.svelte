<script lang="ts">
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import { slide, scale } from 'svelte/transition';
  import { resolve } from '$app/paths';
  import {
    Sparkles,
    ArrowRight,
    ArrowLeft,
    RefreshCw,
    AlertTriangle,
    Printer,
    FileCheck,
    ChevronDown
  } from 'lucide-svelte';

  type Unit = 'mm' | 'in' | 'm' | 'ft';

  // Calculator inputs
  let clientName = $state('Future Glass Works');
  let selectedUnit = $state<Unit>('mm');
  let width = $state<number>(1200);
  let height = $state<number>(1500);
  let thickness = $state<number>(6); // 4, 5, 6, 8, 10, 12 mm
  let areaLogic = $state<'exact' | 'round-100' | 'even-inch'>('round-100');
  let polishType = $state<'CP' | 'Bevel' | 'Half-C' | 'RG' | 'Full-C' | 'none'>('CP');
  let taxInclusive = $state(false);
  let isConverted = $state(false);
  let openAccordion = $state<number | null>(null);

  const units: Unit[] = ['mm', 'in', 'm', 'ft'];

  function toggleAccordion(index: number) {
    openAccordion = openAccordion === index ? null : index;
  }

  // Accessories checkboxes
  let addHinges = $state(false);
  let addHandles = $state(false);
  let addChannel = $state(false);

  // Surcharges checkboxes
  let addFabrication = $state(false);
  let addDesigning = $state(false);
  let addTransport = $state(false);

  // Convert inputs to Standard Millimeters
  let wMM = $derived.by(() => {
    if (selectedUnit === 'mm') return width;
    if (selectedUnit === 'in') return width * 25.4;
    if (selectedUnit === 'm') return width * 1000;
    if (selectedUnit === 'ft') return width * 304.8;
    return width;
  });

  let hMM = $derived.by(() => {
    if (selectedUnit === 'mm') return height;
    if (selectedUnit === 'in') return height * 25.4;
    if (selectedUnit === 'm') return height * 1000;
    if (selectedUnit === 'ft') return height * 304.8;
    return height;
  });

  // Apply Chargeable Area Rounding Logic
  let roundW = $derived.by(() => {
    if (areaLogic === 'exact') return wMM;
    if (areaLogic === 'round-100') return Math.ceil(wMM / 100) * 100;
    if (areaLogic === 'even-inch') {
      let inches = wMM / 25.4;
      let roundedEvenIndex = Math.ceil(inches / 2) * 2;
      return roundedEvenIndex * 25.4;
    }
    return wMM;
  });

  let roundH = $derived.by(() => {
    if (areaLogic === 'exact') return hMM;
    if (areaLogic === 'round-100') return Math.ceil(hMM / 100) * 100;
    if (areaLogic === 'even-inch') {
      let inches = hMM / 25.4;
      let roundedEvenIndex = Math.ceil(inches / 2) * 2;
      return roundedEvenIndex * 25.4;
    }
    return hMM;
  });

  // Areas
  let exactAreaSqM = $derived((wMM * hMM) / 1000000);
  let chgAreaSqM = $derived((roundW * roundH) / 1000000);
  let chgAreaSqFt = $derived(chgAreaSqM * 10.7639);

  // Weight (Glass Density is ~2.5kg per sq. meter per mm of thickness)
  let glassWeightKG = $derived(chgAreaSqM * thickness * 2.5);

  // Jumbo size detection: flag if dimensions are larger than 2440x3660mm (or area > 7.5 Sq.M)
  let isJumbo = $derived(wMM > 2440 || hMM > 2440 || chgAreaSqM > 7.0);

  // Polishing perimeter (Running meter/feet)
  let perimeterM = $derived((2 * (wMM + hMM)) / 1000);
  let perimeterFt = $derived(perimeterM * 3.28084);

  // Rate calculations
  let baseRateSqFt = $derived.by(() => {
    if (thickness === 4) return 40;
    if (thickness === 5) return 50;
    if (thickness === 6) return 65;
    if (thickness === 8) return 95;
    if (thickness === 10) return 135;
    if (thickness === 12) return 185;
    return 65;
  });

  let polishRateFt = $derived.by(() => {
    if (polishType === 'none') return 0;
    if (polishType === 'CP') return 20;
    if (polishType === 'Bevel') return 40;
    if (polishType === 'Half-C') return 30;
    if (polishType === 'RG') return 12;
    if (polishType === 'Full-C') return 45;
    return 0;
  });

  let glassCost = $derived(chgAreaSqFt * baseRateSqFt);
  let jumboSurcharge = $derived(isJumbo ? glassCost * 0.20 : 0); // 20% surcharge
  let polishCost = $derived(perimeterFt * polishRateFt);

  let hardwareCost = $derived(
    (addHinges ? 1800 : 0) + (addHandles ? 950 : 0) + (addChannel ? 2400 : 0)
  );

  let servicesCost = $derived(
    (addFabrication ? 800 : 0) + (addDesigning ? 1200 : 0) + (addTransport ? 1500 : 0)
  );

  let tempTotal = $derived(glassCost + jumboSurcharge + polishCost + hardwareCost + servicesCost);

  // Inclusive/Exclusive Tax calculations (using standard 18% GST)
  let subtotal = $derived(taxInclusive ? tempTotal / 1.18 : tempTotal);
  let gstAmount = $derived(taxInclusive ? tempTotal - subtotal : tempTotal * 0.18);
  let grandTotal = $derived(taxInclusive ? tempTotal : tempTotal + gstAmount);

  function resetCalculator() {
    width = 1200;
    height = 1500;
    thickness = 6;
    selectedUnit = 'mm';
    areaLogic = 'round-100';
    polishType = 'CP';
    taxInclusive = false;
    addHinges = false;
    addHandles = false;
    addChannel = false;
    addFabrication = false;
    addDesigning = false;
    addTransport = false;
    isConverted = false;
  }
</script>

<svelte:head>
  <title>Firstcut24</title>
  <meta name="description" content="Generate 100% accurate, multi-item glass quotes. Eliminate edge polishing mistakes, wrong billing areas, and transport miscalculations with Firstcut24 pricing engine." />
  <link rel="canonical" href="https://firstcut24.com/modules/quotation" />
</svelte:head>

<Header />

<main class="min-h-screen bg-slate-50/40 select-none pb-20 pt-24 relative overflow-hidden">
  <!-- Glowing Background Grid -->
  <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div class="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-300/10 blur-3xl opacity-60"></div>
    <div class="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-300/15 to-blue-400/20 blur-3xl opacity-50"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Navigation back & Page Badge -->
    <div class="flex items-center justify-between mb-8">
      <a href={resolve('/modules')} class="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">
        <ArrowLeft class="h-4 w-4" />
        Back to Modules
      </a>
      <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-blue-600 shadow-xs">
        <Sparkles class="h-3 w-3" />
        <span class="text-xs font-bold font-jakarta">Pricing Engine</span>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="max-w-4xl mb-14">
      <h1 class="text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-5 font-heading">
        Smart Quotation Module: Built for the <br />
        <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Complexities of Glass</span>
      </h1>
      <p class="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl">
        Stop losing money on miscalculated edge polishing, wrong chargeable areas, and forgotten transport fees. The Firstcut24 Quotation Module is an ultra-flexible, intelligent pricing engine designed specifically for the glass and hardware industry.
        Create 100% accurate, multi-item project quotes in seconds, and convert them to invoices with a single click.
      </p>
    </div>

    <!-- Interactive Simulator Block -->
    <div class="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden mb-16">
      <div class="border-b border-slate-100 bg-slate-50/50 px-6 py-4.5 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-400"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div class="w-3 h-3 rounded-full bg-green-400"></div>
          <span class="text-xs font-semibold text-slate-400 font-mono ml-2">Quote-to-Invoice Simulator</span>
        </div>
        {#if isConverted}
          <span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md text-[10px] font-bold uppercase tracking-wider animate-pulse flex items-center gap-1">
            <FileCheck class="h-3 w-3" /> Invoice Generated
          </span>
        {:else}
          <span class="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-[10px] font-bold uppercase tracking-wider">
            Active draft: Quote
          </span>
        {/if}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">

        <!-- Simulator Left Panel (Inputs) -->
        <div class="lg:col-span-7 p-6 sm:p-8 space-y-6">
          {#if !isConverted}
            <!-- Client name & Unit freedom -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="client" class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Customer/Project</label>
                <input id="client" type="text" bind:value={clientName} class="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
              </div>
              <div>
                <label for="unit" class="block text-xs font-bold text-slate-550 uppercase tracking-wider mb-1.5">Measurement Unit</label>
                <div class="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl" id="unit">
                  {#each units as unit (unit)}
                    <button onclick={() => (selectedUnit = unit)} class="py-1.5 font-bold text-xs rounded-lg transition-all {selectedUnit === unit ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-700'}">
                      {unit.toUpperCase()}
                    </button>
                  {/each}
                </div>
              </div>
            </div>

            <!-- Glass Size details -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label for="width" class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Width ({selectedUnit})</label>
                <input id="width" type="number" bind:value={width} min="1" class="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div>
                <label for="height" class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Height ({selectedUnit})</label>
                <input id="height" type="number" bind:value={height} min="1" class="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div>
                <label for="thickness" class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Thickness</label>
                <select id="thickness" bind:value={thickness} class="w-full px-3.5 py-2.5 border border-slate-200 bg-white rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option value={4}>4 mm</option>
                  <option value={5}>5 mm</option>
                  <option value={6}>6 mm</option>
                  <option value={8}>8 mm</option>
                  <option value={10}>10 mm</option>
                  <option value={12}>12 mm</option>
                </select>
              </div>
            </div>

            <!-- Smart Billing Area round-offs Logic & Automated Edge Polish -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="area-logic" class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Area Billing Rule</label>
                <select id="area-logic" bind:value={areaLogic} class="w-full px-3.5 py-2.5 border border-slate-200 bg-white rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option value="exact">Exact (No rounding)</option>
                  <option value="round-100">Standard round-offs (to 100mm)</option>
                  <option value="even-inch">Even Inch Calculations</option>
                </select>
              </div>
              <div>
                <label for="polish-type" class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Automated Edge Polish</label>
                <select id="polish-type" bind:value={polishType} class="w-full px-3.5 py-2.5 border border-slate-200 bg-white rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option value="none">None (Rough edges)</option>
                  <option value="CP">Clean Polish (CP)</option>
                  <option value="Bevel">Bevel Edge Finish</option>
                  <option value="Half-C">Half-C Polish</option>
                  <option value="RG">Rough Grind (RG)</option>
                  <option value="Full-C">Full-C Polish</option>
                </select>
              </div>
            </div>

            <!-- Hardware fitting & Alu accessories -->
            <div>
              <span class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Unified Project Materials</span>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button onclick={() => (addHinges = !addHinges)} class="flex items-center gap-3 p-3.5 border rounded-xl cursor-pointer hover:bg-slate-50 text-left transition-colors {addHinges ? 'border-blue-500 bg-blue-50/20' : 'border-slate-100'}">
                  <div class="w-4.5 h-4.5 rounded border flex items-center justify-center {addHinges ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'} text-[10px]">
                    {#if addHinges}✓{/if}
                  </div>
                  <div>
                    <div class="text-[12.5px] font-semibold text-slate-700">Shower Hinge (Pair)</div>
                    <div class="text-[10px] text-slate-450">₹1,800 / set</div>
                  </div>
                </button>
                <button onclick={() => (addHandles = !addHandles)} class="flex items-center gap-3 p-3.5 border rounded-xl cursor-pointer hover:bg-slate-50 text-left transition-colors {addHandles ? 'border-blue-500 bg-blue-50/20' : 'border-slate-100'}">
                  <div class="w-4.5 h-4.5 rounded border flex items-center justify-center {addHandles ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'} text-[10px]">
                    {#if addHandles}✓{/if}
                  </div>
                  <div>
                    <div class="text-[12.5px] font-semibold text-slate-700">Premium D-Handle</div>
                    <div class="text-[10px] text-slate-450">₹950 / piece</div>
                  </div>
                </button>
                <button onclick={() => (addChannel = !addChannel)} class="flex items-center gap-3 p-3.5 border rounded-xl cursor-pointer hover:bg-slate-50 text-left transition-colors {addChannel ? 'border-blue-500 bg-blue-50/20' : 'border-slate-100'}">
                  <div class="w-4.5 h-4.5 rounded border flex items-center justify-center {addChannel ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'} text-[10px]">
                    {#if addChannel}✓{/if}
                  </div>
                  <div>
                    <div class="text-[12.5px] font-semibold text-slate-700">Aluminium Track 12ft</div>
                    <div class="text-[10px] text-slate-450">₹2,400 / track</div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Surcharges & service costs -->
            <div>
              <span class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Instant Surcharges & Services</span>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button onclick={() => (addFabrication = !addFabrication)} class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-slate-50 text-left transition-colors {addFabrication ? 'border-blue-500 bg-blue-50/20' : 'border-slate-100'}">
                  <div class="w-4.5 h-4.5 rounded border flex items-center justify-center {addFabrication ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'} text-[10px]">
                    {#if addFabrication}✓{/if}
                  </div>
                  <div>
                    <div class="text-[12.5px] font-semibold text-slate-700">Fabrication</div>
                    <div class="text-[10px] text-slate-450">₹800 fixed</div>
                  </div>
                </button>
                <button onclick={() => (addDesigning = !addDesigning)} class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-slate-50 text-left transition-colors {addDesigning ? 'border-blue-500 bg-blue-50/20' : 'border-slate-100'}">
                  <div class="w-4.5 h-4.5 rounded border flex items-center justify-center {addDesigning ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'} text-[10px]">
                    {#if addDesigning}✓{/if}
                  </div>
                  <div>
                    <div class="text-[12.5px] font-semibold text-slate-700">CAD Designing</div>
                    <div class="text-[10px] text-slate-450">₹1,200 fixed</div>
                  </div>
                </button>
                <button onclick={() => (addTransport = !addTransport)} class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-slate-50 text-left transition-colors {addTransport ? 'border-blue-500 bg-blue-50/20' : 'border-slate-100'}">
                  <div class="w-4.5 h-4.5 rounded border flex items-center justify-center {addTransport ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'} text-[10px]">
                    {#if addTransport}✓{/if}
                  </div>
                  <div>
                    <div class="text-[12.5px] font-semibold text-slate-700">Heavy Transport</div>
                    <div class="text-[10px] text-slate-450">₹1,500 fixed</div>
                  </div>
                </button>
              </div>
            </div>
          {:else}
            <!-- Invoice success layout -->
            <div class="h-full flex flex-col justify-center items-center text-center p-6 space-y-6" in:scale={{ duration: 400, start: 0.97 }}>
              <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-md">
                <FileCheck class="h-8 w-8" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">Quote Successfully Converted!</h3>
                <p class="text-sm text-slate-500 max-w-sm">
                  Firstcut24 converted this estimation to final GST/Tax Invoice <strong>#INV-2026-0081</strong>.
                  Zero manual entry, zero errors.
                </p>
              </div>

              <div class="w-full bg-slate-50 border border-slate-200/60 rounded-xl p-4 text-left space-y-2 text-xs">
                <div class="flex justify-between border-b border-slate-200/50 pb-2 mb-2 font-semibold">
                  <span class="text-slate-600">Invoice Registry</span>
                  <span class="text-slate-950">Active Ledger</span>
                </div>
                <div class="flex justify-between"><span class="text-slate-500">Client Name:</span><span class="font-medium text-slate-800">{clientName}</span></div>
                <div class="flex justify-between"><span class="text-slate-500">Chargeable Area:</span><span class="font-medium text-slate-800">{chgAreaSqFt.toFixed(2)} Sq.Ft</span></div>
                <div class="flex justify-between"><span class="text-slate-500">Glass Weight:</span><span class="font-medium text-slate-800">{glassWeightKG.toFixed(1)} KG</span></div>
                <div class="flex justify-between border-t border-slate-200/50 pt-2 mt-2 font-bold text-sm">
                  <span class="text-slate-600">Total Billed:</span>
                  <span class="text-emerald-600">₹{grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div class="flex flex-wrap gap-3">
                <button onclick={() => window.print()} class="flex items-center gap-1.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl font-semibold text-slate-700 text-xs transition duration-200">
                  <Printer class="h-3.5 w-3.5" /> Print Invoice
                </button>
                <button onclick={() => (isConverted = false)} class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-white text-xs shadow-lg shadow-blue-500/20 active:scale-95 transition duration-200">
                  Edit Quotation Settings
                </button>
              </div>
            </div>
          {/if}
        </div>

        <!-- Simulator Right Panel (Live calculations & visual details) -->
        <div class="lg:col-span-5 p-6 sm:p-8 bg-slate-50/50 flex flex-col justify-between">
          <div class="space-y-6">
            <span class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Live Pricing & Logistics Output</span>

            <!-- Glass Size & Area breakdown -->
            <div class="space-y-3.5 bg-white border border-slate-200/60 rounded-2xl p-4.5 shadow-xs">
              <div class="flex justify-between text-xs border-b border-slate-100 pb-2 mb-2 font-bold">
                <span class="text-slate-500">Parameter</span>
                <span class="text-slate-500">Calculation</span>
              </div>
              <div class="flex justify-between text-xs">
                <span class="text-slate-500">Entered Glass Size:</span>
                <span class="font-medium text-slate-800">{width} × {height} {selectedUnit}</span>
              </div>
              <div class="flex justify-between text-xs">
                <span class="text-slate-500">Exact billing area:</span>
                <span class="font-medium text-slate-800">{exactAreaSqM.toFixed(2)} m² ({ (exactAreaSqM * 10.7639).toFixed(2) } sq.ft)</span>
              </div>
              <div class="flex justify-between text-xs">
                <span class="text-slate-500 flex items-center gap-1.5">
                  Chargeable area:
                </span>
                <span class="font-bold text-slate-900">{chgAreaSqFt.toFixed(2)} Sq.Ft ({chgAreaSqM.toFixed(2)} m²)</span>
              </div>
              <div class="flex justify-between text-xs">
                <span class="text-slate-500">Polishing perimeter:</span>
                <span class="font-medium text-slate-800">{perimeterFt.toFixed(2)} Running Ft ({perimeterM.toFixed(2)} m)</span>
              </div>
              <div class="flex justify-between text-xs">
                <span class="text-slate-500">Total weight:</span>
                <span class="font-bold text-slate-900 flex items-center gap-1">{glassWeightKG.toFixed(1)} KG</span>
              </div>
            </div>

            <!-- Jumbo Glass Auto-Detection Trigger -->
            {#if isJumbo}
              <div class="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl animate-pulse">
                <AlertTriangle class="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div class="text-xs font-bold text-amber-800">Jumbo Glass Dimension Detected</div>
                  <div class="text-[10px] text-amber-700 leading-normal mt-0.5">
                    Plate sizes over {selectedUnit === 'mm' ? '2440' : (2440 / 25.4).toFixed(0)} {selectedUnit} trigger a 20% oversized handling premium automatically.
                  </div>
                </div>
              </div>
            {/if}

            <!-- Quote receipt list -->
            <div class="space-y-2">
              <span class="block text-[10px] font-bold text-slate-450 uppercase tracking-wider">Itemized Costs</span>
              <div class="space-y-1.5 text-xs">
                <div class="flex justify-between">
                  <span class="text-slate-500">{thickness}mm float glass ({chgAreaSqFt.toFixed(1)}sq.ft)</span>
                  <span class="text-slate-800">₹{glassCost.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
                {#if isJumbo}
                  <div class="flex justify-between text-amber-600">
                    <span>Oversized Handling Premium (+20%)</span>
                    <span>+₹{jumboSurcharge.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                {/if}
                {#if polishType !== 'none'}
                  <div class="flex justify-between">
                    <span>Edge polish ({polishType}) — {perimeterFt.toFixed(1)}ft</span>
                    <span class="text-slate-800">₹{polishCost.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                {/if}
                {#if hardwareCost > 0}
                  <div class="flex justify-between">
                    <span>Hardware fittings & Accessories</span>
                    <span class="text-slate-800">₹{hardwareCost.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                {/if}
                {#if servicesCost > 0}
                  <div class="flex justify-between">
                    <span>Surcharges & Services pricing</span>
                    <span class="text-slate-800">₹{servicesCost.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                {/if}
              </div>
            </div>
          </div>

          <!-- Total pricing layout & Surcharges inclusive/exclusive tax togglers -->
          <div class="mt-8 pt-6 border-t border-slate-200/80 space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500">Exclusive or Inclusive Tax</span>
              <button onclick={() => (taxInclusive = !taxInclusive)} class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition duration-155 shadow-xs">
                <div class="w-3.5 h-3.5 rounded-full flex items-center justify-center border {taxInclusive ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-350 bg-white'} text-[9px] font-bold">
                  {#if taxInclusive}
                    ✓
                  {/if}
                </div>
                <span class="text-[11px] font-semibold text-slate-700">Tax Inclusive</span>
              </button>
            </div>

            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="text-slate-500">Subtotal:</span>
                <span class="text-slate-700 font-semibold">₹{subtotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
              </div>
              <div class="flex justify-between text-xs">
                <span class="text-slate-500">GST Tax (18%):</span>
                <span class="text-slate-700 font-semibold">₹{gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
              </div>
              <div class="flex justify-between items-end pt-2 border-t border-slate-100">
                <span class="text-sm font-bold text-slate-800">Grand Total:</span>
                <span class="text-2xl font-black text-blue-600 flex items-center gap-1">
                  ₹{grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3 pt-2">
              <button onclick={resetCalculator} class="flex items-center justify-center gap-1.5 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-900 text-slate-500 text-xs font-bold transition duration-150 font-jakarta">
                <RefreshCw class="h-3.5 w-3.5" /> Reset
              </button>
              <button onclick={() => (isConverted = !isConverted)} class="flex items-center justify-center gap-1.5 py-3 bg-blue-600 hover:bg-blue-750 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/25 active:scale-97 transition duration-150 font-jakarta">
                {#if isConverted}
                  Back to Quote
                {:else}
                  1-Click Invoice
                  <ArrowRight class="h-3.5 w-3.5" />
                {/if}
              </button>
            </div>

            <!-- Module Quotation Accordion Section -->
            <div class="space-y-10 mt-16 max-w-4xl mx-auto">
              <div class="text-center max-w-2xl mx-auto space-y-3">
                <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                  Smart Quotation Module: Built for the Complexities of Glass
                </h2>
                <p class="text-slate-500 text-sm leading-relaxed">
                  Stop losing money on miscalculated edge polishing, wrong chargeable areas, and forgotten transport fees. The Firstcut24 Quotation Module is an ultra-flexible, intelligent pricing engine designed specifically for the glass and hardware industry.<br />
                  Create 100% accurate, multi-item project quotes in seconds, and convert them to invoices with a single click.
                </p>
              </div>

              <div class="space-y-4">
                <!-- Item 1 -->
                <div class="bg-white rounded-2xl border border-slate-205/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-350">
                  <button
                    type="button"
                    onclick={() => toggleAccordion(1)}
                    class="w-full px-6 py-5 flex items-center justify-between text-left font-sans cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span class="text-base sm:text-lg font-bold text-slate-800">1. Total Dimensional & Pricing Freedom</span>
                    <ChevronDown class="h-5 w-5 text-slate-400 transition-transform duration-250 {openAccordion === 1 ? 'rotate-180 text-blue-600' : ''}" />
                  </button>
                  {#if openAccordion === 1}
                    <div transition:slide class="px-6 pb-6 pt-2 text-slate-500 text-sm leading-relaxed space-y-4 border-t border-slate-100/50">
                      <p>Your clients speak different languages when it comes to measurements. Firstcut24 understands them all.</p>
                      <ul class="space-y-2 pl-1.5 font-medium">
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Any Measurement Unit:</strong> Enter glass sizes seamlessly in Millimeters (mm), Inches, Meters, or Feet.</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Dynamic Pricing Models:</strong> Price your items exactly how you sell them—per Sq.Ft, per Sq.Meter, per Piece, or even thickness-based pricing (Sq.Ft/mm or Sq.Meter/mm).</span>
                        </li>
                      </ul>
                    </div>
                  {/if}
                </div>

                <!-- Item 2 -->
                <div class="bg-white rounded-2xl border border-slate-205/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-350">
                  <button
                    type="button"
                    onclick={() => toggleAccordion(2)}
                    class="w-full px-6 py-5 flex items-center justify-between text-left font-sans cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span class="text-base sm:text-lg font-bold text-slate-800">2. Error-Free Area & Polish Calculations</span>
                    <ChevronDown class="h-5 w-5 text-slate-400 transition-transform duration-250 {openAccordion === 2 ? 'rotate-180 text-blue-600' : ''}" />
                  </button>
                  {#if openAccordion === 2}
                    <div transition:slide class="px-6 pb-6 pt-2 text-slate-500 text-sm leading-relaxed space-y-4 border-t border-slate-100/50">
                      <p>Eliminate human error from your sales team's calculators.</p>
                      <ul class="space-y-2 pl-1.5 font-medium">
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Smart Chargeable Area Logic:</strong> Automatically calculate billing areas based on your factory's specific rules (Exact mm, Standard Round-offs, or Even Inch calculations).</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Automated Edge Polishing:</strong> Just select the finish (Clean Polish/CP, Bevel, Half-C, Rough Grind/RG, or Full-C) and Firstcut24 automatically calculates the linear running perimeter and applies the correct rates.</span>
                        </li>
                      </ul>
                    </div>
                  {/if}
                </div>

                <!-- Item 3 -->
                <div class="bg-white rounded-2xl border border-slate-205/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-350">
                  <button
                    type="button"
                    onclick={() => toggleAccordion(3)}
                    class="w-full px-6 py-5 flex items-center justify-between text-left font-sans cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span class="text-base sm:text-lg font-bold text-slate-800">3. Built-In Logistics & Jumbo Detection</span>
                    <ChevronDown class="h-5 w-5 text-slate-400 transition-transform duration-250 {openAccordion === 3 ? 'rotate-180 text-blue-600' : ''}" />
                  </button>
                  {#if openAccordion === 3}
                    <div transition:slide class="px-6 pb-6 pt-2 text-slate-500 text-sm leading-relaxed space-y-4 border-t border-slate-100/50">
                      <p>Never undercharge for heavy transport or oversized handling again.</p>
                      <ul class="space-y-2 pl-1.5 font-medium">
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Instant Transport Weight:</strong> Once you enter the glass sizes and thickness, Firstcut24 instantly calculates the total combined weight of the entire order. No more guessing for transport capacity!</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Jumbo Glass Auto-Detection:</strong> The system automatically highlights rows if the entered glass dimensions qualify as "Jumbo" size, ensuring your team never forgets to apply oversized handling premiums.</span>
                        </li>
                      </ul>
                    </div>
                  {/if}
                </div>

                <!-- Item 4 -->
                <div class="bg-white rounded-2xl border border-slate-205/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-350">
                  <button
                    type="button"
                    onclick={() => toggleAccordion(4)}
                    class="w-full px-6 py-5 flex items-center justify-between text-left font-sans cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span class="text-base sm:text-lg font-bold text-slate-800">4. Unified Project Quoting (Beyond Just Glass)</span>
                    <ChevronDown class="h-5 w-5 text-slate-400 transition-transform duration-250 {openAccordion === 4 ? 'rotate-180 text-blue-600' : ''}" />
                  </button>
                  {#if openAccordion === 4}
                    <div transition:slide class="px-6 pb-6 pt-2 text-slate-500 text-sm leading-relaxed space-y-4 border-t border-slate-100/50">
                      <p>Don't send multiple quotes for one project. Build comprehensive, multipurpose estimates.</p>
                      <ul class="space-y-2 pl-1.5 font-medium">
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Project-Based Quoting:</strong> Group items logically by project or room.</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Hardware & Aluminum Ready:</strong> Add hardware fittings, aluminum profiles, and accessories into the exact same quote alongside your glass items.</span>
                        </li>
                      </ul>
                    </div>
                  {/if}
                </div>

                <!-- Item 5 -->
                <div class="bg-white rounded-2xl border border-slate-205/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-350">
                  <button
                    type="button"
                    onclick={() => toggleAccordion(5)}
                    class="w-full px-6 py-5 flex items-center justify-between text-left font-sans cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span class="text-base sm:text-lg font-bold text-slate-800">5. Seamless Add-Ons & Service Charges</span>
                    <ChevronDown class="h-5 w-5 text-slate-400 transition-transform duration-250 {openAccordion === 5 ? 'rotate-180 text-blue-600' : ''}" />
                  </button>
                  {#if openAccordion === 5}
                    <div transition:slide class="px-6 pb-6 pt-2 text-slate-500 text-sm leading-relaxed space-y-4 border-t border-slate-100/50">
                      <p>Your quotes need to reflect the reality of your hard work.</p>
                      <ul class="space-y-2 pl-1.5 font-medium">
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Instant Surcharges:</strong> Easily append extra line items for Fabrication, Designing, Handling, Transport, and Admin charges with just a few clicks. Firstcut24 tallies it all up perfectly.</span>
                        </li>
                      </ul>
                    </div>
                  {/if}
                </div>

                <!-- Item 6 -->
                <div class="bg-white rounded-2xl border border-slate-205/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-350">
                  <button
                    type="button"
                    onclick={() => toggleAccordion(6)}
                    class="w-full px-6 py-5 flex items-center justify-between text-left font-sans cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span class="text-base sm:text-lg font-bold text-slate-800">6. Smart Tax & 1-Click Invoicing</span>
                    <ChevronDown class="h-5 w-5 text-slate-400 transition-transform duration-250 {openAccordion === 6 ? 'rotate-180 text-blue-600' : ''}" />
                  </button>
                  {#if openAccordion === 6}
                    <div transition:slide class="px-6 pb-6 pt-2 text-slate-500 text-sm leading-relaxed space-y-4 border-t border-slate-100/50">
                      <p>Close the deal and bill the client without doing the math twice.</p>
                      <ul class="space-y-2 pl-1.5 font-medium">
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Inclusive or Exclusive Tax:</strong> Toggle your entire quote to be Tax Inclusive or Tax Exclusive with a single button. Firstcut24 handles the reverse-math automatically.</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">Auto-Tax Calculation:</strong> GST/Tax brackets are automatically applied based on the item categories (Glass vs. Hardware vs. Services).</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-blue-550 select-none mt-0.5">•</span>
                          <span><strong class="text-slate-750">1-Click Quote-to-Invoice:</strong> Once a client confirms the project, convert the entire quotation into a final Tax Invoice with zero manual data entry. Hassle-free, error-free billing.</span>
                        </li>
                      </ul>
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</main>

<Footer />