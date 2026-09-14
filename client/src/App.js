import AppRoutes from './routes/AppRoutes.jsx';
import NavBar from './Components/Navbar/navBar.jsx';
import { nameFilter } from './features/videogames/videogamesSlice.js';
import { useDispatch} from 'react-redux';
import {useLocation} from "react-router"

export default function App() {

  const location = useLocation();
  const dispatch = useDispatch()
  
  const nameHandler = (inputValue)=>{ 
    dispatch(nameFilter(inputValue)) 
  }

  return (
    <div>
        {location.pathname === '/'?null: <NavBar buscar={nameHandler}/>}
        <AppRoutes/>
    </div>
  )
}