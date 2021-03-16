import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveUserData } from '../../actions/actions';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      disabled: true,
    };

    this.renderInputEmail = this.renderInputEmail.bind(this);
    this.renderInputPassword = this.renderInputPassword.bind(this);
  }

  handleChange({ target: { name, value } }) {
    console.log(name, value);
    this.setState(
      {
        [name]: value,
      },
      () => this.validEmail(),
    );
  }

  renderInputEmail() {
    const { email } = this.state;
    return (
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => this.handleChange(e)}
          required
        />
      </label>
    );
  }

  renderInputPassword() {
    const { password } = this.state;
    return (
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => this.handleChange(e)}
          required
        />
      </label>
    );
  }

  redirect() {
    this.setState({
      loggedIn: true,
    });
  }

  validEmail() {
    const { email, password } = this.state;
    let disabled = true;
    const emailValid = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    const minLength = 4;
    disabled = !(emailValid.test(email) && password.length >= minLength);
    this.setState({
      disabled,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { saveUserData } = this.props;
    saveUserData(email);
    this.redirect();
  }

  renderButton() {
    const { disabled } = this.state;
    return (
      <button
        type="submit"
        disabled={disabled}
        onClick={() => this.handleClick()}
      >
        Login
      </button>
    );
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <form>
        {this.renderInputEmail()}
        {this.renderInputPassword()}
        {this.renderButton()}
        {loggedIn ? <Redirect to="/tasks" /> : ''}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUserData: (data) => dispatch(saveUserData(data)),
});

export default connect(null, mapDispatchToProps)(Input);
