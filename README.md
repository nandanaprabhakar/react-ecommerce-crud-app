# React E-Commerce CRUD App

A responsive React-based e-commerce CRUD application built using the **Fake Store API**.  
The application allows users to view products, see product details, add new products, edit existing products, and delete products using client-side state management.

---

## Live Project

GitHub Repository:

https://github.com/nandanaprabhakar/react-ecommerce-crud-app

---

## Project Overview

This project is a React e-commerce application developed as a CRUD (Create, Read, Update, Delete) application.

The application fetches product information from the **Fake Store API** and provides an interactive interface for managing products on the client side.

### Main Features

- Display products from the Fake Store API
- View individual product details
- Add new products
- Edit existing products
- Delete products
- Client-side product state management
- Loading state while fetching products
- User-friendly error message when API requests fail
- Responsive design for desktop, tablet, and mobile
- Clean and modern user interface
- Product detail routing using React Router

---

## Technologies Used

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### UI Libraries

- Material UI (MUI)
- React Bootstrap

### Other Libraries

- Axios
- React Router DOM
- Material UI Icons
- React Icons
- 
### API

- Fake Store API

API URL:

https://fakestoreapi.com/products

---

## Features

### 1. Product Listing

Products are fetched from the Fake Store API and displayed in a responsive card layout.

Each product card displays:

- Product image
- Product title
- Product price
- View Details button
- Edit button
- Delete button

---

### 2. Product Details

Users can click the **View Details** button to navigate to a dedicated product details page.

The product details page displays:

- Product image
- Category
- Product title
- Price
- Description

Product details use a dynamic route based on the product ID.

Example:

```text
/product-details/1
/product-details/2
/product-details/3
```

### 3. Add Product

Users can add a new product using the **Add Product** form.

The form includes:

- Product name
- Category
- Price
- Description
- Image

New products are added to the client-side product list.

---

### 4. Edit Product

Users can edit an existing product using the **Edit** button.

The edit form is populated with the selected product's existing information.

Users can modify:

- Product name
- Category
- Price
- Description

After saving, the updated product is reflected in the product list.

---

### 5. Delete Product

Users can delete a product using the **Delete** button.

A confirmation message is displayed before deletion.

After confirmation, the selected product is removed from the client-side product state.

---

## Installation & Setup

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/nandanaprabhakar/react-ecommerce-crud-app.git
```

### 2. Navigate to the Project Folder

```bash
cd react-ecommerce-crud-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
 npm run dev
```

---

## Key Design & Technical Decisions

### 1. Component-Based Structure

The application is divided into separate React components to keep the code organized and maintainable.

Main components include:

- Product
- ProductDetails
- Add
- Edit
- Header
- Footer

