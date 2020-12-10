import React, {useState} from 'react';

const Login = props => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const onLogin = () => {
    props.history.push('/home');
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={getname => setusername({getname})}
        placeholder={'Username'}
      />
      <input
        type="text"
        value={password}
        onChange={getpassword => setpassword({getpassword})}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
