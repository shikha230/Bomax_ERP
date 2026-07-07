<script lang="ts">
  import { ArrowRight, FileText, Package, Factory, Diamond, Receipt, Landmark, Users, BarChart3, CheckCircle2, Sparkles, Search, ChevronRight, Plus, Calendar, Phone, Mail, Hash, CreditCard, IndianRupee, User, MapPin, Percent, FileDown } from 'lucide-svelte';

  let activeModule = $state(0);

  const modules = [
    {
      id: 'quotation',
      label: 'Quotation',
      icon: FileText,
      badge: 'Quotation Module',
      title: 'Smart Glass Quotation System',
      description: 'Generate accurate, professional quotations in minutes. Auto-calculate glass area, cutting charges, hardware costs, and GST — all in one flow.',
      features: [
        'Auto glass area & cost calculation',
        'Multi-item, multi-rate quotation builder',
        'PDF generation & WhatsApp sharing',
        'One-click quote-to-order conversion',
      ],
      tip: 'Reduce quotation time by 80% · Close deals 3x faster · Never miss a quote follow-up',
      cta: 'Explore Module',
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: Package,
      badge: 'Inventory Module',
      title: 'Real-Time Inventory Tracking',
      description: 'Track every glass sheet, hardware piece, and raw material across warehouses. Get instant stock visibility with smart alerts.',
      features: [
        'Multi-warehouse stock management',
        'Low stock & reorder point alerts',
        'Batch tracking & serial numbers',
        'Barcode scanning integration',
      ],
      tip: 'Eliminate stockouts · Reduce excess inventory by 40% · Full material traceability',
      cta: 'Explore Module',
    },
    {
      id: 'production',
      label: 'Production',
      icon: Factory,
      badge: 'Production Module',
      title: 'Production Floor Management',
      description: 'Plan cutting jobs, assign workers, track job cards, and monitor real-time production progress from a single dashboard.',
      features: [
        'Job card creation & assignment',
        'Real-time production tracking',
        'Worker performance analytics',
        'Quality control checkpoints',
      ],
      tip: 'Boost production efficiency by 60% · Reduce job delays · Full shop floor visibility',
      cta: 'Explore Module',
    },
    {
      id: 'optimizer',
      label: 'Glass Optimizer',
      icon: Diamond,
      badge: 'Optimizer Module',
      title: 'AI Glass Cutting Optimizer',
      description: 'Maximize glass yield with AI-powered nesting algorithms. Reduce scrap wastage and save costs on every cutting job.',
      features: [
        'AI-powered cutting layout optimization',
        'Automatic nesting for minimal waste',
        'Multi-sheet optimization support',
        'Scrap tracking & reuse suggestions',
      ],
      tip: 'Save 15-25% on raw material costs · Minimize scrap · Optimize every sheet',
      cta: 'Explore Module',
    },
    {
      id: 'accounts',
      label: 'Accounts',
      icon: Landmark,
      badge: 'Accounts Module',
      title: 'Complete Accounting Suite',
      description: 'Full double-entry accounting with automated ledgers, P&L statements, balance sheets, and GST-ready reports.',
      features: [
        'Double-entry bookkeeping system',
        'Auto ledger & journal entries',
        'GST filing & compliance reports',
        'Tally-compatible data export',
      ],
      tip: 'Automate 90% of accounting tasks · Stay GST compliant · Export to Tally instantly',
      cta: 'Explore Module',
    },
    {
      id: 'hr',
      label: 'HR & Payroll',
      icon: Users,
      badge: 'HR Module',
      title: 'HR & Payroll Management',
      description: 'Manage employee lifecycle from onboarding to payroll. Track attendance, leaves, salaries, and statutory compliance.',
      features: [
        'Employee records & onboarding',
        'Attendance & biometric sync',
        'Leave management & approvals',
      ],
      tip: 'Process payroll in minutes · Zero attendance errors · Full compliance coverage',
      cta: 'Explore Module',
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: BarChart3,
      badge: 'Reports Module',
      title: 'Business Intelligence & Reports',
      description: 'Real-time dashboards with profit-per-job insights, sales trends, and custom executive reports for data-driven decisions.',
      features: [
        'Real-time business dashboards',
        'Profit-per-job analysis',
        'Custom report builder',
        'Scheduled email reports',
      ],
      tip: 'Make data-driven decisions · Track profitability in real-time · Executive-ready reports',
      cta: 'Explore Module',
    },
  ];

  function selectModule(index: number) {
    activeModule = index;
  }
