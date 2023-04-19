import React from "react";
const CartContext=React.createContext({
    items:[],
    TotalAmount:0,
    AddItems:(items)=>{},
    RemoveItems:(id)=>{}
})

export default CartContext;