import React, { useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes, useLocation } from "react-router";
import URLS from "./constants/nav";
import Home from "./components/home";
import About from "./components/about";
import Product from "./components/product";
import Contact from "./components/contact";
import NotFound from "./components/extra/404";
import { useDispatch, useSelector } from "react-redux";
import { updateHeight, updateScroll, updateWidth } from "./actions/ui";
import Aos from "aos";
import { ContactUsFormModal } from "./components/extra/contactUsForm";
import HowItWorks from "./components/how-it-works";
import ProductDescription from "./components/product/product-description";
import Gallery from "./components/gallary";

const App = () => {
  const HeaderSize = useSelector((s) => s.ui.HeaderSize);
  const FooterSize = useSelector((s) => s.ui.FooterSize);
  const dispatch = useDispatch();
  const { pathname: path } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [path]);

  useEffect(
    () => {
      window.addEventListener("resize", () => {
        dispatch(updateWidth(window.innerWidth));
        dispatch(updateHeight(window.innerHeight));
      });
      window.addEventListener("scroll", () => {
        dispatch(updateScroll(window.innerHeight));
      });
      Aos.init({ delay: 500, duration: 1000 });
    },
    //eslint-disable-next-line
    []
  );

  return (
    <div>
      <ContactUsFormModal />
      <Header />
      <div
        style={{
          marginTop: HeaderSize,
          minHeight: `calc(100vh - ${HeaderSize}px - ${FooterSize}px)`,
        }}
      >
        <Routes>
          <Route path={URLS.home} element={<Home />} />
          <Route path={URLS.about} element={<About />} />
          <Route path={URLS.gallery} element={<Gallery />} />
          <Route path={URLS.product} element={<Product />} />
          <Route path={`${URLS.product}/:key`} element={<Product />} />
          <Route
            path={`${URLS.viewProduct}/:key`}
            element={<ProductDescription />}
          />
          <Route path={URLS.contact} element={<Contact />} />
          <Route path={URLS.howItWorks} element={<HowItWorks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
