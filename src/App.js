
import Single from "./pages/single/Single";
import Write from "./pages/write/Write.jsx"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import TopBar from "./components/topbar/TopBar";
//import Post from "./components/Post/Post";
import {
  BrowserRouter ,Routes,
  Route,
  //Link
} from "react-router-dom";


// -- atualização --
// switch p/ Routes
// Router p/ <BrowserRouter
// element={<Home />}

 function App() {
  return (
    <BrowserRouter> 

      <TopBar/>


      <Routes>

        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<Single />} />
  

        

      </Routes>


    </BrowserRouter>


  );
}

export default App;
