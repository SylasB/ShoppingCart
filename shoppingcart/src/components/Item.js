import React, { useState } from "react";

function Item(props) {
    const { name, id } = props;
    const [ count, setCount ] = useState(0);

    const handleAddCount = () => {
        if (count == 99) {
            return
        }
        setCount(count + 1);
    }

    const handleLowerCount = () => {
        if (count == 0) {
            return
        }
        setCount(count - 1);
    }

    return (
        <div className="itemInnerContainer">
            <div className="itemIMG">
                <p>IMG here</p>
            </div>
            <div className="itemDescription">
                {name} {id}
            </div>
            <div className="quantityContainer">
                <div className="lowerCount" onClick={handleLowerCount}>-</div><div className="count">{count}</div><div className="addCount" onClick={handleAddCount}>+</div>
            </div>
            <div className="buttonContainer">
                <button type="button" className="addToCartButton">Add To Cart</button>
            </div>
        </div>
    )
}

export default Item;