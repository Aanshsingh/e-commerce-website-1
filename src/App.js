import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/header";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


