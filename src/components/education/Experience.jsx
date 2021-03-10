import React, { useEffect, useState } from "react";
import { Row, Col, Timeline, Radio, Card } from "antd";

/* stylesheet */
import "./experience.css";

function Experience() {
    /* set initial state */
    const [experiences, setExperiences] = useState([]);

    /* ---- (START) Retrieving data from json ---- */
    const url = "https://api.npoint.io/40465bf15d1e5c339f91";
    const getExperiencesData = () => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error("ERROR");
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                setExperiences(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    /* ---- (END) Retrieving data from json ---- */

    /* set new state based on json data */
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
