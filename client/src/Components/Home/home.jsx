import style from './home.module.css';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div className={style.container_home}>
            <Link to='/videogames' className={style.link}>
            <button className={style.button_explore}>Explorar VideoJuegos</button>
            </Link>
        </div>
    )
}