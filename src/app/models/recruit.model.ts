
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

export interface User {
    userID: Number;
    userName: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    token: string;
}