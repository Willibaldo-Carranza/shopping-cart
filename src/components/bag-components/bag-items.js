import uniqid from 'uniqid';
import trash from '../../images/trash-icon.png';
import { Link } from 'react-router-dom';

const BagItems = ({items, incrementQuantity, decrementQuantity, deleteItem}) => {

    const makeTotal = (price, q) => {
        let str = price.slice(1);
        
        if (str.includes(',')) {
            str = str.replace(',', '');
        }

        let total = Number(str) * q;

        let newStr = total.toString();
        if (newStr.length > 3) {
            newStr = newStr.slice(0, newStr.length - 3) +  ',' + newStr.slice(-3);
        }
        
        newStr = `$${newStr}`;
       
        return newStr;
    }

    const productPage = (id) => {
        const link = document.getElementById(`bi-${id}`);
        link.click();
    };

    return (
        <div className="bag-items-container">
            {items.map((item) => {
                return <div className="b-item-container" key={uniqid()}>
                <div className='b-item-top'>
                    <img className="b-item-img" alt={item.name} src={item.src} onClick={() => productPage(item.id)}></img>
                    <div className="b-item-details">
                        <h6 className="b-item-name">{item.name}</h6>
                        <p className="b-item-category">{item.category}</p>
                        <p className="b-item-size">Size {item.size}</p>
                    </div>
                    <p className="b-item-price">{makeTotal(item.price, item.quantity)}</p>
                </div>
                <div className='b-item-bottom'>
                    <p className='q-label'>Quantity</p>
                    <div>
                        <button className='q-btn' onClick={() => decrementQuantity(item)}>-</button>
                        <span className='q-number'>{item.quantity}</span>
                        <button className='q-btn' onClick={() => incrementQuantity(item)}>+</button>
                    </div>
                    <img className='delete-btn' alt={item.name} onClick={() => deleteItem(item)} src={trash}/>
                </div>
                <Link id={`bi-${item.id}`} to={`/shop/${item.id}`}></Link>
            </div>
            })}
        </div>
    );
};

export default BagItems;