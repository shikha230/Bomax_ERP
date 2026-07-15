<script lang="ts">
  import {
    Factory,
    Store,
    HardHat,
    Layers,
    Network,
    ArrowRight
  } from 'lucide-svelte';

  const businesses = [
    {
      title: 'Glass Fabricators',
      description: 'Manage complex cutting, tempering, job cards, and manufacturing workflows.',
      icon: Factory,
      bgColor: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
    },
    {
      title: 'Glass Retailers',
      description: 'Fast over-the-counter quotes, instant billing, and retail inventory tracking.',
      icon: Store,
      bgColor: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
    },
    {
      title: 'Glazing Contractors',
      description: 'Track site measurements, design variations, installations, and project progress.',
      icon: HardHat,
      bgColor: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white'
    },
    {
      title: 'Glass Processors',
      description: 'Optimize double-glazing, lamination, polishing, and edge grinding works.',
      icon: Layers,
      bgColor: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
    },
    {
      title: 'Multi-Branch Units',
      description: 'Sync inventory levels, orders, and branch ledger accounts across multiple factories.',
      icon: Network,
      bgColor: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white'
    }
  ];
</script>

<section class="bg-gradient-to-b from-white to-slate-50/50 py-14 sm:py-20 lg:py-24 border-t border-slate-100">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
        Built for Every Glass Business
      </h2>
      <p class="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed text-pretty">
        Whether you are a small retailer, glazing contractor, or a large multi-branch glass processor, GlassERP scales perfectly to fit your daily workflow.
      </p>
    </div>

    <div class="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {#each businesses as business}
        {@const IconComponent = business.icon}
        <div class="group relative flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-350 hover:shadow-lg">
          <div>
            <!-- Icon Container -->
            <div class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 {business.bgColor}">
              <IconComponent class="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <!-- Title -->
            <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-2 transition-colors duration-200 group-hover:text-blue-600">
              {business.title}
            </h3>

            <!-- Description -->
            <p class="text-xs sm:text-sm leading-relaxed text-slate-500 mb-6">
              {business.description}
            </p>
          </div>

          <!-- Interactive Button Link -->
          <div class="flex items-center text-xs sm:text-sm font-semibold text-blue-600 gap-1.5 transition-colors duration-200 group-hover:text-blue-700 mt-auto cursor-pointer">
            <span>Explore</span>
            <ArrowRight class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
