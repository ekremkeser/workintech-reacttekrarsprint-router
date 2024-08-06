
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Products from './Components/Products';
import Login from './Components/Login';
import MainPage from './Components/Mainpage';
import HeadSpace from './Components/HeadSpace';

const initialForm = {
  name: '',
  email: '',
};
function App() {

  return (
    <>
      <header>
        <HeadSpace />
      </header>
      <body>
      <Switch>
      <Route path="/" exact>
          <MainPage />
        </Route>

        <Route path="/login" >
          <Login />
        </Route>

        <Route path="/products" >
          <Products />
        </Route>
        
      </Switch>
      </body>
    </>
  );
}

export default App;
