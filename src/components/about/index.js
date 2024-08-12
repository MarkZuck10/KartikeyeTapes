import Title from "antd/es/typography/Title";
import React from "react";
import { Row, Col, Card, Button } from "antd";
import { useBulmaLayout } from "../../hooks/layout";
import { map, replace } from "lodash";

const teams = [
  {
    title: "Shantilal Jain",
    image: "/avatar.png",
    contact: "99791 11714",
    designation: "Director",
  },
  {
    title: "Bhupendra Jain",
    image: "/avatar.png",
    contact: "99791 11724",
    designation: "Director",
  },
  {
    title: "Lokesh Jain",
    image: "/avatar.png",
    contact: "98792 20299",
    designation: "Director",
  },
];

const Heading = () => {
  const { mobile, tablet } = useBulmaLayout();
  return (
    <div
      style={{
        width: "100%",
        height: mobile ? 250 : tablet ? 400 : 500,
        backgroundImage: `url(/glimps/7.jpg)`,
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
            About Us
          </Title>
          <Title
            level={5}
            className="has-text-centered has-text-white has-font-montserrat m-0"
          >
            Providing quality adhesive and industrial tapes to help your
            business stick together. Trust us for all your tape needs.
          </Title>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="container-fluid mt-6 px-3 ">
      <Row>
        <Col xs={0} lg={4}></Col>
        <Col className="" xs={24} lg={16}>
          <div className="has-text-centered">
            <Title level={2}>Who We Are?</Title>
            <Title
              className="has-text-justified ml-0 has-text-weight-light"
              level={4}
            >
              Since its inception in 1984, Kartikeye Tapes has been a pioneering
              force in the world of -
              <span
                style={{ color: "#52586D" }}
                className="has-text-weight-semibold"
              >
                {" "}
                Textile Manufacturing, Specializing in the Production of Premium
                Elastic.
              </span>
            </Title>
            <Title
              className="has-text-justified ml-0 has-text-weight-light"
              level={4}
            >
              <span
                style={{ color: "#52586D" }}
                className="has-text-weight-semibold"
              >
                At Kartikeye Tapes -{" "}
              </span>
              we understand that comfort is not just a feature; it's an
              experience. Our elastics are meticulously crafted to provide
              unparalleled comfort while maintaining durability and
              functionality. We believe that the foundation of any great garment
              lies in the quality of its components. Therefore, we take immense
              pride in producing elastics that enhance the overall feel and
              wearability of garments.
            </Title>
          </div>
        </Col>
        <Col xs={0} lg={4}></Col>
      </Row>
    </div>
  );
};

const Misssion = () => {
  const { touch } = useBulmaLayout();
  return (
    <div className="container px-3">
      <div className="my-6">
        <div className="container px-3">
          {touch && (
            <>
              <Title className="m-0 mb-5 has-text-centered" level={3}>
                Our Mission
              </Title>
            </>
          )}
          <Row>
            <Col xs={0} lg={1}></Col>
            <Col
              xs={24}
              lg={8}
              className="is-flex is-align-items-center is-justify-content-center"
            >
              <figure className="image">
                <img
                  className="mt-0 is-align-items-center"
                  src="/mission.png"
                  alt="Mission | Kartikeye Tapes"
                />
              </figure>
            </Col>
            <Col xs={0} lg={1}></Col>
            <Col xs={24} lg={14} className="is-flex is-align-items-center">
              <div>
                {!touch && (
                  <>
                    <Title className="m-0 mb-5" level={3}>
                      Our Mission
                    </Title>
                  </>
                )}
                <div>
                  {map(
                    [
                      "At Kartikeye Tapes, our mission is to be a globally recognized leader in the manufacturing of premium quality  elastic. With a legacy dating back to 1984, we are committed to delivering innovative and reliable solutions that enhance comfort and style in the world of apparel. We strive to provide our customers with top-notch products that combine the finest materials, cutting-edge technology, and unmatched craftsmanship. Through our dedication to excellence and customer satisfaction, we aim to continually raise the standards of the  elastic industry",
                    ],
                    (why, key) => (
                      <Title
                        className="has-text-justified has-text-weight-normal my-3"
                        key={key}
                        level={5}
                      >
                        {why}
                      </Title>
                    )
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="my-6">
        <div className="container px-3">
          {touch && (
            <>
              <Title className="m-0 mb-5 has-text-centered" level={3}>
                Our Vision
              </Title>
            </>
          )}
          <Row>
            <Col xs={24} lg={14} className="is-flex is-align-items-center">
              <div>
                {!touch && (
                  <>
                    <Title className="m-0 mb-5" level={3}>
                      Our Vision
                    </Title>
                  </>
                )}
                <div>
                  {map(
                    [
                      "The vision of the company is - Empowering comfort and style through innovative elastic solutions. Our vision is to be the industry leader in producing high-quality, versatile, and sustainable elastic for garments that enhance the wearers' experience and elevate fashion possibilities.",
                      // "Our vision at Kartikeye Tapes is to weave threads of creativity and functionality to shape the future of  elastic manufacturing. We aspire to revolutionize the industry by setting new benchmarks in product design, quality, and sustainability. With our deep-rooted expertise and unwavering commitment, we envision being the preferred partner for renowned fashion brands, designers, and manufacturers globally. By embracing innovation, fostering a culture of collaboration, and upholding our tradition of integrity, we envision a world where Kartikeye Tapes' products adorn every garment, redefining comfort and style for generations to come.",
                    ],
                    (why, key) => (
                      <Title
                        className="has-text-justified has-text-weight-normal my-3"
                        key={key}
                        level={5}
                      >
                        {why}
                      </Title>
                    )
                  )}
                </div>
              </div>
            </Col>
            <Col xs={0} lg={1}></Col>
            <Col
              xs={24}
              lg={8}
              className="is-flex is-align-items-center is-justify-content-center"
            >
              <figure className="image">
                <img
                  className="mt-0 is-align-items-center"
                  src="/vision.png"
                  alt="Vision | Kartikeye Tapes"
                />
              </figure>
            </Col>
            <Col xs={0} lg={1}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="my-6">
      <div className="container px-3">
        <Title level={1} className="has-text-centered mb-6">
          Our core members
        </Title>
        <Row>
          {map(teams, ({ title, image, contact, designation }) => (
            <Col key={title} xs={24} md={8} className="p-3">
              <div>
                <figure
                  className="image pt-3 pl-3 pr-3"
                  style={{
                    border: "1px solid #111",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <img src={image} alt={`${title} | Kartikeye Tapes`} />
                </figure>
                <div className="my-4">
                  <Title level={4} className="has-text-centered m-0">
                    {title}
                  </Title>
                  <Title
                    level={5}
                    className="has-text-centered has-text-weight-semibold m-0"
                  >
                    {designation}
                  </Title>
                  <div className="has-text-centered">
                    <Button
                      type="text"
                      onClick={() =>
                        window.open(`tel:91${replace(contact, " ", "")}`)
                      }
                    >
                      (+91) {contact}
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Heading />
      <AboutUs />
      <Misssion />
      <Teams />
    </div>
  );
};
export default About;
