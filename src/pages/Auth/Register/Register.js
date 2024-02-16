import React from "react";
import NavBar from "../../../Layouts/Navbar/NavBar";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginVector from "../../../assets/Images/login_vector-spy.jpg";
import Footer from "../../../Layouts/Footer/Footer";
import * as Yup from "yup";
import CryptoJS from "crypto-js";

function Register() {
  const navigate = useNavigate();
  const encryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, "secret key").toString(); // Encrypt the password using SHA256 algorithm
  };
  return (
    <div>
      <div className="firstSectionBackground">
        <NavBar />
        <div className="">
          <div className="container MainSection ">
            <div className="row LoginBox">
              <div className="col col-lg-6 borderRight loginvector">
                <img src={LoginVector} alt="login-vector" className="borderRadious" width="100%" />
              </div>
              <div className="col loginpageForm col-lg-6 borderRadious">
                <div className="w-100">
                  <h2 className="text-center bolder py-3">Register</h2>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                    }}
                    validationSchema={Yup.object().shape({
                      firstName: Yup.string().required(
                        "First Name is required"
                      ),
                      lastName: Yup.string().required("Last Name is required"),
                      email: Yup.string()
                        .email("Invalid email")
                        .required("Email is required"),
                      password: Yup.string().required("Password is required"),
                      confirmPassword: Yup.string()
                        .oneOf(
                          [Yup.ref("password"), null],
                          "Passwords must match"
                        )
                        .required("Confirm Password is required"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        const { confirmPassword, ...submitValues } = values; // Destructure values and exclude confirmPassword
                        const encryptedPassword = encryptPassword(
                          submitValues.password
                        );
                        // Now you can use the encryptedPassword wherever you need
                        localStorage.setItem(
                          "userDetails",
                          JSON.stringify({
                            ...submitValues,
                            password: encryptedPassword,
                          })
                        );
                        navigate("/login");
                        setSubmitting(false);
                      }, 400);
                    }}
                    // onSubmit={(values)=>{
                    //   console.log("set")
                    //   localStorage.setItem('userDetails' , JSON.stringify(values))
                    // }
                    //   (values, { setSubmitting }) => {
                    //   setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    //   }, 400);
                    // }
                    // }
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="my-3 row">
                          <div className="col">
                            <label>First Name</label>
                            <Field
                              type="text"
                              name="firstName"
                              className="form-control mt-2"
                              placeholder="Enter Your First Name"
                            />
                            <ErrorMessage
                              name="firstName"
                              className="error-msg"
                              component="div"
                            />
                          </div>
                          <div className="col">
                            <label>Last Name</label>
                            <Field
                              type="text"
                              name="lastName"
                              className="form-control mt-2"
                              placeholder="Enter Your Last Name"
                            />
                            <ErrorMessage
                              name="lastName"
                              className="error-msg"
                              component="div"
                            />
                          </div>
                        </div>
                        <div className="my-3 row">
                          <div className="col">
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
                        </div>
                        <div className="my-3 row">
                          <div className="col">
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
                          <div className="col">
                            <label>Confirm Password</label>
                            <Field
                              type="password"
                              name="confirmPassword"
                              className="form-control mt-2"
                              placeholder="Confirm Your Password"
                            />
                            <ErrorMessage
                              name="confirmPassword"
                              className="error-msg"
                              component="div"
                            />
                          </div>
                        </div>
                        <div className="d-flex pt-3 justify-content-center">
                          <button
                            type="submit"
                            className="my-3 px-3 py-1 loginBtn"
                            disabled={isSubmitting}
                          >
                            Register
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                  <div className="text-center signupText">
                    <small>Already have an account? </small>
                    <small
                      className="text-primary pointer"
                      onClick={() => {
                        navigate("/login");
                        window.scroll(0, 0);
                      }}
                    >
                      Log In
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
}

export default Register;
