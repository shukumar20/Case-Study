import React from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container />
        <Footer />
      </Router>
    </div>
  );
}
