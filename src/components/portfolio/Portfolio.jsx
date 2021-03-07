import React from "react";
import { Card, Row, Col, Button } from "antd";

/* Stylesheet & image */
import "./portfolio.css";
import portfolioLogo from "../../assets/portfolio.jpg";

function Portfolio() {
    return (
        <div className="portfolio" data-aos="zoom-in">
            <Card
                bordered={false}
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "0 80px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    backgroundImage: `url(${portfolioLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <Row>
                    <Col
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <h3>My projects</h3>
                        <h1>Portfolio</h1>
                        <Button
                            shape="round"
                            style={{
                                backgroundColor: "#16c79a",
                                color: "#fff",
                                border: 0,
                            }}
                            size="large"
                        >
                            Take a look!
                        </Button>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default Portfolio;
