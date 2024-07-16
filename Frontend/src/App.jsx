import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import CartProvider from "./components/ContextReducer";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
