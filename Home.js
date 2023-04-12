import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='Home'>
        <div className='Home__container'>
            
        <img className='Home__image' src='amazon_2.png'></img>

        <div className='Home_row'>
            <Product id='1' title='PlayStation PS5 Console – God of War Ragnarök Bundle' price={499.99} image='https://m.media-amazon.com/images/I/61SUJDrCTLL._AC_UY436_QL65_.jpg' 
                rating={5} 
            />
            <Product id='2' title= 'Xbox Series S – Gilded Hunter Bundle' price={399.99} image='https://m.media-amazon.com/images/I/717JafCjCAL._AC_UY436_QL65_.jpg' 
                rating={5}/>
        </div>
        <div className='Home_row' >
            <Product id='3' title='Apple Watch Ultra [GPS + Cellular 49mm] Smart Watch w/Rugged Titanium Case & Orange Alpine Loop Medium. Fitness Tracker, Precision GPS, Action Button, Extra-Long Battery Life, Brighter Retina ' price={799.99} image='apple_watch.jpeg' 
                rating={5} />
            <Product id='4' title='Apple 2022 12.9-inch iPad Pro (Wi-Fi, 256GB) - Space Gray (6th Generation)' price={499.99} image='https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_UY436_QL65_.jpg' 
                rating={5}/>
            <Product id='5' title='SAMSUNG Galaxy Watch 5 44mm LTE Smartwatch w/Body, Health, Fitness and Sleep Tracker, Improved Battery, Sapphire Crystal Glass, Enhanced GPS Tracking, US Version, Gray' price={299.99} image='https://m.media-amazon.com/images/I/51hstkrvCyL._AC_UY436_QL65_.jpg' 
                rating={5}/>
        </div>
        <div className='Home_row'>
            <Product id='6' title='SAMSUNG 34-Inch Odyssey G85SB Series OLED Ultra WQHD Curved Gaming Monitor, 175Hz, 0.03ms, DisplayHDR True Black 400, AMD FreeSync Premium Pro, Advanced Game Streaming, LS34BG850SNXZA, 2023 ' price={999.99} image='oled_led.jpeg' 
                rating={5}/>
        </div>
        </div>
    </div>
  )
}

export default Home