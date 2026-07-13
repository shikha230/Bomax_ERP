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
  <div class="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-5">
    {#each stats as stat (stat.label)}
      <div class="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-slate-200/50 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
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
