import { Address } from "./address";
import { CartItem } from "./cart-item";

export class Order {
    fullName: string;
    address: Address = {city: '', state: ''}; // no error for pincode since it is optional
 
    amount: number;
    totalItems: number;
    items: CartItem[] = [];

}
