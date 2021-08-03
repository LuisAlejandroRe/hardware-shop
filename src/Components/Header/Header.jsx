import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import ScrollReveal from 'scrollreveal';

function Header() {

  const [{basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  ScrollReveal().reveal('.header',{
    duration: 1000,
    origin: 'bottom',
    distance: '-100px'
  })

  return (
    <div className='header'>
      <Link to="/">
        <img 
          className='header__logo' 
          src="https://firebasestorage.googleapis.com/v0/b/clone-e814f.appspot.com/o/Logo.png?alt=media&token=de9f4e2d-8cb0-4ea2-9eee-84f8e0e0acb8" 
          alt="logo" 
        />
      </Link>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">{user? 'Logged' : 'Hello Guest'}</span>
            <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__option">
            <span className="header__optionLineOne">Basket</span>
            <span className="header__optionLineTwo"><ShoppingBasketIcon/> {basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header;