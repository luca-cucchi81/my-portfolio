import React, { useState } from "react";
import { Row, Col, Button, Modal } from "antd";
import { DownloadOutlined, CloseCircleTwoTone } from "@ant-design/icons";

/* Stylesheet & image */
import "./jumbotron.css";
import me from "../../assets/luca.png";

function Jumbotron() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

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
                                onClick={showModal}
                            >
                                Contact me
                            </Button>
                            <Modal
                                closable={true}
                                closeIcon={
                                    <CloseCircleTwoTone
                                        twoToneColor="#16c79a"
                                        style={{ fontSize: "x-large" }}
                                    />
                                }
                                footer={null}
                                visible={isModalVisible}
                                onCancel={handleClose}
                                width={1000}
                            >
                                <div style={{ padding: "20px 10px" }}>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </div>
                            </Modal>
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
