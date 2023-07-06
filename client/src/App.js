import Home from './Components/Home/home.jsx';
import homePage from './Components/Homepage/homePage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/videogame' component={homePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
