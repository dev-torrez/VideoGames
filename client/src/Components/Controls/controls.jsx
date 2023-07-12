import style from './controls.module.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { allGenres } from '../../Redux/action.js';

export default function Controls(){

    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres)

    useEffect(()=>{
        dispatch(allGenres())
    },[dispatch])

    return(
        <div className={style.container}>
            <select className={style.container_filter_genre}>
                {genres.map((el, id)=><option value={el} key={id}>{el}</option>)}
            </select>
            <select className={style.container_filter_origin}>
                <option value="todos">Todos</option>
                <option value="creados">Creados</option>
                <option value="api">Api</option>
            </select>
            <select className={style.container_filter_order}>
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