import React, { useState, useEffect } from "react";
import { Card, Progress } from "antd";

/* Stylesheet */
import "./skills.css";

function Skills() {
    const [skills, setSkills] = useState([]);

    const url = "https://api.jsonbin.io/b/60477739683e7e079c49d3c8";
    const getData = () => {
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
                            data-aos={skill.aos}
                            data-aos-delay={skill.aosDelay}
                        >
                            <Card.Grid style={gridStyle} key={skill.id}>
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
