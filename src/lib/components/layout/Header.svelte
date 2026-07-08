<script lang="ts">
  import { Menu, X, Layers } from 'lucide-svelte';
  import { page } from '$app/stores';
  import { resolve } from '$app/paths';

  let mobileMenuOpen = $state(false);

  // Navigation links with proper routing
  // 'Features' goes to /features page; the rest scroll to homepage sections
  const links: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Modules', href: '/modules' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Customers', href: '/customers' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' }
  ];

  function isActive(linkHref: string): boolean {
    const currentPath = $page.url.pathname;
    if (linkHref.startsWith('/#')) {
      // Section links are "active" when we're on the homepage
      return false;
    }
    return currentPath === linkHref || currentPath.startsWith(linkHref + '/');
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function getLinkHref(href: string): string {
    if (href.startsWith('/#')) {
      // For hash links, resolve the base path and append hash
      return resolve('/') + href.slice(1);
    }
    return resolve(href);
  }
</script>

<header class="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
    <!-- Logo (Static) -->
    <div class="flex items-center gap-2.5">
      <div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-500/20">
        <Layers class="h-5.5 w-5.5 text-white" />
        <div class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-400 animate-pulse border-2 border-white"></div>
      </div>
      <span class="text-xl font-extrabold tracking-tight text-slate-900 font-heading">
        Bomax <span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">ERP</span>
      </span>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex items-center gap-6 xl:gap-8">
      {#each links as link}
        <a
          href={getLinkHref(link.href)}
          class="text-sm font-medium transition-colors hover:text-blue-600 relative py-1.5 {isActive(link.href) ? 'text-blue-600' : 'text-slate-600'}"
        >
          {link.label}
          {#if isActive(link.href)}
            <span class="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300"></span>
          {/if}
        </a>
      {/each}
    </nav>

    <!-- Desktop Actions -->
    <div class="hidden lg:flex items-center gap-4">
      <a
        href="#signin"
        class="rounded-xl px-5 py-2.5 text-sm font-semibold text-blue-600 border border-blue-200 bg-white hover:bg-slate-50 transition-all duration-200 whitespace-nowrap"
      >
        Sign In
      </a>

    </div>

    <!-- Mobile Menu Button -->
    <button
      class="lg:hidden flex items-center justify-center rounded-xl p-2.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
      onclick={toggleMobileMenu}
      aria-label="Toggle Menu"
    >
      {#if mobileMenuOpen}
        <X class="h-6 w-6" />
      {:else}
        <Menu class="h-6 w-6" />
      {/if}
    </button>
  </div>
</header>

<!-- Mobile Drawer Backdrop & Menu -->
{#if mobileMenuOpen}
  <div
    class="fixed top-20 bottom-0 left-0 right-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
    onclick={toggleMobileMenu}
    onkeydown={(e) => e.key === 'Escape' && toggleMobileMenu()}
    role="presentation"
  ></div>

  <!-- Mobile Drawer Menu -->
  <div
    class="fixed top-20 bottom-0 right-0 z-50 w-full max-w-[280px] border-l border-slate-100 bg-white p-6 shadow-2xl lg:hidden overflow-y-auto"
  >
    <div class="flex flex-col gap-6">
      <nav class="flex flex-col gap-2">
        {#each links as link}
          <a
            href={getLinkHref(link.href)}
            class="text-sm font-semibold px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors {isActive(link.href) ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600'}"
            onclick={() => mobileMenuOpen = false}
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <hr class="border-slate-100" />

      <div class="flex flex-col gap-3">
        <a
          href="#signin"
          class="flex w-full items-center justify-center rounded-xl border border-blue-200 bg-white py-2.5 text-sm font-semibold text-blue-600 hover:bg-slate-50 transition-all duration-200"
          onclick={() => mobileMenuOpen = false}
        >
          Sign In
        </a>

      </div>
    </div>
  </div>
{/if}
