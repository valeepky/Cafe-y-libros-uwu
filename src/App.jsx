import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";

import BookList from "./componentes/BookList";
import Genres from "./componentes/Genres";
import Products from "./componentes/Products";
import Offers from "./componentes/Offers";
import Contact from "./componentes/Contact";
import Comunidad from "./componentes/Comunidad";


import Fabaiana from "./componentes/Fabaiana";
import Misterio from "./componentes/Misterio";
import CienciaFiccion from "./componentes/CienciaFiccion";

import CartButton from "./componentes/CartButton";
import Login from "./componentes/Login";
import RegistrarCuenta from "./componentes/RegistrarCuenta";

function App() {
  return (
    <BrowserRouter>
      {/* HEADER SIEMPRE VISIBLE */}
      <Header />

      <Routes>
        {/* INICIO */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BookList />
            </>
          }
        />

        {/* AUTENTICACIÓN */}
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<RegistrarCuenta />} />

        {/* LIBROS */}
        <Route
          path="/libros"
          element={
            <>
              <Genres />
              <Products />
              <CartButton />
            </>
          }
        />

        <Route
          path="/ofertas"
          element={
            <>
              <Offers />
              <CartButton />
            </>
          }
        />

        <Route path="/contacto" element={<Contact />} />
        <Route path="/comunidad" element={<Comunidad />} />

        {/* CATEGORÍAS */}
        <Route
          path="/Products"
          element={
            <>
              <Genres />
              <Products />
              <CartButton />
            </>
          }
        />

        <Route
          path="/romance"
          element={
            <>
              <Genres />
              <Fabaiana />
              <CartButton />
            </>
          }
        />

        <Route
          path="/misterio"
          element={
            <>
              <Genres />
              <Misterio />
              <CartButton />
            </>
          }
        />

        <Route
          path="/cienciaficcion"
          element={
            <>
              <Genres />
              <CienciaFiccion />
              <CartButton />
            </>
          }
        />
      </Routes>

      {/* FOOTER SIEMPRE ABAJO */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
