import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../redux/actions/auth";
import { FormField } from "../FormField/FormField";
import { GeneralButton } from "../GeneralButton/GeneralButton";
import { GoogleButton } from "../GoogleButton/GoogleButton";
import "./Login.css";
const { REACT_APP_API_USER_LOGIN: LOGIN_URL } = process.env;

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
      headers: { "Content-type": "application/json" },
    }).then((req) => {
      req.json().then((data) => {
        dispatch(login(data));
        resetForm();
        // navigate("/showroom");
      });
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="login-form" action="" method="POST">
        <FormField
          autoFocus={true}
          fieldName={"email"}
          labelName={"Email"}
          name={"email"}
          placeholder={"Enter a registered email"}
          type={"email"}
        />
        <FormField
          fieldName={"password"}
          labelName={"Password"}
          name={"password"}
          placeholder={"Enter your password"}
          type={"password"}
        />
        <div className="form-btn">
          <GeneralButton type={"submit"} text={"LOGIN"} />
          <GoogleButton />
        </div>
        <div className="login-links">
          <Link to="/registration">Create an account</Link>
          <Link to="/password_recovery">
            <p> Forgot your password?</p>
          </Link>
        </div>
      </Form>
    </Formik>
  );
};
