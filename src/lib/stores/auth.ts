import { writable } from 'svelte/store';

export interface AdminUser {
    _id: string;
    name: string;
    email: string;
}

export const admin = writable<AdminUser | null>(null);

export const token = writable<string | null>(null);

if (typeof window !== 'undefined') {

    const savedToken = localStorage.getItem('admin_token');

    const savedAdmin = localStorage.getItem('admin_user');

    if (savedToken) {

        token.set(savedToken);

    }

    if (savedAdmin) {

        admin.set(JSON.parse(savedAdmin));

    }

}

export function saveAuth(jwt: string, user: AdminUser) {

    localStorage.setItem('admin_token', jwt);

    localStorage.setItem('admin_user', JSON.stringify(user));

    token.set(jwt);

    admin.set(user);

}

export function logout() {

    localStorage.removeItem('admin_token');

    localStorage.removeItem('admin_user');

    token.set(null);

    admin.set(null);

}