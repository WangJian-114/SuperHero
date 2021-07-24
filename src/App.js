import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthState from './context/auth/authState';
import HeroState from './context/hero/heroState';
import TeamState from './context/team/teamState';

import Login from './pages/auth/Login';
import Search from './pages/search/Search';
import MyTeam from './pages/team/Myteam';
import HeroDetail from './pages/hero/HeroDetail';

import PrivateRoute from './routes/PrivateRoute';


function App() {

  return (
    <AuthState>
      <HeroState>
        <TeamState>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={MyTeam} />
              <PrivateRoute exact path="/search" component={Search} />
              <PrivateRoute 
                exact 
                path="/hero/:id" 
                component={(props) => {
                  const id = props.match.params.id;
                return <HeroDetail id={id}/>}}/>
            </Switch>
          </Router>
        </TeamState>
      </HeroState>
    </AuthState>
  );
}

export default App;
