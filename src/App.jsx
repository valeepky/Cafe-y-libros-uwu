import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import BookList from "./componentes/BookList";
import Genres from "./componentes/Genres";
import Products from "./componentes/Products";
import Offers from "./componentes/Offers";
import Contact from "./componentes/Contact";
import Fabaiana from "./componentes/Fabaiana";
import Misterio from "./componentes/Misterio";
import CienciaFiccion from "./componentes/CienciaFiccion";
import CartButton from "./componentes/CartButton";
import Login from "./componentes/Login";
import RegistrarCuenta from "./componentes/RegistrarCuenta";
import Comunidad from "./componentes/Comunidad";


function App() {
  return (
    
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <BookList />
              </>
            }
          />

          <Route path="/libros" element={<><Hero /><Genres /><Products /><CartButton /></>} />
          <Route path="/ofertas" element={<><Hero /><Offers /><CartButton /></>} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/registrarse" element={<RegistrarCuenta />} />

          <Route path="/ficcion" element={<><Hero /><Genres /><Products /><CartButton /></>} />
          <Route path="/romance" element={<><Hero /><Genres /><Fabaiana /><CartButton /></>} />
          <Route path="/misterio" element={<><Hero /><Genres /><Misterio /><CartButton /></>} />
          <Route path="/cienciaficcion" element={<><Hero /><Genres /><CienciaFiccion /><CartButton /></>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
