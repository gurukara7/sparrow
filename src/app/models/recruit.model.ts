
export interface Recruit {
    name: string;
    phone: string;
    email: string;
    joining: boolean;
}

export interface Token {
    success: boolean;
    message: string;
    token: string;
}