import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GrLocation } from 'react-icons/gr'
import './Styles/pokeinfo.css'

const PokeInfo = () => {

    const { id } = useParams()

    const [poke, setPoke] = useState()

    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
            .then(res => {
                setPoke(res.data)
                setHasError(false)
            })
            .catch(err => {
                setHasError(true)
                console.log(err)
            })
    }, [id])

    if (hasError) {
        return <p className='pokeError__p'>The Pokemon
            <span className='pokeError__span'>  {id}</span> not found
            <img className='pokeError__gif' src="https://i.pinimg.com/originals/f3/75/27/f3752723f7ff7df13825679ca4aae527.gif" alt="gif" /></p>
    } else {
        return (
            <div className='pokeInfo__container'>
                <div className='poke__pokedex-img'>
                    <img className='poke__img' src="/images/pokedex.png" alt="title" />
                </div>
                <div className='poke__main'>
                    <div className='bloque__1'>
                        <div className='pokeInfo__card'>
                            <img className='poke__card-img' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
                            <li className='poke__card-list'>
                                <p className='poke__card-weight'>
                                    <h2 className='poke__h2'>Weight</h2>
                                    <span className='poke__card-weight'>{poke?.weight}</span>
                                </p>
                                <p className='poke__card-height'>
                                    <h2 className='poke__h2'>Height</h2>
                                    <span className='poke__card-height'>{poke?.height}</span>
                                </p>
                            </li>
                            <h1 className='poke__card-name'>{poke?.name}</h1>
                            <hr className='poke__card-hr' />
                            <h2 className='poke__card-id'>#{poke?.id}</h2>
                        </div>

                        <div className='poke__type'>
                            <h2 className='poke__type-tittle'>Type</h2>
                            <hr className='poke__type-hr' />
                            <ul className='poke__types'>
                                {
                                    poke?.types.map(type => (
                                        <li key={type.type.name}>{type.type.name}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='poke__abilities'>
                            <h2 className='poke__abilities-tittle'>Abilities</h2>
                            <hr className='poke__abilities-hr' />
                            <ul className='poke__ability'>
                                {
                                    poke?.abilities.map(ability => (
                                        <li key={ability.ability.name}>{ability.ability.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='bloque__2'>
                        <div className='poke__encounters'>
                            <h2 className='poke__encounters-tittle'><span className='poke__encounters-icon'><GrLocation /></span> Encounters</h2>
                        </div>

                        <div className='poke__movements'>
                            <h2 className='poke__movements-tittle'>Movements</h2>
                            <ul className='poke__movement'>
                                {
                                    poke?.moves.map(move => (
                                        <li className='poke__movement-item' key={move.move.name}>{move.move.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default PokeInfo