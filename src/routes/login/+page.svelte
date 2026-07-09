<script lang="ts">
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

<div class="auth-page">
  <!-- Animated Background -->
  <div class="auth-bg">
    <div class="auth-bg-gradient"></div>
    <div class="auth-bg-pattern"></div>
    <div class="floating-orb orb-1"></div>
    <div class="floating-orb orb-2"></div>
    <div class="floating-orb orb-3"></div>
  </div>

  <div class="auth-container">
    <!-- Left Branding Panel (desktop only) -->
    <div class="auth-branding">
      <div class="branding-content">
        <a href="/" class="brand-logo">
          <div class="logo-icon">
            <Layers class="h-7 w-7 text-white" />
            <div class="logo-pulse"></div>
          </div>
          <span class="logo-text">
            Bomax <span class="logo-highlight">ERP</span>
          </span>
        </a>

        <div class="branding-hero">
          <h1 class="branding-title">
            Streamline Your <span class="text-gradient">Business Operations</span>
          </h1>
          <p class="branding-subtitle">
            One platform to manage inventory, sales, accounting, and more. Join thousands of businesses already growing with Bomax ERP.
          </p>
        </div>

        <div class="branding-features">
          <div class="feature-item">
            <div class="feature-dot"></div>
            <span>Real-time inventory tracking</span>
          </div>
          <div class="feature-item">
            <div class="feature-dot"></div>
            <span>Automated financial reporting</span>
          </div>
          <div class="feature-item">
            <div class="feature-dot"></div>
            <span>Multi-branch management</span>
          </div>
        </div>
      </div>

      <div class="branding-footer">
        <p>© 2026 Bomax ERP. All rights reserved.</p>
      </div>
    </div>

    <!-- Right Form Panel -->
    <div class="auth-form-panel">
      <div class="form-wrapper">
        <!-- Back to Home -->
        <a href="/" class="back-home-link">
          <ArrowLeft class="h-4 w-4 back-arrow" />
          <span>Back to Home</span>
        </a>
        <!-- Mobile Logo -->
        <a href="/" class="mobile-logo">
          <div class="logo-icon-sm">
            <Layers class="h-5 w-5 text-white" />
          </div>
          <span class="logo-text-sm">
            Bomax <span class="logo-highlight">ERP</span>
          </span>
        </a>

        <div class="form-header">
          <h2 class="form-title">Welcome back</h2>
          <p class="form-subtitle">Sign in to your account to continue</p>
        </div>

        <form class="auth-form" onsubmit={handleLogin}>
          <!-- Email Field -->
          <div class="form-group">
            <label for="login-email" class="form-label">Email address</label>
            <div class="input-wrapper">
              <Mail class="input-icon" />
              <input
                id="login-email"
                type="email"
                bind:value={email}
                placeholder="you@company.com"
                required
                autocomplete="email"
                class="form-input"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <div class="label-row">
              <label for="login-password" class="form-label">Password</label>
              <a href="/login" class="forgot-link">Forgot password?</a>
            </div>
            <div class="input-wrapper">
              <Lock class="input-icon" />
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                bind:value={password}
                placeholder="Enter your password"
                required
                autocomplete="current-password"
                class="form-input has-toggle"
              />
              <button
                type="button"
                class="toggle-password"
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
            class="submit-btn"
            disabled={isLoading}
          >
            {#if isLoading}
              <div class="spinner"></div>
              <span>Signing in...</span>
            {:else}
              <span>Sign In</span>
              <ArrowRight class="h-4.5 w-4.5 btn-arrow" />
            {/if}
          </button>
        </form>

        <!-- Divider -->
        <div class="auth-divider">
          <span>or</span>
        </div>

        <!-- Create Account Link -->
        <div class="create-account">
          <p>
            Don't have an account?
            <a href="/register" class="create-link">
              Create Account
              <ArrowRight class="h-4 w-4 inline-arrow" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* ========== GLOBAL AUTH STYLES ========== */
  :global(body) {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }

  .auth-page {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* ========== ANIMATED BACKGROUND ========== */
  .auth-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
  }

  .auth-bg-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%);
  }

  .auth-bg-pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .floating-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
    animation: float 20s ease-in-out infinite;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #3b82f6, transparent);
    top: -10%;
    left: -5%;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #06b6d4, transparent);
    bottom: -10%;
    right: -5%;
    animation-delay: -7s;
  }

  .orb-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, #8b5cf6, transparent);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -14s;
    opacity: 0.2;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(30px, -40px) scale(1.05); }
    50% { transform: translate(-20px, 20px) scale(0.95); }
    75% { transform: translate(15px, 30px) scale(1.02); }
  }

  /* ========== CONTAINER ========== */
  .auth-container {
    position: relative;
    z-index: 10;
    display: flex;
    width: 100%;
    max-width: 1100px;
    min-height: 640px;
    margin: 1.5rem;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.08),
      0 25px 60px -12px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(59, 130, 246, 0.08);
  }

  /* ========== BRANDING PANEL ========== */
  .auth-branding {
    display: none;
    width: 45%;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem;
    background: linear-gradient(160deg, #1e3a5f 0%, #1a2e4a 50%, #162340 100%);
    position: relative;
    overflow: hidden;
  }

  .auth-branding::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
  }

  .branding-content {
    position: relative;
    z-index: 1;
  }

  .brand-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    margin-bottom: 3rem;
  }

  .logo-icon {
    position: relative;
    display: flex;
    height: 2.75rem;
    width: 2.75rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.875rem;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
  }

  .logo-pulse {
    position: absolute;
    top: -4px;
    right: -4px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #22d3ee;
    border: 2px solid #1a2e4a;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }

  .logo-text {
    font-size: 1.375rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: white;
  }

  .logo-highlight {
    background: linear-gradient(135deg, #60a5fa, #22d3ee);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .branding-title {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.2;
    color: white;
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
  }

  .text-gradient {
    background: linear-gradient(135deg, #60a5fa, #22d3ee);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .branding-subtitle {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #94a3b8;
    margin-bottom: 2.5rem;
  }

  .branding-features {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.875rem;
    color: #cbd5e1;
  }

  .feature-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #22d3ee);
    flex-shrink: 0;
  }

  .branding-footer {
    position: relative;
    z-index: 1;
  }

  .branding-footer p {
    font-size: 0.8125rem;
    color: #64748b;
  }

  /* ========== FORM PANEL ========== */
  .auth-form-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 2rem;
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }

  .form-wrapper {
    width: 100%;
    max-width: 420px;
  }

  /* Mobile Logo */
  .mobile-logo {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    text-decoration: none;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .logo-icon-sm {
    display: flex;
    height: 2.25rem;
    width: 2.25rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
  }

  .logo-text-sm {
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: white;
  }

  /* Form Header */
  .form-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-title {
    font-size: 1.75rem;
    font-weight: 800;
    color: #f1f5f9;
    letter-spacing: -0.03em;
    margin-bottom: 0.5rem;
  }

  .form-subtitle {
    font-size: 0.9375rem;
    color: #64748b;
  }

  /* Form */
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-label {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #94a3b8;
    letter-spacing: 0.01em;
  }

  .label-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .forgot-link {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #60a5fa;
    text-decoration: none;
    transition: color 0.2s;
  }

  .forgot-link:hover {
    color: #93c5fd;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-wrapper :global(.input-icon) {
    position: absolute;
    left: 1rem;
    width: 18px;
    height: 18px;
    color: #475569;
    pointer-events: none;
    transition: color 0.2s;
  }

  .form-input {
    width: 100%;
    padding: 0.8125rem 1rem 0.8125rem 2.75rem;
    font-size: 0.9375rem;
    color: #e2e8f0;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(51, 65, 85, 0.5);
    border-radius: 0.875rem;
    outline: none;
    transition: all 0.25s ease;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .form-input::placeholder {
    color: #475569;
  }

  .form-input:hover {
    border-color: rgba(59, 130, 246, 0.3);
    background: rgba(30, 41, 59, 0.8);
  }

  .form-input:focus {
    border-color: #3b82f6;
    background: rgba(30, 41, 59, 0.9);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15), 0 0 20px rgba(59, 130, 246, 0.08);
  }

  .form-input:focus ~ :global(.input-icon),
  .form-input:focus + :global(.input-icon) {
    color: #60a5fa;
  }

  .input-wrapper:focus-within :global(.input-icon) {
    color: #60a5fa;
  }

  .form-input.has-toggle {
    padding-right: 3rem;
  }

  .toggle-password {
    position: absolute;
    right: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    color: #475569;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
    border-radius: 0.375rem;
  }

  .toggle-password:hover {
    color: #94a3b8;
  }

  /* Submit Button */
  .submit-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.875rem;
    margin-top: 0.5rem;
    font-size: 0.9375rem;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    border: none;
    border-radius: 0.875rem;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    font-family: 'Inter', system-ui, sans-serif;
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);
  }

  .submit-btn:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.35);
    transform: translateY(-1px);
  }

  .submit-btn:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .submit-btn :global(.btn-arrow) {
    transition: transform 0.3s ease;
  }

  .submit-btn:hover:not(:disabled) :global(.btn-arrow) {
    transform: translateX(3px);
  }

  /* Spinner */
  .spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Divider */
  .auth-divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.75rem 0;
  }

  .auth-divider::before,
  .auth-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(51, 65, 85, 0.5), transparent);
  }

  .auth-divider span {
    font-size: 0.8125rem;
    color: #475569;
    font-weight: 500;
  }

  /* Create Account */
  .create-account {
    text-align: center;
  }

  .create-account p {
    font-size: 0.9375rem;
    color: #64748b;
  }

  .create-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: 600;
    color: #60a5fa;
    text-decoration: none;
    transition: all 0.2s;
    margin-left: 0.25rem;
  }

  .create-link:hover {
    color: #93c5fd;
  }

  .create-link :global(.inline-arrow) {
    transition: transform 0.2s;
  }

  .create-link:hover :global(.inline-arrow) {
    transform: translateX(3px);
  }

  /* Back to Home */
  .back-home-link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #64748b;
    text-decoration: none;
    transition: all 0.2s;
    margin-bottom: 1.5rem;
  }

  .back-home-link:hover {
    color: #60a5fa;
  }

  .back-home-link :global(.back-arrow) {
    transition: transform 0.2s;
  }

  .back-home-link:hover :global(.back-arrow) {
    transform: translateX(-3px);
  }

  /* ========== RESPONSIVE ========== */
  @media (min-width: 1024px) {
    .auth-branding {
      display: flex;
    }

    .mobile-logo {
      display: none;
    }

    .form-header {
      text-align: left;
    }
  }

  @media (max-width: 640px) {
    .auth-container {
      margin: 0;
      border-radius: 0;
      min-height: 100vh;
    }

    .auth-form-panel {
      padding: 2rem 1.5rem;
    }

    .form-title {
      font-size: 1.5rem;
    }
  }
</style>
