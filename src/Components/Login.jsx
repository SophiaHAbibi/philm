import React, { useRef } from 'react';

function Login({ onLogin }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" ref={usernameRef} />
      <input type="password" placeholder="Password" ref={passwordRef} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
