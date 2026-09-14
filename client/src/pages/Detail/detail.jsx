import Loading from "../../Components/Loading/Loading";
import { useParams } from "react-router-dom"
import { detailVideogame } from "../../features/videogames/videogamesSlice";
import { useEffect } from "react";
import style from './detail.module.css';
import { useDispatch, useSelector } from "react-redux";

export default function Detail(){

    const detail = useSelector(state=>state.videogames.detail)
    const loading = useSelector((state)=> state.videogames.loadingDetail)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(detailVideogame(id));
    },[dispatch, id])

    return(
        <div className={style.container_detail_videogames}>
        {
            loading === true?
            (<div className={style.container_detail}>
            <p className={style.id}>{detail.id}</p>
            <h3>{detail.name}</h3>
            <div className={style.container_image_platforms}>
            <img src={detail.image} alt="" className={style.detail_image}/>
            <div>
            <p className={style.plataformas}>Plataformas</p>
            {detail.platforms?detail.platforms.map((el, id)=><p key={id}>{el}</p>) :null}
            </div>
            
            <div>
            <p className={style.plataformas}>Fecha de lanzamiento</p>
            <p>{detail.date}</p>
            </div>
            
            <div>
            <p className={style.plataformas}>Clasificacion</p>
            <p>{detail.rating}</p>
            </div>
            
            <div>
            <p className={style.plataformas}>géneros</p>
            {detail.genres?detail.genres.map((el, id)=><p key={id}>{el}</p>): null}
            </div>
            </div>
            <p className={style.description}>{detail.description}</p>
            </div>):<Loading/>
        }
            </div>
        )
}