<script lang="ts">
	import { onMount } from 'svelte';
	import { token } from '$lib/stores/auth';
	import { registerAdmin } from '$lib/services/auth';
	import { getUsers } from '$lib/services/users';
	import type { User } from '$lib/types/user';
	import Sidebar from '$lib/admin/Sidebar.svelte';
	import Header from '$lib/admin/Header.svelte';
	import { 
		User as UserIcon, 
		Mail, 
		Lock, 
		Eye, 
		EyeOff, 
		CheckCircle, 
		XCircle, 
		ArrowRight, 
		ShieldCheck, 
		Search,
		Users
	} from 'lucide-svelte';

	let name = $state('');
	let email = $state('');
	let password = $state('');
	let showPassword = $state(false);

	let isLoading = $state(false);
	let errorMessage = $state('');
	let successMessage = $state('');
	let registeredAdmin = $state<{ id: number; role: string; name: string; email: string } | null>(null);

	let users = $state<User[]>([]);
	let loadingUsers = $state(false);
	let searchQuery = $state('');

	async function loadUsers() {
		loadingUsers = true;
		try {
			users = await getUsers();
		} catch (err: unknown) {
			console.error('Failed to load users:', err);
		} finally {
			loadingUsers = false;
		}
	}

	onMount(async () => {
		if (!$token) {
			window.location.href = '/admin-login';
			return;
		}
		await loadUsers();
	});

	async function handleRegister(e: Event) {
		e.preventDefault();
		isLoading = true;
		errorMessage = '';
		successMessage = '';
		registeredAdmin = null;

		try {
			const res = await registerAdmin(name, email, password);
			successMessage = res.message || 'Admin registered successfully!';
			registeredAdmin = {
				id: res.id,
				role: res.role,
				name,
				email
			};
			name = '';
			email = '';
			password = '';

			// Reload the users list from the backend
			await loadUsers();
		} catch (err: unknown) {
			errorMessage = err instanceof Error ? err.message : String(err ?? 'Registration failed.');
		} finally {
			isLoading = false;
		}
	}

	function filteredUsers() {
		const query = searchQuery.toLowerCase();
		return users.filter((user) =>
			user.name.toLowerCase().includes(query) ||
			user.email.toLowerCase().includes(query)
		);
	}
</script>

<svelte:head>
	<title>Register Admin - Dashboard</title>
</svelte:head>

