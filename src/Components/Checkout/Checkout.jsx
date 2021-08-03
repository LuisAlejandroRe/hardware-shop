import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from "../../StateProvider";

function Checkout() {

  const [{basket, user}] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">

        <div>
          <div className="checkout__title">
            <h3>Hello, {user?.email}</h3>
            <h2>{basket.length > 0 ? 'Your Shopping Basket' : 'The Basket is empty'}</h2>
          </div>

          {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;