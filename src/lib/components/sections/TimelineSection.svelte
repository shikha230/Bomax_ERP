<script lang="ts">
  const steps = [
    {
      number: 1,
      title: '30 Minutes',
      description:
        'Sign up and complete your business profile with our guided wizard.'
    },
    {
      number: 2,
      title: 'Initial Setup',
      description:
        'Import your products, customers, and price lists—we help you.'
    },
    {
      number: 3,
      title: 'One-Day Training',
      description:
        'Live training session with your dedicated implementation expert.'
    },
    {
      number: 4,
      title: 'Team Onboarding',
      description:
        'Add your team, set roles and permissions, ready to go!'
    },
    {
      number: 5,
      title: 'Go Live!',
      description:
        'Start managing your glass business from day one. We’re with you.'
    }
  ];
</script>

<div>
  <!-- Heading -->
  <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
      Go Live in Days, Not Months
    </h2>
    <p class="mx-auto mt-4 max-w-xl text-slate-500 text-sm leading-relaxed">
      Our guided onboarding gets your daily business up and running in record time with dedicated expert support.
    </p>
  </div>

  <!-- Timeline -->
  <div class="relative">
    <!-- Connecting Line (desktop only) -->
    <div class="absolute left-[10%] right-[10%] top-5 hidden h-0.5 bg-blue-100 lg:block"></div>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 sm:gap-10 lg:gap-12">
      {#each steps as step (step.number)}
        <div class="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center group">
          <!-- Step Circle Indicator -->
          <div class="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
            {step.number}
          </div>

          <div class="lg:mt-4">
            <!-- Title -->
            <h3 class="text-base font-bold text-slate-900 group-hover:text-blue-650 transition-colors">
              {step.title}
            </h3>

            <!-- Description -->
            <p class="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-slate-500">
              {step.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
