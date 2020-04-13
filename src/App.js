import React from 'react';
import NavBar from './components/NavBar'
import HomePageContainer from './Containers/HomepageContainer';
import UserPostContainer from './Containers/UserPostContainer';
import NewUserForm from './components/NewUserForm'
import ProfilePage from './components/ProfilePage'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/homepage" render={() => {
        return <HomePageContainer/>
      }} />
      <Route exact path="/users/:id" render={
        () => {
          return <ProfilePage/>
        }
      }/>
      <Route exact path="/login" render={() => {
        return <Login/>
      }}/>
       <Route exact path="/signup" render={() => {
        return <NewUserForm/>
      }}/>
    </div>
    </Router>
  );
}

export default App;
