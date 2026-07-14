<script lang="ts">
  import { ArrowRight, FileText, Package, Factory, Diamond, Receipt, Landmark, Users, BarChart3 } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';

  type Module = {
    icon: ComponentType;
    iconColor: string;
    iconBg: string;
    title: string;
    description: string;
  };

  const modules: Module[] = [
    {
      icon: FileText,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      title: 'Smart Quotations',
      description: 'Generate accurate glass cutting quotations in minutes. Auto-calculate area, rates, wastage, and GST with one click.'
    },
    {
      icon: Package,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      title: 'Inventory Management',
      description: 'Track glass sheets, hardware, and raw materials in real-time. Get low-stock alerts and auto-reorder suggestions.'
    },
    {
      icon: Factory,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      title: 'Production Planning',
      description: 'Plan cutting jobs, assign workers, track job cards, and monitor production floor progress from a single screen.'
    },
    {
      icon: Diamond,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      title: 'Glass Optimizer',
      description: 'AI-powered cutting layout optimization that maximizes glass yield and minimizes scrap wastage on every job.'
    },
    {
      icon: Receipt,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50',
      title: 'Billing & Invoicing',
      description: 'Create GST-compliant invoices, manage payment terms, track outstanding dues, and send reminders automatically.'
    },
    {
      icon: Landmark,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      title: 'Accounting',
      description: 'Full double-entry accounting with ledgers, P&L, balance sheet, GST filing, and Tally-compatible reports.'
    },
    {
      icon: Users,
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-50',
      title: 'HR & Payroll',
      description: 'Manage employee records, attendance, leaves, salaries, and payroll processing with biometric sync support.'
    },
    {
      icon: BarChart3,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-50',
      title: 'Reports & Analytics',
      description: 'Real-time dashboards, profit-per-job insights, sales trends, and custom executive reports for smarter decisions.'
    }
  ];
</script>

<!-- Features / Modules Section -->
<section id="features" class="relative w-full bg-white py-10 sm:py-10 lg:py-10 overflow-hidden">
  <!-- Subtle background pattern -->
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-40"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
<div class="text-center mb-14 sm:mb-16 lg:mb-20 animate-section-header  rounded-xl px-8 py-8">

  <!-- Title -->
 <h2
  class="text-4xl sm:text-5xl lg:text-[48px]
  font-black
  leading-[1.15]
  tracking-[-0.01em]
  text-slate-900
  font-heading
  text-center
  mb-5"
>
  8 Powerful Modules
  <br />
  <span class="mt-2 block">One Unified Platform</span>
</h2>

  <!-- Subtitle -->
  <p class="text-sm sm:text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
    Every tool your glass business needs, built into a single, intelligent ERP platform designed for the glass industry.
  </p>

</div>

    <!-- Module Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
      {#each modules as mod, i (mod.title)}
        {@const ModIcon = mod.icon}
        <div
          class="group relative bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300/80 hover:-translate-y-1 feature-card"
          style="animation-delay: {i * 80}ms"
        >
          <!-- Icon + Title Row -->
          <div class="flex items-center gap-3.5 mb-4">
            <div class="flex items-center justify-center w-12 h-12 shrink-0 {mod.iconBg} {mod.iconColor} rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
              <ModIcon
                class="h-6 w-6"
                strokeWidth={1.8}
              />
            </div>

            <h3 class="text-[15px] font-bold text-slate-900 font-heading tracking-tight leading-snug">
              {mod.title}
            </h3>
          </div>

          <!-- Card Description -->
          <p class="text-[13px] text-slate-500 leading-relaxed mb-5 font-medium">
            {mod.description}
          </p>

          <!-- Learn More Link -->
          <a
            href="#features"
            class="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-all duration-200 group/link"
          >
            <span>Learn More</span>
            <ArrowRight class="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </a>

          <!-- Hover gradient overlay -->
          <div class="absolute inset-0 rounded-2xl bg-linear-to-b from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .animate-section-header {
    animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .feature-card {
    animation: fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
    animation-fill-mode: both;
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>