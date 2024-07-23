import React, { useRef, useEffect } from 'react';

function Profile({ user, onUpdateProfile }) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (user) {
      usernameRef.current.value = user.username;
      emailRef.current.value = user.email;
      ageRef.current.value = user.age;
      genderRef.current.value = user.gender;
      passwordRef.current.value = user.password;
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value,
      gender: genderRef.current.value,
      password: passwordRef.current.value,
    };

    onUpdateProfile(updatedUser);
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
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default Profile;
