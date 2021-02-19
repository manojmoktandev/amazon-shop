import React from 'react';
import { useStateValue } from "./../store/StateProvider";
import "./../css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket,user },dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2020/Events/PrimeDay2020/0410/Prime_Day_Microsite_1500X375_v1i.jpg" alt=""/>
                <div>
                    <h3>{user && 'Hello,'+user?.email}</h3>
                    <h2 className="checkout__title"> {basket.length<1 && 'Your Shopping Basket is empty'}</h2>
                    {basket.map((item,i) => (
                        <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
        </div>
    );
}

export default Checkout;
