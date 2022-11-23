import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import image from "../image/loginpage.jpg";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.38:3000/",
  timeout: 10000,
});

function Login() {
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    const data = {
      username: form.username.value,
      password: form.password.value,
    };
    axiosInstance
      .post("/login", data)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className=" card">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <h1>login page</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">username</label>
                  <br />
                  <input type="text" id="username" name="username" />
                  <br />
                  <label htmlFor="password">password</label>
                  <br></br>
                  <input type="text" id="password" name="password" />
                  <br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="image" src={image} alt="Biggbrains" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
