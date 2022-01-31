# bikeville | MERN

Author: Martin I. Lupa Groppelli, January 2022.

Presentational video:

Full-stack MERN E-Commerce. List of products, product details, Contact info, Registration and Login. Shopping cart, Payment area and Order summary as protected routes that can only be accesed by logged users (Use of two routers).

UPDATE 19-01: Redux implemented in authentication process and popup window, working on admin Dashboard with full CRUD over displayed products (It will allow admin user to Create, Read, Update and Delete products from the database using a Dashboard from the frontend).

## Repository

https://github.com/MartinLupa/bikeville-mern

## How to use

Replace .env dummy variables.

Navigate to api and client folders and run in both:

```bash
npm install
npm start
```

## Project info

Tested with Node v14.16.1 and npm 6.14.12.

### Front-end | REACT

- useState, useEffect, useContext.
- React Router v6 | Public router and Private router.
- Protected routes: ShoppingCart, Pay and Success page.
- Use of third party APIs: Mailchimp(Newsletter), Leaflet(map on Contact page).
- Form management: Formik, Yup.
- Use of localStorage to maintain user session and shopping cart states.
- SASS.
- Libraries: Material UI, CSS Animate.

### Back-end | NODE, EXPRESS, MONGO, MONGOOSE

- REST Api made with Node and Express | Full CRUD.
- Payment via Stripe.
- Authentification/verification: JSON Web Token, Crypto JS, JWT.
- MongoDB, Mongoose.
