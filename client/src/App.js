import Home from './Components/Home/home.jsx';
import HomePage from './Components/Homepage/homePage.jsx';
import Detail from './Components/Detail/detail.jsx';
import Form from './Components/Form/form.jsx';
import NavBar from './Components/Navbar/navBar.jsx';
import { nameFilter } from './Redux/action.js';
import { connect } from 'react-redux';
import {Routes, Route, useLocation} from "react-router"

export function App({nameFilter}) {

  const location = useLocation();

  const nameHandler = (inputValue)=>{ 
    nameFilter(inputValue) 
    }
  return (
    <div>
        {location.pathname === '/'?null: <NavBar buscar={nameHandler}/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/videogames' element={<HomePage/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
      nameFilter: (inputValue)=>dispatch(nameFilter(inputValue))
    }
}

export default connect(null, mapDispatchToProps)(App)
