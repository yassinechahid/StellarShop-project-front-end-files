import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Order from "./pages/Order";
import FilterDAta from "./pages/FilterDAta";
import ProductDetails from "./pages/ProductDetails";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [order, setOrder]=useState(null)
  const [isModelOpen, setIsModelOpen]=useState(false)
  const [isLogin, setIslogin]=useState(true)
  const openSignUp=()=>{
    setIslogin(false) 
    setIsModelOpen(true)
 }
 const openLogin=()=>{
     setIslogin(true) 
     setIsModelOpen(true)
  }
  return (
    <>
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
    <Navbar setIsModelOpen={setIsModelOpen} setIslogin={setIslogin} isModelOpen={isModelOpen} isLogin={isLogin} openLogin={openLogin} openSignUp={openSignUp}/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/shop" element={<Shop></Shop>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout setOrder={setOrder} order={order} />}></Route>
      <Route path="/order-confirmation" element={<Order order={order} />}></Route>
      <Route path="/filter-data" element={<FilterDAta/>}></Route>
      <Route path="/product/:id" element={<ProductDetails/>}></Route>
      <Route path="/contactpage" element={<ContactPage/>}></Route>
      <Route path="/aboutpage" element={<AboutPage openLogin={openLogin} openSignUp={openSignUp}></AboutPage>}></Route>
      <Route path="/termsandconditions" element={<TermsAndConditions></TermsAndConditions>}></Route>
      <Route path="privacypolicy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
    </Routes>
    <Footer openLogin={openLogin}/>
    </BrowserRouter>
    </>
  );
}

export default App;
