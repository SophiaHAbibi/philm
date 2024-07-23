import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import Movie from "./Components/Movie";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";

function App() {
  const [user, setUser] = useState(null);

  const handleSignup = (formData) => {
    setUser(formData);
    alert('Signup successful!');
  };

  const handleLogin = (formData) => {
    if (user && user.username === formData.username && user.password === formData.password) {
      alert('Login successful!');
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleUpdateProfile = (updatedUser) => {
    setUser(updatedUser);
    alert('Profile updated successfully!');
  };
    
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={<Profile user={user} onUpdateProfile={handleUpdateProfile} />} />
      </Routes>
    </Router>
  );
}

export default App;
