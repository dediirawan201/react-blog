import {Topbar} from './components/molecouls'
import {Home, Login, Settings, Single, Write} from './pages';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>
        <Route path="/login">
        {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/settings">
        {user ? <Settings/> : <Register/>}
        </Route>
        <Route path="/write">
        {user ? <Write/> : <Register/>}
        </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
