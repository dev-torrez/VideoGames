import style from './videogames.module.css';
import Games from '../games/games';
import { useEffect, useState } from 'react';
import izquierda from '../../assets/izquierda.png'
import derecha from '../../assets/derecha.png'

export default function VideoGames({games}){

    let intemsPage = 15
    let counter = games.length/15;
    counter = Math.ceil(counter)

    useEffect(()=>{
        setItems([...games].splice(0, intemsPage));
    },[games,intemsPage]);

    const [items, setItems] = useState([...games].splice(0, intemsPage))
    const [currentPage, setCurrentPage] = useState(0);

    const nextHandler = ()=>{
        if(currentPage < counter-1){
            const value = currentPage+1
            setCurrentPage(currentPage+1);
            const initial = intemsPage*value;
            setItems([...games].splice(initial, intemsPage))
        }
    }

    const prevHandler = ()=>{
        if(currentPage > 0){
            const value = currentPage-1
            setCurrentPage(currentPage-1);
            const initial = intemsPage*value;
            setItems([...games].splice(initial, intemsPage))
        }
    }

    const itemHandler = (val)=>{
            const initial = intemsPage*(val-1);
            setItems([...games].splice(initial, intemsPage));
            setCurrentPage(val-1);
    }

    const itemArray = []
    for(var i=1; i<=counter; i++){
        itemArray.push(i);
    }

    return(
        <div className={style.container_videogames}>
            <div className={style.container_games}>
            {items.map((el, id)=><Games data={el} key={id}></Games>)} 
            </div>
            <div className={style.container_current}>

            <button onClick={prevHandler}><img src={izquierda} alt="" /></button>
            <div className={style.page}>
                {itemArray.map((el, id)=><p key={id} onClick={()=>itemHandler(el)} className={el===currentPage+1?style.item:style.noitem}>{el}</p> )}
            </div>
            <button onClick={nextHandler}><img src={derecha} alt="" /></button>
            </div>
        </div>
    )
}