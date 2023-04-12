import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ basket, user, email }, dispatch] = useStateValue();

    const handlerAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='Header'>
            <Link to='/'>
                <img className='Header__logo' src='/Amazon-Logo-Font-1-scaled.jpg.webp' ></img>
            </Link>


            <div className='Header__search' >
                <input className='Header__searchInput' type="Text" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='Header__nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handlerAuthentication} className='nav__op'>
                        <span className='Header__opLine1'>
                            {user? user?.email: 'Hello guest'} 
                        </span>
                        <span className='Header__opLine2'>
                           {user? 'Sign Out': 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className='nav__op'>
                    <span className='Header__opLine1'>
                        Returns
                    </span>
                    <span className='Header__opLine2'>
                        & Orders
                    </span>
                </div>
                <div className='nav__op'>
                    <span className='Header__opLine1'>
                        Your
                    </span>
                    <span className='Header__opLine2'>
                        Prime
                    </span>
                </div>
            </div>
            <Link to='/checkout'>
                <div className='Header__basketLogo'>
                    <ShoppingBasketIcon className='Header__Basket' />
                    <span className='Header__opLine2 Header__basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>

        </div>

    )
}

export default Header