import style from "../Loading/loading.module.css"

export default function Loading(){
    return(
        <span className={style.loader} style={{marginLeft: "0px", width: "100%"}}>
            <span className={style.loader__ball}></span>
            <span className={style.loader__ball}></span>
            <span className={style.loader__ball}></span>
        </span>
    )
}