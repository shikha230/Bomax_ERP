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
	class="fixed left-4 top-4 z-50 rounded-lg bg-blue-700 p-2 text-white lg:hidden"
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
	class={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-transform duration-300
	${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
	lg:translate-x-0`}
>

	<!-- Logo -->

	<div class="border-b border-blue-700 p-6">

		<div class="flex items-center gap-3 mb-2">
			<img src="/logo.png" alt="Firstcut24" class="h-10 w-auto object-contain" style="filter: brightness(0) invert(1)" />

		</div>

		<p class="mt-1 text-xs text-blue-200" style="font-family: 'Roboto', sans-serif;">

			Admin Panel

		</p>

	</div>

	<!-- Admin Info -->

	<div class="border-b border-blue-700 p-6">

		<div class="flex items-center gap-4">

			<div
				class="flex h-14 w-14 items-center justify-center rounded-full bg-blue-400 text-xl font-bold text-white"
				style="font-family: 'Roboto', sans-serif;"
			>
				{$admin?.name?.charAt(0).toUpperCase() ?? 'A'}
			</div>

			<div>

				<h2 class="font-semibold" style="font-family: 'Roboto', sans-serif;">

					{$admin?.name}

				</h2>

				<p class="text-sm text-blue-200" style="font-family: 'Roboto', sans-serif;">

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
			class="mb-3 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-blue-700"
			style="font-family: 'Roboto', sans-serif;"
		>
			<LayoutDashboard size={22} />
			<span class="font-medium">Dashboard</span>
		</button>

		<button
			onclick={openDashboard}
			class="mb-3 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-blue-700"
			type="button"
			style="font-family: 'Roboto', sans-serif;"
		>
			<Users size={22} />
			<span class="font-medium">Registered Users</span>
		</button>

		<button
			onclick={openRegister}
			class="mb-3 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-blue-700"
			type="button"
			style="font-family: 'Roboto', sans-serif;"
		>
			<UserPlus size={22} />
			<span class="font-medium">Register Admin</span>
		</button>

	</nav>

	<!-- Footer -->

	<div class="border-t border-blue-700 p-5">

		<button
		onclick={logoutAdmin}
		type="button"
		class="flex items-center gap-2 text-sm font-medium hover:text-blue-200 transition"
		style="font-family: 'Roboto', sans-serif;"
		>

			<LogOut size={20} />

			<span>Logout</span>

		</button>

	</div>

</aside>