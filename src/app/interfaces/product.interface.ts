import { StatusType } from '../types/status.type';

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    status: StatusType;
}