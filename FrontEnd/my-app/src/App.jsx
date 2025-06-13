
import ReactDom from "react-dom/client";
import Login from './Login/Login'
import './App.css'
import Home from './Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";


function App() {


  return (  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="LogIn" element={<Login/>}/>
          
      </Route>
    </Routes>
   
    </BrowserRouter>
    
  
   
  )
}

export default App
