import './App.css';
import { Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form";
import Home from "./views/Home/Home";
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';

function App() {


axios.defaults.baseURL ='https://pi-videogames-production-252a.up.railway.app';
  const location = useLocation();
  return (
    <div className="App">   
            {location.pathname !=='/'&& !location.pathname.includes('/detail/') &&<NavBar/> }           
            <Route path="/home" render={()=><Home/>} />
            <Route exact path="/" render={()=><Landing/>} />
            <Route exact path="/create" render={()=><Form />} />
            <Route exact path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;