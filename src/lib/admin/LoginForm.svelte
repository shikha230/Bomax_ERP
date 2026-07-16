<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { login } from '$lib/services/auth';
	import { saveAuth } from '$lib/stores/auth';

	let email = $state('');
	let password = $state('');

	let loading = $state(false);
	let error = $state('');

	function getErrorMessage(err: unknown) {
		if (err instanceof Error) return err.message;
		return String(err ?? 'Login Failed');
	}

	async function handleLogin() {
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

<div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

	<h1 class="mb-2 text-center text-3xl font-bold text-slate-800">
		Admin Login
	</h1>

	<p class="mb-8 text-center text-slate-500">
		Sign in to continue
	</p>

	{#if error}
		<div class="mb-5 rounded-lg bg-red-100 p-3 text-red-700">
			{error}
		</div>
	{/if}

	<div class="space-y-5">

		<div>
			<label for="admin-email" class="mb-2 block font-medium">
				Email
			</label>

			<input
				id="admin-email"
				bind:value={email}
				type="email"
				placeholder="admin@gmail.com"
				class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
			/>
		</div>

		<div>
			<label for="admin-password" class="mb-2 block font-medium">
				Password
			</label>

			<input
				id="admin-password"
				bind:value={password}
				type="password"
				placeholder="********"
				class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
			/>
		</div>

		<button
			onclick={handleLogin}
			disabled={loading}
			class="w-full rounded-xl bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-50"
		>
			{#if loading}
				Logging in...
			{:else}
				Login
			{/if}
		</button>

	</div>

</div>