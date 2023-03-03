import React from 'react'
import './styles/header.css'

const Header = () => {
    return (
        <div className='header__container'>
            <img className='header__img' src="/images/pokedex.png" alt="tittle" />
            <div className='header__line'>
                <div className='header__circle-1'>
                    <div  className='header__circle-2'></div>
                </div>
            </div>
        </div>
    )
}

export default Header