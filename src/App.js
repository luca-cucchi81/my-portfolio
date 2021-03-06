import React, { useEffect } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./App.css";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="app">
            <Row className="jumbotron-row">
                <Col
                    style={{ display: "flex", alignItems: "center" }}
                    span={12}
                    offset={6}
                >
                    <Jumbotron />
                </Col>
            </Row>
            <Row>
                <Col
                    style={{ display: "flex", alignItems: "center" }}
                    span={12}
                    offset={6}
                >
                    <Skills />
                </Col>
            </Row>
            <Row>
                <Col
                    style={{ display: "flex", alignItems: "center" }}
                    span={12}
                    offset={6}
                >
                    <Portfolio />
                </Col>
            </Row>
        </div>
    );
}

export default App;
