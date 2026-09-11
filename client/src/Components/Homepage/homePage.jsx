import style from './homepage.module.css';
import Controls from '../Controls/controls';
import VideoGames from '../Videogames/videoGames.jsx';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { videoGames } from '../../features/videogames/videogamesSlice.js';

export default function HomePage(){

    const dispatch = useDispatch()

    const videogames = useSelector((state)=>state.videogames.videogames)
    const loadingGames = useSelector((state)=>state.videogames.loadingGames) 
    
    useEffect(()=>{
        dispatch(videoGames())
    }, [dispatch])

    return(
        <div className={style.container_hompage}>
            <Controls/>
            {loadingGames === true?(<VideoGames games={videogames}/>):(<span className={style.loader}>
            <span className={style.loader__ball}></span>
            <span className={style.loader__ball}></span>
            <span className={style.loader__ball}></span>
            </span>)}
        </div>
    )
}