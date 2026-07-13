<script lang="ts">
  import { Clock, ShieldCheck, TrendingUp, Package, IndianRupee, Cloud, type Icon } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
  import type { ComponentType } from 'svelte';

  interface Benefit {
    icon: ComponentType<Icon>;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    stat: string;
    statColor: string;
    statLabel: string;
  }

  const benefits: Benefit[] = [
    {
      icon: Clock,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      title: 'Save Time',
      description: 'Automate quotations, invoices, and inventory updates. What took hours now takes minutes.',
      stat: '80%',
      statColor: 'text-blue-600',
      statLabel: 'reduction in manual work time',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-500',
      title: 'Reduce Errors',
      description: 'Eliminate human errors in stock entries with automated validation and smart checks.',
      stat: '95%',
      statColor: 'text-rose-500',
      statLabel: 'fewer billing and data errors',
    },
    {
      icon: TrendingUp,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
      title: 'Increase Productivity',
      description: 'Streamline workflows, job cards, and task assignments that keep everyone aligned and efficient.',
      stat: '3x',
      statColor: 'text-emerald-600',
      statLabel: 'increase in team productivity',
    },
    {
      icon: Package,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-500',
      title: 'Track Inventory',
      description: 'Know exactly what\'s in stock at any time. Prevent stockouts, reduce excess inventory, and optimize reorder points.',
      stat: '40%',
      statColor: 'text-amber-600',
      statLabel: 'reduction in inventory holding costs',
    },
    {
      icon: IndianRupee,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
      title: 'Improve Profitability',
      description: 'Gain real-time visibility into margins, costs, and revenue per job so you can price smarter and earn more.',
      stat: '25%',
      statColor: 'text-teal-600',
      statLabel: 'average improvement in profit margins',
    },
    {
      icon: Cloud,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-500',
      title: 'Cloud Access Anywhere',
      description: 'Access your ERP from any device — laptop, tablet, or mobile. Work from the office, factory floor, or anywhere in the world.',
      stat: '99.9%',
      statColor: 'text-blue-600',
      statLabel: 'uptime with secure cloud hosting',
    },
  ];
</script>

<!-- Results / Benefits Section -->
<section
  id="results"
  class="relative w-full bg-slate-100 py-10 sm:py-10 lg:py-10 overflow-hidden"
>
  <!-- Subtle background grid -->
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Section Header -->
    <div class="text-center mb-14 sm:mb-16 lg:mb-20">
    

      <!-- Title -->
      <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-tight font-heading mb-5">
        Built to Deliver <span class="text-emerald-500">Real Results</span>
      </h2>

      <!-- Subtitle -->
      <p class="text-sm sm:text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
        Over 500 glass businesses across India trust Bomax ERP to run their operations more efficiently and profitably.
      </p>
    </div>

    <!-- Benefits Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
      {#each benefits as b, i (b.title)}
        {@const BenefitIcon = b.icon}
        <div
          class="group relative bg-white border border-slate-200/80 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300/80 hover:-translate-y-1"
          in:fly={{ y: 24, duration: 500, delay: i * 80 }}
        >
          <!-- Icon + Title Row -->
          <div class="flex items-center gap-3.5">
            <div class="flex items-center justify-center w-11 h-11 shrink-0 {b.iconBg} {b.iconColor} rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <BenefitIcon class="h-5 w-5" strokeWidth={1.8} />
            </div>

            <h3 class="text-[15px] font-bold text-slate-900 font-heading tracking-tight leading-snug">{b.title}</h3>
          </div>

          <!-- Description -->
          <div class="flex-1">
            <p class="text-[13px] text-slate-500 leading-relaxed font-medium">{b.description}</p>
          </div>

          <!-- Stat -->
          <div class="flex items-baseline gap-2 pt-1 border-t border-slate-100">
            <span class="text-[15px] font-black {b.statColor}">{b.stat}</span>
            <span class="text-[12px] text-slate-400 font-medium leading-snug">{b.statLabel}</span>
          </div>

          <!-- Hover gradient overlay -->
          <div class="absolute inset-0 rounded-2xl bg-linear-to-b from-transparent via-transparent to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      {/each}
    </div>

  </div>
</section>