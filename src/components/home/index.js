import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Button, FloatButton, Divider } from "antd";
import { map } from "lodash";
import Title from "antd/es/typography/Title";
import URLS from "../../constants/nav";

import { useBulmaLayout } from "../../hooks/layout";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import Aos from "aos";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../../actions/ui";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useNavigate } from "react-router";
import Slideshow from "../extra/carousel";

const usecases = [
  {
    icon: "/1.png",
    label: "Athleisure",
    description: [
      "Our products provide flexibility and comfort for activewear, ensuring ease of movement during workouts and stylish functionality for athleisure enthusiasts.",
    ],
  },
  {
    icon: "/2.png",
    label: "Day to Day Garments",
    description: [
      "Our materials enhance everyday clothing, delivering a snug fit and comfort for casual wear, while maintaining style and ease of wear.",
    ],
  },
  {
    icon: "/3.png",
    label: "Medical Equipments",
    description: [
      "Our components in medical equipment like braces and compression garments offer support and therapeutic benefits, aiding in patient recovery and comfort.",
    ],
  },
  {
    icon: "/4.png",
    label: "Footwear",
    description: [
      "Our elements in footwear improve fit, adaptability, and comfort, creating snug-fitting shoes that accommodate various foot shapes and sizes for all-day wear.",
    ],
  },
];

const counts = [
  {
    key: "clients",
    label: "Satisfied B2B Clients",
    count: 50,
    description:
      "We have 50+ satisfied Business to Bussiness clients, delivering quality elastics products with exceptional service. Trust their expertise for your needs.",
  },
  {
    key: "years",
    label: "Years of Experience",
    count: 30,
    description:
      "With over 30+ years of experience, Kartikeye Tapes provides top-quality elastic tapes that exceed industry standards.",
  },
  {
    key: "categories",
    label: "Categories",
    count: 20,
    description:
      "We offer 20+ high-quality elastic categories for various applications, including medical, sports, and industrial use. Browse our selection today!",
  },
];

const slides = [
  {
    label: "Woven Elastic",
    description: "Convenient for Garments, Bed Sheets.",
    image: "./34.jpg",
    button: { label: "Explore More", url: URLS.product },
  },
  {
    label: "Knitted Elastics",
    description: "Convenient for Garments, Medical Desposable Textiles.",
    image: "",
    button: { label: "Explore More", url: URLS.product },
  },
  {
    label: "Covered Rubber Threads",
    description: "Convenient for Gloves, Sweaters, Luggage Tags.",
    image: "",
    button: { label: "Explore More", url: URLS.product },
  },
];

const categories = [
  {
    key: "garment",
    label: "Garment",
    image: "/category/garment.png",
  },
  {
    key: "footwear",
    label: "Footwear",
    image: "/category/footware.png",
  },
  {
    key: "braided",
    label: "Braided",
    image: "/Braided_elastic/2.jpg",
  },
  {
    key: "lurex",
    label: "Lurex",
    image: "/lurex elastic/1.jpg",
  },
];

