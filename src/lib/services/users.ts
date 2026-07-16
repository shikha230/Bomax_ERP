import type { User } from '$lib/types/user';
import { token } from '$lib/stores/auth';
import { get } from 'svelte/store';

const BASE_URL = 'https://elenora-uncombining-martha.ngrok-free.dev';

let mockUsers: User[] = [
	{
		_id: '1',
		name: 'Rajat Singh',
		email: 'rajat@example.com',
		phone: '9876543210',
		company: 'Acme Corp',
		status: 'Active',
		createdAt: new Date().toISOString()
	},
	{
		_id: '2',
		name: 'Neha Sharma',
		email: 'neha@example.com',
		phone: '9123456780',
		company: 'Bright Ltd.',
		status: 'Active',
		createdAt: new Date().toISOString()
	}
];

export async function getUsers(): Promise<User[]> {
	const currentToken = get(token);
	try {
		const response = await fetch(`${BASE_URL}/api/admin/users`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				...(currentToken ? { 'Authorization': `Bearer ${currentToken}` } : {})
			}
		});

		if (response.ok) {
			const data = await response.json();
			if (Array.isArray(data)) {
				return data.map((u: {
					id?: string | number;
					_id?: string | number;
					name?: string;
					email?: string;
					phone?: string;
					phone_number?: string;
					company?: string;
					company_name?: string;
					role?: string;
					status?: string;
					created_at?: string;
					createdAt?: string;
				}) => ({
					_id: String(u.id || u._id),
					name: u.name || '',
					email: u.email || '',
					phone: u.phone || u.phone_number || '',
					company: u.company || u.company_name || '',
					role: u.role || 'Admin',
					status: u.status || 'Active',
					createdAt: u.created_at || u.createdAt || new Date().toISOString()
				}));
			}
		} else {
			console.warn(`Backend getUsers returned ${response.status}: ${response.statusText}`);
		}
	} catch (err) {
		console.warn('Backend getUsers failed, falling back to mock users:', err);
	}
	return [...mockUsers];
}

export async function deleteUser(id: string) {
	mockUsers = mockUsers.filter((user) => user._id !== id);
}

export async function getSingleUser(id: string): Promise<User> {
	const user = mockUsers.find((user) => user._id === id);
	if (!user) {
		throw new Error('User not found');
	}
	return user;
}

export async function updateUser(id: string, user: Partial<User>) {
	const index = mockUsers.findIndex((item) => item._id === id);
	if (index === -1) {
		throw new Error('User not found');
	}
	mockUsers[index] = { ...mockUsers[index], ...user, updatedAt: new Date().toISOString() };
	return mockUsers[index];
}