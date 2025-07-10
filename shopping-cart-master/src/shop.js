import { useEffect } from "react";
import ShoeDisplay from "./components/shop-components/shoe-display";

const Shop = () => {

    useEffect(() => {
        const nav = document.querySelector('.nav-bar');
        nav.classList.add('alternative-nav');

        window.scrollTo(0, 0);
        
        return () => nav.classList.remove('alternative-nav');
    }, []);

    return (
        <div className="shop-container">
            <div className="top-container">
                <h1 className="products-header">{`All Shoes`}</h1>
                <button className="drop-button">
                    <span className="sort">Sort By</span>
                    <span className="drop-icon">&#8964;</span>
                </button>
            </div>
            <div className="bottom-container">
               <div className="filter-container">
                   <div className="filter-section">
                       <div className="top-section">
                           <h3>Brand</h3>
                           <span>&#8964;</span>
                       </div>
                       <div className="bottom-section">
                           <button className="filter-btn">
                               <div></div>
                               <span>Nike</span>
                           </button>
                           <button className="filter-btn">
                               <div></div>
                               <span>Jordan</span>
                           </button>
                           <button className="filter-btn">
                               <div></div>
                               <span>Vans</span>
                           </button>
                       </div>
                   </div>
                   <div className="filter-section">
                       <div className="top-section">
                           <h3>Gender</h3>
                           <span>&#8964;</span>
                       </div>
                       <div className="bottom-section">
                           <button className="filter-btn">
                               <div></div>
                               <span>Men</span>
                           </button>
                           <button className="filter-btn">
                               <div></div>
                               <span>Women</span>
                           </button>
                           <button className="filter-btn">
                               <div></div>
                               <span>Unisex</span>
                           </button>
                       </div>
                   </div>
               </div>
               <div className="items-container">
                   <ShoeDisplay />
               </div>
            </div>
        </div>
    );
}

export default Shop;