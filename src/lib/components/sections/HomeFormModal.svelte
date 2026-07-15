<script lang="ts">
  import { X, Sparkles, Calculator, Calendar, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-svelte';

  // Props in Svelte 5
  let { isOpen = false, mode = 'optimizer', onClose = () => {} } = $props();

  // Existing demo state variables
  let clientName = $state('');
  let companyName = $state('');
  let whatsappNumber = $state('');
  let country = $state('');
  let stateName = $state('');
  let pinCode = $state('');
  let cityName = $state('');
  let bestTime = $state('');

  // Login (optimizer mode) state variables
  let loginIdentifier = $state('');
  let password = $state('');
  let showPassword = $state(false);
  let loginMethod = $derived(
    loginIdentifier.trim() && /^[0-9+\s\-()]+$/.test(loginIdentifier.trim())
      ? 'phone'
      : 'gmail'
  );

  let phoneStep = $state<'credentials' | 'otp'>('credentials');
  let otpCode = $state(['', '', '', '', '', '']);
  let otpInputs: HTMLInputElement[] = [];

  let isSubmitting = $state(false);
  let isSuccess = $state(false);

  function handleOtpInput(index: number, e: Event) {
    const input = e.target as HTMLInputElement;
    const value = input.value.replace(/[^0-9]/g, '');

    if (value.length > 1) {
      otpCode[index] = value.slice(-1);
    } else {
      otpCode[index] = value;
    }

    // Auto-focus next input
    if (otpCode[index] && index < 5) {
      otpInputs[index + 1]?.focus();
    }
  }

  function handleOtpKeyDown(index: number, e: KeyboardEvent) {
    if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
      otpInputs[index - 1]?.focus();
    }
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (mode === 'optimizer') {
      if (loginMethod === 'gmail') {
        isSubmitting = true;
        setTimeout(() => {
          isSubmitting = false;
          isSuccess = true;
        }, 1200);
      } else {
        // Phone login flow
        if (phoneStep === 'credentials') {
          isSubmitting = true;
          setTimeout(() => {
            isSubmitting = false;
            phoneStep = 'otp';
          }, 1000);
        } else {
          // Verify code
          isSubmitting = true;
          setTimeout(() => {
            isSubmitting = false;
            isSuccess = true;
          }, 1200);
        }
      }
    } else {
      isSubmitting = true;
      // Simulate booking API call
      setTimeout(() => {
        isSubmitting = false;
        isSuccess = true;
      }, 1200);
    }
  }

  function resetAndClose() {
    onClose();
    setTimeout(() => {
      // Demo variable reset
      clientName = '';
      companyName = '';
      whatsappNumber = '';
      country = '';
      stateName = '';
      pinCode = '';
      cityName = '';
      bestTime = '';

      // Login variable reset
      loginIdentifier = '';
      password = '';
      showPassword = false;
      phoneStep = 'credentials';
      otpCode = ['', '', '', '', '', ''];

      isSuccess = false;
      isSubmitting = false;
    }, 300);
  }
</script>

