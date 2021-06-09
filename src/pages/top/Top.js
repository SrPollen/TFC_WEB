import "./Top.scss";
import { Component } from "react";
import BaseUrl from "../../components/globalvars";
import Users from "../../components/users";

import Cookies from "universal-cookie";

import Navbar from "../../components/navbar/Navbar";
import ScrollTop from "./ScrollTop"

//import ParticlesBG from "../../components/particles/Particles";

const cookies = new Cookies();

class Top extends Component {
  state = {
    users: [],
    isFetching: true,
  };

  componentDidMount() {
    if (!cookies.get("id")) {
      window.location.href = "./login";
    }

    fetch(BaseUrl + "/topwave")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data, isFetching: false });
      })
      .catch(console.log);
  }


  render() {
    return (
      <div>
        <Navbar />
        <ScrollTop cookies={cookies} users={this.state.users} />
      </div>
    );
  }
}

export default Top;

//<Users users={this.state.users} />