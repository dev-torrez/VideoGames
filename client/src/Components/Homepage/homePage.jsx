import style from './homepage.module.css';
import Controls from '../Controls/controls';
import VideoGames from '../Videogames/videoGames';
import { connect } from 'react-redux';
import {videoGames} from '../../Redux/action.js'; 
import { useEffect } from 'react';

export function HomePage({videogames, allVideogames}){

    useEffect(()=>{
        allVideogames();
    },[allVideogames]);

    return(
        <div className={style.container_hompage}>
            <Controls/>
            <VideoGames games={videogames}/>
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