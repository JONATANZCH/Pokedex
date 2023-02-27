import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "./styles/Pokemon.css"
import "../components/pokedex/styles/PokemonCard.css"

const Pokemon = () => {
    const [pokemon, setPokemon] = useState()

    const {id} = useParams()

    const getPercentBar = (stat) => { 
        const percent = (stat * 100) / 255
        return `${percent}%`
    }

    useEffect(() => {
        const URL = `http://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
            .then((res) => setPokemon(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
            <main className='pokemon'>
                {/* Parte superior */}
                <section className={`pokemonCard__header-pokemon bg-lg-${pokemon?.types[0].type.name}`}>
                    <img className='pokemon__img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="img pokemon" />
                </section>

                {/* Body */}
                <section>
                    <h2 className='pokemon__id'># {pokemon?.id}</h2>
                    <div className='pokemon__name-container'>
                        <span className='pokemon__id-span'></span>
                        <h2 className='pokemon__name'>{pokemon?.name}</h2>
                        <span className='pokemon__id-span'></span>
                    </div>

                    <div className='pokemon__adjetives'>
                        <div className='pokemon__adjetives-h'>
                            <h5 className='pokemon__adjetives-j'>Weight</h5>
                            <h4 className='pokemon__adjetives-i'>{pokemon?.weight}</h4>
                        </div>
                        <div className='pokemon__adjetives-h'>
                            <h5 className='pokemon__adjetives-j'>Height</h5>
                            <h4 className='pokemon__adjetives-i'>{pokemon?.height}</h4>
                        </div>
                    </div>

                    <div className='pokemon__caracteristic'>
                        <div>
                            <h3 className='pokemon__caracteristic-n'>Type</h3>
                            <div  className='pokemon__all'>
                                {
                                    pokemon?.types.map(type => <div 
                                        className={`pokemon__h bg-sg-${pokemon?.types[0].type.name}`}
                                        key={type.type.name}><span className='pokemon__prop'>{type.type.name}</span></div>)
                                }
                            </div>
                        </div>
                        <div>
                            <h3 className='pokemon__caracteristic-n'>Abilities</h3>
                            <div  className='pokemon__all'>
                                {
                                    pokemon?.abilities.map(ability => <div className='pokemon__caracteristic-s' key={ability.ability.name}><span className='pokemon__prop'>{ability.ability.name}</span></div>)
                                }
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <section className='pokemon__stats'>
                        <h2 className='pokemon__stats-title'>Stats</h2>
                        <section className='pokemon__stats-info'>
                            {
                                pokemon?.stats.map(stat => (
                                    <article className='pokemon__stat' key={stat.stat.name}>
                                        <div className='pokemon__stat-header'>
                                            <h4 className='pokemon__stat-name'>{stat.stat.name}</h4>
                                            <h5 className='pokemon__stat-value'>{stat.base_stat}/255</h5>
                                        </div>
                                        <div className='pokemon__stat-bar'>
                                            <div className='pokemon__stat-barGray'>
                                                <div className='pokemon__stat-barProgress' style={{width: getPercentBar(stat.base_stat)}}></div>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </section>
                    </section>

                </section>
            </main>
    )
}

export default Pokemon