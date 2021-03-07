import React from "react";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./jumbotron.css";
import me from "../../assets/luca.png";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={16}>
                    <div data-aos="fade-right" className="left">
                        <strong className="hello">Hello!!</strong>
                        <h2>I'm Luca Cucchi</h2>
                        <h1>Front End Developer</h1>
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
                                Contact me
                            </Button>
                            <Button
                                shape="round"
                                icon={<DownloadOutlined />}
                                style={{
                                    border: 0,
                                    color: "#16c79a",
                                    fontWeight: "500",
                                }}
                                size="large"
                            >
                                Resume
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
