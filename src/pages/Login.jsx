import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const EMAIL_REGEX = /\w+@\w+\.\S+/g;
  const numberSix = 6;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = () => {
    localStorage.setItem(user, { email: value });
    history.push('/foods');
  };

  const emailTest = EMAIL_REGEX.test(user.email);
  const passwordTest = user.password.length >= numberSix;
  console.log(!emailTest);

  return (
    <div>
      <p>Login</p>
      <form>
        <input
          className="emailInput"
          type="text"
          name="email"
          data-testid="email-input"
          onChange={ handleChange }
        />
        <input
          className="passwordInput"
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ handleChange }
        />
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={ !emailTest && !passwordTest }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
