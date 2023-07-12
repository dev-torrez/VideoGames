import style from './home.module.css';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div className={style.container_home}>
            <video loop src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltee455c2e719bb8b9/6494cf1ef1585c219370578e/Valorant_Deadlock_Homepage_Desktop.mp4" type="video/mp4" autoPlay={true}></video>
            <Link to='/videogames' className={style.link}>
            <button className={style.button_explore}>Explorar VideoJuegos</button>
            </Link>
        </div>
    )
}