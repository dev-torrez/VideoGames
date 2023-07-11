import style from './navbar.module.css';
import videogame from '../../assets/game.png';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function NavBar({buscar}){

    const [inputValue, setInputValue] = useState('');

    const inputHandler = (event)=>{
        setInputValue(event.target.value)
    }

    
    return(
        <div className={style.container_navbar}>
            <div className={style.container_game}>
                <img src={videogame} alt="videogame" />
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h1>Game</h1>
                </Link>
            </div>
            <div className={style.container_buscar}>
                <Link to='/videogames' style={{ textDecoration: 'none' }}>
                <p>Videogames</p>
                </Link>
                <input type="text" onChange={inputHandler}/>
                <button onClick={()=>{buscar(inputValue)}} >Buscar</button>
            </div>
        </div>
    )
}