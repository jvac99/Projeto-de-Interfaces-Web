import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavegadorSuperior from "./components/commom/NavegadorSuperior";
import PaginaFeed from "./components/pages/PaginaFeed";
import PaginaPostar from "./components/pages/PaginaPostar";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <NavegadorSuperior />
      <Routes>
        <Route path="/" element={<PaginaFeed />} />
        <Route path="/paginaPostar" element={<PaginaPostar />} />
      </Routes>
    </BrowserRouter>
  );
}
