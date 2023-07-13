import style from './games.module.css';
import {Link} from 'react-router-dom';

export default function Games({data}){
    return(
        <div className={style.container_game}>
            <Link to={`/detail/${data.id}`}>
            <img src={data.image} alt="" />
            </Link>
            <p className={style.title}>{data.name}</p>
            <div className={style.action}>
            {data.genres? data.genres.map((el, key)=><p key={key}>{el+','}</p>):null}
            </div>
            <br />
            <p className={style.rating}>{data.rating}</p>
        </div>
    )
}