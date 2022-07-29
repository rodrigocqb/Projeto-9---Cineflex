import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import Header from "./Header";
import Home from "./Home";
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Movie />} />
        <Route path="/assentos/:idSessao" element={<Session />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
