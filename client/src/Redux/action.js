import axios from 'axios';

export const videoGames =()=>{
    return async (dispatch) => {
        try {
          const response = await axios.get('http://localhost:3001/videogames');
          const videogames = response.data;
          
          dispatch({ type: 'ALL_VIDEOGAMES', payload: videogames });
        } catch (error) {
          // Manejo de errores
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
      };
}