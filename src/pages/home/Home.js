import './Home.scss';
import { Component } from 'react';
import Users from '../../components/users';
import BaseUrl from '../../components/globalvars';

import Cookies from 'universal-cookie';

const cookies =  new Cookies();

class Home extends Component {

    state = {
      users: [],
      isFetching: true
    }
  
    componentDidMount() {

      if(!cookies.get('id')){
        window.location.href = './login';
      }

      fetch(BaseUrl + '/user')
      .then(res => res.json())
      .then((data) => {
        this.setState({ users: data, isFetching: false })
      })
      .catch(console.log)
    }
  
    logOut=()=>{
      cookies.remove('id', {path:"/"});
      cookies.remove('username', {path:"/"});
      cookies.remove('email', {path:"/"});
      window.location.href = './login';
    }

    render() {
      console.log(cookies.get('id'));
      console.log(cookies.get('username'));
      console.log(cookies.get('email'));

      if(this.state.isFetching){
        return 'Loading ...';
      }
      
      
      return (
        <div>
          <Users users={this.state.users} />
          <button onClick={this.logOut}>Log Out</button>
        </div>
      )
    }
    
  }
  
  export default Home;