import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState={
    items:[],
    TotalAmount:0
}

const cartReducer=(state,action)=>{
    if (action.type==="Add"){
        const updatedItems=state.items.concat(action.item)
        const updatedTotalAmount=state.TotalAmount + action.item.price * action.item.amount
        return{
            items:updatedItems,
            TotalAmount:updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider=props=>{

   const [cartState,DispatchCartAction]=useReducer(cartReducer,defaultCartState)

    const addItemsToCart=item=>{
        DispatchCartAction({type:"Add",item:item})
    }
    const removeItemsfromCart=id=>{
        DispatchCartAction({type:"Remove",id:0})
    }

    const cartContext={
        items:cartState.items,
        TotalAmount:cartState.TotalAmount,
        AddItems:addItemsToCart,
        removeItems:removeItemsfromCart
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )


}

export default CartProvider;