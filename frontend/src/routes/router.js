import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Index from "../pages/Index/index";
import Login from "../pages/Login/index";
import Cadastro from "../pages/Cadastro/index";
import CatalogoCompra from "../pages/CatalogoCompra/index"
import Catalogo from "../pages/Catalogo/index"
import Carrinho from "../pages/Carrinho";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index />} path="/" exact></Route>
        <Route element={<Login />} path="/login" exact></Route>
        <Route element={<Cadastro />} path="/cadastro" exact></Route>
        <Route element={<CatalogoCompra />} path="/catalogoCompra" exact></Route>
        <Route element={<Catalogo />} path="/catalogo" exact></Route>
        <Route element={<Carrinho />} path="/carrinho" exact></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
