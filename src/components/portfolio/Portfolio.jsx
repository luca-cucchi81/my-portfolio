import React from "react";
import { Card, Row, Col, Button } from "antd";
import "./portfolio.css";
import portfolioLogo from "../../assets/portfolio.jpg";

function Portfolio() {
    return (
        <div className="portfolio" data-aos="zoom-in">
            <Card
                bordered={false}
                style={{
                    width: "100%",
                    height: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Row>
                    <Col
                        span={12}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <h3>My Portfolio</h3>
                        <h1>Projects</h1>
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
                            Take a look!
                        </Button>
                    </Col>
                    <Col span={12}>
                        <img src={portfolioLogo} alt="logo" />
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default Portfolio;
