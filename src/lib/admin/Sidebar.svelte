<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { admin, logout } from '$lib/stores/auth';

	import {
		LayoutDashboard,
		Users,
		UserPlus,
		LogOut,
		Menu,
		X
	} from 'lucide-svelte';

	let mobileOpen = $state(false);

	function openDashboard() {
		goto(resolve('/admin'));
		mobileOpen = false;
	}

	function openRegister() {
		goto(resolve('/admin/register'));
		mobileOpen = false;
	}

	function logoutAdmin() {
		logout();
		goto(resolve('/admin-login'));
	}
</script>

<!-- Mobile Toggle -->
<button
	class="fixed left-4 top-4 z-50 rounded-lg bg-slate-900 p-2 text-white lg:hidden"
	onclick={() => (mobileOpen = !mobileOpen)}
	type="button"
	aria-label="Toggle sidebar"
>
	{#if mobileOpen}
		<X size={22} />
	{:else}
		<Menu size={22} />
	{/if}
</button>

<!-- Background Overlay -->
{#if mobileOpen}
	<button
		type="button"
		class="fixed inset-0 z-30 bg-black/40 lg:hidden"
		onclick={() => (mobileOpen = false)}
		aria-label="Close sidebar"
	></button>
{/if}

<!-- Sidebar -->

<aside
	class={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col bg-slate-900 text-white transition-transform duration-300
	${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
	lg:translate-x-0`}
>

	<!-- Logo -->

	<div class="border-b border-slate-700 p-6">

		<h1 class="text-3xl font-bold tracking-wide">

			FirstCut ERP

		</h1>

		<p class="mt-1 text-sm text-slate-400">

			Admin Panel

		</p>

	</div>

	<!-- Admin Info -->

	<div class="border-b border-slate-700 p-6">

		<div class="flex items-center gap-4">

			<div
				class="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-xl font-bold"
			>
				{$admin?.name?.charAt(0).toUpperCase() ?? 'A'}
			</div>

			<div>

				<h2 class="font-semibold">

					{$admin?.name}

				</h2>

				<p class="text-sm text-slate-400">

					{$admin?.email}

				</p>

			</div>

		</div>

	</div>

	<!-- Navigation -->

	<nav class="flex-1 p-5">

		<button
			onclick={openDashboard}
			type="button"
			class="mb-3 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-slate-800"
		>
			<LayoutDashboard size={22} />
			<span class="font-medium">Dashboard</span>
		</button>

		<button
			onclick={openDashboard}
			class="mb-3 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-slate-800"
			type="button"
		>
			<Users size={22} />
			<span class="font-medium">Registered Users</span>
		</button>

		<button
			onclick={openRegister}
			class="mb-3 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-slate-800"
			type="button"
		>
			<UserPlus size={22} />
			<span class="font-medium">Register Admin</span>
		</button>

	</nav>

	<!-- Footer -->

	<div class="border-t border-slate-700 p-5">

		<button
		onclick={logoutAdmin}
		type="button"
		>

			<LogOut size={20} />

			Logout

		</button>

	</div>

</aside>