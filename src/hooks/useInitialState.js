import { useState } from "react";

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    //el payload es como si escribiera product
    const addToCart = (payload) => { 
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    return {
        state,
        addToCart
    }
};

export default useInitialState;