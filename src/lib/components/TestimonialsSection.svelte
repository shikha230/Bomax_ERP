<script lang="ts">
  import { Star, MessageSquare } from 'lucide-svelte';

  const testimonials = [
    {
      badge: 'Glass Optimizer Module',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-150',
      text: '"The AI Glass Optimizer has been a game-changer. We reduced our glass wastage by 32% in the first month. The entire cutting floor team now relies on Firstcut24 for every job. Worth every rupee."',
      author: 'Rajesh Sharma',
      role: 'Director, Sharma Glass Works · Mumbai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&fit=crop&q=80',
    },
    {
      badge: 'Quotation & Billing Module',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-150',
      text: '"Before Firstcut24, quotations took 30 minutes each. Now it\'s under 3 minutes — and they look extremely professional. Our clients are impressed and our closure rate has gone up by 40%."',
      author: 'Anita Patel',
      role: 'Owner, Patel Glass Studio · Ahmedabad',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&fit=crop&q=80',
    },
    {
      badge: 'Reports & Analytics Module',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-150',
      text: '"Managing 4 branches was a nightmare until Firstcut24. Now I see consolidated reports for all locations in real-time, from my phone. The analytics are genuinely useful for business decisions."',
      author: 'Ahmed Khan',
      role: 'MD, Khan Glass Industries · Hyderabad',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&fit=crop&q=80',
    },
  ];

  const ratingStars = [0, 1, 2, 3, 4];
</script>

<section
  id="testimonials"
  class="relative w-full bg-slate-50/60 py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-slate-100"
>
  <!-- Background details -->
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-14 sm:mb-16 lg:mb-20">
      <!-- Badge label (Optional/Standard alignment) -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 mb-6 shadow-sm">
        <MessageSquare class="h-3.5 w-3.5" />
        <span class="text-xs font-bold font-jakarta tracking-wide">Customer Stories</span>
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-tight font-heading mb-5">
        Trusted by Glass Businesses<br />
        <span class="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Across India</span>
      </h2>

      <p class="text-sm sm:text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
        Real stories from real businesses that transformed their operations with Firstcut24.
      </p>
    </div>

    <!-- Testimonials grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {#each testimonials as t (t.author)}
        <div
          class="group bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300/80 hover:-translate-y-1"
        >
          <div>
            <!-- Badge -->
            <span class="inline-flex items-center px-3 py-1 rounded-full border text-[11px] font-bold font-jakarta mb-4 {t.badgeColor}">
              {t.badge}
            </span>

            <!-- Rating Stars -->
            <div class="flex items-center gap-0.5 mb-5 text-amber-400">
              {#each ratingStars as star (star)}
                <Star class="h-4.5 w-4.5 fill-amber-400" />
              {/each}
            </div>

            <!-- Quote Text -->
            <blockquote class="text-[13.5px] text-slate-600 font-medium leading-relaxed italic mb-8 font-sans">
              {t.text}
            </blockquote>
          </div>

          <!-- Author Info -->
          <div class="flex items-center gap-3.5 pt-4 border-t border-slate-100">
            <img
              src={t.avatar}
              alt={t.author}
              class="h-10 w-10 rounded-full object-cover border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <div class="min-w-0">
              <div class="text-[13.5px] font-bold text-slate-900 font-heading leading-tight truncate">{t.author}</div>
              <div class="text-[11.5px] text-slate-400 font-medium truncate mt-0.5">{t.role}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>