<script lang="ts">
  import { Layers } from 'lucide-svelte';
  import { resolve } from '$app/paths';

  const productLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Modules', href: '/modules' },
    { name: 'Pricing', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Roadmap', href: '#' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '/partners' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Status Page', href: '#' }
  ];

  const contactLinks = [
    { name: '+91 98765 43210', href: 'tel:+919876543210' },
    { name: 'hello@glasserp.in', href: 'mailto:hello@glasserp.in' },
    { name: 'WhatsApp Chat', href: 'https://wa.me/919876543210' },
    { name: 'Book a Demo', href: '/contact' }
  ];

  const socialIcons = [
    { id: 'twitter', label: 'T' },
    { id: 'linkedin', label: 'L' },
    { id: 'instagram', label: 'I' },
    { id: 'facebook', label: 'F' }
  ];
</script>

<footer class="bg-[#061330] text-white mt-1">
  <div class="mx-auto max-w-7xl px-4 py-4 sm:py-8 lg:py-10">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
      <!-- Logo Section -->
      <div class="lg:col-span-1">
        <a href={resolve('/')} class="flex items-center gap-2.5 group">
          <div class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            <Layers class="h-5.5 w-5.5 text-white" />
            <div class="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse border border-[#061330]"></div>
          </div>
          <span class="text-xl font-extrabold tracking-tight text-white font-heading">
            Bomax <span class="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">ERP</span>
          </span>
        </a>

        <p class="mt-3.5 max-w-xs text-[15px] leading-relaxed text-slate-350">
          The all-in-one ERP platform built exclusively for glass businesses across India and beyond.
        </p>

        <div class="mt-5 flex gap-3">
          {#each socialIcons as social (social.id)}
            <div class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-slate-800 text-sm font-semibold text-slate-400 transition hover:bg-slate-700 hover:text-white">
              {social.label}
            </div>
          {/each}
        </div>
      </div>

      <!-- Product -->
      <div>
        <h4 class="mb-4 text-base font-bold uppercase tracking-wider text-slate-100">
          Product
        </h4>
        <ul class="space-y-2">
          {#each productLinks as item (item.name)}
            <li>
              {#if item.href === '#'}
                <span class="cursor-pointer text-[15px] sm:text-base text-slate-400 transition hover:text-white">
                  {item.name}
                </span>
              {:else}
                <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -- resolve() is overloaded per-route; dynamic href needs a type-erased cast -->
                <a href={resolve(item.href as any)} class="block text-[15px] sm:text-base text-slate-400 transition hover:text-white">
                  {item.name}
                </a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h4 class="mb-4 text-base font-bold uppercase tracking-wider text-slate-100">
          Company
        </h4>
        <ul class="space-y-2">
          {#each companyLinks as item (item.name)}
            <li>
              {#if item.href === '#'}
                <span class="cursor-pointer text-[15px] sm:text-base text-slate-400 transition hover:text-white">
                  {item.name}
                </span>
              {:else}
                <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -- resolve() is overloaded per-route; dynamic href needs a type-erased cast -->
                <a href={resolve(item.href as any)} class="block text-[15px] sm:text-base text-slate-400 transition hover:text-white">
                  {item.name}
                </a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h4 class="mb-4 text-base font-bold uppercase tracking-wider text-slate-100">
          Support
        </h4>
        <ul class="space-y-2">
          {#each supportLinks as item (item.name)}
            <li>
              {#if item.href === '#'}
                <span class="cursor-pointer text-[15px] sm:text-base text-slate-400 transition hover:text-white">
                  {item.name}
                </span>
              {:else}
                <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -- resolve() is overloaded per-route; dynamic href needs a type-erased cast -->
                <a href={resolve(item.href as any)} class="block text-[15px] sm:text-base text-slate-400 transition hover:text-white">
                  {item.name}
                </a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="mb-4 text-base font-bold uppercase tracking-wider text-slate-100">
          Contact
        </h4>
        <ul class="space-y-2">
          {#each contactLinks as item (item.name)}
            <li>
              <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external tel/mailto/https links, not app routes -->
              <a href={item.href} class="block text-[15px] sm:text-base text-slate-400 transition hover:text-white">
                {item.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="mt-6 sm:mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-4 text-[15px] text-white md:flex-row">
      <p>
        © 2026 BomaxERP. All rights reserved.
      </p>

      <div class="flex flex-wrap gap-6 text-[15px]">
        <a href={resolve('/privacy')} class="cursor-pointer hover:text-white">
          Privacy Policy
        </a>
        <a href={resolve('/terms')} class="cursor-pointer hover:text-white">
          Terms of Service
        </a>
        <a href={resolve('/security')} class="cursor-pointer hover:text-white font-sans">
          Security
        </a>
      </div>
    </div>
  </div>
</footer>