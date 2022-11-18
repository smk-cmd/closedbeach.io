import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Would you like to know more about shiney objects?",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "Would you like to know more about round objects?",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "Would you like to know more about masks?",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Ethereum",
    desc: "Would you like to know more about something pointy?",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  Connect your imaginary wallet to do all the things...
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
