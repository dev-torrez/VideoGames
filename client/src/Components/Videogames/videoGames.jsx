import style from './videogames.module.css';
import Games from '../games/games';
import { useEffect, useState } from 'react';
import izquierda from '../../assets/izquierda.png'
import derecha from '../../assets/derecha.png'

export default function VideoGames({games}){

    let intemsPage = 15

    useEffect(()=>{
        setItems([...games].splice(0, intemsPage));
    },[games]);
    const [items, setItems] = useState([...games].splice(0, intemsPage))
    const [currentPage, setCurrentPage] = useState(0);

    const nextHandler = ()=>{
        const value = currentPage+1
        setCurrentPage(currentPage+1);
        const initial = intemsPage*value;
        setItems([...games].splice(initial, intemsPage))
    }

    const prevHandler = ()=>{
        const value = currentPage-1
        setCurrentPage(currentPage-1);
        const initial = intemsPage*value;
        setItems([...games].splice(initial, intemsPage))
    }

    return(
        <div className={style.container_videogames}>
            <div className={style.container_games}>
                {items.map((el, id)=><Games data={el} key={id}></Games>)} 
            </div>
            <div className={style.container_current}>
            <button onClick={prevHandler}><img src={izquierda} alt="" /></button>
            <h3>{currentPage+'/10'}</h3>
            <button onClick={nextHandler}><img src={derecha} alt="" /></button>
            </div>
        </div>
    )
}