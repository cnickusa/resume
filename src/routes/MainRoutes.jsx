import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddForm from "../components/AddForm";
import TodoList from "../components/TodoList";
import EditForm from "../components/EditForm";
import axios from "axios";

const MainRoutes = () => {
  const [products, setProducts] = useState([]);
  const API = "http://localhost:8001/products";
  console.log(products);

  function addProduct(newProduct) {
    axios.post(API, newProduct);
  }

  async function getProducts() {
    let res = await axios.get(API);
    setProducts(res.data);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<TodoList getProducts={getProducts} products={products} />}
      />
      <Route path="/add" element={<AddForm addProduct={addProduct} />} />
      <Route path="edit" element={<EditForm />} />
    </Routes>
  );
};

export default MainRoutes;