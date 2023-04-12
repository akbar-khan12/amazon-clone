import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='Checkout'>
      <div className='checkout__Left'>
        <img className='Checkout__ad' src='https://m.media-amazon.com/images/I/61um60VOoeL._SX3000_.jpg'>

        </img>
        <div>
          <h5>{user? user?.email: 'Hello guest'}</h5>
          <h2 className='Checkout__Title'>Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating} 
              />
          ))}
        </div>
      </div>
      <div className='checkout__Right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout