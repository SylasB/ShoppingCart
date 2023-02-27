import React from "react";

function Item(props) {
    const { name, id } = props;
    return (
        <div className="itemInnerContainer">
            <div className="itemIMG">
                <p>IMG here</p>
            </div>
            <div>
                {name} {id}
                <p>---------------------</p>
            </div>    
        </div>
    )
}

export default Item;