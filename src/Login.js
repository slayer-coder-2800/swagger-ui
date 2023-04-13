import React, { useState } from 'react';

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Ts-C_a4hu6" && password === "8X8&4u$4A4") {
      props.onLoginSuccess();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <label>Username:</label>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
