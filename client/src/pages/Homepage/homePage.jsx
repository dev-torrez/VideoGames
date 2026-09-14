import Controls from '../../Components/Controls/controls.jsx';
import VideoGames from '../../Components/Videogames/videoGames.jsx';
import Loading from '../../Components/Loading/Loading.jsx';
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
        <div>
            <Controls/>
            {loadingGames === true?(<VideoGames games={videogames}/>):<Loading/>}
        </div>
    )
}