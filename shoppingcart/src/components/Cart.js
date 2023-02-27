import React from "react";
import NavBar from "./NavBar";

class Cart extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <NavBar />
            <h1>
                CART
            </h1>
            <p id='copyright'>
                <a href='https://github.com/SylasB/MemoryGame' target='_blank'>Copyright Sylas Boniek 2023</a>
            </p>
            </>
        )
    }
}

export default Cart;