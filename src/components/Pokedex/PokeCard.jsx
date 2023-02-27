import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/pokecard.css'


const PokeCard = ({ pokemon }) => {

    const [poke, setPoke] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(pokemon.url)
            .then(res => setPoke(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        navigate(`/pokedex/${poke.id}`)
    }

    return (
        <article onClick={handleClick} className={`pokeCard__container border-${poke?.types[0].type.name}`}>

            <header className={`pokeCard__header bg-${poke?.types[0].type.name}`}>
                <img className='pokeCard__image' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <h2 className={`pokeCard__name color-${poke?.types[0].type.name}`}>{poke?.name}</h2>
            <ul className='pokeCard__type'>
                {
                    poke?.types.map(type => (
                        <li key={type.type.name}>| {type.type.name} |</li>
                    ))
                }
            </ul>
            <hr className='pokeCard__hr'/>
            <ul className='pokeCard__info-list'>
                {
                    poke?.stats.map(stat => (
                        <li className='pokeCard_info-item' key={stat.stat.url}>
                            <span className='pokeCard_info-name'>{stat.stat.name}</span>
                            <span className={`pokeCard_info-number color-${poke?.types[0].type.name}`}>{stat.base_stat}</span>
                        </li>
                    )) 
                }
            </ul>
        </article>
    )
}
export default PokeCard