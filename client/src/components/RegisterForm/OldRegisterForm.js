import { useFormik } from "formik";
import { Link } from "react-router-dom";
import GeneralButton from "../GeneralButton/GeneralButton";
import "./RegisterForm.css";

// const validationSchema = Yup.object({
//   first_name: Yup.string().required("Required"),
//   last_name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email format").required("Required"),
//   street: Yup.string().required("Required"),
//   street_number: Yup.number().required("Required"),
//   postal_code: Yup.number().required("Required"),
//   city: Yup.string().required("Required"),
//   country: Yup.string().required("Required"),
//   password: Yup.string().required("Required"),
// });

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      address: {
        street: "",
        street_number: "",
        postal_code: "",
        city: "",
        country: "",
      },
      password: "",
      repeat_password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch("http://localhost:5000/api/auth/registration", {
        method: "POST",
        body: JSON.stringify({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          address: {
            street: values.street,
            street_number: values.street_number,
            postal_code: values.postal_code,
            city: values.city,
            country: values.country,
          },
          password: values.password,
          repeat_password: values.repeat_password,
        }),
        headers: { "Content-type": "application/json" },
      }).then((req) => {
        req.json().then((data) => {
          console.log(data);
        });
      });
    },
    // validationSchema,
  });

  // console.log("Visited fields", formik.touched);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="register-form"
      action=""
      method="POST"
    >
      <h4>Create account</h4>
      <div className="form-row">
        <div className="form-col">
          <label htmlFor="first_name">First name</label>
          <input
            className={
              formik.touched.first_name && formik.errors.first_name && "error"
            }
            id="first_name"
            name="first_name"
            type="text"
            placeholder="Enter first name"
            autoComplete="on"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.first_name}
          />
        </div>

        <div className="form-col">
          <label htmlFor="last_name">Last name</label>
          <input
            className={
              formik.touched.last_name && formik.errors.last_name && "error"
            }
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Enter last name"
            autoComplete="on"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.last_name}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <label htmlFor="email">Email</label>
          <input
            className={formik.touched.email && formik.errors.email && "error"}
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="on"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="form-col">
          <label htmlFor="repeat_email"></label>
          <input
            className={formik.touched.email && formik.errors.email && "error"}
            id="repeat_email"
            name="repeat_email"
            type="email"
            placeholder="Repeat your email"
            autoComplete="on"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <label htmlFor="address">Address</label>
          <input
            className={formik.touched.street && formik.errors.street && "error"}
            id="address"
            name="street"
            type="text"
            placeholder="Street name"
            autoComplete="on"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address.street}
          />
        </div>
        <div className="form-row">
          <div className="form-col">
            <input
              className={`short ${
                formik.touched.street_number &&
                formik.errors.street_number &&
                "error"
              }`}
              name="street_number"
              type="number"
              placeholder="Number"
              autoComplete="on"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address.street_number}
            />
          </div>
          <div className="form-col">
            <input
              className={`short ${
                formik.touched.postal_code &&
                formik.errors.postal_code &&
                "error"
              }`}
              name="postal_code"
              type="number"
              placeholder="Postal Code"
              autoComplete="on"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address.postal_code}
            />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <input
            className={formik.touched.city && formik.errors.city && "error"}
            name="city"
            type="text"
            placeholder="City"
            autoComplete="on"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address.city}
          />
        </div>
        <div className="form-col">
          <input
            className={
              formik.touched.country && formik.errors.country && "error"
            }
            name="country"
            type="text"
            placeholder="Country"
            autoComplete="on"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address.country}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <label htmlFor="password">Password</label>
          <input
            className={
              formik.touched.password && formik.errors.password && "error"
            }
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="on"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className="form-col">
          <input
            className={
              formik.touched.password && formik.errors.password && "error"
            }
            name="repeat_password"
            type="password"
            placeholder="Repeat your password"
            autoComplete="on"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.repeat_password}
          />
        </div>
      </div>
      <Link to="/login">Already have an account?</Link>
      <div className="form-btn">
        <GeneralButton type={"submit"} text={"REGISTER"} />
      </div>
    </form>
  );
}
