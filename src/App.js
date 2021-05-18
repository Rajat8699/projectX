import React,{useEffect} from 'react'
import './custom.scss';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/Signup/Signup';
import ForgetPassword from './pages/Auth/ForgetPassword/ForgetPassword';
 

const App = ()=>{
  return(
    <div >
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/forgot-password' component={ForgetPassword}/>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
