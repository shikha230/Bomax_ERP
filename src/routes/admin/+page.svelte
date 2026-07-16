<script lang="ts">
	import { onMount } from 'svelte';
	import { token } from '$lib/stores/auth';
	import { getUsers, deleteUser } from '$lib/services/users';
	import Header from '$lib/admin/Header.svelte';
	import Sidebar from '$lib/admin/Sidebar.svelte';
	import UserTable from '$lib/admin/UserTable.svelte';
	import type { User } from '$lib/types/user';

	let users = $state<User[]>([]);
	let loading = $state(false);
	let error = $state('');

	function getErrorMessage(err: unknown) {
		if (err instanceof Error) return err.message;
		return String(err ?? 'Unable to load users');
	}

	async function loadUsers() {
		loading = true;
		error = '';

		try {
			users = await getUsers();
		} catch (err: unknown) {
			error = getErrorMessage(err);
		} finally {
			loading = false;
		}
	}

	function handleDelete(event: CustomEvent<string>) {
		const id = event.detail;
		deleteUser(id)
			.then(() => {
				users = users.filter((user) => user._id !== id);
			})
			.catch((err: unknown) => {
				error = getErrorMessage(err);
			});
	}

	function handleEdit(event: CustomEvent<User>) {
		const user = event.detail;
		window.location.href = `/admin/users/${user._id}`;
	}

	onMount(async () => {
		if (!$token) {
			window.location.href = '/admin-login';
			return;
		}

		await loadUsers();
	});
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="min-h-screen bg-slate-100 text-slate-900">
	<div class="lg:pl-72">
		<Header />
		<main class="mx-auto max-w-7xl px-6 py-10">
			<div class="mb-8 rounded-3xl bg-white p-8 shadow-sm">
				<h1 class="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
				<p class="mt-3 text-slate-600">
					Manage enrolled users, review activity, and monitor analytics from your admin panel.
				</p>
			</div>

			{#if error}
				<div class="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
					{error}
				</div>
			{/if}

			<UserTable {users} {loading} on:delete={handleDelete} on:edit={handleEdit} />
		</main>
	</div>

	<Sidebar />
</div>