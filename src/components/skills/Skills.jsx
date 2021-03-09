import React, { useState, useEffect } from "react";
import { Card, Progress } from "antd";

/* Stylesheet */
import "./skills.css";

function Skills() {
    const [skills, setSkills] = useState([]);

    const url = "https://api.npoint.io/d92a429b5bab9bc35d28";
    const getData = () => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setSkills(res);
            });
    };

    const gridStyle = {
        width: "47%",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        margin: "10px",
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="skills">
            <Card>
                <h1>My Skills</h1>
                {skills.map((skill) => {
                    return (
                        <div
                            key={skill.id}
                            data-aos={skill.aos}
                            data-aos-delay={skill.aosDelay}
                        >
                            <Card.Grid style={gridStyle}>
                                <Progress
                                    type="circle"
                                    percent={skill.percent}
                                    strokeColor={skill.color}
                                    strokeWidth={10}
                                />
                                <div className="skill-text">
                                    <h2 className={skill.name}>{skill.name}</h2>
                                    <p>{skill.description}</p>
                                </div>
                            </Card.Grid>
                        </div>
                    );
                })}
            </Card>
        </div>
    );
}

export default Skills;
