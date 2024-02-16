import React, { useEffect } from "react";
import NavBar from "../../../Layouts/Navbar/NavBar";
import Footer from "../../../Layouts/Footer/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginVector from "../../../assets/Images/login_vector-spy.jpg";
import * as Yup from "yup";
import "./Login.css";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../Data/DataFile";

const LoginPage = () => {
  const { Cart, AddCart, PendingCart, setPendingCart } = useData();
  console.log(PendingCart);
  const navigate = useNavigate();
  const UserRegisterInfo = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : "";

  const generateToken = () => {
    const token = Math.random().toString(36).substr(2);
    localStorage.setItem("token", token);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="firstSectionBackground">
        <NavBar />
        <div className="">
          <div className="container MainSection">
            <div className="row LoginBox">
              <div className="col col-lg-6 col-12 borderRight ">
                <img
                  src={LoginVector}
                  alt="login-vector"
                  className="borderRadious"
                  width="100%"
                />
              </div>
              <div className="col loginpageForm borderRadious col-12 col-lg-6">
                <div className="w-100">
                  <h2 className="text-center bolder py-3">Login</h2>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string()
                        .email("Invalid email")
                        .required("Email is required"),
                      password: Yup.string().required("Password is required"),
                    })}
                    onSubmit={(values, { setSubmitting, setErrors }) => {
                      if (values.email !== UserRegisterInfo?.email) {
                        setErrors({
                          password: "The username or password incorrect.",
                        });
                        setSubmitting(false);
                        return;
                      }

                      const decryptedBytes = CryptoJS.AES.decrypt(
                        UserRegisterInfo?.password,
                        "secret key"
                      );

                      const storedPassword = decryptedBytes.toString(
                        CryptoJS.enc.Utf8
                      );

                      if (values.password !== storedPassword) {
                        setErrors({
                          password: "The username or password incorrect.",
                        });
                        setSubmitting(false);
                        return;
                      }

                      generateToken();
                      // debugger
                      console.log(PendingCart);
                      if (PendingCart) {
                        AddCart([...Cart, PendingCart]);
                        navigate("/cart");
                        console.log(PendingCart);
                        setPendingCart();
                      } else {
                        navigate("/");
                        window.scroll(0, 0);
                      }
                    }}

                    // onSubmit={(values, { setSubmitting }) => {

                    //   const decryptedBytes = CryptoJS.AES.decrypt(
                    //     UserRegisterInfo?.password,
                    //     "secret key"
                    //   );
                    //   const dycrypted_password = decryptedBytes

                    //   // return decryptedBytes.toString(CryptoJS.enc.Utf8);
                    // }}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="my-3">
                          <label>Email</label>
                          <Field
                            type="email"
                            name="email"
                            className="form-control mt-2"
                            placeholder="Enter Your Email"
                          />
                          <ErrorMessage
                            name="email"
                            className="error-msg"
                            component="div"
                          />
                        </div>
                        <div>
                          <label>Password</label>
                          <Field
                            type="password"
                            name="password"
                            className="form-control mt-2"
                            placeholder="Enter Your Password"
                          />
                          <ErrorMessage
                            name="password"
                            className="error-msg"
                            component="div"
                          />
                        </div>
                        <div className="d-flex pt-3 justify-content-center">
                          <button
                            type="submit"
                            className="my-3 px-3 py-1 loginBtn"
                            disabled={isSubmitting}
                          >
                            Login
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                  <div className="text-center signupText">
                    <small>Don't have an account? </small>
                    <small
                      className="text-primary pointer"
                      onClick={() => {
                        navigate("/register");
                        window.scroll(0, 0);
                      }}
                    >
                      Sign Up
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
