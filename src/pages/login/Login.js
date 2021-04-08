import "./Login.scss";
import { Component } from "react";
import BaseUrl from "../../components/globalvars";
import Cookies from "universal-cookie";
import md5 from "md5";

import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import LockIcon from "@material-ui/icons/Lock";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const cookies = new Cookies();

class Login extends Component {
  state = {
    loginMode: true,
    loginValidation: false,
    formL: {
      username: "",
      password: "",
    },
    formR: {
      name: "",
      lastname: "",
      usernameR: "",
      passwordR: "",
      email: "",
    },
  };

  componentDidMount() {
    if (cookies.get("id")) {
      window.location.href = "./";
    }
  }

  handleChangeLogin = async (e) => {
    await this.setState({
      formL: {
        ...this.state.formL,
        [e.target.name]: e.target.value,
      },
    });

    if (e.target.checkValidity()) {
      e.target.parentElement.classList.remove("invalid");
    }
    console.log(this.state.formL);
  };

  handleChangeRegister = async (e) => {
    await this.setState({
      formR: {
        ...this.state.formR,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.formR);
  };

  logIn = async () => {
    this.validateLogin();
    if (this.state.loginValidation) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.state.formL.username,
          password: md5(this.state.formL.password),
        }),
      };
      fetch(BaseUrl + "/login", requestOptions)
        .then(async (response) => {
          try {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            } else {
              console.log(data);
              console.log(response);
              cookies.set("id", data.id, { path: "/" });
              cookies.set("username", data.username, { path: "/" });
              cookies.set("email", data.email, { path: "/" });
              window.location.href = "./";
            }
          } catch (error) {
            console.error(error);
            document.getElementById("error-login").innerHTML =
              "Usuario o contraseña incorrectos";
          }
        })
        .catch((error) => {
          this.setState({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
    }
  };

  registerUser = async () => {
    if (this.validateRegister) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.formR.name,
          lastname: this.state.formR.lastname,
          username: this.state.formR.usernameR,
          password: md5(this.state.formR.passwordR),
          email: this.state.formR.email,
        }),
      };
      fetch(BaseUrl + "/register", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          } else {
            console.log(data);
            console.log(response);
            cookies.set("id", data.id, { path: "/" });
            cookies.set("username", data.username, { path: "/" });
            cookies.set("email", data.email, { path: "/" });
            //window.location.href = "./";
          }
        })
        .catch((error) => {
          this.setState({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
    } else {
      console.log("Contraseña diferente");
    }
  };

  toggleRegister = () => {
    this.setState({ loginMode: !this.state.loginMode });
  };

  validateLogin = () => {
    document.getElementById("error-login").innerHTML ="";
    let loginFields = [
      document.getElementById("username"),
      document.getElementById("password"),
    ];
    let success = true;
    loginFields.forEach((element) => {
      if (!element.checkValidity()) {
        console.log(element.validationMessage);
        element.parentElement.classList.add("invalid");
        element.reportValidity();
        success = false;
      } else {
        element.parentElement.classList.remove("invalid");
      }
    });
    this.setState({ loginValidation: success });
  };

  validateRegister = () => {
    if (
      document.getElementById("pass").value ===
      document.getElementById("passConfirm").value
    ) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <div
        className={
          this.state.loginMode ? "container" : "container sign-up-mode"
        }
      >
        <div className="forms-container">
          <div className="signin-signup">
            <div className="form sign-in-form">
              <h2 className="title">Inicia sesión</h2>
              <div className="input-field">
                <div className="centered-icon">
                  <PersonIcon color="primary" />
                </div>
                <input
                  id="username"
                  type="text"
                  placeholder="Nombre de usuario"
                  name="username"
                  onChange={this.handleChangeLogin}
                  minLength="4"
                  maxLength="20"
                  required
                />
              </div>
              <div className="input-field">
                <div className="centered-icon">
                  <LockIcon color="primary" />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  onChange={this.handleChangeLogin}
                  minLength="4"
                  required
                />
              </div>
              <button className="btn" onClick={this.logIn}>
                Iniciar sesión
              </button>
              <p id="error-login" className="error-text"></p>
            </div>

            <div className="form sign-up-form">
              <h2 className="title">Registrarse</h2>
              <div className="input-field">
                <div className="centered-icon">
                  <PersonIcon color="primary" />
                </div>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  onChange={this.handleChangeRegister}
                  minLength="4"
                  maxLength="20"
                  required
                />
              </div>
              <div className="input-field">
                <div className="centered-icon">
                  <GroupIcon color="primary" />
                </div>
                <input
                  type="text"
                  placeholder="Apellido"
                  name="lastname"
                  onChange={this.handleChangeRegister}
                  minLength="4"
                  maxLength="20"
                  required
                />
              </div>
              <div className="input-field">
                <div className="centered-icon">
                  <AccountBoxIcon color="primary" />
                </div>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  name="usernameR"
                  onChange={this.handleChangeRegister}
                  minLength="4"
                  maxLength="20"
                  required
                />
              </div>
              <div className="input-field">
                <div className="centered-icon">
                  <MailIcon color="primary" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChangeRegister}
                  minLength="6"
                  required
                />
              </div>
              <div className="input-field">
                <div className="centered-icon">
                  <LockIcon color="primary" />
                </div>
                <input
                  id="pass"
                  type="password"
                  placeholder="Contraseña"
                  name="passwordR"
                  onChange={this.handleChangeRegister}
                  minLength="4"
                  required
                />
              </div>
              <div className="input-field">
                <div className="centered-icon">
                  <LockIcon color="primary" />
                </div>
                <input
                  id="passConfirm"
                  type="password"
                  placeholder="Confirmar contraseña"
                  name="confirm"
                  onChange={this.handleChangeRegister}
                  minLength="4"
                  required
                />
              </div>
              <button className="btn" onClick={this.registerUser}>
                Registrarse
              </button>
            </div>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>¿No tienes cuenta?</h3>
              <p>
                Registrate ahora facilmente para poder acceder a la DESCARGA del
                juego y ver los TOPS.
              </p>
              <button
                className="btn transparent"
                onClick={this.toggleRegister}
                id="sign-up-btn"
              >
                Registrarse
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>¿Ya tienes cuenta?</h3>
              <p>
                Inicia sesión para poder acceder a la DESCARGA del juego y ver
                los TOPS.
              </p>
              <button
                className="btn transparent"
                onClick={this.toggleRegister}
                id="sign-in-btn"
              >
                Inicia sesión
              </button>
            </div>
            <img src="" className="image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
