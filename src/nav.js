import search from './images/search-icon.png';
import bag from './images/bag.png';
import { Link } from 'react-router-dom';

const Nav = ({items}) => {

    return(
        <nav className='nav-bar'>
            <div className='search-container nav-section'>
                <label htmlFor='search-bar'>
                    <input id='search-bar' placeholder='Search'/>
                    <img className='search-icon' alt='search icon' src={search}></img>
                </label>
            </div>
            <div className='nav-section'>
                <h1 className='company-name'>SOLE CITY</h1>
            </div>
            <div className='nav-section'>
                <ul className='link-container'>
                    <Link to='/home'>
                        <li>Home</li>
                    </Link>
                    <Link to='/shop'>
                        <li>Shop</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/bag'>
                        <li className='bag-container'>
                            <img alt='shopping bag icon' src={bag} className='bag-icon' />
                            <span className='bag-number'>{items.length}</span>
                        </li>
                    </Link>
                </ul>
            </div>
         
        </nav>
    );
}

export default Nav;
