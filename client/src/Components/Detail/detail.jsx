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
            <p>{detail.id}</p>
            <h3>{detail.name}</h3>
            <div className={style.container_image_platforms}>
            <img src={detail.image} alt="" className={style.detail_image}/>
            <h4>{detail.platforms?detail.platforms.map(el=><p>{el}</p>) :null}</h4>
            </div>
            <p className={style.description}>{detail.description}</p>
            <p>{detail.date}</p>
            <p>{detail.rating}</p>
            <h4>{detail.genre?detail.genre.map(el=><p>{el}</p>): null}</h4>
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