import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import './Styles/home.css'

const Home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    // Sin libreria
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setNameTrainer(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }


    return (
        <div className='home__container'>
            <img className='home__img-pokedex' src="/images/Tittle.png" alt="tittle" />
            <h2 className='home__tittle'>Hi! Trainer</h2>
            {/* <div className='home__circle'>
                <span className='home__lines'>
                    <div className='home__circle-2'></div>
                </span>
            </div> */}
            <img className='home__img-trainers' src="/images/trainers.png" alt="trainers" />
            <p className='home__subtittle'>To star this pokedex, please write your name</p>
            <form className='home__form' onSubmit={handleSubmit} >
                <input className='home__input' id='name' type="text" />
                <button className='home__btn'>Start</button>
            </form>
        </div>
    )
}

export default Home