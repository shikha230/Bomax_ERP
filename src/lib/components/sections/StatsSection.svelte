<script lang="ts">
  const stats = [
    { value: '500+', label: 'Glass Businesses' },
    { value: '50+', label: 'Cities Covered' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24×7', label: 'Support Available' },
    { value: '15+', label: 'Modules Available' }
  ];
</script>

<div class="border-t border-slate-200/60 pt-10 sm:pt-14">
  <div class="bg-blue-50 border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden">
    <div class="flex flex-wrap items-center justify-center text-center ">
      {#each stats as stat, i (stat.label)}
        <div class="flex flex-col items-center justify-center p-6 sm:p-7 flex-1 min-w-[140px] transition-all duration-300 hover:bg-slate-50/50 group relative">
          {#if i > 0}
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-10 bg-blue-500 hidden lg:block"></div>
          {/if}
          <div class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-600 transition-transform duration-300 group-hover:scale-105">
            {stat.value}
          </div>

          <div class="mt-2 text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
