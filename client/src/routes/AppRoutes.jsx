import Home from "../pages/Home/home"
import HomePage from "../pages/Homepage/homePage"
import Detail from "../pages/Detail/detail"
import Form from "../pages/Form/form"
import { Routes, Route } from "react-router"

export default function AppRoutes(){
    return(
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/videogames' element={<HomePage/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
    )
}