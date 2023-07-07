import style from './homepage.module.css';
import NavBar from "../Navbar/navBar"
import Controls from '../Controls/controls';
import VideoGames from '../Videogames/videoGames';
import { connect } from 'react-redux';
import {videoGames, nameFilter} from '../../Redux/action.js'; 
import { useEffect } from 'react';

export function HomePage({videogames, allVideogames, nameFilter}){

    useEffect(()=>{
        allVideogames();
    },[allVideogames]);

    const nameHandler = (inputValue)=>{
        nameFilter(inputValue);
    }

    return(
        <div className={style.container_hompage}>
            <NavBar buscar={nameHandler}/>
            <Controls/>
            <VideoGames games={videogames}/>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        videogames: state.videogames,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        allVideogames:()=>dispatch(videoGames()),
        nameFilter: (inputValue)=>dispatch(nameFilter(inputValue))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)