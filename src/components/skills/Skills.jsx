import React from "react";
import { Card, Progress } from "antd";
import "./skills.css";

const mySkills = [
    {
        id: 1,
        percent: 80,
        name: "html",
        description: "Hands On Experience in Html",
        color: "#EA4335",
    },
    {
        id: 2,
        percent: 80,
        name: "css",
        description: "Hands On Experience in CSS",
        color: "#4285F4",
    },
    {
        id: 3,
        percent: 80,
        name: "js",
        description: "Hands On Experience in Javascript",
        color: "#FBBC05",
    },
    {
        id: 4,
        percent: 60,
        name: "react",
        description: "Hands On Experience in React",
        color: "#80ced6",
    },
    {
        id: 5,
        percent: 30,
        name: "php",
        description: "Hands On Experience in PHP",
        color: "#3B5998",
    },
    {
        id: 6,
        percent: 30,
        name: "mysql",
        description: "Hands On Experience in Mysql",
        color: "#7B0099",
    },
];

function Skills() {
    const gridStyle = {
        width: "47%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        margin: "10px",
    };

    return (
        <div className="skills">
            <Card>
                <h1>My Skills</h1>
                {mySkills.map((skill) => {
                    return (
                        <div data-aos="fade-up" data-aos-delay="300">
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
