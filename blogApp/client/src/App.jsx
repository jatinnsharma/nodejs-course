import Navbar from "./components/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"


function App() {


  return (
    <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
