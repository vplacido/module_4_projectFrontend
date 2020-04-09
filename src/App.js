import React from 'react';
import NavBar from './components/NavBar'
import HomePageContainer from './Containers/HomepageContainer';
import UserPostContainer from './Containers/UserPostContainer';
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
          return <UserPostContainer/>
        }
      }/>
       
    </div>
    </Router>
  );
}

export default App;
