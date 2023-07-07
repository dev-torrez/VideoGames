import style from './navbar.module.css';
import videogame from '../../assets/videogame.png'
import { useState } from 'react';

export default function NavBar({buscar}){

    const [inputValue, setInputValue] = useState('');

    const inputHandler = (event)=>{
        setInputValue(event.target.value)
    }

    
    return(
        <div className={style.container_navbar}>
            <div className={style.container_game}>
                <img src={videogame} alt="videogame" />
                <h1>Game</h1>
            </div>
            <div className={style.container_buscar}>
                <p>Videogames</p>
                <input type="text" onChange={inputHandler}/>
                <button onClick={()=>{buscar(inputValue)}} >Buscar</button>
            </div>
        </div>
    )
}