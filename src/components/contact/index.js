import React, { useState } from "react";
import { ContactUsForm } from "../extra/contactUsForm";
import { Button, Card, Col, Divider, Form, Grid, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { useBulmaLayout } from "../../hooks/layout";
// import { Button } from "antd";
// const Form = () => {
//   return (
//     <div className="container-form mt-6 mb-6">
//       <div className="content">
//         <div className="left-side">
//           <div className="address details">
//             <i className="fas fa-map-marker-alt"></i>

//             <div className="topic">Address</div>
//             <div className="text-one">
//               Kartikeye Tapes Private Limited Plot No. 3a/3b/3c, Chamunda
//               Compound
//             </div>
//             <div className="text-two">
//               Udhna, Textile Park, Udhna, Surat - 394210
//             </div>
//           </div>
//           <div className="phone details">
//             <i className="fas fa-phone-alt"></i>
//             <div className="topic">Phone</div>
//             <div className="text-one">+91 7419853199</div>
//             <div className="text-two"></div>
//           </div>
//           <div className="email details">
//             <i className="fas fa-envelope"></i>
//             <div className="topic">Email</div>
//             <div className="text-one">someone@domain.com</div>
//             <div className="text-two"></div>
//           </div>
//         </div>
//         <div className="right-side">
//           <div className="topic-text">Send us a message</div>
//           <p>
//             If you have any work from me or any types of quries related to my
//             tutorial, you can send me message from here. It's my pleasure to
//             help you.
//           </p>
//           <form action="#">
//             <div className="input-box">
//               <input type="text" placeholder="Enter your name" />
//             </div>
//             <div className="input-box">
//               <input type="text" placeholder="Enter your email" />
//             </div>

//             <div className="button">
//               <input type="button" value="Send Now" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (data) => {
    setLoading(true);
    setLoading(false);
    console.log(data);
    form.resetFields();
    // api request
  };
  const { xl } = Grid.useBreakpoint();
  return (
    <div id="contact" className="container my-6">
      <Row>
        <Col xs={24} xl={3}></Col>
        <Col
          xs={24}
          lg={12}
          xl={9}
          className="p-3 is-flex is-align-items-center"
        >
          <div>
            <Title data-aos="fade-up" data-aos-duration={1000}>
              Get in touch with our team
            </Title>
            <Title
              data-aos="fade-up"
              data-aos-duration={1000}
              level={4}
              className="has-text-weight-normal"
            >
              Ready to learn more about our services or schedule a consultation?
              Our team is ready to answer your questions and help you.
            </Title>
            <div className="my-6"></div>
            <Title
              data-aos="fade-up"
              data-aos-duration={1000}
              level={4}
              className="mb-2"
            >
              Wanna talk with us?
            </Title>
            <Title
              data-aos="fade-up"
              data-aos-duration={1000}
              level={5}
              className="has-text-weight-normal mb-1"
            >
              <PhoneOutlined
                className="mr-3"
                style={{ transform: "rotate(90deg)" }}
              />
              +91 7016281323
            </Title>
            <Title
              data-aos="fade-up"
              data-aos-duration={1000}
              level={5}
              className="has-text-weight-normal mt-0"
            >
              <MailOutlined className="mr-3" />
              admin@kartikeyetapes.com
            </Title>
          </div>
        </Col>
        <Col xs={24} lg={12} xl={9} className="p-3">
          <Card data-aos="fade-up" data-aos-duration={1000} className="card">
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  { required: true, message: "Please enter valid name!" },
                ]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Row>
                <Col xs={24} lg={12} className={`${xl ? "pr-2" : ""}`}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter valid email!",
                        type: "email",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12} className={`${xl ? "pl-2" : ""}`}>
                  <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter valid mobile!",
                        pattern: /^[0-9]{9,13}$/,
                      },
                    ]}
                  >
                    <Input placeholder="Enter your phone number " />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="description" label="Description">
                <Input.TextArea
                  placeholder="Describe your inquiry here"
                  rows={4}
                  style={{ resize: "none" }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ width: "100%" }}
                  loading={loading}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const Splash = () => {
  const { mobile, tablet } = useBulmaLayout();
  return (
    <div
      style={{
        width: "100%",
        height: mobile ? 250 : tablet ? 400 : 500,
        backgroundImage: `url(/contact-spalsh.jpeg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="is-flex is-justify-content-center is-align-items-center"
        style={{ width: "100%", height: "100%", background: "#1119" }}
      >
        <div style={{ width: "100%" }} className="px-2">
          <Title level={4} className="has-text-centered has-text-white m-0">
            Let's Connect
          </Title>
          <Title className="has-text-centered has-text-white m-0" level={1}>
            We'd Love to hear from you
          </Title>
          <Title
            level={5}
            className="has-text-centered has-text-white has-font-montserrat m-0"
          >
            At Kartikeye Tapes, we value our customers and are dedicated to
            providing the best service possible.We are here to help!
          </Title>
        </div>
      </div>
    </div>
  );
};

const Heading = () => {
  return (
    <>
      <div className="container has-text-centered has-text-black ">
        <h2 className="is-size-4 mt-6 ">Let's Connect</h2>
        <h1 className="is-size-1 has-text-weight-bold">
          We'd Love to hear from you
        </h1>
        <p className="is-size-5 mt-2 ">
          At Kartikeye Tapes, we value our customers and are dedicated to
          providing the best service possible. If you have any questions or
          concerns, please don't hesitate to reach out to us. We are here to
          help!
        </p>
      </div>
    </>
  );
};

const Map = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.708084752262!2d72.8436574!3d21.1640124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e2e59a1fb6d%3A0xe790222c883a1738!2sKartikeye%20Tapes%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1694545089835!5m2!1sen!2sin"
    title="Google Map"
    width="100%"
    height="400"
    allowFullScreen={true}
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
);

const Contact = () => {
  return (
    <div>
      <Splash />
      {/* <Heading /> */}
      <ContactForm />
      <Map />
    </div>
  );
};

export default Contact;
