import "./Top.scss";
import { Component } from "react";
import BaseUrl from "../../components/globalvars";

import Cookies from "universal-cookie";

import Navbar from "../../components/navbar/Navbar";
import ScrollTop from "./ScrollTop"

import ParticlesBG from "../../components/particles/Particles";

//import ParticlesBG from "../../components/particles/Particles";

const cookies = new Cookies();

class Top extends Component {
  state = {
    users: [],
    position: -1,
    isFetching: true,
  };

  componentDidMount() {
    if (!cookies.get("id")) {
      window.location.href = "./login";
    }

    fetch(BaseUrl + "/topusers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data, isFetching: false });
      })
      .then(()=>{
        this.setState({ position: this.state.users.findIndex(user => user.id === parseInt(cookies.get("id")))+1 });
      })
      .catch(console.log);

      
  }


  render() {
    return (
      <div>
        <Navbar />
        <ParticlesBG className="particles" />
        <ScrollTop position={this.state.position} users={this.state.users} />
      </div>
    );
  }
}

export default Top;

//<Users users={this.state.users} />