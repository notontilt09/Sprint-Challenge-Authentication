import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
  };

  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:3300/api/register';

    axios
      .post(endpoint, this.state)
      .then(res => {
        this.props.history.push('/login');
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <h2>Register</h2>
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
            <button type="submit">Register</button>
          </div>
        </form>
      </>
    );
  }

}

export default Register;