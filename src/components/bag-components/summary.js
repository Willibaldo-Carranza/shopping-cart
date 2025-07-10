

const Summary = ({items, checkout}) => {

    const getSubTotal = () => {

        let total = 0;

        items.map((item) => {
            let itemTotal = getItemTotal(item.price, item.quantity);
            total = total + itemTotal;
            return item;
        });

        let str = total.toString();
        if (str.length > 3) {
            str = str.slice(0, str.length - 3) +  ',' + str.slice(-3);
        }
        
        str = `$${str}`;

        return str;
    };

    const getItemTotal = (price, q) => {
        let str = price.slice(1);
        
        if (str.includes(',')) {
            str = str.replace(',', '');
        }

        let total = Number(str) * q;

        return total;
    };

    const getTotal = () => {

        let total = 0;

        items.map((item) => {
            let itemTotal = getItemTotal(item.price, item.quantity);
            total = total + itemTotal;
            return item;
        });

        total = total + 9 + 7;


        let str = total.toString();
        if (str.length > 3) {
            str = str.slice(0, str.length - 3) +  ',' + str.slice(-3);
        }
        
        str = `$${str}`;

        return str;
    };

    return(
        <div className="summary-container">
            <div className="pre-total-container s-container">
                <span>
                    <p>Subtotal</p>
                    <p>{`${getSubTotal()}.00`}</p>
                </span>
                <span>
                    <p>Shipping and Handling</p>
                    <p>{items.length === 0 ? `$0.00` : `$9.00`}</p>
                </span>
                <span>
                    <p>Tax</p>
                    <p>{items.length === 0 ? `$0.00` : `$7.00`}</p>
                </span>
            </div>
            <div className="total-container s-container">
                <span>
                    <p>Total</p>
                    <p>{items.length === 0 ? `$0.00` : `${getTotal()}.00`}</p>
                </span>
            </div>
            <div className="checkout-container s-container">
                <button onClick={() => checkout()} className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
};

export default Summary;