import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavegadorSuperior from "./components/commom/NavegadorSuperior";
import PaginaFeed from "./components/pages/PaginaFeed";
import PaginaPostar from "./components/pages/PaginaPostar";
import PaginaCadastro from "./components/pages/PaginaCadastro";
import PaginaLogin from "./components/pages/PaginaLogin";

export const authContext = createContext(null);

export const AppRoutes = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const setTokenLocal = (token, status) => {
    if (status) {
      setToken(token);
      localStorage.setItem("token", token);
    } else {
      setToken(token);
      localStorage.removeItem("token");
    }
  };

  return (
    <authContext.Provider value={{ token: token, setToken: setTokenLocal }}>
      <BrowserRouter>
        <NavegadorSuperior />
        <Routes>
          <Route
            path="/"
            element={token == null ? <PaginaLogin /> : <PaginaFeed />}
          />
          <Route path="/paginaPostar" element={<PaginaPostar />} />
          <Route path="/paginaCadastro" element={<PaginaCadastro />} />
          <Route path="/paginaLogin" element={<PaginaLogin />} />
        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  );
};
