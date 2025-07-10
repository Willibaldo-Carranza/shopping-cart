import { shoes } from './shoes';
import { Link } from 'react-router-dom';

const ShoeDisplay = () => {

    const productPage = (id) => {
        const link = document.getElementById(`${id}`);
        link.click();
    };

    return (
        <div className="shoe-display">
            {shoes.map((shoe) => {
                return <div className="shoe-container" key={shoe.id} onClick={() => productPage(shoe.id)}>
                            <img className="shoe-img" src={shoe.src} alt={shoe.name}/>
                            <div className="shoe-description-container">
                                <div>
                                    <Link id={shoe.id} className='product-link' to={`/shop/${shoe.id}`}>
                                        <h3 className="shoe-name">{shoe.name}</h3>
                                    </Link>
                                    <p className="shoe-category">{shoe.category}</p>
                                </div>
                                <p className="shoe-price">{shoe.price}</p>
                            </div>
                        </div>
            })}
        </div>
    );
}

export default ShoeDisplay;