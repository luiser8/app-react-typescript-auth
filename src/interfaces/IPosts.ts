export interface IPosts {
    id?: number;
    title: string;
    description: string;
    type: string;
    users?: { id: number };
    createAt?: Date;
}
