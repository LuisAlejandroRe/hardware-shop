import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import axios from '../../axios';
import { auth, db } from '../../firebase';

function Payment() {

  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError ] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {

    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  }, [basket])

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {

      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders')
    }) 
  }

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then()
      .catch(error => alert(error.message))
  }

  return(
    <div className="payment">
      <div className="payment__container">

        <h1>
          Checkout (<Link to ="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/*Payment section -  Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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

        {/*Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          {user
            ?        
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <h3>Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
            </div>
            :
            <div className="payment__login">
              <form>
                <label>E-mail</label>
                <input 
                  type="email" 
                  placeholder='e-mail' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder='password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' onClick={login}>Sign In</button>
              </form>
            </div>
          }
        </div>

      </div>
    </div>
  )
}

export default Payment;