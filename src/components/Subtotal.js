import React,{useEffect,useState} from 'react';
import './../css/Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './../store/StateProvider';
import { getBasketTotal } from './../store/Reducer';
import { useHistory } from "react-router-dom";


function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(null);
  
  useEffect(() => {
    basket?.length > 0 ? setDisabled(false) : setDisabled(true);
  }, [basket]);

  
    return (
        <div className="subtotal">
             <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
            
        <button disabled={disabled} onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal;
