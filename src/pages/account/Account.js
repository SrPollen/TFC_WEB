import "./Account.scss";
import { Component } from "react";
import BaseUrl from "../../components/globalvars";

import Cookies from "universal-cookie";
import UserProfile from "./UserProfile";

import ParticlesBG from "../../components/particles/Particles";
import Navbar from "../../components/navbar/Navbar";

const cookies = new Cookies();

class Top extends Component {
  state = {
    user: {},
    isFetching: true,
  };

  componentDidMount() {
    if (!cookies.get("id")) {
      window.location.href = "./login";
    }

    fetch(BaseUrl + "/user/" + cookies.get("id"))
      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data, isFetching: false });
      })
      .catch(console.log);
  }


  render() {
    return (
      <div>
        <Navbar />
        <ParticlesBG className="particles" />
        <UserProfile user={this.state.user}/>
      </div>
    );
  }
}

export default Top;
