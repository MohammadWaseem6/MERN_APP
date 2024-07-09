import Home from "./screen/Home.jsx"


import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./screen/Login.jsx"
import SignUp from "./screen/SignUp.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
