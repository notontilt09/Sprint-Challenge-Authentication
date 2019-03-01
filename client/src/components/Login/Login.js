import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
  };

  navToRegister = () => {
    this.props.history.push('/register')
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ 
        [name]: value,
        errMsg: ''
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:3300/api/login';

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);

        this.props.history.push('/jokes');
      })
      .catch(error => 
        this.setState({
            errMsg: error.response.data.message
        }));
  };

  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />Username: 
            <input
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />Password: 
            <input
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </div>

          <div>
            <button type="submit">Login</button>
            <button onClick={this.navToRegister}>Register</button>
          </div>
          <div>
            {this.state.errMsg &&
                this.state.errMsg
            }
          </div>
        </form>
      </>
    );
  }

}

export default Login;