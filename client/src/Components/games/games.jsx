import style from './games.module.css';
import {Link} from 'react-router-dom';

export default function Games({data}){
    return(
        <Link to={`/detail/${data.id}`}>
        <div className={style.container_game}>
            <p className={style.title}>{data.name}</p>
            <img src={data.image} alt="" />
            <h3 className={style.action}>{data.genres? data.genres.map((el, key)=><p key={key}>{el}</p>):null}</h3>
        </div>
        </Link>
    )
}