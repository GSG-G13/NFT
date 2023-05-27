import { useState } from "react";
import axios from "axios";
import "./signup.css";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
const Signup = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/signup", formData);
      location.href = "/main";
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const spans = Array.from({ length: 50 }, (_, index) => (
    <span key={index} style={{ "--i": index }}></span>
  ));

  return (
    <>
      <Nav type="signup" />
      <div className="container auth">
        <div className="auth-box">
          <h2>SignUp</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="username..."
              />
              <label>Username</label>
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email..."
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="password..."
              />
              <label>Password</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="confirmPassword..."
              />
              <label>Confirm password</label>
            </div>
            <button className="btn">Sign Up</button>
          </form>
          <div className="container rotate">{spans}</div>
          <p className="haveAcount">
            I have an account <Link to="/login">Log-in</Link>
          </p>
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        </div>
      </div>
    </>
  );
};
export default Signup;
