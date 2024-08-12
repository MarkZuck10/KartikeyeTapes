import React, { useState } from "react";
import { Button, Card, Carousel, Col, Modal, Radio, Row, Tooltip } from "antd";
import { filter, map } from "lodash";
import products from "../../constants/products";
import Title from "antd/es/typography/Title";
import { PhoneOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { updateContact } from "../../actions/ui";
import { useNavigate, useParams } from "react-router";
import URLS from "../../constants/nav";
const { Meta } = Card;

const ProductCard = ({
  item: { count, imageBase, label, mainImage = 1, key },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const images = [];
  for (let i = 1; i <= count; i++) images.push(i);

  return (
    <Card
      className="product-card"
      bodyStyle={{ padding: 0 }}
      data-aos="fade-up"
    >
      <Carousel
        swipe
        swipeToSlide
        arrows
        dots={false}
        autoplay
        autoplaySpeed={1500}
        pauseOnHover
        draggable
      >
        {map(images, (item) => (
          <figure key={item} className="image">
            <img
              src={`/${imageBase}/${item}.jpg`}
              alt={`${label} | Kartikeye Tapes`}
            />
          </figure>
        ))}
      </Carousel>

      <Meta
        title={
          <Title level={5} className="mb-1">
            {label}
          </Title>
        }
        className="has-text-centered my-4"
        description={
          <div className="is-flex is-align-items-center is-justify-content-center">
            <Tooltip title="Click to quick view!">
              <Button
                type="text"
                icon={<SearchOutlined />}
                onClick={() => navigate(`${URLS.viewProduct}/${key}`)}
                className="mx-2"
              />
            </Tooltip>
            <Tooltip title="Click to enquire!">
              <Button
                type="text"
                icon={<PhoneOutlined style={{ transform: "rotate(90deg)" }} />}
                onClick={() => dispatch(updateContact(true))}
                className="mx-2"
              />
            </Tooltip>
          </div>
        }
      />
    </Card>
  );
};

const Product = () => {
  const { key } = useParams();
  const navigate = useNavigate();

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
    <div className="py-6">
      <div className="container px-3">
        {filtered.length === 0 ? (
          "No Items found!"
        ) : (
          <div>
            <Title level={2} className="has-text-centered">
              {title}
            </Title>
            <div className="is-flex is-justify-content-center mb-4">
              <Radio.Group value={key || ""}>
                <Radio
                  value="garment"
                  onChange={(e) => {
                    if (e.target.checked) navigate(`${URLS.product}/garment`);
                  }}
                >
                  Garment
                </Radio>
                <Radio
                  value="footwear"
                  onChange={(e) => {
                    if (e.target.checked) navigate(`${URLS.product}/footwear`);
                  }}
                >
                  Footwear
                </Radio>
                <Radio
                  value="braided"
                  onChange={(e) => {
                    if (e.target.checked) navigate(`${URLS.product}/braided`);
                  }}
                >
                  Braided
                </Radio>
                <Radio
                  value="lurex"
                  onChange={(e) => {
                    if (e.target.checked) navigate(`${URLS.product}/lurex`);
                  }}
                >
                  Lurex
                </Radio>
                <Radio
                  value=""
                  onChange={(e) => {
                    if (e.target.checked) navigate(`${URLS.product}`);
                  }}
                >
                  All
                </Radio>
              </Radio.Group>
            </div>
            <Row>
              {map(filtered, (item) => (
                <Col xs={24} md={12} lg={6} className="p-3 py-5" key={item.key}>
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};
export default Product;
