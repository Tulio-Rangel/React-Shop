import { useState } from "react";

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    //el payload es como si escribiera product

    const verifyIfIDExist = (id) => {
        const idExist = state.cart.some(item => item.id === id)

        if(idExist) {
            return verifyIfIDExist(id + 1);
        } else {
            return id;
        }
    }

    const addToCart = (payload) => { 
        const newID = verifyIfIDExist(payload.id)

        const payloadWithNewID = {
            ...payload,
            id: newID
        }

        setState({
            ...state,
            cart: [...state.cart, payloadWithNewID]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart:state.cart.filter(items => items.id !== payload.id)
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
};

export default useInitialState;