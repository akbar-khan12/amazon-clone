import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
// import Subtotal from './Subtotal';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className='Payment'>
            <div className='payment__Container'>
                <div className='payment__Section'>
                    <div className='payment__title'>

                        <h3 >Dilivery Address</h3>

                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                    </div>
                </div>

                <div className='payment__Section'>
                    <div className='payment__title'>
                        <h3>Review Items</h3>

                    </div>

                    <div className='payment__reviewItems'>
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

                <div className='payment__Section'>
                    <div className='payment__title'>
                        <h3>Enter Your Card Details</h3>

                    </div>
                    <div className='payment__priceReview'>
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <p>
                                        <strong>  Order Total : {value}</strong>
                                    </p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}

                        />
                        <div className='payment__BuyNowButton'>
                            <button > Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Payment