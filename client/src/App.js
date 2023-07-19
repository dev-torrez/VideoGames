import Home from './Components/Home/home.jsx';
import homePage from './Components/Homepage/homePage.jsx';
import Detail from './Components/Detail/detail.jsx';
import Form from './Components/Form/form.jsx';
import NavBar from './Components/Navbar/navBar.jsx';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min.js';
import { nameFilter } from './Redux/action.js';
import { connect } from 'react-redux';

export function App({nameFilter}) {

  const {pathname} = useLocation();

  const nameHandler = (inputValue)=>{ 
      nameFilter(inputValue) 
  }
  
  return (
    <div>
        {pathname === '/'?null: <NavBar buscar={nameHandler}/>}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/videogames' component={homePage}/>
          <Route exact path='/detail/:id' component={Detail}/>
          <Route exact path='/form' component={Form}/>
        </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
      nameFilter: (inputValue)=>dispatch(nameFilter(inputValue))
    }
}

export default connect(null, mapDispatchToProps)(App)
