import React, { useEffect, useState } from "react";
import { Row, Col, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import AOS from "aos";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";

/* Stylesheets */
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "./App.css";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [visible, setVisible] = useState(false);

    const closeDrawer = () => {
        setVisible(false);
    };

    const showDrawer = () => {
        setVisible(!visible);
    };

    return (
        <div className="app">
            <Button
                ghost
                type="link"
                size="large"
                icon={<MenuOutlined />}
                onClick={showDrawer}
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    color: "#fff",
                }}
            ></Button>
            <Drawer
                placement="left"
                closable={false}
                onClose={closeDrawer}
                visible={visible}
                bodyStyle={{
                    background: "linear-gradient(to bottom, #71b280, #134e5e)",
                }}
            >
                <p>Portfolio</p>
                <p>About Me</p>
            </Drawer>
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
