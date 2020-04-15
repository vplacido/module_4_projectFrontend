import React from 'react';
import NavBar from './components/NavBar'
import HomePageContainer from './Containers/HomepageContainer';
import UserPostContainer from './Containers/UserPostContainer';
import NewUserForm from './components/NewUserForm'
import ProfilePage from './components/ProfilePage'
import Login from './components/Login'
import NewPostForm from './components/NewPostForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams 
} from "react-router-dom";
function App() {

  let newPost = (newPost) => {
		fetch("http://localhost:3000/posts",{
			method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
			body: JSON.stringify(
				newPost
			)
    })
    window.location="/homepage"
	}




  return (
    <Router>
    <div className="App">
      <NavBar />
      {/* <Route exact path="/homepage" render={() => {
        return <HomePageContainer/>
      }} /> */}
      <Route path='/homepage' component={HomePageContainer} />
      <Route exact path="/users/:id" render={
        () => {
          return <ProfilePage/>
        }
      }/>
      {/* chnage from path="/login" */}
      <Route exact path="/" render={() => {
        return <Login/>
      }}/>
       <Route exact path="/signup" render={() => {
        return <NewUserForm/>
      }}/>
        <Route exact path="/posts/new" render ={() => {
          return < NewPostForm newPost={newPost}/>
        }}/>
    </div>
    </Router>
  );
}

export default App;
