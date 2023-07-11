import style from './controls.module.css';
import {Link} from 'react-router-dom'

export default function Controls(){
    return(
        <div className={style.container}>
            <select className={style.container_filter_genre}>
                <option value="">Action</option>
                <option value="">Indie</option>
                <option value="">Adventure</option>
                <option value="">RPG</option>
                <option value="">Strategy</option>
                <option value="">Shooter</option>
                <option value="">Casual</option>
                <option value="">Simulation</option>
                <option value="">Puzzle</option>
                <option value="">Arcade</option>
                <option value="">Platformer</option>
                <option value="">Massively Multiplayer</option>
                <option value="">Racing</option>
                <option value="">Sports</option>
                <option value="">Fighting</option>
                <option value="">Family</option>
                <option value="">Board Games</option>
                <option value="">Educational</option>
                <option value="">Card</option>
            </select>
            <select className={style.container_filter_origin}>
                <option value="opcion1">Todos</option>
                <option value="opcion2">Creados</option>
                <option value="opcion3">Api</option>
            </select>
            <select className={style.container_filter_order}>
                <option value="">Mayor a Menor</option>
                <option value="">Menor a Mayor</option>
                <option value="">A - z</option>
                <option value="">Z - a</option>
            </select>
            <Link to={'/form'} style={{ textDecoration: 'none' }}>
            <button className={style.boton}>Crear Juego</button>
            </Link>
        </div>
    )
}