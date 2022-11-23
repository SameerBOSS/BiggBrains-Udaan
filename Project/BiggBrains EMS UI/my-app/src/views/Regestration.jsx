import axios from "axios";
import React from "react";
import bgImg from "../image/img1.jpg";
import { useForm } from "react-hook-form";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.66:3000/reg",
  timeout: 10000,
});

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      username: form.username.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
      mobileNO: form.mobile.value,
    };
    axiosInstance
      .post("", data)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // function Form() {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     const data = {
  //       username: form.username.value,
  //       password: form.password.value,
  //       confirmPassword: form.confirmPassword.value,
  //       mobile: form.mobile.value,
  //     };
  //     axiosInstance
  //       .post("/register", data)
  //       .then((res) => {
  //         alert(res.data);
  //       })
  //       .catch((error) => {
  //         alert(error);
  //       });
  //   };
  // }
  return (
    <>
      <div className="bgimage">
        <div className=" card2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <h2>Sign In</h2>
                  <span>register and enjoy the service</span>

                  <form id="form" className="flex flex-col" onSubmit={onSubmit}>
                    <input
                      type="text"
                      {...register("username", {
                        required: true,
                        maxLength: 18,
                        minLength: 5,
                      })}
                      placeholder="username"
                    />
                    <div className="error">
                      {" "}
                      {errors.username?.type === "required" &&
                        "username is required"}
                      {errors.username?.type === "maxLength" &&
                        "Max Length Exceed"}
                      {errors.username?.type === "minLength" &&
                        "Min Length Of 5 Should Be  Exceed"}
                    </div>

                    <input
                      type="text"
                      {...register("password", { required: true })}
                      placeholder="password"
                    />
                    <div className="error">
                      {" "}
                      {errors.password?.type === "required" &&
                        "password is required"}
                    </div>
                    <input
                      type="text"
                      {...register("confirmPassword", { required: true })}
                      placeholder="confirm password"
                    />
                    <div className="error">
                      {errors.confirmPassword?.type === "required" &&
                        "confirm password is required"}
                    </div>
                    <input
                      type="number"
                      {...register("mobile", {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                      })}
                      placeholder="mobile number"
                    />
                    <div className="error">
                      {" "}
                      {errors.mobile?.type === "required" &&
                        "Mobile Number is required"}
                      {errors.mobile?.type === "maxLength" &&
                        "Max Length Exceed"}
                      {errors.mobile?.type === "minLength" &&
                        "Min Length Of 10 Should Be Exceed"}
                    </div>
                    <br />
                    <button className="btn">Sign In</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <img className="image" src={bgImg} alt="Biggbrains" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
