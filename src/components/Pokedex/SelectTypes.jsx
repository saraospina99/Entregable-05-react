import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  './styles/selecttypes.css'


const SelectTypes = ({ setSelectValue }) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type'
        axios.get(url)
            .then(res => setTypes(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setSelectValue(e.target.value)
    }


    return (
        <select className='Select__handle' onChange={handleChange}>
            <option className='select__option' value='allpokemons'>All Pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    )
}

export default SelectTypes