<div class="min-h-screen bg-slate-100 text-slate-900">
	<div class="lg:pl-72">
		<Header />
		
		<main class="mx-auto max-w-7xl px-6 py-10">
			<!-- Title Section -->
			<div class="mb-8 rounded-3xl bg-white p-8 shadow-sm">
				<h1 class="text-3xl font-bold text-slate-900">Register Admin</h1>
				<p class="mt-3 text-slate-600">
					Create, authorize, and sync new system administrators directly with the backend API.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
				<!-- Registration Form -->
				<div class="lg:col-span-1">
					<div class="rounded-2xl bg-white p-6 shadow-sm">
						<h2 class="mb-4 text-xl font-bold text-slate-800">Admin Credentials</h2>
						
						<form onsubmit={handleRegister} class="space-y-5">
							<!-- Name Field -->
							<div class="space-y-1.5">
								<label for="admin-register-name" class="text-xs font-semibold text-slate-600">Full Name</label>
								<div class="relative flex items-center">
									<UserIcon class="absolute left-3 w-5 h-5 text-slate-400" />
									<input
										id="admin-register-name"
										type="text"
										bind:value={name}
										placeholder="Jane Doe"
										required
										class="w-full rounded-xl border border-slate-300 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-cyan-500"
									/>
								</div>
							</div>

							<!-- Email Field -->
							<div class="space-y-1.5">
								<label for="admin-register-email" class="text-xs font-semibold text-slate-600">Email Address</label>
								<div class="relative flex items-center">
									<Mail class="absolute left-3 w-5 h-5 text-slate-400" />
									<input
										id="admin-register-email"
										type="email"
										bind:value={email}
										placeholder="admin@example.com"
										required
										class="w-full rounded-xl border border-slate-300 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-cyan-500"
									/>
								</div>
							</div>

							<!-- Password Field -->
							<div class="space-y-1.5">
								<label for="admin-register-password" class="text-xs font-semibold text-slate-600">Password</label>
								<div class="relative flex items-center">
									<Lock class="absolute left-3 w-5 h-5 text-slate-400" />
									<input
										id="admin-register-password"
										type={showPassword ? 'text' : 'password'}
										bind:value={password}
										placeholder="********"
										required
										minlength="6"
										class="w-full rounded-xl border border-slate-300 py-2.5 pl-10 pr-10 text-sm outline-none focus:border-cyan-500"
									/>
									<button
										type="button"
										class="absolute right-3 text-slate-400 hover:text-slate-600"
										onclick={() => showPassword = !showPassword}
									>
										{#if showPassword}
											<EyeOff class="w-4 h-4" />
										{:else}
											<Eye class="w-4 h-4" />
										{/if}
									</button>
								</div>
							</div>

							<!-- Submit Button -->
							<button
								type="submit"
								disabled={isLoading}
								class="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-50"
							>
								{#if isLoading}
									<div class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
									<span>Registering...</span>
								{:else}
									<span>Register Admin</span>
									<ArrowRight class="w-4 h-4" />
								{/if}
							</button>

							<!-- Message Alerts -->
							{#if errorMessage}
								<div class="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
									<XCircle class="w-5 h-5 shrink-0 text-red-500" />
									<span>{errorMessage}</span>
								</div>
							{/if}

							{#if successMessage}
								<div class="flex items-start gap-2 rounded-xl bg-green-50 border border-green-200 p-3 text-sm text-green-700">
									<CheckCircle class="w-5 h-5 shrink-0 text-green-500" />
									<span>{successMessage}</span>
								</div>
							{/if}
						</form>
					</div>
				</div>

				<!-- Display Registered User Details & User Directory -->
				<div class="lg:col-span-2 space-y-8">
					<!-- Active Registered User Display -->
					{#if registeredAdmin}
						<div class="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm">
							<div class="flex items-center gap-3 mb-4">
								<ShieldCheck class="w-8 h-8 text-green-600" />
								<div>
									<h2 class="text-lg font-bold text-green-800">Newly Registered Admin Details</h2>
									<p class="text-xs text-green-700">Fetched from successful backend registry</p>
								</div>
							</div>
							<div class="grid grid-cols-2 gap-4 text-sm bg-white rounded-xl p-4 shadow-inner border border-green-100">
								<div>
									<span class="text-xs text-slate-500 font-medium">NAME</span>
									<p class="font-bold text-slate-800">{registeredAdmin.name}</p>
								</div>
								<div>
									<span class="text-xs text-slate-500 font-medium">EMAIL</span>
									<p class="font-bold text-slate-800">{registeredAdmin.email}</p>
								</div>
								<div>
									<span class="text-xs text-slate-500 font-medium">BACKEND USER ID</span>
									<p class="font-mono font-bold text-slate-850">#{registeredAdmin.id}</p>
								</div>
								<div>
									<span class="text-xs text-slate-500 font-medium">ASSIGNED ROLE</span>
									<span class="inline-block mt-0.5 rounded-full bg-cyan-150 border border-cyan-300 px-3 py-0.5 text-xs font-bold text-cyan-800">
										{registeredAdmin.role.toUpperCase()}
									</span>
								</div>
							</div>
						</div>
					{/if}

					<!-- Registered Users List (GET call verification) -->
					<div class="rounded-2xl bg-white p-6 shadow-sm">
						<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
							<div>
								<h2 class="text-xl font-bold text-slate-800 font-semibold">User Directory</h2>
								<p class="text-xs text-slate-500">Live directory fetched from backend API</p>
							</div>
							<div class="relative">
								<Search size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
								<input
									bind:value={searchQuery}
									type="text"
									placeholder="Search by name or email..."
									class="rounded-lg border border-slate-350 py-1.5 pl-9 pr-3 text-xs outline-none focus:border-cyan-500 w-full sm:w-56"
								/>
							</div>
						</div>

						{#if loadingUsers}
							<div class="flex justify-center items-center py-10 text-sm text-slate-500 gap-2">
								<div class="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent"></div>
								<span>Syncing users...</span>
							</div>
						{:else if filteredUsers().length === 0}
							<div class="flex flex-col items-center justify-center py-10">
								<Users size={32} class="text-slate-400 mb-2" />
								<p class="text-sm font-semibold text-slate-650">No users found</p>
							</div>
						{:else}
							<div class="overflow-x-auto rounded-xl border border-slate-100">
								<table class="w-full text-left text-xs">
									<thead class="bg-slate-50 text-slate-600">
										<tr>
											<th class="px-4 py-3 font-semibold">Name</th>
											<th class="px-4 py-3 font-semibold">Email</th>
											<th class="px-4 py-3 font-semibold">Role</th>
											<th class="px-4 py-3 font-semibold">Created At</th>
										</tr>
									</thead>
									<tbody class="divide-y divide-slate-150">
										{#each filteredUsers() as user (user._id)}
											<tr class="hover:bg-slate-50">
												<td class="px-4 py-3 font-medium text-slate-800">{user.name}</td>
												<td class="px-4 py-3 text-slate-600">{user.email}</td>
												<td class="px-4 py-3">
													<span class="rounded bg-sky-50 border border-sky-200 px-2 py-0.5 text-[10px] font-medium text-sky-700">
														{user.role || 'Admin'}
													</span>
												</td>
												<td class="px-4 py-3 text-slate-500">
													{new Date(user.createdAt).toLocaleDateString()}
												</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</main>
	</div>

	<Sidebar />
</div>