</script>

<!-- Module Explorer Section -->
<section id="modules" class="relative w-full bg-slate-50/60 py-12 sm:py-16 lg:py-20 overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-b from-blue-100/30 to-transparent blur-3xl"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-14 sm:mb-16 lg:mb-20">
      <!-- Chip Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 mb-6 shadow-sm">
        <Sparkles class="h-3.5 w-3.5" />
        <span class="text-xs font-bold font-jakarta tracking-wide">Interactive ERP Modules</span>
      </div>

      <!-- Title -->
      <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-tight font-heading mb-5">
        Explore Each Module in Detail
      </h2>

      <!-- Subtitle -->
      <p class="text-sm sm:text-[15px] text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
        Click any module to see how it works, what it includes, and the business value it delivers.
      </p>
    </div>

    <!-- Explorer Layout -->
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-0">
      
      <!-- Left Sidebar Tabs -->
      <div class="lg:w-[180px] flex-shrink-0">
        <nav class="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
          {#each modules as mod, i}
            <button
              onclick={() => selectModule(i)}
              class="flex items-center gap-2.5 px-4 py-3 rounded-xl text-left whitespace-nowrap transition-all duration-250 cursor-pointer min-w-max lg:min-w-0 lg:w-full
                {activeModule === i 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60 lg:border-0'
                }"
            >
              <svelte:component 
                this={mod.icon} 
                class="h-4 w-4 flex-shrink-0 {activeModule === i ? 'text-white' : 'text-slate-400'}" 
                strokeWidth={2} 
              />
              <span class="text-[13px] font-semibold font-jakarta">{mod.label}</span>
            </button>
          {/each}
        </nav>
      </div>

      <!-- Main Content Area -->
      <div class="flex-1 lg:ml-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div class="flex flex-col xl:flex-row">
            
            <!-- Module Detail (Left Content) -->
            <div class="flex-1 p-8 sm:p-10 xl:max-w-[480px]">
              {#key activeModule}
                <div class="module-content-enter">
                  <!-- Module Badge -->
                  <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 mb-6">
                    <svelte:component 
                      this={modules[activeModule].icon} 
                      class="h-3.5 w-3.5" 
                      strokeWidth={2} 
                    />
                    <span class="text-xs font-semibold font-jakarta">{modules[activeModule].badge}</span>
                  </div>

                  <!-- Title -->
                  <h3 class="text-2xl sm:text-[28px] font-black text-slate-900 font-heading tracking-tight leading-snug mb-4">
                    {modules[activeModule].title}
                  </h3>

                  <!-- Description -->
                  <p class="text-[14px] text-slate-500 leading-relaxed mb-7 font-medium">
                    {modules[activeModule].description}
                  </p>

                  <!-- Feature Checklist -->
                  <div class="space-y-3.5 mb-8">
                    {#each modules[activeModule].features as feature}
                      <div class="flex items-start gap-3">
                        <div class="flex-shrink-0 mt-0.5">
                          <CheckCircle2 class="h-[18px] w-[18px] text-emerald-500" strokeWidth={2.2} />
                        </div>
                        <span class="text-[13.5px] text-slate-700 font-medium leading-snug">{feature}</span>
                      </div>
                    {/each}
                  </div>

                  <!-- Tip Bar -->
                  <div class="flex items-start gap-3 px-4 py-3.5 bg-blue-50/60 border-l-[3px] border-blue-500 rounded-r-lg mb-8">
                    <Sparkles class="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p class="text-[12.5px] text-blue-700 font-medium leading-relaxed">
                      {modules[activeModule].tip}
                    </p>
                  </div>

                  <!-- CTA Button -->
                  <button class="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer active:scale-[0.98] group">
                    <span>{modules[activeModule].cta}</span>
                    <ArrowRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              {/key}
            </div>

            <!-- Module Mockup (Right Side) -->
            <div class="flex-1 xl:max-w-[520px] bg-slate-50/50 border-t xl:border-t-0 xl:border-l border-slate-200/60 p-4 sm:p-6 flex items-start justify-center overflow-hidden">
              {#key activeModule}
                <div class="mockup-enter w-full">
                  <!-- Quotation Mockup -->
                  {#if activeModule === 0}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <!-- Top Search Bar -->
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search anything...</span>
                      </div>
                      <!-- Breadcrumb -->
                      <div class="px-4 py-2 border-b border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400">
                        <span>...</span>
                        <ChevronRight class="h-2.5 w-2.5" />
                        <span class="text-slate-600 font-medium">New Quotation</span>
                      </div>
                      <!-- Header Row -->
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">New Quotation</h4>
                        <span class="text-slate-400 text-[10px] cursor-pointer hover:text-slate-600">Cancel</span>
                      </div>
                      <!-- Two column form -->
                      <div class="grid grid-cols-2 divide-x divide-slate-100">
                        <!-- Left form -->
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
                              <Mail class="h-3 w-3 text-slate-400 flex-shrink-0" />
                              <span class="text-slate-500 truncate min-w-0">rahul.sharma@futuretech.com</span>
                            </div>
                            <div class="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 rounded-md border border-slate-200/60">
                              <Phone class="h-3 w-3 text-slate-400" />
                              <span class="text-slate-500">+91 98765 43210</span>
                            </div>
                          </div>
                        </div>
                        <!-- Right form -->
                        <div class="p-4 space-y-3">
                          <div class="text-[10px] font-semibold text-slate-500 mb-2">Quotation Details</div>
                          <div class="space-y-2">
                            <div class="flex items-center justify-between text-[10px]">
                              <span class="text-slate-500">Quotation No. *</span>
                              <span class="font-mono text-slate-700 font-medium">QUO/24-25/00125</span>
                            </div>
                            <div class="flex items-center justify-between text-[10px]">
                              <span class="text-slate-500">Valid Till *</span>
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
                      <!-- Items Table -->
                      <div class="mx-4 border border-slate-200 rounded-lg overflow-hidden mb-3">
                        <div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-7 gap-1 text-[9px] font-semibold">
                          <span class="col-span-2">Item Name</span>
                          <span>HSN/SAC</span>
                          <span>Qty</span>
                          <span>Rate (₹)</span>
                          <span>Disc</span>
                          <span>Amount (₹)</span>
                        </div>
                        <div class="divide-y divide-slate-100">
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
                            <span class="text-slate-600">900.00</span>
                            <span class="text-blue-600">5.00%</span>
                            <span class="text-slate-800 font-semibold">8,550.00</span>
                          </div>
                          <div class="px-3 py-2 grid grid-cols-7 gap-1 text-[9.5px]">
                            <span class="col-span-2 text-slate-700 font-medium">USB-C Hub</span>
                            <span class="text-slate-500">84718090</span>
                            <span class="text-slate-600">5</span>
                            <span class="text-slate-600">1,200.00</span>
                            <span class="text-slate-500">0.00</span>
                            <span class="text-slate-800 font-semibold">6,000.00</span>
                          </div>
                        </div>
                      </div>
                      <!-- Footer -->
                      <div class="px-4 py-3 border-t border-slate-100 grid grid-cols-2 gap-4">
                        <div>
                          <div class="text-[9px] font-semibold text-slate-500 mb-1.5">Terms & Conditions</div>
                          <div class="text-[8.5px] text-slate-400 space-y-0.5 leading-relaxed">
                            <p>1. Prices are inclusive of all applicable taxes.</p>
                            <p>2. Payment Terms: 100% Advance.</p>
                            <p>3. Delivery: 7-10 working days.</p>
                            <p>4. Warranty: 1 Year against defects.</p>
                          </div>
                        </div>
                        <div class="text-right space-y-1">
                          <div class="flex justify-between text-[9.5px]">
                            <span class="text-slate-400">Subtotal</span>
                            <span class="text-slate-700 font-medium">₹19,050.00</span>
                          </div>
                          <div class="flex justify-between text-[9.5px]">
                            <span class="text-slate-400">GST (18%)</span>
                            <span class="text-slate-700 font-medium">₹3,429.00</span>
                          </div>
                          <div class="flex justify-between text-[10px] font-bold border-t border-slate-200 pt-1 mt-1">
                            <span class="text-slate-600">Grand Total</span>
                            <span class="text-emerald-600">₹22,479.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  <!-- Inventory Mockup -->
                  {:else if activeModule === 1}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search inventory...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Stock Overview</h4>
                        <div class="flex gap-2">
                          <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[9px] font-semibold">In Stock: 1,245</span>
                          <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-md text-[9px] font-semibold">Low: 23</span>
                          <span class="px-2 py-1 bg-red-50 text-red-600 rounded-md text-[9px] font-semibold">Out: 5</span>
                        </div>
                      </div>
                      <div class="mx-4 mt-3 border border-slate-200 rounded-lg overflow-hidden mb-3">
                        <div class="bg-slate-700 text-white px-3 py-2 grid grid-cols-6 gap-1 text-[9px] font-semibold">
                          <span class="col-span-2">Material</span>
                          <span>Category</span>
                          <span>In Stock</span>
                          <span>Min Qty</span>
                          <span>Status</span>
                        </div>
                        <div class="divide-y divide-slate-100">
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
                            <span class="col-span-2 text-slate-700 font-medium">Clear Float Glass 5mm</span>
                            <span class="text-slate-500">Glass</span>
                            <span class="text-slate-600 font-medium">450 sqft</span>
                            <span class="text-slate-500">100 sqft</span>
                            <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit">In Stock</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-amber-50/30">
                            <span class="col-span-2 text-slate-700 font-medium">Toughened Glass 8mm</span>
                            <span class="text-slate-500">Glass</span>
                            <span class="text-amber-600 font-semibold">45 sqft</span>
                            <span class="text-slate-500">50 sqft</span>
                            <span class="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded text-[8px] font-semibold w-fit">Low Stock</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
                            <span class="col-span-2 text-slate-700 font-medium">Aluminium Profile 40mm</span>
                            <span class="text-slate-500">Hardware</span>
                            <span class="text-slate-600 font-medium">320 pcs</span>
                            <span class="text-slate-500">50 pcs</span>
                            <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit">In Stock</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-red-50/20">
                            <span class="col-span-2 text-slate-700 font-medium">Mirror Glass 4mm</span>
                            <span class="text-slate-500">Glass</span>
                            <span class="text-red-600 font-semibold">0 sqft</span>
                            <span class="text-slate-500">80 sqft</span>
                            <span class="px-1.5 py-0.5 bg-red-50 text-red-600 rounded text-[8px] font-semibold w-fit">Out of Stock</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
                            <span class="col-span-2 text-slate-700 font-medium">Silicone Sealant</span>
                            <span class="text-slate-500">Consumable</span>
                            <span class="text-slate-600 font-medium">125 tubes</span>
                            <span class="text-slate-500">20 tubes</span>
                            <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[8px] font-semibold w-fit">In Stock</span>
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-[9px] text-slate-400">Last synced: 2 min ago</span>
                        <button class="px-3 py-1.5 bg-blue-600 text-white rounded-md text-[9px] font-semibold">+ Add Stock</button>
                      </div>
                    </div>

                  <!-- Production Mockup -->
                  {:else if activeModule === 2}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search jobs...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Production Board</h4>
                        <div class="flex gap-2">
                          <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-[9px] font-semibold">Active: 12</span>
                          <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-md text-[9px] font-semibold">Pending: 8</span>
                        </div>
                      </div>
                      <!-- Kanban Style -->
                      <div class="p-4 grid grid-cols-3 gap-3">
                        <!-- Pending Column -->
                        <div class="space-y-2">
                          <div class="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <div class="w-2 h-2 rounded-full bg-amber-400"></div> Pending
                          </div>
                          <div class="bg-amber-50/60 border border-amber-200/50 rounded-lg p-2.5 space-y-1.5">
                            <div class="text-[9.5px] font-semibold text-slate-700">JOB-0456</div>
                            <div class="text-[8.5px] text-slate-500">Clear Glass 5mm × 12 pcs</div>
                            <div class="flex items-center gap-1.5 mt-1">
                              <div class="w-4 h-4 rounded-full bg-slate-300"></div>
                              <span class="text-[8px] text-slate-400">Unassigned</span>
                            </div>
                          </div>
                          <div class="bg-amber-50/60 border border-amber-200/50 rounded-lg p-2.5 space-y-1.5">
                            <div class="text-[9.5px] font-semibold text-slate-700">JOB-0457</div>
                            <div class="text-[8.5px] text-slate-500">Toughened 8mm × 6 pcs</div>
                            <div class="flex items-center gap-1.5 mt-1">
                              <div class="w-4 h-4 rounded-full bg-slate-300"></div>
                              <span class="text-[8px] text-slate-400">Unassigned</span>
                            </div>
                          </div>
                        </div>
                        <!-- In Progress Column -->
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
                              <span class="text-[8px] text-slate-600 font-medium">Sunil P.</span>
                            </div>
                            <div class="w-full bg-slate-200 rounded-full h-1 mt-1.5">
                              <div class="bg-blue-500 h-1 rounded-full" style="width: 30%"></div>
                            </div>
                          </div>
                        </div>
                        <!-- Completed Column -->
                        <div class="space-y-2">
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
                              <span class="text-[8px] text-emerald-600 font-semibold">✓ Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <!-- Glass Optimizer Mockup -->
                  {:else if activeModule === 3}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Glass optimizer...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Cutting Layout - Sheet #42</h4>
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[9px] font-semibold">Yield: 94.2%</span>
                      </div>
                      <!-- Cutting Layout Visualization -->
                      <div class="p-4">
                        <div class="bg-sky-50 border-2 border-sky-300 rounded-lg p-3 relative" style="aspect-ratio: 16/10;">
                          <!-- Glass Pieces arranged in optimization layout -->
                          <div class="grid grid-cols-4 grid-rows-3 gap-1 h-full">
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
                        <!-- Stats -->
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
                      </div>
                    </div>

                  <!-- Accounts Mockup -->
                  {:else if activeModule === 4}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search accounts...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Profit & Loss Statement</h4>
                        <span class="text-[9px] text-slate-400 font-medium">FY 2024-25 | April - June</span>
                      </div>
                      <div class="p-4 space-y-3">
                        <!-- Revenue -->
                        <div class="bg-emerald-50/50 rounded-lg p-3 border border-emerald-200/40">
                          <div class="text-[9px] font-bold text-emerald-700 uppercase tracking-wider mb-2">Revenue</div>
                          <div class="space-y-1.5">
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
                              <span class="text-emerald-700">₹28,38,000</span>
                            </div>
                          </div>
                        </div>
                        <!-- Expenses -->
                        <div class="bg-rose-50/50 rounded-lg p-3 border border-rose-200/40">
                          <div class="text-[9px] font-bold text-rose-700 uppercase tracking-wider mb-2">Expenses</div>
                          <div class="space-y-1.5">
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
                              <span class="text-rose-600">₹19,50,000</span>
                            </div>
                          </div>
                        </div>
                        <!-- Net Profit -->
                        <div class="bg-blue-50 rounded-lg p-3 border border-blue-200/40 flex justify-between items-center">
                          <span class="text-[11px] font-bold text-slate-800">Net Profit</span>
                          <div class="text-right">
                            <span class="text-lg font-black text-blue-700">₹8,88,000</span>
                            <div class="text-[8px] text-emerald-600 font-semibold">↑ 12.4% vs last quarter</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <!-- HR Mockup -->
                  {:else if activeModule === 5}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
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
                          <span class="col-span-2">Employee</span>
                          <span>Dept</span>
                          <span>Days</span>
                          <span>Gross (₹)</span>
                          <span>Net (₹)</span>
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
                            <span class="text-emerald-600 font-semibold">24,650</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-slate-50/50">
                            <div class="col-span-2 flex items-center gap-2">
                              <div class="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-[8px] font-bold text-purple-600">PM</div>
                              <span class="text-slate-700 font-medium">Priya Mehta</span>
                            </div>
                            <span class="text-slate-500">Accounts</span>
                            <span class="text-slate-600">24</span>
                            <span class="text-slate-600">35,000</span>
                            <span class="text-emerald-600 font-semibold">30,240</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center">
                            <div class="col-span-2 flex items-center gap-2">
                              <div class="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-[8px] font-bold text-amber-600">AK</div>
                              <span class="text-slate-700 font-medium">Amit Kumar</span>
                            </div>
                            <span class="text-slate-500">Sales</span>
                            <span class="text-slate-600">25</span>
                            <span class="text-slate-600">32,000</span>
                            <span class="text-emerald-600 font-semibold">27,880</span>
                          </div>
                          <div class="px-3 py-2.5 grid grid-cols-6 gap-1 text-[9.5px] items-center bg-slate-50/50">
                            <div class="col-span-2 flex items-center gap-2">
                              <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[8px] font-bold text-emerald-600">SK</div>
                              <span class="text-slate-700 font-medium">Sunita Kumari</span>
                            </div>
                            <span class="text-slate-500">HR</span>
                            <span class="text-slate-600">26</span>
                            <span class="text-slate-600">30,000</span>
                            <span class="text-emerald-600 font-semibold">26,100</span>
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-[9px] text-slate-400">Total Payroll: ₹12,45,000</span>
                        <button class="px-3 py-1.5 bg-blue-600 text-white rounded-md text-[9px] font-semibold">Process All</button>
                      </div>
                    </div>

                  <!-- Reports Mockup -->
                  {:else if activeModule === 6}
                    <div class="w-full bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden text-[11px] transform scale-[0.92] origin-top">
                      <div class="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                        <Search class="h-3 w-3 text-slate-400" />
                        <span class="text-slate-400 text-[10px]">Search reports...</span>
                      </div>
                      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-sm">Executive Dashboard</h4>
                        <span class="text-[9px] text-slate-400 font-medium">Last 30 Days</span>
                      </div>
                      <div class="p-4 space-y-4">
                        <!-- KPI Cards -->
                        <div class="grid grid-cols-3 gap-3">
                          <div class="bg-blue-50 rounded-lg p-3 text-center border border-blue-200/40">
                            <div class="text-[15px] font-black text-blue-700">₹18.5L</div>
                            <div class="text-[8px] text-slate-500 font-medium">Revenue</div>
                            <div class="text-[8px] text-emerald-600 font-semibold mt-0.5">↑ 14%</div>
                          </div>
                          <div class="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-200/40">
                            <div class="text-[15px] font-black text-emerald-700">156</div>
                            <div class="text-[8px] text-slate-500 font-medium">Orders</div>
                            <div class="text-[8px] text-emerald-600 font-semibold mt-0.5">↑ 22%</div>
                          </div>
                          <div class="bg-amber-50 rounded-lg p-3 text-center border border-amber-200/40">
                            <div class="text-[15px] font-black text-amber-700">92%</div>
                            <div class="text-[8px] text-slate-500 font-medium">Yield</div>
                            <div class="text-[8px] text-emerald-600 font-semibold mt-0.5">↑ 3%</div>
                          </div>
                        </div>
                        <!-- Chart Area -->
                        <div class="bg-slate-50 rounded-lg p-3 border border-slate-200/40">
                          <div class="text-[9px] font-bold text-slate-600 mb-3">Revenue Trend (6 Months)</div>
                          <div class="flex items-end gap-2 h-[80px]">
                            <div class="flex-1 flex flex-col items-center gap-1">
                              <div class="w-full bg-blue-300 rounded-t" style="height: 40px"></div>
                              <span class="text-[7px] text-slate-400">Jan</span>
                            </div>
                            <div class="flex-1 flex flex-col items-center gap-1">
                              <div class="w-full bg-blue-400 rounded-t" style="height: 48px"></div>
                              <span class="text-[7px] text-slate-400">Feb</span>
                            </div>
                            <div class="flex-1 flex flex-col items-center gap-1">
                              <div class="w-full bg-blue-300 rounded-t" style="height: 36px"></div>
                              <span class="text-[7px] text-slate-400">Mar</span>
                            </div>
                            <div class="flex-1 flex flex-col items-center gap-1">
                              <div class="w-full bg-blue-500 rounded-t" style="height: 56px"></div>
                              <span class="text-[7px] text-slate-400">Apr</span>
                            </div>
                            <div class="flex-1 flex flex-col items-center gap-1">
                              <div class="w-full bg-blue-400 rounded-t" style="height: 52px"></div>
                              <span class="text-[7px] text-slate-400">May</span>
                            </div>
                            <div class="flex-1 flex flex-col items-center gap-1">
                              <div class="w-full bg-blue-600 rounded-t" style="height: 68px"></div>
                              <span class="text-[7px] text-slate-400">Jun</span>
                            </div>
                          </div>
                        </div>
                        <!-- Top Clients -->
                        <div class="bg-slate-50 rounded-lg p-3 border border-slate-200/40">
                          <div class="text-[9px] font-bold text-slate-600 mb-2">Top Clients by Revenue</div>
                          <div class="space-y-2">
                            <div class="flex items-center gap-2">
                              <div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full" style="width: 85%"></div></div>
                              <span class="text-[8px] text-slate-600 font-medium w-24 text-right">Future Tech ₹4.2L</span>
                            </div>
                            <div class="flex items-center gap-2">
                              <div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-emerald-500 h-2 rounded-full" style="width: 68%"></div></div>
                              <span class="text-[8px] text-slate-600 font-medium w-24 text-right">GlassCo ₹3.4L</span>
                            </div>
                            <div class="flex items-center gap-2">
                              <div class="flex-1 bg-slate-200 rounded-full h-2"><div class="bg-amber-500 h-2 rounded-full" style="width: 52%"></div></div>
                              <span class="text-[8px] text-slate-600 font-medium w-24 text-right">BuildRight ₹2.6L</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  {/if}
                </div>
              {/key}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .module-content-enter {
    animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .mockup-enter {
    animation: mockupSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes mockupSlide {
    from {
      opacity: 0;
      transform: translateX(16px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  /* Hide scrollbar for horizontal tab scroll */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>
