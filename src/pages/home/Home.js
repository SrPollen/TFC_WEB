import "./Home.scss";
import { Component } from "react";
import BaseUrl from "../../components/globalvars";
import ScrollComponent from "./ScrollComponent";
import Cookies from "universal-cookie";

import ParticlesBG from "../../components/particles/Particles";
import Navbar from "../../components/navbar/Navbar";

const cookies = new Cookies();

class Home extends Component {
  logOut = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("username", { path: "/" });
    cookies.remove("email", { path: "/" });
    window.location.href = "./login";
  };

  componentDidMount() {
    if (!cookies.get("id")) {
      window.location.href = "./login";
    }
  }


  render() {
    //console.log(cookies.get('id'));
    //console.log(cookies.get('username'));
    //console.log(cookies.get('email'));

    return (
      <div>
        <Navbar logOut ={this.logOut} />
        <ParticlesBG className="particles" />
        <ScrollComponent cookies={cookies} />
      </div>
    );
  }
}

export default Home;