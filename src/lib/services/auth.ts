import type { LoginResponse } from '$lib/types/user';

const BASE_URL = 'https://elenora-uncombining-martha.ngrok-free.dev';

export async function login(email: string, password: string): Promise<LoginResponse> {
    if (!email || !password) {
        throw new Error('Please fill all fields');
    }

    const response = await fetch(`${BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || data.message || 'Login failed');
    }

    return {
        token: data.access_token,
        admin: {
            _id: String(data.id),
            name: data.role ? data.role.charAt(0).toUpperCase() + data.role.slice(1) : 'Admin',
            email: email
        }
    };
}

export interface AdminRegisterResponse {
    id: number;
    role: string;
    message: string;
}

export async function registerAdmin(name: string, email: string, password: string): Promise<AdminRegisterResponse> {
    if (!name || !email || !password) {
        throw new Error('Please fill all fields');
    }

    const response = await fetch(`${BASE_URL}/api/admin/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    if (!response.ok) {
        let errMsg = 'Registration failed';
        if (data.detail && Array.isArray(data.detail)) {
            errMsg = data.detail.map((d: { msg?: string }) => d.msg || JSON.stringify(d)).join(', ');
        } else if (data.detail) {
            errMsg = data.detail;
        } else if (data.message) {
            errMsg = data.message;
        }
        throw new Error(errMsg);
    }

    return data as AdminRegisterResponse;
}