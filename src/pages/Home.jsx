import React from "react";
import { useDispatch } from "react-redux";
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice";
import "./styles/Home.css"
import { motion } from "framer-motion";

const Home = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameTrainer = e.target.nameTrainer.value;
        dispatch(setNameTrainerGlobal(nameTrainer));
    };

    return (
        <main className="home"> 
            <section>
                <motion.div 
                    className="home__img"
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut'
                    }}
                > 
                    <img src="/images/pokedex.png" alt="pokedex" />
                </motion.div>
                <h2 className="home__title">Hello coach!</h2>
                <p className="home__parrafo">Give me your name to start!</p>
                <form className="home__wrapper" onSubmit={handleSubmit}>
                    <button className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-tabler icon-tabler-pokeball" width="60px" height="60px" viewBox="0 0 24 24" strokeWidth="1.6" stroke="#ff0400" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="9" cy="9" r="9" transform="translate(3 3)" />
                            <circle cx="12" cy="12" r="3" />
                            <path d="M3 12h6m6 0h6" />
                        </svg>
                    </button>
                    <input
                        className="input"
                        required
                        id="nameTrainer"
                        type="text"
                        placeholder="your name..."
                        name="text"
                    />
                </form>
            </section>
        </main>
    );
};

export default Home;
