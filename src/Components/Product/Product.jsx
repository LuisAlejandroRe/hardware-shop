import React, { useEffect } from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ScrollReveal from 'scrollreveal';

function Product({ id, title, image, price, rating }) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  useEffect(() => {

    ScrollReveal().reveal('.product',{
      duration: 1000,
      origin: 'bottom',
      distance: '150%',
    })

    return () => {
      ScrollReveal().clean('.product');
    }
    
  }, [])

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i)=>(<p>⭐</p>))}        
        </div>
      </div>
        
      <img 
        src={image}
        alt={title} 
      />

      <button onClick={addToBasket}>Add to Basket <br/> <AddShoppingCartIcon style={{ fontSize: 20 }} /></button>
    </div>
  );
}

export default Product;