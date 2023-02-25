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
            </>
        )
    }
}

export default Cart;