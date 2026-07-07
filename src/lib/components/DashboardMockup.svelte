<script lang="ts">
  import { onMount } from 'svelte';
  import {
    LayoutDashboard,
    DollarSign,
    ClipboardList,
    Factory,
    Boxes,
    ShoppingCart,
    ShieldCheck,
    Wrench,
    Wallet,
    BarChart3,
    Settings,
    ChevronLeft,
    ChevronRight,
    Search,
    RefreshCw,
    TrendingUp,
    TrendingDown,
    Warehouse,
    Inbox,
    User,
    Calendar,
    ChevronRightSquare
  } from 'lucide-svelte';

  // --- Mock Data & States ---
  let activeTab = $state('Dashboard');
  let searchQuery = $state('');
  let isSidebarCollapsed = $state(false);
  let isRefreshing = $state(false);
  let activeCategoryIndex = $state<number | null>(null);

  // Stats (simulating dynamic loading on Refresh)
  let stats = $state({
    revenue: 1245800,
    orders: 238,
    production: 12540,
    inventory: 2358750
  });

  // Rates of change
  const statRates = {
    revenue: { val: '+12.5%', pos: true },
    orders: { val: '+5.4%', pos: true },
    production: { val: '+15.3%', pos: true },
    inventory: { val: '-2.1%', pos: false }
  };

  // Products
  const products = [
    { id: 1, name: 'Clear Float Glass 6mm', category: 'Clear Glass', used: 4250, stock: 2380, imageColor: 'from-cyan-200 to-blue-200' },
    { id: 2, name: 'Low Iron Glass 10mm', category: 'Low Iron Glass', used: 2150, stock: 1420, imageColor: 'from-sky-100 to-indigo-150' },
    { id: 3, name: 'Tinted Glass Bronze 8mm', category: 'Tinted Glass', used: 1850, stock: 980, imageColor: 'from-amber-200 to-amber-300' },
    { id: 4, name: 'Reflective Glass Blue 6mm', category: 'Reflective Glass', used: 1200, stock: 580, imageColor: 'from-blue-200 to-indigo-300' },
  ];

  // Orders
  let ordersList = $state([
    { id: 'PD-240528-001', product: 'Clear Float Glass 6mm', qty: 1250, status: 'In Progress', due: 'May 28, 2024' },
    { id: 'PD-240528-002', product: 'Low Iron Glass 10mm', qty: 980, status: 'Completed', due: 'May 25, 2024' },
    { id: 'PD-240528-003', product: 'Tinted Glass Bronze 8mm', qty: 760, status: 'In Progress', due: 'May 25, 2024' },
    { id: 'PD-240528-004', product: 'Reflective Glass Blue 6mm', qty: 650, status: 'Pending', due: 'May 28, 2024' },
  ]);

  // Sidebar navigation options
  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Sales', icon: DollarSign },
    { name: 'Quotes', icon: ClipboardList },
    { name: 'Orders', icon: ChevronRightSquare },
    { name: 'Production', icon: Factory },
    { name: 'Inventory', icon: Boxes },
    { name: 'Procurement', icon: ShoppingCart },
    { name: 'Quality', icon: ShieldCheck },
    { name: 'Maintenance', icon: Wrench },
    { name: 'Finance', icon: Wallet },
    { name: 'Reports', icon: BarChart3 },
    { name: 'Settings', icon: Settings },
  ];

  // --- Filtering & Searches ---
  let filteredProducts = $derived(
    products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  let filteredOrders = $derived(
    ordersList.filter(o => o.product.toLowerCase().includes(searchQuery.toLowerCase()) || o.id.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // --- Interaction: Reload Data ---
  function handleRefresh() {
    if (isRefreshing) return;
    isRefreshing = true;
    setTimeout(() => {
      // Perturb stats slightly for dynamic feel
      stats.revenue = 1245800 + Math.floor((Math.random() - 0.3) * 60000);
      stats.orders = 238 + Math.floor((Math.random() - 0.3) * 20);
      stats.production = 12540 + Math.floor((Math.random() - 0.2) * 500);
      stats.inventory = 2358750 + Math.floor((Math.random() - 0.5) * 80000);
      
      // Perturb order qtys
      ordersList = ordersList.map(o => ({
        ...o,
        qty: o.qty + Math.floor((Math.random() - 0.5) * 40)
      }));

      isRefreshing = false;
    }, 900);
  }

  // --- Line/Area Chart Interactive Tooltip ---
  // Coordinates and data values for Production Overview
  const chartData = [
    { day: 'Mon 20', x: 40, y: 140, val: 1850 },
    { day: 'Tue 21', x: 110, y: 120, val: 2100 },
    { day: 'Wed 22', x: 180, y: 55, val: 2650 }, // Wednesday Peak
    { day: 'Thu 23', x: 250, y: 100, val: 2300 },
    { day: 'Fri 24', x: 320, y: 80, val: 2480 },
    { day: 'Sat 25', x: 390, y: 135, val: 1950 },
    { day: 'Sun 26', x: 460, y: 155, val: 1620 }
  ];

  let hoverPointIndex = $state(2); // Default to Wednesday peak
  let isHoveringChart = $state(false);

  function handleChartMouseMove(event: MouseEvent) {
    isHoveringChart = true;
    const svgElement = event.currentTarget as SVGSVGElement;
    const rect = svgElement.getBoundingClientRect();
    const xCoordInSvg = ((event.clientX - rect.left) / rect.width) * 500; // viewBox width is 500

    // Find custom closest data point on X axis
    let closestIndex = 0;
    let minDistance = Math.abs(xCoordInSvg - chartData[0].x);
    for (let i = 1; i < chartData.length; i++) {
      const dist = Math.abs(xCoordInSvg - chartData[i].x);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = i;
      }
    }
    hoverPointIndex = closestIndex;
  }

  function handleChartMouseLeave() {
    isHoveringChart = false;
    hoverPointIndex = 2; // Default back to Wed peak
  }

  // --- Donut Chart Custom Data ---
  // R = 45, Center = 60,60. Circumference = 2 * pi * 45 = 282.74
  const categories = [
    { label: 'Clear Glass', qty: 5600, percentage: 44.7, color: 'text-blue-500 hover:text-blue-600', fill: '#3b82f6', dashArray: '126.4 282.74', dashOffset: '0' },
    { label: 'Low Iron Glass', qty: 2850, percentage: 22.7, color: 'text-teal-500 hover:text-teal-600', fill: '#0d9488', dashArray: '64.2 282.74', dashOffset: '-126.4' },
    { label: 'Tinted Glass', qty: 2300, percentage: 18.3, color: 'text-purple-500 hover:text-purple-600', fill: '#8b5cf6', dashArray: '51.7 282.74', dashOffset: '-190.6' },
    { label: 'Reflective Glass', qty: 1200, percentage: 9.6, color: 'text-yellow-500 hover:text-yellow-600', fill: '#f59e0b', dashArray: '27.1 282.74', dashOffset: '-242.3' },
    { label: 'Others', qty: 590, percentage: 4.7, color: 'text-slate-400 hover:text-slate-500', fill: '#64748b', dashArray: '13.3 282.74', dashOffset: '-269.4' }
  ];
</script>

<div class="w-full rounded-2xl border border-slate-200/80 bg-white shadow-2xl xl:shadow-blue-500/10 overflow-hidden flex h-[620px] font-sans text-xs select-none">
  
  <!-- Sidebar -->
  <aside 
    class="bg-slate-900 text-slate-400 hidden md:flex flex-col justify-between transition-all duration-300 ease-in-out shrink-0 border-r border-slate-800"
    class:w-48={!isSidebarCollapsed}
    class:w-14={isSidebarCollapsed}
  >
    <div>
      <!-- Brand Logo Header -->
      <div class="h-14 flex items-center gap-2 px-3.5 border-b border-slate-800/60 overflow-hidden">
        <div class="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-600/30">
          <Factory class="h-4 w-4" />
        </div>
        {#if !isSidebarCollapsed}
          <span class="font-extrabold text-sm tracking-tight text-white font-heading whitespace-nowrap animate-fade-in">
            GlassPro <span class="text-blue-400">ERP</span>
          </span>
        {/if}
      </div>

      <!-- Nav Items -->
      <nav class="p-2 space-y-1 overflow-y-auto max-h-[460px] custom-scrollbar">
        {#each sidebarItems as item}
          <button
            onclick={() => activeTab = item.name}
            class="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg font-medium transition-all group relative {activeTab === item.name ? 'text-white bg-blue-600/90 shadow-sm' : 'hover:bg-slate-800 hover:text-white'}"
          >
            <!-- Vertical Active Pill Indicator -->
            {#if activeTab === item.name}
              <div class="absolute left-0 top-1.5 bottom-1.5 w-1 bg-cyan-400 rounded-r"></div>
            {/if}
            <item.icon class="h-4.5 w-4.5 shrink-0 transition-transform duration-200 group-hover:scale-105 {activeTab === item.name ? 'text-white' : 'text-slate-400 group-hover:text-white'}" />
            {#if !isSidebarCollapsed}
              <span class="whitespace-nowrap truncate">{item.name}</span>
            {/if}
          </button>
        {/each}
      </nav>
    </div>

    <!-- Collapse Toggle -->
    <div class="p-2 border-t border-slate-800/80">
      <button
        onclick={() => isSidebarCollapsed = !isSidebarCollapsed}
        class="w-full flex items-center justify-center gap-2 px-2 py-2 rounded-lg hover:bg-slate-800 hover:text-white text-slate-500 hover:text-slate-300 font-medium transition-colors"
      >
        {#if isSidebarCollapsed}
          <ChevronRight class="h-4.5 w-4.5" />
        {:else}
          <ChevronLeft class="h-4.5 w-4.5" />
          <span class="text-xs font-semibold">Collapse</span>
        {/if}
      </button>
    </div>
  </aside>

  <!-- Main Content Space -->
  <main class="flex-1 bg-slate-50/50 flex flex-col min-w-0">
    <!-- Topbar -->
    <header class="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-4 shrink-0 shadow-sm shadow-slate-100/40">
      <!-- Search Input -->
      <div class="relative w-64 max-w-sm">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search items, orders, actions..."
          class="w-full pl-8.5 pr-3 py-1.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-xs text-slate-700 bg-slate-50/50 hover:bg-slate-50 transition-colors"
        />
        {#if searchQuery}
          <button 
            onclick={() => searchQuery = ''}
            class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650 px-1 font-sans rounded-full"
          >
            ×
          </button>
        {/if}
      </div>

      <!-- Profile Avatar Panel -->
      <div class="flex items-center gap-2.5">
        <div class="text-right hidden sm:block">
          <p class="font-bold text-slate-800 text-[11px] leading-tight">Michael Anderson</p>
          <p class="text-[9px] text-slate-400 leading-tight">Admin</p>
        </div>
        <div class="relative group">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&fit=crop&q=80"
            alt="Michael Anderson"
            class="h-8.5 w-8.5 rounded-full border border-slate-200 object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-white"></div>
        </div>
      </div>
    </header>

    <!-- Scrollable Workspace Details -->
    <div class="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
      <!-- Title Actions row -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
        <div>
          <h1 class="text-base font-extrabold text-slate-900 tracking-tight font-heading flex items-center gap-1.5">
            Dashboard
            {#if activeTab !== 'Dashboard'}
              <span class="text-slate-350 text-xs font-normal">/ {activeTab}</span>
            {/if}
          </h1>
          <p class="text-[10px] text-slate-450 mt-0.5">Overview of glass manufacturing operations.</p>
        </div>

        <div class="flex items-center gap-2 self-start sm:self-auto">
          <!-- Calendar Date Select -->
          <div class="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 shadow-sm">
            <Calendar class="h-3.5 w-3.5 text-slate-450" />
            <span class="font-semibold text-[10px]">May 20 - May 26, 2024</span>
          </div>

          <!-- Refresh action -->
          <button
            onclick={handleRefresh}
            disabled={isRefreshing}
            class="flex items-center gap-1.5 px-2.5 py-1.5 bg-white hover:bg-slate-50 active:bg-slate-100 disabled:bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-semibold shadow-sm transition-colors cursor-pointer"
          >
            <RefreshCw class="h-3 w-3 text-slate-500 {isRefreshing ? 'animate-spin' : ''}" />
            <span class="text-[10px]">{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>
        </div>
      </div>
      <!-- KPI Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <!-- KPI Card 1 -->
        <div class="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm relative group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-slate-450 font-semibold text-[10px]">Total Revenue</span>
            <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <DollarSign class="h-3.5 w-3.5" />
            </div>
          </div>
          <div class="mt-1.5">
            <h3 class="text-[13px] font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight truncate">
              ${stats.revenue.toLocaleString('en-US')}
            </h3>
            <span class="flex items-center gap-0.5 text-[8.5px] font-semibold mt-1 text-emerald-600">
              <span>▲</span> {statRates.revenue.val} <span class="text-slate-400">vs last week</span>
            </span>
          </div>
        </div>

        <!-- KPI Card 2 -->
        <div class="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm relative group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-slate-450 font-semibold text-[10px]">Total Orders</span>
            <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <ClipboardList class="h-3.5 w-3.5" />
            </div>
          </div>
          <div class="mt-1.5">
            <h3 class="text-[13px] font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight truncate">
              {stats.orders.toLocaleString('en-US')}
            </h3>
            <span class="flex items-center gap-0.5 text-[8.5px] font-semibold mt-1 text-emerald-600">
              <span>▲</span> {statRates.orders.val} <span class="text-slate-400">vs last week</span>
            </span>
          </div>
        </div>

        <!-- KPI Card 3 -->
        <div class="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm relative group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-slate-450 font-semibold text-[10px]">Production Output</span>
            <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600">
              <Factory class="h-3.5 w-3.5" />
            </div>
          </div>
          <div class="mt-1.5">
            <h3 class="text-[13px] font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors leading-tight truncate">
              {stats.production.toLocaleString('en-US')} m²
            </h3>
            <span class="flex items-center gap-0.5 text-[8.5px] font-semibold mt-1 text-emerald-600">
              <span>▲</span> {statRates.production.val} <span class="text-slate-400">vs last week</span>
            </span>
          </div>
        </div>

        <!-- KPI Card 4 -->
        <div class="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm relative group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-slate-450 font-semibold text-[10px]">Inventory Value</span>
            <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <Warehouse class="h-3.5 w-3.5" />
            </div>
          </div>
          <div class="mt-1.5">
            <h3 class="text-[13px] font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight truncate">
              ${stats.inventory.toLocaleString('en-US')}
            </h3>
            <span class="flex items-center gap-0.5 text-[8.5px] font-semibold mt-1 text-rose-600">
              <span>▼</span> {statRates.inventory.val} <span class="text-slate-400">vs last week</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Charts Row -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        
        <!-- Inventory Overview (Donut Chart) -->
        <div class="lg:col-span-5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2 mb-3.5">
            <span class="font-bold text-slate-800 text-[11px]">Inventory Overview</span>
            <button class="text-blue-600 font-semibold hover:underline text-[9px]">View All</button>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-1.5">
            <!-- SVG Donut Chart -->
            <div class="relative h-28 w-28 flex items-center justify-center shrink-0">
              <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
                {#each categories as cat, index}
                  <circle
                    cx="60"
                    cy="60"
                    r="45"
                    fill="transparent"
                    stroke={cat.fill}
                    stroke-width="12"
                    stroke-dasharray={cat.dashArray}
                    stroke-dashoffset={cat.dashOffset}
                    class="transition-all duration-300 cursor-pointer origin-center hover:scale-103"
                    style="stroke-linecap: butt;"
                    onmouseenter={() => activeCategoryIndex = index}
                    onmouseleave={() => activeCategoryIndex = null}
                    role="graphics-symbol"
                    aria-label={cat.label}
                  />
                {/each}
              </svg>

              <!-- Center text -->
              <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span class="text-slate-400 text-[8px] leading-tight">
                  {activeCategoryIndex !== null ? categories[activeCategoryIndex].label : 'Total (m²)'}
                </span>
                <span class="text-slate-900 font-extrabold text-[12px] leading-none mt-1">
                  {activeCategoryIndex !== null ? categories[activeCategoryIndex].qty.toLocaleString('en-US') : stats.production.toLocaleString('en-US')}
                </span>
                <span class="text-[8px] font-semibold text-emerald-600 mt-0.5">
                  {activeCategoryIndex !== null ? `${categories[activeCategoryIndex].percentage}%` : '100% active'}
                </span>
              </div>
            </div>

            <!-- Categories Legend List -->
            <div class="flex-1 space-y-1.5">
              {#each categories as cat, index}
                <div 
                  class="flex items-center justify-between text-[9px] p-1 px-1.5 rounded transition-colors group cursor-pointer"
                  class:bg-slate-50={activeCategoryIndex === index}
                  onmouseenter={() => activeCategoryIndex = index}
                  onmouseleave={() => activeCategoryIndex = null}
                  role="listitem"
                >
                  <div class="flex items-center gap-1.5 min-w-0 flex-1">
                    <span class="h-2 w-2 rounded-full shrink-0 block" style="background-color: {cat.fill};"></span>
                    <span class="font-bold text-slate-600 group-hover:text-slate-900 truncate">{cat.label}</span>
                  </div>
                  <div class="flex items-center gap-3 pl-2 shrink-0">
                    <span class="font-bold text-slate-700">{cat.qty.toLocaleString('en-US')} m²</span>
                    <span class="text-[8px] font-bold text-slate-400 w-8 text-right">{cat.percentage}%</span>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Production Overview Line Chart -->
        <div class="lg:col-span-7 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between relative group/chart overflow-hidden">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
            <span class="font-bold text-slate-800 text-[11px]">Production Overview (This Week)</span>
            <button class="text-blue-600 font-semibold hover:underline text-[9px]">View Report</button>
          </div>

          <!-- SVG Chart Area -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div 
            class="relative flex-1 w-full min-h-[120px] max-h-[140px] pt-4"
            onmousemove={handleChartMouseMove}
            onmouseleave={handleChartMouseLeave}
          >
            <!-- Vertical reference line -->
            <div 
              class="absolute top-0 bottom-6 border-l border-dashed border-slate-300 w-0 pointer-events-none transition-all duration-150"
              style="left: {(chartData[hoverPointIndex].x / 500) * 100}%; opacity: {isHoveringChart ? 1 : 0.6}"
            ></div>

            <svg 
              class="w-full h-full overflow-visible"
              viewBox="0 0 500 200"
              preserveAspectRatio="none"
            >
              <defs>
                <!-- Area Chart Gradient -->
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.00"/>
                </linearGradient>
              </defs>

              <!-- Grid Lines -->
              <line x1="20" y1="160" x2="480" y2="160" stroke="#f1f5f9" stroke-width="1.5" />
              <line x1="20" y1="110" x2="480" y2="110" stroke="#f1f5f9" stroke-width="1.5" />
              <line x1="20" y1="60" x2="480" y2="60" stroke="#f1f5f9" stroke-width="1.5" />
              <line x1="20" y1="10" x2="480" y2="10" stroke="#f1f5f9" stroke-width="1.5" />

              <!-- Area Path (Filled gradient) -->
              <path
                d="M 40 200 L 40 140 C 75 130, 75 125, 110 120 C 145 115, 145 60, 180 55 C 215 50, 215 95, 250 100 C 285 105, 285 85, 320 80 C 355 75, 355 130, 390 135 C 425 140, 425 150, 460 155 L 460 200 Z"
                fill="url(#chartGrad)"
                stroke="none"
              />

              <!-- Line Path (Smooth cubic bezier approximation) -->
              <path
                d="M 40 140 C 75 130, 75 125, 110 120 C 145 115, 145 60, 180 55 C 215 50, 215 95, 250 100 C 285 105, 285 85, 320 80 C 355 75, 355 130, 390 135 C 425 140, 425 150, 460 155"
                fill="none"
                stroke="#3b82f6"
                stroke-width="3"
                stroke-linecap="round"
              />

              <!-- Data Dots -->
              {#each chartData as pt, idx}
                <!-- Outer pulse highlight for active point -->
                {#if hoverPointIndex === idx}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="8"
                    fill="#3b82f6"
                    fill-opacity="0.22"
                    class="animate-ping origin-center"
                    style="transform-box: fill-box; transform-origin: center;"
                  />
                {/if}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={hoverPointIndex === idx ? '5' : '3.5'}
                  fill={hoverPointIndex === idx ? '#3b82f6' : '#ffffff'}
                  stroke={hoverPointIndex === idx ? '#ffffff' : '#3b82f6'}
                  stroke-width={hoverPointIndex === idx ? '2.5' : '2'}
                  class="transition-all duration-200 cursor-pointer"
                />
              {/each}
            </svg>

            <!-- Line Chart X labels -->
            <div class="absolute bottom-0 left-0 right-0 flex justify-between px-5 text-[8px] font-semibold text-slate-450 pointer-events-none">
              <span>Mon 20</span>
              <span>Tue 21</span>
              <span>Wed 22</span>
              <span>Thu 23</span>
              <span>Fri 24</span>
              <span>Sat 25</span>
              <span>Sun 26</span>
            </div>

            <!-- Dynamic Tooltip -->
            <div 
              class="absolute bg-slate-900 text-white rounded-lg p-2 shadow-xl border border-slate-700 pointer-events-none flex flex-col gap-0.5 transition-all duration-150 z-20"
              style="
                left: calc({(chartData[hoverPointIndex].x / 500) * 100}% - 55px);
                top: calc({(chartData[hoverPointIndex].y / 200) * 100}% - 46px);
                opacity: {isHoveringChart ? 1 : 0.9};
              "
            >
              <div class="text-[7px] text-slate-400 font-bold whitespace-nowrap leading-none">{chartData[hoverPointIndex].day} May</div>
              <div class="text-[10px] font-extrabold whitespace-nowrap leading-tight">{chartData[hoverPointIndex].val.toLocaleString('en-US')} m²</div>
            </div>
          </div>
        </div>

      </div>

      <!-- Tables Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        
        <!-- Top Glass Products -->
        <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-2.5">
            <span class="font-bold text-slate-800 text-[11px] flex items-center gap-1">Top Glass Products <span class="text-slate-400 font-normal text-[9px]">(By Usage)</span></span>
            <button class="text-blue-600 font-semibold hover:underline text-[9px]">View All</button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-100/80 text-slate-450 text-[9px] font-bold">
                  <th class="pb-1.5 font-semibold">Product</th>
                  <th class="pb-1.5 font-semibold">Category</th>
                  <th class="pb-1.5 font-semibold text-right">Used (m²)</th>
                  <th class="pb-1.5 font-semibold text-right">Stock (m²)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                {#if filteredProducts.length === 0}
                  <tr>
                    <td colspan="4" class="py-6 text-center text-slate-450">
                      <div class="flex flex-col items-center justify-center gap-1.5">
                        <Inbox class="h-5 w-5 text-slate-350" />
                        <span>No products found</span>
                      </div>
                    </td>
                  </tr>
                {:else}
                  {#each filteredProducts as prod}
                    <tr class="hover:bg-slate-50/50 group/row transition-colors">
                      <td class="py-2.5 flex items-center gap-2">
                        <div class="h-6 w-6 rounded-md bg-gradient-to-tr {prod.imageColor} border border-slate-100 shrink-0 shadow-sm transition-transform group-hover/row:scale-105"></div>
                        <span class="font-bold text-slate-800 group-hover/row:text-blue-600 transition-colors truncate max-w-[120px]">{prod.name}</span>
                      </td>
                      <td class="py-2.5 text-slate-550 font-medium">{prod.category}</td>
                      <td class="py-2.5 text-right font-extrabold text-slate-800">{prod.used.toLocaleString('en-US')}</td>
                      <td class="py-2.5 text-right font-semibold text-slate-450">{prod.stock.toLocaleString('en-US')}</td>
                    </tr>
                  {/each}
                {/if}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Recent Production Orders -->
        <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-2.5">
            <span class="font-bold text-slate-800 text-[11px]">Recent Production Orders</span>
            <button class="text-blue-600 font-semibold hover:underline text-[9px]">View All</button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-100/80 text-slate-450 text-[9px] font-bold">
                  <th class="pb-1.5 font-semibold">Order No</th>
                  <th class="pb-1.5 font-semibold">Product</th>
                  <th class="pb-1.5 font-semibold text-right">Quantity</th>
                  <th class="pb-1.5 font-semibold text-center">Status</th>
                  <th class="pb-1.5 font-semibold text-right">Due Date</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                {#if filteredOrders.length === 0}
                  <tr>
                    <td colspan="5" class="py-6 text-center text-slate-450">
                      <div class="flex flex-col items-center justify-center gap-1.5">
                        <Inbox class="h-5 w-5 text-slate-355" />
                        <span>No orders found</span>
                      </div>
                    </td>
                  </tr>
                {:else}
                  {#each filteredOrders as order}
                    <tr class="hover:bg-slate-50/50 group/row transition-colors">
                      <td class="py-2.5 font-extrabold text-slate-800 font-mono tracking-tight">{order.id}</td>
                      <td class="py-2.5 text-slate-655 font-bold group-hover/row:text-blue-600 transition-colors truncate max-w-[100px]">{order.product}</td>
                      <td class="py-2.5 text-right font-extrabold text-slate-800">{order.qty.toLocaleString('en-US')} m²</td>
                      <td class="py-2.5 text-center">
                        <span class="inline-block px-1.5 py-0.5 rounded font-extrabold text-[8px] leading-tight text-center uppercase tracking-wide
                          {order.status === 'In Progress' ? 'bg-blue-50 text-blue-650 border border-blue-100' : ''}
                          {order.status === 'Completed' ? 'bg-emerald-50 text-emerald-650 border border-emerald-100' : ''}
                          {order.status === 'Pending' ? 'bg-amber-50 text-amber-650 border border-amber-100' : ''}
                        ">
                          {order.status}
                        </span>
                      </td>
                      <td class="py-2.5 text-right font-semibold text-slate-400">{order.due}</td>
                    </tr>
                  {/each}
                {/if}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  </main>
</div>

<style>
  /* Custom scrollbar utility */
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 9999px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #cbd5e1;
  }

  /* Fade-in animation helper */
  .animate-fade-in {
    animation: fadeIn 0.2s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-5px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
