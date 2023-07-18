import style from './games.module.css';
import {Link} from 'react-router-dom';
import estrella from '../../assets/estrella1.png'

export default function Games({data}){

    const estrellas = [];
    for(var i=0; i<Math.floor(data.rating); i++){
        estrellas.push(estrella)
    }

    return(
        <div className={style.container_game}>
            <Link to={`/detail/${data.id}`}>
            <img src={data.image} alt="" className={style.image}/>
            </Link>
            <p className={style.title}>{data.name}</p>
            <div className={style.action}>
            {data.genres? data.genres.map((el, key)=><p key={key}>{el+','}</p>):null}
            </div>
            <br />
            <div className={style.container_rating}>
            <p className={style.rating}>{data.rating}</p>
            <div>
            {estrellas.map((image, id)=> <img src={image} alt="" className={style.estrella_image} key={id}/> )}
            </div>
            </div>
        </div>
    )
}