import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokeCard from '../components/Pokedex/PokeCard'
import SelectTypes from "../components/Pokedex/SelectTypes"
import Header from '../components/shared/Header'
import './Styles/pokedex.css'

const Pokedex = () => {

    const { nameTrainer } = useSelector(state => state)

    const [pokemons, setPokemons] = useState()

    const [selectValue, setSelectValue] = useState('allpokemons')

    useEffect(() => {
        if (selectValue === 'allpokemons') {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
            axios.get(url)
                .then(res => setPokemons(res.data))
                .catch(err => console.log(err));
        } else {
            axios.get(selectValue)
                .then(res => {
                    const results = res.data.pokemon.map(e => e.pokemon)
                    setPokemons({ results })
                })
                .catch(err => console.log(err))
        }

    }, [selectValue]);

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.pokemon.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`)
        e.target.pokemon.value = ''
    }

    return (
        <div className='pokedex__container'>
            <Header />

            <div className='pokedex__main'>
                <div className='pokedex__tittle-container'>
                    <h1 className='pokedex__tittle'><span className='pokedex__tittle-span'>Hi {nameTrainer},
                    </span>  here find your favorite pokemon.</h1>
                </div>

                <div className='pokedex__navegator'>
                <form className='pokedex__form' onSubmit={handleSubmit}>
                    <input className='pokedex__input' id='pokemon' type="text" />
                    <button className='pokedex__btn'>Search</button>
                </form>

                <div className='pokedex__select'>
                    <SelectTypes setSelectValue={setSelectValue} />
                </div>
                </div>
            </div>

            <div className='pokedex__container-pokemon'>
                {
                    pokemons?.results.map(pokemon => (
                        <PokeCard
                            key={pokemon.url}
                            pokemon={pokemon}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Pokedex