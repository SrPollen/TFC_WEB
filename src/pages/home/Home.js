import "./Home.scss";
import { Component } from "react";
import Users from "../../components/users";
import BaseUrl from "../../components/globalvars";
import ScrollComponent from "./ScrollComponent";
import Cookies from "universal-cookie";

import BackVideo from "../../resources/video.mp4";

const cookies = new Cookies();

class Home extends Component {
  state = {
    users: [],
    isFetching: true,
  };

  componentDidMount() {
    if (!cookies.get("id")) {
      window.location.href = "./login";
    }

    fetch(BaseUrl + "/user")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data, isFetching: false });
      })
      .catch(console.log);
  }

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

    if (this.state.isFetching) {
      return "Loading ...";
    }

    return (
      <div>

        <ScrollComponent cookies={cookies} />
      </div>
    );
  }
}

export default Home;

  //<button onClick={this.logOut}>Cerrar sesión</button>
  //<Users users={this.state.users} />
