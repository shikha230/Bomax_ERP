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
    { name: 'Channel Partners', href: '/partners' }
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
    { 
      id: 'twitter', 
      label: 'X', 
      href: '#',
      colorClass: 'bg-black text-white hover:bg-zinc-900 border border-zinc-800'
    },
    { 
      id: 'linkedin', 
      label: 'LinkedIn', 
      href: '#',
      colorClass: 'bg-[#0a66c2] text-white hover:bg-[#0077b5]'
    },
    { 
      id: 'instagram', 
      label: 'Instagram', 
      href: '#',
      colorClass: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:brightness-110'
    },
    { 
      id: 'facebook', 
      label: 'Facebook', 
      href: '#',
      colorClass: 'bg-[#1877f2] text-white hover:bg-[#1a6ed8]'
    }
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
            Firstcut<span class="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">24</span>
          </span>
        </a>

        <p class="mt-3.5 max-w-xs text-[15px] leading-relaxed text-slate-350">
          The all-in-one ERP platform built exclusively for glass businesses across India and beyond.
        </p>

        <div class="mt-5 flex gap-3">
          {#each socialIcons as social (social.id)}
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external social media links, not app routes -->
            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-sm font-semibold transition-all duration-300 hover:scale-110 shadow-md {social.colorClass}">
              {#if social.id === 'twitter'}
                <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              {:else if social.id === 'linkedin'}
                <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              {:else if social.id === 'instagram'}
                <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>
              {:else if social.id === 'facebook'}
                <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              {/if}
            </a>
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
        © 2026 Firstcut24.A Product of BOMAX Technologies.
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