import { useParams } from "react-router-dom"
import {connect} from 'react-redux';
import { detailVideogames } from "../../Redux/action.js";
import { useEffect } from "react";
import style from './detail.module.css';

export function Detail({detail, detailVideogames}){

    const {id} = useParams()

    useEffect(()=>{
        detailVideogames(id);
    },[detailVideogames, id])

    return(
        <div className={style.container_detail_videogames}>
        <div className={style.container_detail}>
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
        </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        detail: state.detail
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        detailVideogames: (id)=>{dispatch(detailVideogames(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);