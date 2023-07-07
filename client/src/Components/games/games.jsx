import style from './games.module.css';

export default function Games({data}){
    return(
        <div className={style.container_game}>
            <p className={style.title}>{data.name}</p>
            <img src={data.image} alt="" />
            <p className={style.action}>{data.genres? data.genres.map((el, key)=><p key={key}>{el}</p>):null}</p>
        </div>
    )
}