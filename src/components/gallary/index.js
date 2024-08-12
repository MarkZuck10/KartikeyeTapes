import { Col, Image, Row } from "antd";
import Title from "antd/es/typography/Title";
import { map } from "lodash";
import React from "react";
import { useBulmaLayout } from "../../hooks/layout";
import photos from "../../constants/gallery";

const Splash = () => {
  const { mobile, tablet } = useBulmaLayout();
  return (
    <div
      style={{
        width: "100%",
        height: mobile ? 250 : tablet ? 400 : 500,
        backgroundImage: `url(/glimps/main.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="is-flex is-justify-content-center is-align-items-center"
        style={{ width: "100%", height: "100%", background: "#1119" }}
      >
        <div style={{ width: "100%" }} className="px-2">
          <Title
            className="has-text-centered has-text-white m-0 mb-1"
            level={1}
          >
            Our Gallery
          </Title>
          <Title
            level={5}
            className="has-text-centered has-text-white has-font-montserrat m-0"
          >
            Photos from the our factory and products. Our team at work and more.
            That's how we roll!
          </Title>
        </div>
      </div>
    </div>
  );
};

const Photos = () => {
  return (
    <div className="container pt-3 ">
      <Row>
        {map(photos, (photo, key) => (
          <Col key={key} xs={24} md={12} lg={6} className="p-2">
            <div
              className="p-2"
              style={{ height: "100%" }}
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <figure className="image is-flex is-justify-content-center mb-4">
                <Image
                  src={photo.image}
                  alt="Kartekeye Tapes-Gallary"
                  style={{ width: "400vw" }}
                />
              </figure>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <Splash />
      <Photos />
    </div>
  );
};

export default Gallery;
