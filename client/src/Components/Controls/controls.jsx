import style from './controls.module.css';
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux"
import { genderFilter, originFilter, orderFilter } from '../../Redux/action.js';

export default function Controls(){

    const dispatch = useDispatch();


    const handleSelectGender = (event)=>{
        dispatch(genderFilter(event.target.value));
    }

    const handleSelectOrigin = (event)=>{
        dispatch(originFilter(event.target.value));
    }

    const handleSelectOrder = (event)=>{
        dispatch(orderFilter(event.target.value));
    }

    const generos = ['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Massively Multiplayer', 'Racing', 'Sports', 'Fighting', 'Family', 'Board Games', 'Educational', 'Card'];

    return(
        <div className={style.container}>
            <select className={style.container_filter_genre} onChange={handleSelectGender}>
                <option value="todos">Todos</option>
                {generos.map((genero, id)=><option value={genero} key={id}>{genero}</option>)}
            </select>
            <select className={style.container_filter_origin} onChange={handleSelectOrigin}>
                <option value="todos">Todos</option>
                <option value="creados">Creados</option>
                <option value="api">Api</option>
            </select>
            <select className={style.container_filter_order} onChange={handleSelectOrder}>
                <option value="normal">Normal</option>
                <option value="mayor">Mayor a Menor</option>
                <option value="menor">Menor a Mayor</option>
                <option value="az">A - z</option>
                <option value="za">Z - a</option>
            </select>
            <Link to={'/form'} style={{ textDecoration: 'none' }}>
            <button className={style.boton}>Crear Juego</button>
            </Link>
        </div>
    )
}