{#if isOpen}
  <!-- Sibling containers to avoid propagation and accessibility warnings on clicking backdrops -->
  <div class="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
    <!-- Backdrop (hidden from screen readers) -->
    <div
      class="fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300"
      onclick={resetAndClose}
      aria-hidden="true"
    ></div>

    <!-- Modal Card -->
    <div
      class="relative w-full sm:max-w-xl rounded-t-3xl sm:rounded-3xl border-0 sm:border border-slate-100 bg-white shadow-2xl transition-all duration-300 min-h-screen sm:min-h-0 flex flex-col z-10"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      onkeydown={(e: KeyboardEvent) => e.key === 'Escape' && resetAndClose()}
    >
      <!-- Sticky Header with Close Button (always visible) -->
      <div class="sticky top-0 z-10 flex items-center justify-between bg-white px-4 pt-4 pb-2 sm:px-6 sm:pt-5 border-b sm:border-b-0 border-slate-100 rounded-t-3xl">
        <span class="text-sm font-semibold text-slate-500 sm:hidden">
          {#if !isSuccess}
            {mode === 'optimizer' ? 'Try Free Optimizer' : 'Book a Demo (Launching Soon)'}
          {:else}
            Request Submitted
          {/if}
        </span>
        <button
          onclick={resetAndClose}
          class="ml-auto rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
          aria-label="Close Modal"
        >
          <X class="h-6 w-6" />
        </button>
      </div>

      <!-- Modal Body -->
      <div class="flex-1 px-4 pb-8 pt-2 sm:px-8 sm:pb-8 sm:pt-4">

      {#if isSuccess}
        <div class="py-8 text-center flex flex-col items-center animate-fade-in">
          <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-md">
            <Sparkles class="h-7 w-7" />
          </div>

          {#if mode === 'optimizer'}
            <h3 class="text-xl font-extrabold text-slate-900 font-heading">Login Successful!</h3>
            {#if loginMethod === 'gmail'}
              <p class="mt-2 text-sm text-slate-500 max-w-sm">
                Welcome back, <strong class="text-slate-800">{loginIdentifier}</strong>. You have successfully unlocked access to the AI Cutting Optimizer.
              </p>
            {:else}
              <p class="mt-2 text-sm text-slate-500 max-w-sm">
                Verification complete! Phone number <strong class="text-slate-800">{loginIdentifier}</strong> authenticated. Enjoy full optimizer access.
              </p>
            {/if}
          {:else}
            <h3 class="text-xl font-extrabold text-slate-900 font-heading">Demo Request Submitted!</h3>
            <p class="mt-2 text-sm text-slate-500 max-w-sm">
              Thank you, <strong class="text-slate-800">{clientName}</strong>. We will reach out to you at <strong class="text-slate-800">{whatsappNumber}</strong> to schedule a live demo.
            </p>
          {/if}

          <button
            onclick={resetAndClose}
            class="mt-8 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Done
          </button>
        </div>
      {:else}
        <!-- Form Header -->
        <div class="mb-6 flex items-start gap-3.5">
          {#if mode === 'optimizer'}
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <Calculator class="h-5.5 w-5.5" />
            </div>
            <div>
              <h3 class="text-lg font-extrabold text-slate-900 font-heading">Sign In to Optimizer</h3>
              <p class="text-sm text-slate-500 mt-0.5">Please log in to try our AI Glass Cutting Optimizer.</p>
            </div>
          {:else}
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 shrink-0">
              <Calendar class="h-5.5 w-5.5" />
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-lg font-extrabold text-slate-900 font-heading">Book a Demo</h3>
                <span class="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200/60 uppercase tracking-wider animate-pulse">Launching Soon</span>
              </div>
              <p class="text-sm text-slate-500 mt-0.5">See how Firstcut24 boosts efficiency for your glass operations.</p>
            </div>
          {/if}
        </div>

        <form onsubmit={handleSubmit} class="space-y-4">
          {#if mode === 'optimizer'}
            {#if phoneStep === 'credentials'}
              <!-- Single credentials view for both Gmail and Phone -->
              <div class="space-y-3.5">
                <div>
                  <label for="identifier-input" class="block text-xs font-bold text-slate-700 mb-1.5">Gmail or Phone Number *</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 transition-colors duration-200">
                      {#if loginMethod === 'phone'}
                        <Phone class="h-4.5 w-4.5 text-slate-400" />
                      {:else}
                        <Mail class="h-4.5 w-4.5 text-slate-400" />
                      {/if}
                    </div>
                    <input
                      id="identifier-input"
                      type="text"
                      bind:value={loginIdentifier}
                      required
                      placeholder="e.g., alex@gmail.com or +91 98765 43210"
                      class="w-full rounded-xl border border-slate-200 pl-11 pr-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label for="password-input" class="block text-xs font-bold text-slate-700 mb-1.5">Password *</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock class="h-4.5 w-4.5" />
                    </div>
                    <input
                      id="password-input"
                      type={showPassword ? 'text' : 'password'}
                      bind:value={password}
                      required
                      placeholder="••••••••"
                      class="w-full rounded-xl border border-slate-200 pl-11 pr-11 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                    />
                    <button
                      type="button"
                      class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
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
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                disabled={isSubmitting}
                class="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all disabled:bg-blue-400 gap-1.5"
              >
                {#if isSubmitting}
                  {loginMethod === 'phone' ? 'Sending OTP...' : 'Logging in...'}
                {:else}
                  {loginMethod === 'phone' ? 'Send OTP Verification' : 'Login'} <ArrowRight class="h-4 w-4" />
                {/if}
              </button>
            {:else}
              <!-- OTP input scene -->
              <div class="animate-fade-in space-y-5 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <ShieldCheck class="h-6 w-6" />
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-800">Verify OTP Code</h4>
                  <p class="text-xs text-slate-500 mt-1">
                    Please enter the 6-digit confirmation code we sent to <span class="font-bold text-slate-700">{loginIdentifier}</span>.
                  </p>
                  <button
                    type="button"
                    class="text-xs text-blue-600 font-bold hover:underline mt-1.5"
                    onclick={() => phoneStep = 'credentials'}
                  >
                    Wrong phone / password? Go back
                  </button>
                </div>

                <!-- 6 digit cells -->
                <div class="flex justify-center gap-2.5 py-1">
                  {#each [0, 1, 2, 3, 4, 5] as index (index)}
                    <input
                      bind:this={otpInputs[index]}
                      type="text"
                      inputmode="numeric"
                      pattern="[0-9]*"
                      maxlength="1"
                      required
                      class="w-10 h-10 text-center text-lg font-bold rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 outline-none transition-all shadow-sm"
                      value={otpCode[index]}
                      oninput={(e) => handleOtpInput(index, e)}
                      onkeydown={(e) => handleOtpKeyDown(index, e)}
                    />
                  {/each}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="flex w-full items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all disabled:bg-blue-400 gap-1.5"
                >
                  {#if isSubmitting}
                    Verifying...
                  {:else}
                    Verify OTP & Unlock Optimizer
                  {/if}
                </button>
              </div>
            {/if}
          {:else}
            <!-- Book a Demo mode fields -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="company-name" class="block text-xs font-bold text-slate-700 mb-1">Company Name *</label>
                <input
                  id="company-name"
                  type="text"
                  bind:value={companyName}
                  required
                  placeholder="e.g., Apex Glass Solutions"
                  class="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                />
              </div>
              <div>
                <label for="client-name" class="block text-xs font-bold text-slate-700 mb-1">Client Name *</label>
                <input
                  id="client-name"
                  type="text"
                  bind:value={clientName}
                  required
                  placeholder="e.g., John Doe"
                  class="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                />
              </div>
            </div>

            <!-- WhatsApp and Contact Time Fields -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="whatsapp-number" class="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number *</label>
                <input
                  id="whatsapp-number"
                  type="tel"
                  bind:value={whatsappNumber}
                  required
                  placeholder="e.g., +91 98765 43210"
                  class="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                />
              </div>

              <div>
                <label for="best-time" class="block text-xs font-bold text-slate-700 mb-1">Best Time to Contact *</label>
                <select
                  id="best-time"
                  bind:value={bestTime}
                  required
                  class="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none text-slate-700 font-medium"
                >
                  <option value="" disabled selected>Select a time slot</option>
                  <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                  <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
                  <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                  <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                  <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                </select>
              </div>
            </div>

            <!-- Country and State -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="country" class="block text-xs font-bold text-slate-700 mb-1">Country *</label>
                <input
                  id="country"
                  type="text"
                  bind:value={country}
                  required
                  placeholder="e.g., India"
                  class="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                />
              </div>
              <div>
                <label for="state" class="block text-xs font-bold text-slate-700 mb-1">State *</label>
                <input
                  id="state"
                  type="text"
                  bind:value={stateName}
                  required
                  placeholder="e.g., Maharashtra"
                  class="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                />
              </div>
            </div>

            <!-- City and PIN Code -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="city" class="block text-xs font-bold text-slate-700 mb-1">City *</label>
                <input
                  id="city"
                  type="text"
                  bind:value={cityName}
                  required
                  placeholder="e.g., Mumbai"
                  class="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                />
              </div>
              <div>
                <label for="pincode" class="block text-xs font-bold text-slate-700 mb-1">PIN Code *</label>
                <input
                  id="pincode"
                  type="text"
                  bind:value={pinCode}
                  required
                  placeholder="e.g., 400001"
                  class="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                />
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              disabled={isSubmitting}
              class="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all disabled:bg-blue-400"
            >
              {#if isSubmitting}
                Submitting...
              {:else}
                Book a Demo
              {/if}
            </button>
          {/if}
        </form>
      {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .animate-fade-in {
    animation: fadeIn 0.4s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>