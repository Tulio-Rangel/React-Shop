import { useState } from "react";

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => { //el payload es como si escribiera product
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