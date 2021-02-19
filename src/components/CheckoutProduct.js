import React from 'react';
import "./../css/CheckoutProduct.css";
import { useStateValue } from './../store/StateProvider';
import Rating from '@material-ui/lab/Rating';

function CheckoutProduct({ id, title, price, rating, image ,hideButon}) {
    const [{basket}, dispatch] =  useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                <Rating name="read-only" value={rating} readOnly />
                </div>
                {!hideButon && (
                    <button onClick={removeFromBasket}>Remove From Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
