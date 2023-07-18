import style from './homepage.module.css';
import Controls from '../Controls/controls';
import VideoGames from '../Videogames/videoGames.jsx';
import { connect } from 'react-redux';
import {videoGames} from '../../Redux/action.js'; 
import { useEffect, useState} from 'react';

export function HomePage({videogames, allVideogames}){

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(videogames.length > 0){
                setLoading(true)
        }
        else{
            const fetchData = async () => {
                await allVideogames();
                setLoading(true)
            };
            fetchData();
        }
    }, [allVideogames, videogames.length])

    return(
        <div className={style.container_hompage}>
            <Controls/>
            {loading === true?(<VideoGames games={videogames}/>):(<span className={style.loader}>
            <span className={style.loader__ball}></span>
            <span className={style.loader__ball}></span>
            <span className={style.loader__ball}></span>
            </span>)}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        videogames: state.videogames
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        allVideogames:()=>dispatch(videoGames()),
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)