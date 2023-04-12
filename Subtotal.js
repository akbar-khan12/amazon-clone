import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { Link, useNavigate } from 'react-router-dom';
  

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='Subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}

      />
        <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal