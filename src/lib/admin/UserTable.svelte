<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Search, Users } from 'lucide-svelte';

	import type { User } from '$lib/types/user';

	const { users = [], loading = false } = $props();
	let search = $state('');

	function filteredUsers() {
		const query = search.toLowerCase();

		return users.filter((user) =>
			user.name.toLowerCase().includes(query) ||
			user.email.toLowerCase().includes(query)
		);
	}
</script>

<div class="rounded-2xl bg-white shadow">

	<div class="flex flex-col gap-4 border-b-2 border-blue-100 p-6 md:flex-row md:items-center md:justify-between">

		<div>

			<h2 class="text-2xl font-bold text-blue-900" style="font-family: 'Roboto', sans-serif;">
				Registered Users
			</h2>

			<p class="mt-1 text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
				All users registered on your website
			</p>

		</div>

		<div class="relative">

			<Search
				size={18}
				class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
			/>

			<input
				bind:value={search}
				type="text"
				placeholder="Search user..."
				class="w-full rounded-xl border-2 border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500 md:w-72"
				style="font-family: 'Roboto', sans-serif;"
			/>

		</div>

	</div>

	{#if loading}

		<div class="p-10 text-center text-slate-500">

			Loading users...

		</div>

	{:else if filteredUsers().length === 0}

		<div class="flex flex-col items-center justify-center p-12">

			<div
				class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100"
			>

				<Users size={36} class="text-slate-500" />

			</div>

			<h3 class="text-xl font-semibold text-slate-700">

				No Users Found

			</h3>

			<p class="mt-2 text-slate-500">

				No registered users available.

			</p>

		</div>

	{:else}

		<div class="overflow-x-auto">

			<table class="min-w-full">

				<thead class="bg-blue-50 border-b-2 border-blue-200">

					<tr>

						<th class="px-6 py-4 text-left text-sm font-semibold">
							Name
						</th>

						<th class="px-6 py-4 text-left text-sm font-semibold">
							Email
						</th>

						<th class="px-6 py-4 text-left text-sm font-semibold">
							Phone
						</th>

						<th class="px-6 py-4 text-left text-sm font-semibold">
							Company
						</th>

						<th class="px-6 py-4 text-left text-sm font-semibold">
						City
					</th>

					<th class="px-6 py-4 text-left text-sm font-semibold">
						State
					</th>

					<th class="px-6 py-4 text-left text-sm font-semibold">
						Country
					</th>

					<th class="px-6 py-4 text-left text-sm font-semibold">
						Pincode
					</th>

					<th class="px-6 py-4 text-left text-sm font-semibold">
						Status
					</th>

					<th class="px-6 py-4 text-left text-sm font-semibold">
						Date
					</th>

				</tr>

			</thead>

				<tbody>

					{#each filteredUsers() as user (user._id)}

						<tr class="border-t hover:bg-slate-50">

							<td class="px-6 py-4 font-medium">
								{user.name}
							</td>

							<td class="px-6 py-4">
								{user.email}
							</td>

							<td class="px-6 py-4">
								{user.phone || '-'}
							</td>

							<td class="px-6 py-4">
								{user.company || '-'}
							</td>

							<td class="px-6 py-4">
							{user.city || '-'}
						</td>

						<td class="px-6 py-4">
							{user.state || '-'}
						</td>

						<td class="px-6 py-4">
							{user.country || '-'}
						</td>
						<td class="px-6 py-4">
							{user.pincode || '-'}
						</td>

						<td class="px-6 py-4">

							<span
								class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
							>
								{user.status || 'Active'}
							</span>

						</td>

						<td class="px-6 py-4">
							{new Date(user.createdAt).toLocaleDateString()}
						</td>

					</tr>

					{/each}

				</tbody>

			</table>

		</div>

	{/if}

</div>