//import logo from './logo.svg';
import './App.scss';
import { Component } from 'react';
import Users from './components/users';
import BaseUrl from './components/globalvars';

class App extends Component {

  state = {
    users: [],
    isFetching: true
  }

  componentDidMount() {
    fetch(BaseUrl + '/user')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data, isFetching: false })
    })
    .catch(console.log)
  }

  render() {
    if(this.state.isFetching){
      return 'Loading ...';
    }
    return (
      <Users users={this.state.users} />
    )
  }
  
}

export default App;
