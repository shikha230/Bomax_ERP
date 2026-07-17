export interface User {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    state?: string;
    city?: string;
    country?: string;
    pincode?: string;
    role?: string;
    status?: string;
    createdAt: string;
    updatedAt?: string;
}

export interface LoginResponse {
    token: string;
    admin: {
        _id: string;
        name: string;
        email: string;
    };
}