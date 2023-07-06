import style from './games.module.css';

export default function Games({data}){
    return(
        <div className={style.container_game}>
            <p>{data.name}</p>
            <img src={data.image} alt="" />
            <p className={style.action}>{data.genres? data.genres.map(el=><p>{el}</p>):null}</p>
        </div>
    )
}