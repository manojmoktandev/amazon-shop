import React from 'react';
import './../css/Product.css';
import Rating from '@material-ui/lab/Rating';
import {useStateValue} from './../store/StateProvider';
const Product = ({ id, title, price, rating, image }) => {
   const [{basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        // Add item in basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>
                    $
                    </small>
                    <strong>
                    {price}
                    </strong>
                </p>
                <div className="product__rating">
                <Rating name="read-only" value={rating} readOnly />
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to basket</button>
           
        </div>
    )
}

export default Product;
