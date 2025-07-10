import ImageSlider from "./components/home-components/img-slider";
import React, {useState, useEffect} from "react";
import logo from './images/city-logo.png';
import { Link } from "react-router-dom";

const Home = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const leftBtn = document.querySelector('#left-btn');
        const rightBtn = document.querySelector('#right-btn');

        if (counter === 0) {
            leftBtn.disabled = true;
            rightBtn.disabled = false;
        } else {
            leftBtn.disabled = false;
            rightBtn.disabled = true;
        }
    });

    const increment = () => {
        if (counter < 1) {
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return(
        <div className="home-container">
            <div className="home-display-container">
                <h2>
                    DUNK HIGH
                    <br></br>
                    'ALOHA'
                </h2>
            </div>
            <div className='top-content'>
                <div className="header-div">
                    <h2 className="section-heading">Popular Products</h2>
                    <div className="slider-btn-container">
                        <button className="slider-btns" id="left-btn" onClick={decrement}>&#60;</button>
                        <button className="slider-btns" id="right-btn" onClick={increment}>&#62;</button>
                    </div>
                </div>
                <div className="slider-container">
                    <ImageSlider counter={counter}/>
                </div>
            </div>
            <div className="middle-content">
                <h2 className="section-heading">Shop by Brand</h2>
                <div className="category-container">
                    <div className="left-side">
                        <Link to='/shop'><button className="category-btns">Shop Jordan</button></Link>
                    </div>
                    <div className="right-side">
                        <div className="top-div">
                            <Link to='/shop'><button className="category-btns">Shop Nike</button></Link>
                        </div>
                        <div className="bottom-div">
                            <Link to='/shop'><button className="category-btns">Shop Vans</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-content">
                <h2 className="section-heading">Member Benefits</h2>
                <div className="membership-container">
                    <p>Where Exclusivity Meets You</p>
                    <p>
                        Members get first and exclusive access to the latest drops, fast checkout, 
                        <br></br>
                        free shipping and more.
                    </p>
                    <div className="btn-container">
                        <button className="btns">Sign Up</button>
                        <button className="btns">Log In</button>
                    </div>
                    <img className="logo" alt="city logo" src={logo}/>
                </div>
            </div>
        </div>
    );
}

export default Home;