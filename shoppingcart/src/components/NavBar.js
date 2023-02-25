import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavBar(props) {
    const [ target, setTarget ] = useState('')
    const navigate = useNavigate();
    
    useEffect(()=> {
        if (target === '/' || target === '/shop' || target === '/cart') {
            navigate(target);
            setTarget('');
        }
    });

    return (
        <div className="navBarContainer">
            <p><a onClick={() => { 
                setTarget('/')
                } 
                }>SHOP NAME</a></p>
            <p onClick={() => { 
                setTarget('/')
                } 
                }><a >HOME</a></p>
            <p onClick={() => { 
                setTarget('/shop')
                } 
                }><a >SHOP</a></p>
            <p onClick={() => { 
                setTarget('/cart')
                } 
                }><a >CART</a></p>
        </div>
    )
};