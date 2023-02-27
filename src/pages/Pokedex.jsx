import React from 'react'
import { useSelector } from "react-redux";
import PokemonCard from '../components/pokedex/PokemonCard';
import "./styles/Pokedex.css"
import usePokedex from '../hooks/usePokedex';

const Pokedex = () => {
    const nameTrainer = useSelector(store =>  store.nameTrainer)

    const { 
        handleSubmit, 
        handleChangeSelect, 
        types, 
        pokemonsInPage, 
        handlePreviusPage, 
        handleNextPage,
        pagesInBlock,
        setCurrentPage,
        currentPage,
        lastPage
    } = usePokedex()

    return (
        <main className='container'>
            {/* <div onClick={changeTheme} className="toggleWrapper">
                <input type="checkbox" className={`dn ${theme === "dark" ? "light" : ""}`}  id="dn"/>
                    <label htmlFor="dn" className="toggle">
                        <span className="toggle__handler">
                            <span className="crater crater--1"></span>
                            <span className="crater crater--2"></span>
                            <span className="crater crater--3"></span>
                        </span>
                        <span className="star star--1"></span>
                        <span className="star star--2"></span>
                        <span className="star star--3"></span>
                        <span className="star star--4"></span>
                        <span className="star star--5"></span>
                        <span className="star star--6"></span>
                    </label>
            </div> */}
            <p className='pokedex__welcome'><span className='pokedex__welcome-span'>Welcome {nameTrainer}</span>, here you can find information about your favorite pokemon!</p>
            <form className='pokedex__form' onSubmit={handleSubmit}>
                <div className='pokedex__search'>
                    <input className='pokedex__input' type="text" id='pokemonName' placeholder='search your pokemon'/>
                    <button className='pokedex__btn'>Search</button>
                </div>
                <select className='pokedex__select' onChange={handleChangeSelect}>
                    <option value="">All</option>
                    {
                        types.map(type => <option key={type.url}>{type.name}</option>)
                    }
                </select>
            </form>
            <section className='pokemonCard__grid'>
                {
                    pokemonsInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>)
                }
            </section>
            <section className='pagination'>
                <ul className='pagination__list'>
                    <li className='pagination__li pagination__li-hover' onClick={handlePreviusPage}>{"<<"}</li>
                    <li className='pagination__li pagination__li-hover' onClick={() => setCurrentPage(1)}>...</li>
                    {
                        pagesInBlock.map(page => <li className={`pagination__li ${page === currentPage ? 'bg-page' : ''}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
                    }
                    <li className='pagination__li pagination__li-hover' onClick={() => setCurrentPage(lastPage)}>...</li>
                    <li className='pagination__li pagination__li-hover' onClick={handleNextPage}>{">>"}</li>
                </ul>
            </section>
        </main>
    )
}

export default Pokedex