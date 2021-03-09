import React, { useEffect, useState } from "react";
import { Row, Col, Timeline, Radio, Card } from "antd";

/* stylesheet */
import "./experience.css";

function Experience() {
    const [experiences, setExperiences] = useState([]);

    const url = "https://api.jsonbin.io/b/60477e157ea6546cf3d82ddd/2";
    const getExperiencesData = () => {
        fetch(url, {
            method: "GET",
            headers: {
                "secret-key":
                    "$2b$10$ei9LqaAD9GrCXqghYKzFV.KzL6dGvDG9jxAY7BK7KxS7r.9Df/L16",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setExperiences(res);
            });
    };

    useEffect(() => {
        getExperiencesData();
    }, []);

    return (
        <div className="experience">
            <h1>Experience</h1>
            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Col span={14}>
                    <div className="experience-steps">
                        <Radio.Group
                            style={{
                                marginBottom: 20,
                            }}
                        ></Radio.Group>
                        <Timeline mode="alternate">
                            {experiences.map((experience) => {
                                return (
                                    <Timeline.Item
                                        color="#16c79a"
                                        style={{
                                            color: "#fff",
                                            fontSize: 25,
                                            fontWeight: 700,
                                        }}
                                        label={experience.date}
                                    >
                                        <Card
                                            data-aos={experience.aos}
                                            bordered={false}
                                            style={{
                                                borderRadius: 5,
                                                margin: "10px 20px",
                                                padding: "20px",
                                            }}
                                        >
                                            <h2>{experience.role}</h2>
                                            <h4>
                                                {experience.company} -{" "}
                                                {experience.city}
                                            </h4>
                                            <p>{experience.description}</p>
                                        </Card>
                                    </Timeline.Item>
                                );
                            })}
                        </Timeline>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Experience;
