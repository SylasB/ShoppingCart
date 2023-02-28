import React, { useState } from "react";

function Item(props) {
    const { name, id, img, price } = props;
    const [ count, setCount ] = useState(0);
    const [ inCart, setInCart ] = useState(0);

    const handleAddCount = () => {
        if (count == 99) {
            return
        }
        setCount(count + 1);
    }

    const handleLowerCount = () => {
        if (count == 0) {
            if (inCart == 0) {
                return
            }
            setInCart(inCart - 1);
            return
        }
        setCount(count - 1);
    }

    const handleAddToCart = () => {
        setInCart(inCart + count)
    }

    return (
        <div className="itemInnerContainer">
            <div className="itemIMG">
                <p>{img}</p>
            </div>
            <div className="itemDescription">
                {name} {id}
            </div>
            <div className="priceContainer">
                <p>
                    Price: ${price}
                </p>
            </div>
            <div>
                <p>
                    In Cart: {inCart}
                </p>
            </div>
            <div className="quantityContainer">
                <div className="lowerCount" onClick={handleLowerCount}>-</div><div className="count">{count}</div><div className="addCount" onClick={handleAddCount}>+</div>
            </div>
            <div className="buttonContainer">
                <button type="button" className="addToCartButton" onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Item;