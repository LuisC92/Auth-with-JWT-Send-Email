import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./styles/App.css"

import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Books from "./pages/Books"

import { CurrentUserContextProvider } from "./contexts/userContext"

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  )
}

export default App
