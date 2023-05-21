import { lazy } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Tweets } from "./pages/Tweets";

// const Home = lazy(() => import("./pages/Home"));
// const Tweets = lazy(() => import("./pages/Tweets"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
