import './Register.scss';
import { Component } from 'react';
import BaseUrl from '../../components/globalvars';
import Cookies from 'universal-cookie';

const cookies =  new Cookies();

class Register extends Component {
  state = {
    form:{
        username: '',
        password: ''
    }
  }

  register = async() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            username: this.state.form.username,
            password: this.state.form.password
        })
    };
    fetch(BaseUrl + '/register', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {         
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }else{
                console.log(data);
                console.log(response);
                window.location.href="./";
            }
            
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
  }

  

  render() {
    return (
      <div>
          <label>User:</label>
          <input type="text" name="username" onChange={this.handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleChange}/>
          <button className="btn" onClick={this.logIn}>Login</button>
          <a href="./register">¿No tienes cuenta?</a>
      </div>
  );
  }
  
}

export default Register;