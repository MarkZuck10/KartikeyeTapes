import {
  ArrowRightOutlined,
  BgColorsOutlined,
  CopyrightCircleOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Input, Row, Tooltip } from "antd";
import { filter, get, map } from "lodash";
import React, { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateFooterSize } from "../../actions/ui";
import URLS from "../../constants/nav";
import { socialLinks } from "../../constants/constants";
import products from "../../constants/products";
const brandLinks = [
  { url: URLS.home, label: "Home" },
  { url: URLS.about, label: "About Us" },
  { url: URLS.gallery, label: "Gallery" },
  // { url: URLS.product, label: "Products" },
  { url: URLS.contact, label: "Contact Us" },
];
const informationLinks = [{ url: URLS.product, label: "Our Product" }];
const addressLinks = [
  {
    url: "https://www.google.com/maps/place/Kartikeye+Tapes+Pvt+Ltd/@22.0840167,72.0724015,9z/data=!4m10!1m2!2m1!1sKartikeye+Tapes+Pvt+Ltd!3m6!1s0x3be04e2e59a1fb6d:0xe790222c883a1738!8m2!3d21.1639967!4d72.8435883!15sChdLYXJ0aWtleWUgVGFwZXMgUHZ0IEx0ZJIBDG1hbnVmYWN0dXJlcuABAA!16s%2Fg%2F11c5swcwck?entry=ttu",
    description: (
      <>
        Ploat No-3, Chamunda Compound, Near Kiran Dyeing
        <br />
        Udhana, Surat, Gujrat, 394210
      </>
    ),
  },
  { url: "tel:+917016281323", description: "+91 7016281323" },

  {
    url: "mailto:admin@kartikeyetapes.com",
    description: "admin@kartikeyetapes.com",
  },
];

const Footer = () => {
  const width = useSelector((state) => state.ui.width);
  const small = width < 768;
  const dispatch = useDispatch();
  const ref = useRef();
  useLayoutEffect(() => {
    dispatch(updateFooterSize(get(ref, "current.clientHeight", 0)));
  }, [ref, dispatch]);
  const { key } = useParams();

  let filtered = products;

  if (key) {
    filtered = filter(products, (p) => p.type === key);
  }

  let title = null;
  switch (key) {
    case "garment":
      title = "Garment Elastics";
      break;
    case "footwear":
      title = "Footwear Elastics";
      break;
    case "braided":
      title = "Braided Elastics";
      break;
    case "lurex":
      title = "Lurex Elastics";
      break;
    default:
      title = "Product List";
      break;
  }

  return (
    <div ref={ref}>
      <div className="footer pb-3">
        <div className="container">
          <Row>
            <Col xs={0} xl={1}></Col>
            <Col xs={12} xl={5} className="p-3">
              <p className="footer-sub-header mb-2">Brand</p>
              <div style={{ width: 30 }}>
                <Divider className="has-background-brown m-0 mb-4" />
              </div>
              {map(brandLinks, (link) => (
                <div key={link.label} className="my-1">
                  <Link className="footer-link" to={link.url}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </Col>
            <Col xs={12} xl={6} className="p-3">
              <p className="footer-sub-header mb-2">Product</p>
              <div style={{ width: 30 }}>
                <Divider className="has-background-brown m-0 mb-4" />
              </div>
              {map(informationLinks, (link) => (
                <div key={link.label} className="my-1">
                  <Link className="footer-link" to={link.url}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </Col>
            <Col xs={24} md={12} lg={12} xl={6} className="p-3">
              <p className="footer-sub-header mb-2">Categories</p>
              <div style={{ width: 30 }}>
                <Divider className="has-background-brown m-0" />
              </div>

              <div className="">
                <ul className="" value={key || ""}>
                  <li>
                    <Link to={`${URLS.product}/garment`}>Garment</Link>
                  </li>
                  <li>
                    <Link to={`${URLS.product}/footwear`}>Footwear</Link>
                  </li>
                  <li>
                    <Link to={`${URLS.product}/braided`}>Braided</Link>
                  </li>
                  <Link to={`${URLS.product}/lurex`}>Lurex</Link>
                </ul>
              </div>
            </Col>
            <Col xs={0} xl={1}></Col>
            <Col xs={24} md={12} lg={12} xl={5} className="p-3">
              <p className="footer-sub-header mb-2">Kartikeye tapes</p>
              <div style={{ width: 30 }}>
                <Divider className="has-background-brown m-0 mb-4" />
              </div>
              {map(addressLinks, (add) => (
                <p
                  onClick={() => window.open(add.url, "_blank")}
                  className="footer-link my-1"
                  style={{ letterSpacing: 1, cursor: "pointer" }}
                  key={add.url}
                >
                  {add.description}
                </p>
              ))}
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col xs={24} lg={12}>
              <p
                className={`my-2 footer-info ${
                  small ? "has-text-centered" : "has-text-left"
                }`}
              >
                <CopyrightCircleOutlined /> 2023 Kartikeye Tapes Pvt Ltd, All
                rights reserved.
              </p>
            </Col>
            <Col xs={24} lg={12}>
              <p
                className={`my-2 footer-info ${
                  small ? "has-text-centered" : "has-text-right"
                }`}
              >
                <BgColorsOutlined /> Designed by{" "}
                <a
                  className="footer-info"
                  href="https://diginull.in"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "pointer" }}
                >
                  DigiNull
                </a>
                .
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Footer;
