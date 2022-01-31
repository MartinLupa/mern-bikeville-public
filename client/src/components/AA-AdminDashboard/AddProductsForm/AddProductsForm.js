import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormField } from "../../FormField/FormField";
import { GeneralButton } from "../../GeneralButton/GeneralButton";
import "./AddProductsForm.css";
const { REACT_APP_TOKEN: token } = process.env;

// const initialValues = {
//   model: "Test",
//   trail_type: "Test",
//   product_id: "TEST01",
//   image:
//     "https://content.roadbikereview.com/channels/roadbikereview/images/products/large/product_490188_25643.jpg",
//   short_description: "Test",
//   description: "Test",
//   type: "Test",
//   brake_type: "Test",
//   groupset: "Test",
//   sizes: [],
//   net_price: 123,
//   vat: 123,
//   full_price: 123,
//   inStock: true,
//};
const initialValues = {
  model: "",
  trail_type: "",
  product_id: "",
  image: "",
  short_description: "",
  description: "",
  type: "",
  brake_type: "",
  groupset: "",
  sizes: [],
  net_price: "",
  vat: "",
  full_price: "",
  inStock: true,
};

const validationSchema = Yup.object({
  model: Yup.string().required("Required"),
  trail_type: Yup.string().required("Required"),
  product_id: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  short_description: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  type: Yup.string().required("Required"),
  brake_type: Yup.string().required("Required"),
  groupset: Yup.string().required("Required"),
  sizes: Yup.string().required("Required"),
  net_price: Yup.number().required("Required"),
  vat: Yup.number().required("Required"),
  full_price: Yup.number().required("Required"),
});

const onSubmit = (values, { resetForm }) => {
  //Sizes need to be modificed, since they are received as a string, but need to reach the db as an Array.
  const { sizes, ...rest } = values;
  const transformedSizes = sizes.split(", ").map((item) => parseInt(item, 10));
  const modifiedValues = { sizes: transformedSizes, ...rest };

  fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      token: `Bearer ${token}`,
    },

    body: JSON.stringify({
      ...modifiedValues,
    }),
  });

  console.log(modifiedValues);

  // resetForm();
};

export const AddProductsForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="products-form" method="POST">
        <h2>Add product</h2>
        <div className="form-row">
          <FormField
            fieldName={"model"}
            labelName={"Model"}
            name={"model"}
            placeholder={"Enter model name"}
            type={"text"}
          />
          <FormField
            fieldName={"trail_type"}
            labelName={"Trail type"}
            name={"trail_type"}
            placeholder={"Enter trail type"}
            type={"text"}
          />
        </div>
        <div className="form-row">
          <FormField
            fieldName={"product_id"}
            labelName={"Product ID"}
            name={"product_id"}
            placeholder={"Product ID"}
            type={"text"}
          />
          <FormField
            fieldName={"image"}
            labelName={"Image URL"}
            name={"image"}
            placeholder={"Enter image URL"}
            type={"text"}
          />
        </div>
        <div className="form-row">
          <FormField
            fieldName={"short_description"}
            labelName={"Short description"}
            name={"short_description"}
            placeholder={"Short description"}
            type={"text"}
          />
          <FormField
            fieldName={"description"}
            labelName={"Description"}
            name={"description"}
            placeholder={"Description"}
            type={"text"}
          />
        </div>
        <div className="form-row">
          <FormField
            fieldName={"type"}
            name={"type"}
            labelName={"Type"}
            placeholder={"Complete bike, frameset, etc."}
            type={"text"}
          />

          <FormField
            fieldName={"brake_type"}
            labelName={"Brake type"}
            name={"brake_type"}
            placeholder={"Brake type"}
            type={"text"}
          />
        </div>
        <div className="form-row">
          <FormField
            fieldName={"groupset"}
            labelName={"Groupset"}
            name={"groupset"}
            placeholder={"Groupset"}
            type={"text"}
          />
          <FormField
            fieldName={"sizes"}
            labelName={"Sizes"}
            name={"sizes"}
            placeholder={"Enter coma sepparated values. Ex: 48, 51, 54.."}
            type={"text"}
          />
        </div>

        <div className="form-row">
          <FormField
            className={"short"}
            fieldName={"net_price"}
            labelName={"Net price"}
            name={"net_price"}
            placeholder={"Enter net price"}
            type={"number"}
          />
          <FormField
            className={"short"}
            fieldName={"vat"}
            labelName={"VAT"}
            name={"vat"}
            placeholder={"Enter VAT"}
            type={"number"}
          />
          <FormField
            fieldName={"full_price"}
            labelName={"Full price"}
            name={"full_price"}
            placeholder={"Enter full price"}
            type={"number"}
          />
        </div>

        <div className="form-btn">
          <GeneralButton type={"submit"} text={"ADD PRODUCT"} />
        </div>
      </Form>
    </Formik>
  );
};

// const headers = new Headers();
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDgyNzk2YTNlNzY5NzcwOTE0ZjVhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTU1NjM5NiwiZXhwIjoxNzI3ODY5OTk2fQ.2It5EWX_Pvxh2Di3z5zJ9kbIoDcM7ejW96KX534wllg";
// headers.append("Content-Type", "application/json");
// headers.append("authorization", "Bearer" + token);
// fetch("http://localhost:5000/api/products", {
//   method: "POST",

//   body: JSON.stringify({
//     model: values.model,
//     trail_type: values.trail_type,
//     product_id: values.product_id,
//     image: values.image,
//     short_description: values.short_description,
//     description: values.description,
//     type: values.type,
//     brake_type: values.brake_type,
//     groupset: values.groupset,
//     sizes: transformedSizes,
//     net_price: values.net_price,
//     vat: values.vat,
//     full_price: values.full_price,
//     inStock: true,
//   }),
//   headers: headers,
// }).then((req) => {
//   req.json().then((data) => {
//     console.log(data);
//   });
// });
// resetForm();
