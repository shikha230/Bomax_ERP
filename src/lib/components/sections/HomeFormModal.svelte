<script lang="ts">
  import { X, Sparkles, Calculator, Calendar } from 'lucide-svelte';

  // Props in Svelte 5
  let { isOpen = false, mode = 'optimizer', onClose = () => {} } = $props();

  let clientName = $state('');
  let companyName = $state('');
  let whatsappNumber = $state('');
  let country = $state('');
  let stateName = $state('');
  let pinCode = $state('');
  let cityName = $state('');
  let bestTime = $state('');

  let isSubmitting = $state(false);
  let isSuccess = $state(false);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    isSubmitting = true;
    
    // Simulate submission API call
    setTimeout(() => {
      isSubmitting = false;
      isSuccess = true;
    }, 1200);
  }

  function resetAndClose() {
    onClose();
    setTimeout(() => {
      clientName = '';
      companyName = '';
      whatsappNumber = '';
      country = '';
      stateName = '';
      pinCode = '';
      cityName = '';
      bestTime = '';
      isSuccess = false;
    }, 300);
  }
</script>

{#if isOpen}
  <!-- Backdrop -->
  <!-- eslint-disable-next-line svelte/valid-compile -->
  <div
    class="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-slate-950/40 p-0 sm:p-4 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto"
    role="presentation"
    onclick={resetAndClose}
  >
    <!-- Modal Card -->
    <!-- eslint-disable-next-line svelte/valid-compile -->
    <div
      class="relative w-full sm:max-w-xl sm:rounded-3xl border-0 sm:border border-slate-100 bg-white shadow-2xl transition-all duration-300 min-h-screen sm:min-h-0 flex flex-col"
      onclick={(e) => e.stopPropagation()}
    >
      <!-- Sticky Header with Close Button (always visible) -->
      <div class="sticky top-0 z-10 flex items-center justify-between bg-white px-4 pt-4 pb-2 sm:px-6 sm:pt-5 border-b sm:border-b-0 border-slate-100">
        <span class="text-sm font-semibold text-slate-500 sm:hidden">
          {#if !isSuccess}
            {mode === 'optimizer' ? 'Try Free Optimizer' : 'Book a Demo'}
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
            <h3 class="text-xl font-extrabold text-slate-900 font-heading">Optimizer Request Received!</h3>
            <p class="mt-2 text-sm text-slate-500 max-w-sm">
              Thank you, <strong class="text-slate-800">{clientName}</strong>. Our optimization expert will contact you at <strong class="text-slate-800">{whatsappNumber}</strong> to set up your free optimizer.
            </p>
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
              <h3 class="text-lg font-extrabold text-slate-900 font-heading">Try Free Optimizer</h3>
              <p class="text-sm text-slate-520 mt-0.5">Optimize your cutting layouts, reduce wastage, and save costs.</p>
            </div>
          {:else}
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 shrink-0">
              <Calendar class="h-5.5 w-5.5" />
            </div>
            <div>
              <h3 class="text-lg font-extrabold text-slate-900 font-heading">Book a Demo</h3>
              <p class="text-sm text-slate-520 mt-0.5">See how Bomax ERP boosts efficiency for your glass operations.</p>
            </div>
          {/if}
        </div>

        <form onsubmit={handleSubmit} class="space-y-4">
          <!-- Client Name and Company Name fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>

          <!-- 2-Column Grid for Next Fields -->
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
              <label for="best-time" class="block text-xs font-bold text-slate-705 mb-1">Best Time to Contact *</label>
              <input
                id="best-time"
                type="text"
                bind:value={bestTime}
                required
                placeholder="e.g., 10 AM - 1 PM"
                class="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
              />
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
              <label for="pincode" class="block text-xs font-bold text-slate-755 mb-1">PIN Code *</label>
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
              {mode === 'optimizer' ? 'Try Free Optimizer' : 'Book Demo'}
            {/if}
          </button>
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
