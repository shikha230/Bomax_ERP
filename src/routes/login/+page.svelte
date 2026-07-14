<script lang="ts">
  import { resolve } from '$app/paths';
  import { Layers, Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-svelte';

  let email = $state('');
  let password = $state('');
  let showPassword = $state(false);
  let isLoading = $state(false);

  function handleLogin(e: Event) {
    e.preventDefault();
    isLoading = true;
    // Simulate login
    setTimeout(() => {
      isLoading = false;
    }, 2000);
  }
</script>

<svelte:head>
  <title>Sign In — Bomax ERP</title>
  <meta name="description" content="Sign in to your Bomax ERP account to manage your business operations." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="relative min-h-screen flex items-center justify-center overflow-hidden font-['Inter',system-ui,-apple-system,sans-serif]">
  <!-- Animated Background -->
  <div class="fixed inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
    <div class="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
    <div class="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,#3b82f6,transparent)] blur-[80px] opacity-40 animate-pulse"></div>
    <div class="absolute -bottom-[10%] -right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,#06b6d4,transparent)] blur-[80px] opacity-40 animate-pulse [animation-delay:-3.5s]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,#8b5cf6,transparent)] blur-[80px] opacity-20 animate-pulse [animation-delay:-7s]"></div>
  </div>

  <div class="relative z-10 flex w-full max-w-[1100px] min-h-[640px] m-6 rounded-3xl overflow-hidden ring-1 ring-white/[0.08] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5),0_0_40px_rgba(59,130,246,0.08)] max-[640px]:m-0 max-[640px]:rounded-none max-[640px]:min-h-screen">
    <!-- Left Branding Panel (desktop only) -->
    <div class="hidden lg:flex w-[45%] flex-col justify-between p-12 bg-gradient-to-br from-[#1e3a5f] via-[#1a2e4a] to-[#162340] relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,246,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>

      <div class="relative z-10">
        <a href={resolve('/')} class="flex items-center gap-3 no-underline mb-12">
          <div class="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.3)]">
            <Layers class="h-7 w-7 text-white" />
            <div class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-400 border-2 border-[#1a2e4a] animate-pulse"></div>
          </div>
          <span class="text-[1.375rem] font-extrabold tracking-tight text-white">
            Bomax <span class="bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">ERP</span>
          </span>
        </a>

        <div>
          <h1 class="text-[2rem] font-extrabold leading-tight text-white tracking-tight mb-4">
            Streamline Your <span class="bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">Business Operations</span>
          </h1>
          <p class="text-[0.9375rem] leading-relaxed text-slate-400 mb-10">
            One platform to manage inventory, sales, accounting, and more. Join thousands of businesses already growing with Bomax ERP.
          </p>
        </div>

        <div class="flex flex-col gap-3.5">
          <div class="flex items-center gap-3 text-sm text-slate-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0"></div>
            <span>Real-time inventory tracking</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0"></div>
            <span>Automated financial reporting</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0"></div>
            <span>Multi-branch management</span>
          </div>
        </div>
      </div>

      <div class="relative z-10">
        <p class="text-[0.8125rem] text-slate-500">© 2026 Bomax ERP. All rights reserved.</p>
      </div>
    </div>

    <!-- Right Form Panel -->
    <div class="flex-1 flex items-center justify-center px-8 py-10 bg-slate-900/85 backdrop-blur-2xl max-[640px]:px-6 max-[640px]:py-8">
      <div class="w-full max-w-[420px]">
        <!-- Back to Home -->
        <a href={resolve('/')} class="group inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-slate-500 hover:text-blue-400 no-underline transition-colors mb-6">
          <ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </a>
        <!-- Mobile Logo -->
        <a href={resolve('/')} class="flex lg:hidden items-center gap-2.5 no-underline mb-8 justify-center">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_4px_12px_rgba(59,130,246,0.25)]">
            <Layers class="h-5 w-5 text-white" />
          </div>
          <span class="text-xl font-extrabold tracking-tight text-white">
            Bomax <span class="bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">ERP</span>
          </span>
        </a>

        <div class="text-center lg:text-left mb-8">
          <h2 class="text-[1.75rem] font-extrabold text-slate-100 tracking-tight mb-2">Welcome back</h2>
          <p class="text-[0.9375rem] text-slate-500">Sign in to your account to continue</p>
        </div>

        <form class="flex flex-col gap-5" onsubmit={handleLogin}>
          <!-- Email Field -->
          <div class="flex flex-col gap-2">
            <label for="login-email" class="text-[0.8125rem] font-semibold text-slate-400 tracking-wide">Email address</label>
            <div class="group relative flex items-center">
              <Mail class="absolute left-4 w-[18px] h-[18px] text-slate-600 pointer-events-none transition-colors group-focus-within:text-blue-400" />
              <input
                id="login-email"
                type="email"
                bind:value={email}
                placeholder="you@company.com"
                required
                autocomplete="email"
                class="w-full py-3.5 pr-4 pl-11 text-[0.9375rem] text-slate-200 bg-slate-800/60 border border-slate-700/50 rounded-2xl outline-none transition-all placeholder:text-slate-600 hover:border-blue-500/30 hover:bg-slate-800/80 focus:border-blue-500 focus:bg-slate-800/90 focus:ring-4 focus:ring-blue-500/15"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <label for="login-password" class="text-[0.8125rem] font-semibold text-slate-400 tracking-wide">Password</label>
              <a href={resolve('/login')} class="text-[0.8125rem] font-medium text-blue-400 hover:text-blue-300 no-underline transition-colors">Forgot password?</a>
            </div>
            <div class="group relative flex items-center">
              <Lock class="absolute left-4 w-[18px] h-[18px] text-slate-600 pointer-events-none transition-colors group-focus-within:text-blue-400" />
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                bind:value={password}
                placeholder="Enter your password"
                required
                autocomplete="current-password"
                class="w-full py-3.5 pr-12 pl-11 text-[0.9375rem] text-slate-200 bg-slate-800/60 border border-slate-700/50 rounded-2xl outline-none transition-all placeholder:text-slate-600 hover:border-blue-500/30 hover:bg-slate-800/80 focus:border-blue-500 focus:bg-slate-800/90 focus:ring-4 focus:ring-blue-500/15"
              />
              <button
                type="button"
                class="absolute right-3.5 flex items-center justify-center p-1 text-slate-600 hover:text-slate-400 bg-transparent border-none cursor-pointer rounded-md transition-colors"
                onclick={() => showPassword = !showPassword}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {#if showPassword}
                  <EyeOff class="h-4.5 w-4.5" />
                {:else}
                  <Eye class="h-4.5 w-4.5" />
                {/if}
              </button>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="group relative flex items-center justify-center gap-2 w-full py-3.5 mt-2 text-[0.9375rem] font-semibold text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl cursor-pointer overflow-hidden transition-all shadow-[0_4px_16px_rgba(59,130,246,0.25)] hover:from-blue-600 hover:to-blue-700 hover:shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_8px_rgba(59,130,246,0.2)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            disabled={isLoading}
          >
            {#if isLoading}
              <div class="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Signing in...</span>
            {:else}
              <span>Sign In</span>
              <ArrowRight class="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            {/if}
          </button>
        </form>

        <!-- Divider -->
        <div class="flex items-center gap-4 my-7">
          <div class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
          <span class="text-[0.8125rem] text-slate-600 font-medium">or</span>
          <div class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
        </div>

        <!-- Create Account Link -->
        <div class="text-center">
          <p class="text-[0.9375rem] text-slate-500">
            Don't have an account?
            <a href={resolve('/register')} class="group inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300 no-underline transition-colors ml-1">
              Create Account
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>