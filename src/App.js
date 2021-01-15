import './App.css';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AlreadyExist from './components/AlreadyExist/AlreadyExist';
import Registration from './components/Registration/Registration';
import { useAuth0 } from "@auth0/auth0-react";
import Cabinet from './components/Cabinet/Cabinet';

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <Router basename='/'>
      {isAuthenticated ? <Cabinet /> :
        <div className="App">
          <Switch>
            <Route path="/" exact={true}>
              <Welcome />
              <Login />
            </Route>
          </Switch>
          <Switch>
            <Route path="/registration">
              <AlreadyExist />
              <Registration />
            </Route>
          </Switch>
        </div>
      }
    </Router>
  );
}

export default App;
