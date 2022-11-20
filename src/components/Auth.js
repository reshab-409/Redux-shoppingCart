
import './Log2.css';
import axios from "axios";
import P1 from './images/P1.jpg';
import { Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authActions } from "../store/Auth-slice";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('http://localhost:5001/user/login', data).then(() => {
      const loginData = JSON.stringify(data);
      window.localStorage.setItem("userData", loginData);
      dispatch(authActions.Login());
      navigate("/Layout")
      window.location.reload();
    }).catch(() => {
      setError("Email or Password is incorrect");
    })
  }

  return (
    <>
      <div className="container1">
        <div className="card1">
          <div className="form1">
            <div className="left-side1">
              <img src={P1} alt="pic here" />
            </div>
            <div className="right-side1">
              <div className="heading1">
                <h3>Log in here.</h3>
                <p>Welcome Back! login with your data that you entered during registration.</p>
              </div>
              <div className="social">
                <span><i className="fa fa-google"></i>Log in with Google</span>
                <span><i className="fa fa-facebook-f"></i>Log in with Facebook</span>
              </div>
              <hr />
              <div className="or">
                <p>or</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {error && <p><font color="red">{error}</font></p>}
                <Form.Field>
                  <label>Email</label>
                  <input
                    placeholder='Email'
                    type="text"
                    {...register("email",
                      {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      })}
                  />
                </Form.Field>
                {errors.email && <p><font color="red">Please check the Email</font></p>}
                <Form.Field>
                  <label>Password</label>
                  <input
                    placeholder='Password'
                    type="password"
                    {...register("password", {
                      required: true,
                      // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                    })}
                  />
                </Form.Field>
                {errors.password && <p><font color="red">Please check the Password</font></p>}

                <div className="button1">
                  <button type="submit">Login</button>
                </div>
              </form>
              <div className="register1">
                <p><a href="/Layout">Skip for now </a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Auth;