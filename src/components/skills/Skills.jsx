import React from "react";
import { Card, Progress } from "antd";
import "./skills.css";

const mySkills = [
    {
        id: 1,
        percent: 80,
        name: "html",
        description: "Hands On Experience in Html",
        color: "#e34c26",
    },
    {
        id: 2,
        percent: 80,
        name: "css",
        description: "Hands On Experience in CSS",
        color: "#264de4",
    },
    {
        id: 3,
        percent: 80,
        name: "js",
        description: "Hands On Experience in Javascript",
        color: "#f0db4f",
    },
    {
        id: 4,
        percent: 60,
        name: "react",
        description: "Hands On Experience in React",
        color: "#61dafb",
    },
    {
        id: 5,
        percent: 40,
        name: "php",
        description: "Hands On Experience in PHP",
        color: "#8993be",
    },
    {
        id: 6,
        percent: 40,
        name: "mysql",
        description: "Hands On Experience in Mysql",
        color: "#f29221",
    },
    {
        id: 7,
        percent: 80,
        name: "bootstrap",
        description: "Hands On Experience in Bootstrap",
        color: "#6610f2",
    },
    {
        id: 8,
        percent: 20,
        name: "wordpress",
        description: "Hands On Experience in Wordpress",
        color: "#016087",
    },
];

function Skills() {
    const gridStyle = {
        width: "47%",
        display: "flex",
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
