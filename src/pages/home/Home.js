import "./Home.scss";
import { Component } from "react";
import BaseUrl from "../../components/globalvars";
import ScrollComponent from "./ScrollComponent";
import Cookies from "universal-cookie";

import ParticlesBG from "../../components/particles/Particles";

const cookies = new Cookies();

class Home extends Component {
  logOut = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("username", { path: "/" });
    cookies.remove("email", { path: "/" });
    window.location.href = "./login";
  };

  render() {
    //console.log(cookies.get('id'));
    //console.log(cookies.get('username'));
    //console.log(cookies.get('email'));

    return (
      <div>
        <ParticlesBG className="particles" />
        <button onClick={this.logOut}>Cerrar sesión</button>
        <ScrollComponent cookies={cookies} />
      </div>
    );
  }
}

export default Home;