const SplashItem = ({ item, index, active }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(
    () => {
      if (active === index) setAnimate(true);
      else setAnimate(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item]
  );

  const aosProps = animate ? { "data-aos": "fade-up" } : {};

  return (
    <>
      <Col span={8} className="p-3 is-flex is-align-items-center">
        <div>
          <Title {...aosProps} level={2}>
            {item.label}
          </Title>
        </div>
      </Col>
      <Col span={12} className="p-3"></Col>
    </>
  );
};

const Splash = () => {
  const [key, setKey] = useState(0);

  const onNext = () => {
    if (key === slides.length - 1) setKey(0);
    else setKey(key + 1);
    Aos.refreshHard();
  };

  const onPrevious = () => {
    if (key === 0) setKey(slides.length - 1);
    else setKey(key - 1);
    Aos.refreshHard();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (key === slides.length - 1) setKey(0);
      else setKey(key + 1);
      Aos.refreshHard();
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [key]);

  const { touch } = useBulmaLayout();
  return (
    <div className="home-splash">
      {touch ? (
        <div></div>
      ) : (
        <div>
          <Row>
            <Col
              span={2}
              className="is-flex is-align-items-center is-justify-content-center"
            >
              <ArrowLeftOutlined
                style={{ fontSize: 30 }}
                onClick={onPrevious}
              />
            </Col>
            {key === 0 ? (
              <SplashItem item={slides[0]} index={0} active={key} />
            ) : key === 1 ? (
              <SplashItem item={slides[1]} index={1} active={key} />
            ) : (
              <SplashItem item={slides[2]} index={2} active={key} />
            )}
            <Col
              span={2}
              className="is-flex is-align-items-center is-justify-content-center"
            >
              <ArrowRightOutlined style={{ fontSize: 30 }} onClick={onNext} />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

const About = () => {
  const dispatch = useDispatch();
  const Width = useSelector((state) => state.ui.Width);
  return (
    <div className="my-6">
      <div
        className="container"
        style={{
          display: "flex",
          // flexDirection: Width < 376 ? "column-reverse" : "row",
        }}
      >
        <Row>
          <Col xs={24} lg={12} className="is-flex is-align-items-center p-3">
            <div>
              <Title className="m-0 mb-5" level={3}>
                Welcome to{" "}
                <span
                  className="has-text-blue"
                  style={{
                    borderBottom: "2px solid var(--primary-text)",
                    paddingBottom: 5,
                  }}
                >
                  Kartikeye Tapes
                </span>
              </Title>
              <Title
                level={5}
                className="my-2 has-text-weight-normal has-text-justified"
              >
                Welcome to Kartikeye Tapes, your one-stop-shop for high-quality
                elastic tapes! As a leading manufacturer in the industry, we
                specialize in producing covered rubber threads, knitted
                elastics, and woven elastic tapes. Our products are designed to
                meet the needs of a wide range of industries, from fashion to
                medical and everything in between.
              </Title>
              <Title
                level={5}
                className="my-2 has-text-weight-normal has-text-justified"
              >
                At Kartikeye Tapes, we are committed to providing our customers
                with the best possible products and services. We use only the
                finest materials and the latest technology to ensure that our
                elastic tapes are of the highest quality and durability.
              </Title>
              <div className="mt-5">
                <Button
                  type="primary"
                  icon={
                    <PhoneOutlined style={{ transform: "rotate(90deg)" }} />
                  }
                  onClick={() => dispatch(updateContact(true))}
                >
                  Contact Now
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12} className="is-flex is-align-items-center p-3">
            <div className="slider">
              <Slideshow />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const Whyus = () => {
  const { touch } = useBulmaLayout();
  const dispatch = useDispatch();
  return (
    <div className="my-6">
      <div className="container px-3">
        {touch && (
          <>
            <Title className="m-0 mb-5" level={3}>
              Why to choose{" "}
              <span
                className="has-text-blue"
                style={{
                  borderBottom: "2px solid var(--primary-text)",
                  paddingBottom: 5,
                }}
              >
                Kartikeye Tapes
              </span>
            </Title>
          </>
        )}
        <Row>
          <Col xs={24} lg={10}>
            <img
              className="mt-0 is-align-items-center"
              src="/why-us.png"
              alt="Why Us | Kartikeye Tapes"
            />
          </Col>
          <Col xs={24} lg={14} className="is-flex is-align-items-center">
            <div>
              {!touch && (
                <>
                  <Title className="m-0 mb-5" level={3}>
                    Why to choose{" "}
                    <span
                      className="has-text-blue"
                      style={{
                        borderBottom: "2px solid var(--primary-text)",
                        paddingBottom: 5,
                      }}
                    >
                      Kartikeye Tapes
                    </span>
                  </Title>
                </>
              )}
              <div>
                {map(
                  [
                    "Kartikeye Tapes is a leading manufacturer of high-quality elastic tapes. With a wide range of categories including Covered Rubber Threads, Knitted Elastics, Woven Elastic, and more in different sizes, they have become a go-to choice for customers in need of elastic tapes. What sets Kartikeye Tapes apart is their commitment to providing their customers with the highest level of satisfaction. They take pride in their attention to detail, ensuring that every product is of the utmost quality. Their manufacturing process ensures that their elastic tapes are strong, durable, and long-lasting.",
                    "If you're looking for elastic tapes for your business, Kartikeye Tapes should be your top choice. With a wide range of categories to choose from, you're sure to find the perfect elastic tape for your needs. Their products are made with the highest quality materials, ensuring that they can withstand even the toughest conditions. Plus, their commitment to customer satisfaction means that you can be confident that you'll receive the best possible service. So why wait? Choose Kartikeye Tapes for all your elastic tape needs.",
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
              <Title className="my-3 has-text-weight-normal " level={5}>
                Contact to us for free estimate on any queries
              </Title>
              <Button
                icon={<PhoneOutlined style={{ transform: "rotate(90deg)" }} />}
                className="mt-3"
                type="primary"
                onClick={() => dispatch(updateContact(true))}
                size="large"
              >
                Request a Quote
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const Count = ({ count, isVisible }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(isVisible);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible]);

  return (
    <Title level={1} className="has-text-centered m-0 mb-3">
      <CountUp
        start={0}
        end={count.count}
        duration={4}
        redraw={visible}
        delay={0.5}
      />
      +
    </Title>
  );
};

const UseCases = () => {
  return (
    <div className="container">
      <Title level={2} className="has-text-centered">
        Featured Use Cases
      </Title>
      <Row>
        {map(usecases, (feature, key) => (
          <Col key={key} xs={24} md={12} lg={6} className="p-3">
            <div
              className="p-3 py-6"
              style={{ height: "100%" }}
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <figure className="image is-flex is-justify-content-center mb-4">
                <img
                  src={feature.icon}
                  alt={feature.label}
                  style={{ width: 100 }}
                />
              </figure>
              <Title
                className="has-text-centered mt-5 has-text-blue"
                level={4}
                style={{ fontSize: 22, height: 56 }}
              >
                {feature.label}
              </Title>
              <Divider className="my-2" />
              <p className="has-text-justified">{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Numbers = () => {
  return (
    <div className="my-6">
      <div className="container px-3">
        <Title level={2} className="has-text-centered mb-5" data-aos="fade-up">
          Our numbers tell the story
        </Title>
        <Row className="my-3">
          {map(counts, (count, index) => (
            <Fragment key={count.key}>
              <Col xs={24} lg={6} className="p-3">
                <div data-aos="fade-up">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      return (
                        <Count
                          count={count}
                          isVisible={isVisible}
                          key={count.key}
                        />
                      );
                    }}
                  </VisibilitySensor>
                  <Title
                    level={3}
                    className="has-text-centered mt-0 has-text-blue"
                  >
                    {count.label}
                  </Title>
                  <p className="has-text-centered">{count.description}</p>
                </div>
              </Col>
              {index !== counts.length - 1 && (
                <>
                  <Col
                    xs={0}
                    lg={3}
                    className="is-flex is-justify-content-center"
                  >
                    <Divider type="vertical" style={{ height: "100%" }} />
                  </Col>
                  <Col xs={24} lg={0}>
                    <Divider />
                  </Col>
                </>
              )}
            </Fragment>
          ))}
        </Row>
      </div>
    </div>
  );
};

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="my-6">
      <div className="container px-3">
        <Title level={2} className="has-text-centered mb-5" data-aos="fade-up">
          Shop by Categories
        </Title>
        <Row>
          {map(categories, ({ label, image, key }, index) => (
            <Fragment key={key}>
              {index % 2 === 0 && <Col xs={0} lg={4}></Col>}
              <Col xs={24} md={12} lg={8} className="p-3">
                <div className="has-background-blue50pr p-4">
                  <Row>
                    <Col span={8} className="is-flex is-align-items-center">
                      <figure className="image">
                        <img
                          src={image}
                          alt={`${label} | Kartikeye Tapes`}
                          style={{ height: "20vh" }}
                        />
                      </figure>
                    </Col>
                    <Col
                      span={16}
                      className="is-flex is-align-items-center p-3"
                    >
                      <div>
                        <Title level={3} className="has-text-blue m-0 mb-4">
                          {label} Elastics
                        </Title>
                        <Button
                          onClick={() => navigate(`${URLS.product}/${key}`)}
                          icon={<ShopOutlined />}
                          type="primary"
                        >
                          Shop Now
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              {index % 2 === 1 && <Col xs={0} lg={4}></Col>}
            </Fragment>
          ))}
        </Row>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {/* <Splash /> */}
      <About />
      <Categories />
      <UseCases />
      <Numbers />
      <FloatButton.BackTop />
    </div>
  );
};

export default Home;
