import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, price , image , rating}) {
  const[{basket}, dispatch]= useStateValue(); 
  // console.log("this is basket>>", basket);

  const addToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image : image,
          price: price,
          rating: rating
        }
      });
  };
  return (
    <div className='product'>
        <div className='product__Description'>
            <p>{title}</p>
            <div className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </div>
        </div>
        
        <div className='product__rating'>
            {Array(rating).fill().map((_,i) => (<p>⭐️</p>))}
            
        </div>
        <div className='product__image'>
            <img src={image}></img>
        </div>

        <button onClick={addToBasket}>Add to Basket</button>

    </div>
  )
}

export default Product