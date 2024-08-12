import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHeaderSize } from "../../actions/ui";
import { get, map } from "lodash";

import URLS from "../../constants/nav";
import { Link, useLocation } from "react-router-dom";
import { useBulmaLayout } from "../../hooks/layout";

const navbar = [
  { key: "home", url: URLS.home, label: "Home" },
  { key: "product", url: URLS.product, label: "Product" },
  { key: "gallery", url: URLS.gallery, label: "Gallery" },
  { key: "about", url: URLS.about, label: "About" },
  { key: "contact", url: URLS.contact, label: "Contact" },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { touch } = useBulmaLayout();
  const Scroll = useSelector((s) => s.ui.Scroll);
  const { pathname: path } = useLocation();

  useEffect(() => {
    setIsActive(false);
  }, [path]);

  const ref = useRef();
  const dispatch = useDispatch();

  const scrolled = Scroll > 150;

  useLayoutEffect(() => {
    dispatch(updateHeaderSize(get(ref, "current.clientHeight")));
  }, [ref, dispatch]);

  return (
    <div
      ref={ref}
      className={`header ${scrolled ? "header-scrolled" : "header-fixed"}`}
    >
      <nav
        className="navbar py-2"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand is-align-items-center">
          <Link to={URLS.home}>
            <img
              style={{ maxHeight: "unset" }}
              src="landscape.jpeg"
              width="224"
              height="56"
              alt="Logo | Kartikeya Tapes"
            />
          </Link>

          <span
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start"></div>
          <div className={`navbar-end ${!touch ? "mr-6" : ""}`}>
            {map(navbar, ({ url, label, key }) => (
              <Link to={url} key={key} className="navbar-item mx-1">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
