import './Login.scss';
import { Component } from 'react';
import BaseUrl from '../../components/globalvars';
import Cookies from 'universal-cookie';

const cookies =  new Cookies();

class Login extends Component {
    state = {
        form:{
            username: '',
            password: ''
        }
    }

    componentDidMount(){
        if(cookies.get('id')){
            window.location.href = './';
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        //console.log(this.state.form);
    }

    logIn = async() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: this.state.form.username,
                password: this.state.form.password
            })
        };
        fetch(BaseUrl + '/login', requestOptions)
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
                    cookies.set('id', data.id, {path:"/"});
                    cookies.set('username', data.username, {path:"/"});
                    cookies.set('email', data.email, {path:"/"});
                    window.location.href="./";
                }

               
                //this.setState({ postId: data.id })
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

export default Login;