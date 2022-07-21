import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Slug from "./pages/Slug";
import "./assets/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`/:slug`} element={<Slug />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
