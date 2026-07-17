<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { login } from '$lib/services/auth';
	import { saveAuth } from '$lib/stores/auth';
	import { Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-svelte';

	let email = $state('');
	let password = $state('');

	let loading = $state(false);
	let error = $state('');

	function getErrorMessage(err: unknown) {
		if (err instanceof Error) return err.message;
		return String(err ?? 'Login Failed');
	}

	async function handleLogin(e: Event) {
		e.preventDefault();
		error = '';

		if (!email || !password) {
			error = 'Please fill all fields';
			return;
		}

		try {
			loading = true;

			const data = await login(email, password);

			saveAuth(data.token, data.admin);

			await goto(resolve('/admin'));
		} catch (err: unknown) {
			error = getErrorMessage(err);
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Firstcut24 - Admin Login</title>
	<meta name="description" content="Sign in to your Firstcut24 admin account." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
</svelte:head>

<div class="relative min-h-screen flex items-center justify-center overflow-hidden [font-family:'Roboto',system-ui,sans-serif]">
	<!-- Light Background with subtle blue accents -->
	<div class="fixed inset-0 z-0">
		<div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100"></div>
		<div class="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
		<div class="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] rounded-full blur-[80px] opacity-30 bg-[radial-gradient(circle,#3b82f6,transparent)] animate-pulse"></div>
		<div class="absolute -bottom-[10%] -right-[5%] w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 bg-[radial-gradient(circle,#93c5fd,transparent)] animate-pulse [animation-delay:1.5s]"></div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 bg-[radial-gradient(circle,#60a5fa,transparent)] animate-pulse [animation-delay:3s]"></div>
	</div>

	<div class="relative z-10 flex w-full max-w-[1100px] min-h-screen sm:min-h-[700px] m-0 sm:m-6 rounded-none sm:rounded-3xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_25px_60px_-12px_rgba(0,0,0,0.15)] bg-white">
		<!-- Left Branding Panel (desktop only) -->
		<div class="hidden lg:flex w-[45%] flex-col justify-between p-12 relative overflow-hidden bg-[linear-gradient(160deg,#1e3a5f_0%,#1e4a7a_50%,#2563eb_100%)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_20%_50%,rgba(147,197,253,0.2)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(37,99,235,0.1)_0%,transparent_50%)]">
			<div class="relative z-[1]">
				<a href={resolve('/')} class="flex items-center no-underline mb-12">
					<img src="/logo.png" alt="Firstcut24" class="h-10 w-auto object-contain" style="filter: brightness(0) invert(1)" />
				</a>

				<div>
					<h1 class="text-[2rem] font-extrabold leading-tight text-white tracking-tight mb-4">
						Manage Your <span class="text-cyan-300">Business Operations</span>
					</h1>
					<p class="text-[0.9375rem] leading-relaxed text-blue-100/90 mb-10">
						Secure admin access to inventory, sales, accounting, and more from one dashboard.
					</p>
				</div>

				<div class="flex flex-col gap-3.5">
					<div class="flex items-center gap-3 text-sm text-blue-100/80">
						<div class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
						<span>Real-time inventory tracking</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-blue-100/80">
						<div class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
						<span>Automated financial reporting</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-blue-100/80">
						<div class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
						<span>Multi-branch management</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Right Form Panel -->
		<div class="flex-1 flex items-center justify-center px-6 py-8 sm:px-8 sm:py-10 bg-white">
			<div class="w-full max-w-[420px]">
				<!-- Back to Home -->
				<a href={resolve('/')} class="group inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-slate-500 no-underline transition-all mb-6 hover:text-blue-600">
					<ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
					<span>Back to Home</span>
				</a>

				<!-- Mobile Logo -->
				<a href={resolve('/')} class="flex lg:hidden items-center no-underline mb-8 justify-center">
					<div class="bg-white rounded-xl px-3 py-1.5 shadow-sm">
						<img src="/logo.png" alt="Firstcut24" class="h-10 w-auto object-contain" />
					</div>
				</a>

				<div class="text-center lg:text-left mb-8">
					<h2 class="text-2xl sm:text-[1.75rem] font-extrabold text-slate-800 tracking-tight mb-2">Admin Login</h2>
					<p class="text-[0.9375rem] text-slate-500">Sign in to continue</p>
				</div>

				{#if error}
					<div class="mb-5 rounded-2xl bg-red-50 border border-red-100 p-3 text-sm text-red-700">
						{error}
					</div>
				{/if}

				<form class="flex flex-col gap-4" onsubmit={handleLogin}>
					<!-- Email Field -->
					<div class="flex flex-col gap-1.5">
						<label for="admin-email" class="text-[0.8125rem] font-semibold text-slate-700 tracking-wide">Email</label>
						<div class="group relative flex items-center">
							<Mail class="absolute left-4 w-[18px] h-[18px] text-slate-400 pointer-events-none transition-colors group-focus-within:text-blue-600" />
							<input
								id="admin-email"
								type="email"
								bind:value={email}
								placeholder="admin@gmail.com"
								required
								class="w-full py-[0.8125rem] pl-11 pr-4 text-[0.9375rem] text-slate-800 bg-white border border-slate-300 rounded-2xl outline-none transition-all placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
							/>
						</div>
					</div>

					<!-- Password Field -->
					<div class="flex flex-col gap-1.5">
						<label for="admin-password" class="text-[0.8125rem] font-semibold text-slate-700 tracking-wide">Password</label>
						<div class="group relative flex items-center">
							<Lock class="absolute left-4 w-[18px] h-[18px] text-slate-400 pointer-events-none transition-colors group-focus-within:text-blue-600" />
							<input
								id="admin-password"
								type="password"
								bind:value={password}
								placeholder="********"
								required
								class="w-full py-[0.8125rem] pl-11 pr-4 text-[0.9375rem] text-slate-800 bg-white border border-slate-300 rounded-2xl outline-none transition-all placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
							/>
						</div>
					</div>

					<!-- Submit Button -->
					<button
						type="submit"
						class="group relative flex items-center justify-center gap-2 w-full py-3.5 mt-2 text-[0.9375rem] font-semibold text-white bg-gradient-to-br from-blue-600 to-blue-700 border-0 rounded-2xl cursor-pointer overflow-hidden transition-all shadow-[0_4px_16px_rgba(59,130,246,0.35)] hover:from-blue-700 hover:to-blue-800 hover:shadow-[0_8px_24px_rgba(59,130,246,0.45)] hover:-translate-y-px active:translate-y-0 active:shadow-[0_2px_8px_rgba(59,130,246,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
						disabled={loading}
					>
						{#if loading}
							<div class="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
							<span>Logging in...</span>
						{:else}
							<span>Login</span>
							<ArrowRight class="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>
</div>