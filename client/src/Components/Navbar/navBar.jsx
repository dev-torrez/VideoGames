import style from './navbar.module.css';
import videogame from '../../assets/videogame.png'

export default function NavBar(){
    return(
        <div className={style.container_navbar}>
            <div className={style.container_game}>
                <img src={videogame} alt="videogame" />
                <h1>Game</h1>
            </div>
            <div className={style.container_buscar}>
                <p>Videogames</p>
                <input type="text" />
                <button>Buscar</button>
            </div>
        </div>
    )
}