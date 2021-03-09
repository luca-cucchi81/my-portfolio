import React, { useEffect, useState } from "react";
import { Row, Col, Timeline, Radio, Card } from "antd";

/* stylesheet */
import "./experience.css";

function Experience() {
    const [experiences, setExperiences] = useState([]);

    const url = "https://api.npoint.io/7ecaf3f6a6a2da4b7d4d";
    const getExperiencesData = () => {
        fetch(url, {
            method: "GET",
            headers: {
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
                                        key={experience.id}
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
