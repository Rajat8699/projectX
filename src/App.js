import React,{useEffect} from 'react'
import './custom.scss';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
 

const App = ()=>{
  return(
    <div >
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
