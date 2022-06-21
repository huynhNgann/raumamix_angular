import { CartItems } from "./cartItem";

export class Cart{
    items:CartItems[]=[];
    get totalPrice():number{
        let totalPrice= 0 ;
        this.items.forEach(item => {
            totalPrice += item.price;
        });

        return this.totalPrice;
    }
}