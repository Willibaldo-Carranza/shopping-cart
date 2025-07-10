import { sliderImages } from '../../images/slider-images/slider-images.js'
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const ImageSlider = ({counter}) => {
   
    useEffect(() => {
        const slider = document.querySelector('.img-slider');
        const size = 37;
        slider.style.transform = `translateX(${-size * counter}%)`;
    },[counter]);

    const productPage = (id) => {
        const link = document.getElementById(`is-${id}`);
        link.click();
    };

    return (
        <div className="img-slider">
            {sliderImages.map((item) => {
                return <div className="item-container" key={item.id} onClick={() => productPage(item.id)}>
                            <img className="item-img" src={item.src} alt={item.name}/>
                            <div className="item-description-container">
                                <div>
                                    <h3 className="item-name">{item.name}</h3>
                                    <p className="item-price">{item.price}</p>
                                </div>
                                <p className="item-category">{item.category}</p>
                            </div>
                            <Link id={`is-${item.id}`} to={`/shop/${item.id}`}></Link>
                        </div>
            })}
        </div>
    );
}

export default ImageSlider;