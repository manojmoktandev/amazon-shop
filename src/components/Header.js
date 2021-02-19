import React from 'react';
import './../css/Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './../store/StateProvider';
import { auth } from './../config/firebase';
function Header() {
    const [{ basket, user },dispatch] = useStateValue();
    const handleAuth = ()=>{
        if (user) {
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            {/* Logon on the left */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
            </Link>
            {/* search box */}
            <div className="header__search">
            <input className="header__searchInput" />   
            <SearchIcon className="header_searchIcon"/>
            </div>

            {/* side link next to search input */}
            <div className="header__nav">
            <Link to={!user?'/login':''} className="header__link">
                    <div onClick={handleAuth} className="header__option">
    <span className="header__optionLineOne">Hello {!user?'Sign in':user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In' }</span>
                    </div>
                </Link>
              
                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Try</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>

            {/* Basket icon with number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* basket icon */}
                    {/* <div className="nav-cart-count-container">
                        <span className="nav-cart-count" aria-hidden="true" >{basket?.length}</span>
                        <span className="nav-cart-icon nav-sprite"></span>
                    </div> */}
                    <ShoppingBasketIcon/> 
                    {/* Numbers of items in the basket */}
                    <span className="header__basketCount">{basket?.length}</span> 
                </div>
            </Link>
        </nav>
    )
}

export default Header;
