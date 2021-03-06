import React from "react";
import { Row, Col, Button } from "antd";
import "./jumbotron.css";
import me from "../../assets/luca.jpg";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={16}>
                    <div data-aos="fade-right" className="left">
                        <p>
                            <span className="hello">Hello!</span>Luca Cucchi
                        </p>
                        <h1>Web Developer</h1>
                        <small>Front-End Developer using React</small>
                        <div className="buttons">
                            <Button
                                shape="round"
                                style={{
                                    backgroundColor: "#16c79a",
                                    color: "#fff",
                                    marginRight: 10,
                                    border: 0,
                                }}
                                size="large"
                            >
                                Hire me
                            </Button>
                            <Button
                                shape="round"
                                style={{
                                    border: "2px solid #16c79a",
                                    color: "#16c79a",
                                    fontWeight: "500",
                                }}
                                size="large"
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div data-aos="fade-left" className="photo">
                        <img src={me} alt="myphoto" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Jumbotron;
