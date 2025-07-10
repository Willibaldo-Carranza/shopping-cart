import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { shoes } from "./shoes";
import Popup from "./pop-up";

const Product = ({addItem, items}) => {
    const [product, setProduct] = useState({});
    const [size, setSize] = useState('');
    const [popup, setPopup] = useState(false);

    let params = useParams();

    useEffect(() => {
        const nav = document.querySelector('.nav-bar');
        nav.classList.add('alternative-nav');

        window.scrollTo(0, 0);

        findProduct();
        
        return () => nav.classList.remove('alternative-nav');

    }, []);


    const findProduct = () => {
        shoes.forEach((shoe) => {
            if(shoe.id === params.id) {
                setProduct(shoe);
            }
        });
    };

    useEffect(() => {
        if (size !== '') {
            const sizeBtn = document.getElementById(`size-btn-${size}`);
            sizeBtn.style.borderColor = 'black';


            return () => sizeBtn.style.borderColor = 'lightgray';
        }

    }, [size]);
   

    const createSizeBtns = () => {
        let array = [];
        for (let i = 4; i < 15; i += 0.5) {
            array.push(<button className="size-btns" id={`size-btn-${i}`} onClick={() => setSize(i)} key={`size-${i}`}>{i}</button>);
        }
        return array;
    }

    const addToBag = () => {
        if (size !== '') {
            let obj = {...product, size: size};
            addItem(obj);
            setPopup(true);
            setSize('');
        }
    }

    const closePopup = () => {
        setPopup(false);
    }

    return(
        <div className="product-container">
            {popup ?  <Popup items={items} close={closePopup}/> : null}
            <div className='pc-left'>
                <img className="product-img" src={product.src} alt={product.name} />
            </div>
            <div className="pc-right">
                <div className="pc-description">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                    <p className="product-price">{product.price}</p>
                </div>
                <div className="pc-size-container">
                    <h4>Select Size</h4>
                    <div className="size-grid">
                        {createSizeBtns()}
                    </div>
                </div>
                <button className="pc-add-btn" onClick={() => addToBag()}>Add to Bag</button>
            </div>
        </div>
    );
}

export default Product;