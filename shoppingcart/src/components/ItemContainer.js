import React, { useState, useEffect } from "react";
import Item from "./Item";
import data from '../data';

function ItemContainer(props) {
    

    return (
        <div className="itemContainer">
            {data.items.map((item) => (
                <Item 
                    key = {item.id}
                    name = {item.name}
                    id = {item.id}
                />
                
            ))}
        </div>
    )
}

export default ItemContainer;