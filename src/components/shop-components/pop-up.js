import check from '../../images/check.png';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Popup = ({items, close}) => {

    let item = items[items.length - 1];

    useEffect(() => {
        setTimeout(() => {
            close();
        }, 5000);
    }, []);

    return(
            <div className="pop-up">
                <div className="p-top">
                    <span>
                        <img alt='check mark' src={check}></img>
                        <h5>Added to Bag</h5>
                    </span>
                    <button onClick={() => close()}>&#10005;</button>
                </div>
                <div className="p-middle">
                    <img className="p-middle-img" alt={item.name} src={item.src}></img>
                    <div className="p-middle-details">
                        <h6 className="p-name">{item.name}</h6>
                        <p className="p-category">{item.category}</p>
                        <p className="p-size">Size {item.size}</p>
                        <p className="p-price">{item.price}</p>
                    </div>
                </div>
                <div className="p-bottom">
                    <Link to='/bag'><button className="p-btns">View Bag</button></Link>
                    <button className="p-btns" onClick={() => close()}>Continue</button>
                </div>
            </div>
    );
};

export default Popup;