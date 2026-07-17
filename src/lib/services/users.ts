import type { User } from '$lib/types/user';
import { token } from '$lib/stores/auth';
import { get } from 'svelte/store';

const BASE_URL = 'https://elenora-uncombining-martha.ngrok-free.dev/api';

export async function getUsers(): Promise<User[]> {
	const currentToken = get(token);

	if (!currentToken) {
		throw new Error('Authentication token not found. Please login again.');
	}

	const response = await fetch(`${BASE_URL}/admin/users`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${currentToken}`,
			'Content-Type': 'application/json',
			'ngrok-skip-browser-warning': 'true'
		}
	});

	if (!response.ok) {
		let message = `HTTP ${response.status}`;

		try {
			const error = await response.json();
			message = error.detail || error.message || message;
		} catch {
			message = await response.text();
		}

		throw new Error(message);
	}

	const data = await response.json();

	const users = Array.isArray(data)
		? data
		: data.users || data.data || [];

	return users.map((u: any) => ({
		_id: String(u.id),

		// Main Fields
		name: u.Fullname ?? '',
		email: u.Email_address ?? '',
		phone: u.Phone_number ?? '',
		company: u.Company_name ?? '',

		// Extra Fields
		state: u.State ?? '',
		city: u.City ?? '',
		country: u.Country ?? '',
		pincode: u.Pincode ?? '',

		role: 'User',
		status: 'Active',

		createdAt: new Date().toISOString()
	}));
}

export async function deleteUser(id: string) {
	console.log('Delete User:', id);
}

export async function getSingleUser(id: string): Promise<User> {
	const users = await getUsers();

	const user = users.find((u) => u._id === id);

	if (!user) {
		throw new Error('User not found');
	}

	return user;
}

export async function updateUser(id: string, user: Partial<User>) {
	return {
		_id: id,
		...user
	} as User;
}