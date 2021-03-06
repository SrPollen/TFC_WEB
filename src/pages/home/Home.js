import "./Home.scss";
import { Component } from "react";
import ScrollComponent from "./ScrollComponent";
import Cookies from "universal-cookie";

import ParticlesBG from "../../components/particles/Particles";
import Navbar from "../../components/navbar/Navbar";

const cookies = new Cookies();

class Home extends Component {
  componentDidMount() {
    if (!cookies.get("id")) {
      window.location.href = "./login";
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <ParticlesBG className="particles" />
        <ScrollComponent cookies={cookies} />
      </div>
    );
  }
}

export default Home;