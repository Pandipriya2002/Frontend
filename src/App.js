import "./App.css";

import Nav from "../src/components/Nav";
import Forgotpassword from "../src/components/Forgotpassword";
import Resetpassword from "../src/components/Resetpassword";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import CustomerSignup from "./components/CustomerSignup";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Create, Update } from "@mui/icons-material";
import Dmsignup from "./components/Dmsignup";
import AdminSignup from "./components/AdminSignup";
import Product from "./components/Product";
import Seller from "./components/Seller";
import Nav1 from "./components/Nav1";
import Profile from "./components/Profile";
import Productdescription from "./components/Productdescription";
import Order from "./components/Order";
import Payment from "./components/Payment";
import Profile1 from "./components/Profile1";

function App() {
  // return(
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<Home/>}></Route>
  //     <Route path='/create' element={<Create/>}></Route>
  //     <Route path='/update' element={<Update/>}></Route>
  //   </Routes>
  //   </BrowserRouter>
  // )

  let components;
  switch (window.location.pathname) {
    case "/":
      components = (
        <div>
          <Nav />
          <Home />
        </div>
      );
      break;
    case "/Login":
      components = (
        <div>
          <Nav />
          <Login />
        </div>
      );
      break;
    case "/About":
      components = (
        <div>
          <Nav />
          <About />
        </div>
      );
      break;
    case "/signup":
      components = (
        <div>
          <Nav />
          <CustomerSignup />
        </div>
      );
      break;
    case "/dmsignup":
      components = (
        <div>
          <Nav />
          <Dmsignup />
        </div>
      );
      break;
    case "/adminsignup":
      components = (
        <div>
          <Nav />
          <AdminSignup />
        </div>
      );
      break;
    case "/Forgotpassword":
      components = (
        <div>
          <Nav />
          <Forgotpassword />
        </div>
      );
      break;

    case "/Resetpassword":
      components = (
        <div>
          <Nav />
          <Resetpassword />
        </div>
      );
      break;
    // case "/Product":
    //   components = (
    //     <div>
    //       <Nav1 />
    //       {/* <Product /> */}
    //       <Productdescription />
    //     </div>
    //   );
    //   break;
    case "/Seller":
      components = (
        <div>
          <Nav />
          <Seller />
        </div>
      );
      break;

    case "/Profile":
      components = (
        <div>
          <Nav />
          <Profile />
        </div>
      );
      break;
    case "/ManageAddress":
      components = (
        <div>
          <Nav />
          <Profile1 />
        </div>
      );
      break;

    case "/Productdescription":
      components = (
        <div>
          <Nav1 />
          <Productdescription />
        </div>
      );
      break;

    case "/Order":
      components = (
        <div>
          <Nav1 />
          <Order />
        </div>
      );
      break;

    case "/Payment":
      components = (
        <div>
          <Nav1 />
          <Payment />
        </div>
      );
      break;

    default:
      components = <Nav />;
  }
  return <>{components}</>;
}

export default App;
