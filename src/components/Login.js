import React, {Component} from 'react'
import NewUserForm from './NewUserForm'
class Login extends Component{

	clickFun = () => {
		return window.location = '/signup'
	}
	render(){
		return(
			<div>
			<form className="new-form">
				<div>
					UserName: <input type="text"/>
				</div>
				<div>
					Password: <input type="text"/>
				</div>
				<div>
					<button type="Submit" >Login</button>
					</div>
			</form>
			<div>
					<button type="Submit" onClick={() => {
						// this.changeUrl();
						this.clickFun();
					}}>Create Account</button>
					</div>
	</div>
		)
	}
}

export default Login