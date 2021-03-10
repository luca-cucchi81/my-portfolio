import React, { useState } from "react";
import { Row, Col, Button, Modal } from "antd";
import { DownloadOutlined, CloseCircleTwoTone } from "@ant-design/icons";

/* Stylesheet & image */
import "./jumbotron.css";
import me from "../../assets/luca.png";
import MailForm from "../mail-sender/MailForm";

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
                                title="Contact Me"
                                closable={true}
                                closeIcon={
                                    <CloseCircleTwoTone
                                        twoToneColor="red"
                                        style={{ fontSize: "large" }}
                                    />
                                }
                                destroyOnClose={true}
                                maskClosable={false}
                                footer={null}
                                visible={isModalVisible}
                                onCancel={handleClose}
                                bodyStyle={{
                                    padding: "20px 10px",
                                }}
                                width={600}
                            >
                                <div>
                                    <MailForm />
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
