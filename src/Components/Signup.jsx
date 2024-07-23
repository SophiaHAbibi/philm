import React, { useRef } from 'react';

function Signup({ onSignup }) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value,
      gender: genderRef.current.value,
      password: passwordRef.current.value,
    };

    onSignup(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" ref={usernameRef} />
      <input type="email" placeholder="Email" ref={emailRef} />
      <input type="number" placeholder="Age" ref={ageRef} />
      <select ref={genderRef}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input type="password" placeholder="Password" ref={passwordRef} />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
