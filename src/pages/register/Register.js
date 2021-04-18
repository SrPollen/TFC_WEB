import "./Register.scss";
import { Component } from "react";
import BaseUrl from "../../components/globalvars";

class Register extends Component {
  state = {
    form: {
      username: "",
      password: "",
      email: "",
    },
  };

  register = async () => {
    if (this.validateForm) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.state.form.username,
          password: this.state.form.password,
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
            window.location.href = "./";
          }
        })
        .catch((error) => {
          this.setState({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
    }
  };

  validateForm = () => {
    return true;
  };

  render() {
    return (
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="firstname"
          onChange={this.handleChange}
          required
        />
        <label>Apellido:</label>
        <input
          type="text"
          name="lastname"
          onChange={this.handleChange}
          required
        />
        <label>Nombre de usuario:</label>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          required
        />
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          required
        />
        <label>Confirma la contraseña:</label>
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          required
        />
        <button className="btn" onClick={this.register}>
          Registrarse
        </button>
        <a href="./login">¿Ya tienes una cuenta? Inicia sesión</a>

        <label>User:</label>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          required
        />
        <button className="btn" onClick={this.logIn}>
          Login
        </button>
        <a href="./register">¿No tienes cuenta?</a>
      </div>
    );
  }
}

export default Register;
