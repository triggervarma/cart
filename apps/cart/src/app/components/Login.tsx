import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

interface UserState {
  name: string;
  password: string;
}

const Login: React.FC = () => {
  const [user, setUser] = useState<UserState>({
    name: '',
    password: '',
  });

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = () => {
    console.log('form submitted', user);
  };
  return (
    <div id="login-form-wrap">
      <h2>Login</h2>
      <form id="login-form" onSubmit={handleOnSubmit}>
        <p>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleOnChange}
            required
          ></input>
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleOnChange}
            required
          ></input>
        </p>
        <Link to="/home">
          <p>
            <input type="submit" id="login" value="Login" />
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
