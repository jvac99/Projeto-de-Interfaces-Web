import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaMostrar } from "./components/pages/paginaMostrar";
import { PaginaCadastro } from "./components/pages/paginaCadastro";
import { Navegador } from "./components/commom/navegador";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navegador />
      <Routes>
        <Route path="/" element={<PaginaCadastro />} />
        <Route path="/mostrar" element={<PaginaMostrar />} />
      </Routes>
    </BrowserRouter>
  );
};
