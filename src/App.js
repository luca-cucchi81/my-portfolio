import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Row, Col, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faLinkedin,
    faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";

/* Stylesheets */
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "./App.css";
import avatar from "./assets/avatar.png";

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

    /* social icons */
    const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
    const github = <FontAwesomeIcon icon={faGithubSquare} />;

    return (
        <Router>
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
                        background: "#004953",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div className="topDrawer">
                        <img className="avatar" src={avatar} alt="avatar" />
                        <div className="links">
                            <NavLink to="/" className="nav_link">
                                Home
                            </NavLink>

                            <NavLink to="/portfolio" className="nav_link">
                                Portfolio
                            </NavLink>

                            <NavLink to="/about-me" className="nav_link">
                                About Me
                            </NavLink>
                        </div>
                    </div>

                    <div className="social">
                        <h2>Social</h2>
                        <section className="social-icons">
                            <a
                                href="https://www.facebook.com/luca.cucchi"
                                style={{
                                    color: "#16c79a",
                                    fontSize: 40,
                                }}
                            >
                                {facebook}
                            </a>
                            <a
                                href="https://www.linkedin.com/in/luca-cucchi-088b5562/"
                                style={{
                                    color: "#16c79a",
                                    fontSize: 40,
                                }}
                            >
                                {linkedin}
                            </a>
                            <a
                                href="https://github.com/luca-cucchi81"
                                style={{
                                    color: "#16c79a",
                                    fontSize: 40,
                                }}
                            >
                                {github}
                            </a>
                        </section>
                    </div>
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
        </Router>
    );
}

export default App;
