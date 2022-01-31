// const initialState = {
//   userInfo: {},
//   isLogged: false,
// };

// const loggedState = {
//   userInfo: {
//     address: {
//       street: "street",
//       street_number: 123,
//       postal_code: 123,
//       city: "city",
//       country: "country",
//     },
//     _id: "61d6d91a8cf76b93aec32a2f",
//     first_name: "testRegisterForm",
//     last_name: "testRegisterForm",
//     email: "email@email.com",
//     isAdmin: false,
//     createdAt: "2022-01-06T11:57:14.709Z",
//     updatedAt: "2022-01-06T11:57:14.709Z",
//     __v: 0,
//     accessToken:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDZkOTFhOGNmNzZiOTNhZWMzMmEyZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDE4MzY5MzEsImV4cCI6MTcyODE1MDUzMX0.0QP-gj7KH_ksT0ob5xiAD-3PK-JR8OyCBqY09bXHnhU",
//   },
//   isLogged: true,
// };

import { authTypes } from "../types/authTypes";
const initialState = {
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.login:
      return { userInfo: { ...action.payload }, logged: true };

    case authTypes.logout:
      return { logged: false };

    default:
      return state;
  }
};
