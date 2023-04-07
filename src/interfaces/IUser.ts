export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
}
export interface Address {
    street: string;
}