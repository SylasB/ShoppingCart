import React from "react";
import ItemContainer from "./ItemContainer";
import NavBar from "./NavBar";
import Item from "./Item";

class Shop extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <NavBar />
            <h1>
                SHOP
            </h1>
            <ItemContainer />
            <p id='copyright'>
                <a href='https://github.com/SylasB/MemoryGame' target='_blank'>Copyright Sylas Boniek 2023</a>
            </p>
            </>
        )
    }
}

export default Shop;