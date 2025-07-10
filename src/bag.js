import React, {useEffect} from "react";
import BagItems from "./components/bag-components/bag-items";
import Summary from "./components/bag-components/summary";


const Bag = ({items, incrementQuantity, decrementQuantity, deleteItem, checkout}) => {

    useEffect(() => {
        const nav = document.querySelector('.nav-bar');
        nav.classList.add('alternative-nav');
        window.scrollTo(0, 0);
        
        return () => nav.classList.remove('alternative-nav');
    }, []);    

    return(
        <div className="checkout-bag-container">
            <div className="left-bag-container">
                <h1>Bag</h1>
                {items.length > 0 ? <BagItems items={items} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} deleteItem={deleteItem}/> : <h1 id="empty">Your Bag Is Empty!</h1>}
            </div>
            <div className="right-bag-container">
                <h1>Summary</h1>
                <Summary items={items} checkout={checkout}/>
            </div>
        </div>
    );
};

export default Bag;