import React, { useState, useEffect } from 'react';
import './../css/Payment.css';
import { useStateValue } from "./../store/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./../store/Reducer";
import axios from './../config/axios';
import { db } from './../config/firebase';
import CurrencyFormat from 'react-currency-format';
import 'react-notifications/lib/notifications.css';
import Notification from './Notification';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { SignalCellularNull } from '@material-ui/icons';
 
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const element = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    const createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    };

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a  currecies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
        
    }, [basket]);

    console.log('THE SECRET IS >>>', clientSecret);
    console.log('👱', user);
    
    const handleSubmit = async (event) => {
        if (basket.length < 1) {
        {this.createNotification('info','Basket is Empty')}
            // {Notification('error', 'Basket is Empty') }
             return false;
        }
        //do all the  fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: useElements.getElement(CardElement)
            }
        }).then((paymentIntent) => {
            console.log(basket, paymentIntent);
            //paymentIntent  =  payment confirmation
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created:paymentIntent.created
                })
            setSucceeded(true);
            setError(null)
            setProcessing(false);
            
            dispatch({
                type:'EMPTY_BASKET'
            })
            history.replace('/orders');
        });
    }

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout(
                     <Link to="/checkout">
                        {basket?.length} items
                     </Link>
                    )
                </h1>
                {/* payment section-delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p> 125 New Road Lane</p>
                        <p>New Road,Kathmandu</p>
                    </div>
                </div>
                {/* Payment section - Review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                key = {item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                        ))}
                    </div>
                </div>
                {/* payment section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total:{value}</h3>
                                    )}
                                    decimal={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                {!error && basket?.length >0 && (
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>)}
                            </div>
                             {/* Errors */}
                            {error && <div>{error}</div>}
                            
                        </form>
                    </div>
                </div>
            </div>
            <NotificationContainer/>
        </div>
    )
}

export default Payment
