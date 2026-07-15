<script lang="ts">
  import { Calendar, Check } from 'lucide-svelte';

  interface Props {
    onBookDemo: () => void;
    onContactSales: () => void;
  }

 const { onBookDemo, onContactSales }: Props = $props();

  const trustBadges: string[] = [
    'Free 14-day trial',
    'No credit card needed',
    'Free onboarding',
    'Cancel anytime',
  ];
</script>

<section
  id="cta"
  class="relative w-full py-10 sm:py-10 lg:py-10 overflow-hidden bg-linear-to-r from-blue-600 to-indigo-700 text-white"
>
  <!-- Background circular graphics -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <!-- Big circle bottom left -->
    <div class="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-white/5 border border-white/10"></div>
    <div class="absolute -bottom-16 -left-12 w-64 h-64 rounded-full bg-white/5"></div>

    <!-- Big circle top right -->
    <div class="absolute -top-32 -right-10 w-105 h-105 rounded-full bg-linear-to-br from-white/10 to-transparent opacity-80"></div>
    <div class="absolute -top-16 right-10 w-64 h-64 rounded-full bg-white/5"></div>
  </div>

  <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
    
    <!-- Heading -->
    <h2 class="text-4xl sm:text-4.5xl lg:text-5xl font-black tracking-tight leading-tight font-heading mb-5 ">
      Ready To Experience
      Firstcut24 ?
    </h2>

    <!-- Subtitle -->
    <p class="text-[14px] sm:text-base text-blue-100 max-w-xl leading-relaxed font-medium mb-10 text-center">
      Book a live product demonstration and see how Firstcut24 can transform your glass business - from quotations to delivery, all in one platform.
    </p>

    <!-- Call to Actions -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
      <!-- Book Demo Button -->
      <button
        onclick={onBookDemo}
        class="flex items-center justify-center gap-2 rounded-2xl bg-white text-blue-600 hover:bg-blue-50 px-8 py-4.5 text-sm font-bold shadow-lg shadow-blue-900/20 active:scale-98 transition-all duration-200 w-full sm:w-auto cursor-pointer"
      >
        <Calendar class="h-4.5 w-4.5" />
        <span>Book Demo</span>
      </button>

      <!-- Talk to Expert Button -->
      
    </div>

    <!-- Trust Badges -->
    <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 border-t border-white/10 w-full text-blue-100 mb-10">
      {#each trustBadges as item (item)}
        <div class="flex items-center gap-1.5 text-xs font-semibold tracking-wide font-jakarta">
          <div class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
            <Check class="h-3 w-3 stroke-3" />
          </div>
          <span>{item}</span>
        </div>
      {/each}
    </div>
  </div>
</section>