import {Component} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.compoent';
import SignIn from './routes/sign-in/sign-in.component';
class App extends Component {
  render()
  {
    return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signin' element={<SignIn/>}/>
      </Route> 
    </Routes> 
    )
    
  }
}

export default App;
