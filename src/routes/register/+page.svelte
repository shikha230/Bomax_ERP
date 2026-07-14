<script lang="ts">
  import { Layers, Mail, Lock, Eye, EyeOff, Phone, ArrowRight, ArrowLeft, CheckCircle, XCircle, User } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';

  let name = $state('');
  let email = $state('');
  let password = $state('');
  let phone = $state('');
  let showPassword = $state(false);
  let isLoading = $state(false);
  let errorMessage = $state('');
  let successMessage = $state('');

  async function handleRegister(e: Event) {
    e.preventDefault();
    isLoading = true;
    errorMessage = '';
    successMessage = '';

    try {
      const response = await fetch('https://elenora-uncombining-martha.ngrok-free.dev/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone_number: phone,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        successMessage = data.message || 'Account created successfully! Redirecting to login...';
        name = '';
        email = '';
        password = '';
        phone = '';
        setTimeout(() => {
          goto(resolve('/login'));
        }, 2000);
      } else {
        errorMessage = data.message || data.error || 'Registration failed. Please try again.';
      }
    } catch (err) {
      console.error('Registration request failed:', err);
      errorMessage = 'Unable to connect to the server. Please check your connection and try again.';
    } finally {
      isLoading = false;
    }
  }
</script>

<svelte:head>
  <title>Create Account — Bomax ERP</title>
  <meta name="description" content="Create your Bomax ERP account and start managing your business operations efficiently." />
  <link rel="canonical" href="https://bomax-erp-vercel-app.vercel.app/register" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="relative min-h-screen flex items-center justify-center overflow-hidden [font-family:'Inter',system-ui,sans-serif]">
  <!-- Animated Background -->
  <div class="fixed inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
    <div class="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
    <div class="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 bg-[radial-gradient(circle,#3b82f6,transparent)] animate-pulse"></div>
    <div class="absolute -bottom-[10%] -right-[5%] w-[400px] h-[400px] rounded-full blur-[80px] opacity-40 bg-[radial-gradient(circle,#06b6d4,transparent)] animate-pulse [animation-delay:1.5s]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 bg-[radial-gradient(circle,#8b5cf6,transparent)] animate-pulse [animation-delay:3s]"></div>
  </div>

  <div class="relative z-10 flex w-full max-w-[1100px] min-h-screen sm:min-h-[700px] m-0 sm:m-6 rounded-none sm:rounded-3xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_25px_60px_-12px_rgba(0,0,0,0.5),0_0_40px_rgba(59,130,246,0.08)]">
    <!-- Left Branding Panel (desktop only) -->
    <div class="hidden lg:flex w-[45%] flex-col justify-between p-12 relative overflow-hidden bg-[linear-gradient(160deg,#1e3a5f_0%,#1a2e4a_50%,#162340_100%)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,246,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]">
      <div class="relative z-[1]">
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
            Start Your <span class="bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">Growth Journey</span>
          </h1>
          <p class="text-[0.9375rem] leading-relaxed text-slate-400 mb-10">
            Create your account and unlock powerful tools to automate, optimize, and scale your business operations.
          </p>
        </div>

        <div class="flex flex-col gap-3.5">
          <div class="flex items-center gap-3 text-sm text-slate-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0"></div>
            <span>Free 14-day trial, no credit card</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0"></div>
            <span>Setup in under 5 minutes</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0"></div>
            <span>24/7 dedicated support</span>
          </div>
        </div>
      </div>

      <div class="relative z-[1]">
        <p class="text-[0.8125rem] text-slate-500">© 2026 Bomax ERP. All rights reserved.</p>
      </div>
    </div>

    <!-- Right Form Panel -->
    <div class="flex-1 flex items-center justify-center px-6 py-8 sm:px-8 sm:py-10 bg-slate-900/85 backdrop-blur-2xl">
      <div class="w-full max-w-[420px]">
        <!-- Back to Home -->
        <a href={resolve('/')} class="group inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-slate-500 no-underline transition-all mb-6 hover:text-blue-400">
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
          <h2 class="text-2xl sm:text-[1.75rem] font-extrabold text-slate-100 tracking-tight mb-2">Create your account</h2>
          <p class="text-[0.9375rem] text-slate-500">Fill in the details below to get started</p>
        </div>

        <form class="flex flex-col gap-5" onsubmit={handleRegister}>
          <!-- Name Field -->
          <div class="flex flex-col gap-2">
            <label for="register-name" class="text-[0.8125rem] font-semibold text-slate-400 tracking-wide">Full name</label>
            <div class="group relative flex items-center">
              <User class="absolute left-4 w-[18px] h-[18px] text-slate-600 pointer-events-none transition-colors group-focus-within:text-blue-400" />
              <input
                id="register-name"
                type="text"
                bind:value={name}
                placeholder="John Doe"
                required
                autocomplete="name"
                class="w-full py-[0.8125rem] pl-11 pr-4 text-[0.9375rem] text-slate-200 bg-slate-800/60 border border-slate-700/50 rounded-2xl outline-none transition-all placeholder:text-slate-600 hover:border-blue-500/30 hover:bg-slate-800/80 focus:border-blue-500 focus:bg-slate-800/90 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15),0_0_20px_rgba(59,130,246,0.08)]"
              />
            </div>
          </div>

          <!-- Email Field -->
          <div class="flex flex-col gap-2">
            <label for="register-email" class="text-[0.8125rem] font-semibold text-slate-400 tracking-wide">Email address</label>
            <div class="group relative flex items-center">
              <Mail class="absolute left-4 w-[18px] h-[18px] text-slate-600 pointer-events-none transition-colors group-focus-within:text-blue-400" />
              <input
                id="register-email"
                type="email"
                bind:value={email}
                placeholder="you@company.com"
                required
                autocomplete="email"
                class="w-full py-[0.8125rem] pl-11 pr-4 text-[0.9375rem] text-slate-200 bg-slate-800/60 border border-slate-700/50 rounded-2xl outline-none transition-all placeholder:text-slate-600 hover:border-blue-500/30 hover:bg-slate-800/80 focus:border-blue-500 focus:bg-slate-800/90 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15),0_0_20px_rgba(59,130,246,0.08)]"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="flex flex-col gap-2">
            <label for="register-password" class="text-[0.8125rem] font-semibold text-slate-400 tracking-wide">Password</label>
            <div class="group relative flex items-center">
              <Lock class="absolute left-4 w-[18px] h-[18px] text-slate-600 pointer-events-none transition-colors group-focus-within:text-blue-400" />
              <input
                id="register-password"
                type={showPassword ? 'text' : 'password'}
                bind:value={password}
                placeholder="Create a strong password"
                required
                autocomplete="new-password"
                minlength="8"
                class="w-full py-[0.8125rem] pl-11 pr-12 text-[0.9375rem] text-slate-200 bg-slate-800/60 border border-slate-700/50 rounded-2xl outline-none transition-all placeholder:text-slate-600 hover:border-blue-500/30 hover:bg-slate-800/80 focus:border-blue-500 focus:bg-slate-800/90 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15),0_0_20px_rgba(59,130,246,0.08)]"
              />
              <button
                type="button"
                class="absolute right-3.5 flex items-center justify-center p-1 text-slate-600 hover:text-slate-400 rounded-md transition-colors"
                onclick={() => showPassword = !showPassword}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {#if showPassword}
                  <EyeOff class="h-[18px] w-[18px]" />
                {:else}
                  <Eye class="h-[18px] w-[18px]" />
                {/if}
              </button>
            </div>
            <!-- Password Strength Indicator -->
            <div class="flex items-center gap-3">
              <div class="flex gap-1 flex-1">
                <div class="h-[3px] flex-1 rounded-sm transition-all
                  {password.length >= 8 ? 'bg-green-500' : password.length >= 6 ? 'bg-amber-500' : password.length >= 1 ? 'bg-red-500' : 'bg-slate-700/40'}"></div>
                <div class="h-[3px] flex-1 rounded-sm transition-all
                  {password.length >= 10 ? 'bg-green-500' : password.length >= 8 ? 'bg-amber-500' : password.length >= 4 ? 'bg-red-500' : 'bg-slate-700/40'}"></div>
                <div class="h-[3px] flex-1 rounded-sm transition-all
                  {password.length >= 12 ? 'bg-green-500' : password.length >= 10 ? 'bg-amber-500' : password.length >= 8 ? 'bg-red-500' : 'bg-slate-700/40'}"></div>
                <div class="h-[3px] flex-1 rounded-sm transition-all
                  {password.length >= 12 ? 'bg-green-500' : password.length >= 12 ? 'bg-red-500' : 'bg-slate-700/40'}"></div>
              </div>
              {#if password.length > 0}
                <span class="text-xs font-medium whitespace-nowrap
                  {password.length < 6 ? 'text-red-500' : password.length < 10 ? 'text-amber-500' : 'text-green-500'}">
                  {password.length < 6 ? 'Weak' : password.length < 10 ? 'Medium' : 'Strong'}
                </span>
              {/if}
            </div>
          </div>

          <!-- Phone Number Field -->
          <div class="flex flex-col gap-2">
            <label for="register-phone" class="text-[0.8125rem] font-semibold text-slate-400 tracking-wide">Phone number</label>
            <div class="group relative flex items-center">
              <Phone class="absolute left-4 w-[18px] h-[18px] text-slate-600 pointer-events-none transition-colors group-focus-within:text-blue-400" />
              <input
                id="register-phone"
                type="tel"
                bind:value={phone}
                placeholder="+91 98765 43210"
                required
                autocomplete="tel"
                class="w-full py-[0.8125rem] pl-11 pr-4 text-[0.9375rem] text-slate-200 bg-slate-800/60 border border-slate-700/50 rounded-2xl outline-none transition-all placeholder:text-slate-600 hover:border-blue-500/30 hover:bg-slate-800/80 focus:border-blue-500 focus:bg-slate-800/90 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15),0_0_20px_rgba(59,130,246,0.08)]"
              />
            </div>
          </div>

          <!-- Terms -->
          <p class="text-[0.8125rem] text-slate-600 leading-relaxed">
            By creating an account, you agree to our
            <a href={resolve('/login')} class="text-blue-400 no-underline font-medium transition-colors hover:text-blue-300">Terms of Service</a> and
            <a href={resolve('/login')} class="text-blue-400 no-underline font-medium transition-colors hover:text-blue-300">Privacy Policy</a>.
          </p>

          <!-- Submit Button -->
          <button
            type="submit"
            class="group relative flex items-center justify-center gap-2 w-full py-3.5 text-[0.9375rem] font-semibold text-white bg-gradient-to-br from-blue-500 to-blue-600 border-0 rounded-2xl cursor-pointer overflow-hidden transition-all shadow-[0_4px_16px_rgba(59,130,246,0.25)] hover:from-blue-600 hover:to-blue-700 hover:shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:-translate-y-px active:translate-y-0 active:shadow-[0_2px_8px_rgba(59,130,246,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {#if isLoading}
              <div class="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Creating account...</span>
            {:else}
              <span>Create Account</span>
              <ArrowRight class="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
            {/if}
          </button>

          <!-- Feedback Messages -->
          {#if errorMessage}
            <div class="flex items-center gap-2.5 py-3.5 px-4 rounded-2xl text-sm font-medium leading-snug bg-red-500/10 border border-red-500/25 text-red-300">
              <XCircle class="h-5 w-5 shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          {/if}
          {#if successMessage}
            <div class="flex items-center gap-2.5 py-3.5 px-4 rounded-2xl text-sm font-medium leading-snug bg-green-500/10 border border-green-500/25 text-green-300">
              <CheckCircle class="h-5 w-5 shrink-0 text-green-500" />
              <span>{successMessage}</span>
            </div>
          {/if}
        </form>

        <!-- Divider -->
        <div class="flex items-center gap-4 my-6 before:content-[''] before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:via-slate-700/50 before:to-transparent after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-transparent after:via-slate-700/50 after:to-transparent">
          <span class="text-[0.8125rem] text-slate-600 font-medium">or</span>
        </div>

        <!-- Sign In Link -->
        <div class="text-center">
          <p class="text-[0.9375rem] text-slate-500">
            Already have an account?
            <a href={resolve('/login')} class="group inline-flex items-center gap-1 font-semibold text-blue-400 no-underline transition-all ml-1 hover:text-blue-300">
              <ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>