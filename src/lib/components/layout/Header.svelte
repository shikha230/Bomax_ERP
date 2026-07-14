<script lang="ts">
  import { Menu, X, Layers } from 'lucide-svelte';
  import { page } from '$app/stores';
  import { resolve } from '$app/paths';

  let mobileMenuOpen = $state(false);

  // Navigation links with proper routing
  // 'Features' goes to /features page; the rest are top-level pages too.
  // Href values are typed to the app's known routes so resolve() can validate them.
  type NavHref = '/' | '/features' | '/modules' | '/about';

  const links: { label: string; href: NavHref }[] = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Modules', href: '/modules' },
    { label: 'About Us', href: '/about' }
  ];

  function isActive(linkHref: NavHref): boolean {
    const currentPath = $page.url.pathname;
    return currentPath === linkHref || currentPath.startsWith(linkHref + '/');
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header class="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
    <a href={resolve('/')} class="flex items-center gap-2.5 group">
      <div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-500/20 transition-transform duration-350 group-hover:scale-105">
        <Layers class="h-5.5 w-5.5 text-white" />
        <div class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-400 animate-pulse border-2 border-white"></div>
      </div>
      <span class="text-xl font-extrabold tracking-tight text-slate-900 font-heading">
        Bomax <span class="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">ERP</span>
      </span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex items-center gap-6 xl:gap-8">
      {#each links as link (link.href)}
        <a
          href={resolve(link.href)}
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
      <button
        type="button"
        class="rounded-xl px-5 py-2.5 text-sm font-semibold text-blue-600 border border-blue-200 bg-white hover:bg-slate-50 transition-all duration-200 whitespace-nowrap cursor-pointer"
      >
        Register
      </button>

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
    onkeydown={(e: KeyboardEvent) => e.key === 'Escape' && toggleMobileMenu()}
    role="presentation"
  ></div>

  <!-- Mobile Drawer Menu -->
  <div
    class="fixed top-20 bottom-0 right-0 z-50 w-full max-w-70 border-l border-slate-100 bg-white p-6 shadow-2xl lg:hidden overflow-y-auto"
  >
    <div class="flex flex-col gap-6">
      <nav class="flex flex-col gap-2">
        {#each links as link (link.href)}
          <a
            href={resolve(link.href)}
            class="text-sm font-semibold px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors {isActive(link.href) ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600'}"
            onclick={() => mobileMenuOpen = false}
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <hr class="border-slate-100" />

      <div class="flex flex-col gap-3">
        <button
          type="button"
          class="flex w-full items-center justify-center rounded-xl border border-blue-200 bg-white py-2.5 text-sm font-semibold text-blue-600 hover:bg-slate-50 transition-all duration-200 cursor-pointer"
        >
          Register
        </button>

      </div>
    </div>
  </div>
{/if}