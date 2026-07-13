<script lang="ts">
  import { X, PhoneCall,Sparkles } from 'lucide-svelte';

  // Props in Svelte 5
  let { isOpen = false, onClose = () => {} } = $props();

  let name = $state('');
  let email = $state('');
  let phone = $state('');
  let message = $state('');
  let isSubmitting = $state(false);
  let isSuccess = $state(false);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }
    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
      isSuccess = true;
    }, 1000);
  }

  function resetAndClose() {
    onClose();
    setTimeout(() => {
      name = '';
      email = '';
      phone = '';
      message = '';
      isSuccess = false;
    }, 300);
  }
</script>

{#if isOpen}
  <!-- Sibling containers to avoid propagation and accessibility warnings on clicking backdrops -->
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Backdrop (hidden from screen readers) -->
    <div
      class="fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300"
      onclick={resetAndClose}
      aria-hidden="true"
    ></div>

    <!-- Modal Card -->
    <div
      class="relative w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl transition-all duration-300 md:p-8 z-10"
      role="dialog"
      aria-modal="true"
      aria-label="Contact sales team"
      tabindex="-1"
      onkeydown={(e: KeyboardEvent) => {
        if (e.key === 'Escape') resetAndClose();
      }}
    >
      <!-- Close Button -->
      <button
        onclick={resetAndClose}
        class="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
        aria-label="Close Modal"
      >
        <X class="h-6 w-6" />
      </button>

      {#if isSuccess}
        <div class="py-8 text-center flex flex-col items-center">
          <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 shadow-md">
            <Sparkles class="h-7 w-7" />
          </div>
          <h3 class="text-xl font-extrabold text-slate-900 font-heading">Message Sent!</h3>
          <p class="mt-2 text-sm text-slate-500 max-w-sm">
            Thank you, <strong class="text-slate-800">{name}</strong>. Our enterprise sales team will reach out to you at <strong class="text-slate-850">{email}</strong> within 12 hours.
          </p>
          <button
            onclick={resetAndClose}
            class="mt-8 rounded-xl bg-blue-650 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Done
          </button>
        </div>
      {:else}
        <div class="mb-6 flex items-start gap-3.5">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-650 shrink-0">
            <PhoneCall class="h-5.5 w-5.5" />
          </div>
          <div>
            <h3 class="text-lg font-extrabold text-slate-900 font-heading">Contact Our Sales Team</h3>
            <p class="text-sm text-slate-450 mt-0.5">Let's discuss how we can tailor our solution to your manufacturing plants.</p>
          </div>
        </div>

        <form onsubmit={handleSubmit} class="space-y-4">
          <div>
            <label for="contact-name" class="block text-xs font-bold text-slate-755 mb-1">Your Name *</label>
            <input
              id="contact-name"
              type="text"
              bind:value={name}
              required
              placeholder="Sarah Connor"
              class="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="contact-email" class="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
              <input
                id="contact-email"
                type="email"
                bind:value={email}
                required
                placeholder="sarah@cyberdyne.com"
                class="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
              />
            </div>
            <div>
              <label for="contact-phone" class="block text-xs font-bold text-slate-705 mb-1">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                bind:value={phone}
                placeholder="+1 (555) 019-2834"
                class="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
              />
            </div>
          </div>

          <div>
            <label for="contact-message" class="block text-xs font-bold text-slate-700 mb-1">How can we help? *</label>
            <textarea
              id="contact-message"
              bind:value={message}
              required
              rows="4"
              placeholder="Tell us about your glass business size, manufacturing lines, or custom feature requirements..."
              class="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            class="mt-6 flex w-full items-center justify-center rounded-xl bg-cyan-600 hover:bg-cyan-700 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-colors disabled:bg-cyan-400"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </button>
        </form>
      {/if}
    </div>
  </div>
{/if}