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
        aos: "flip-up",
        aosDelay: 100,
    },
    {
        id: 2,
        percent: 80,
        name: "css",
        description: "Hands On Experience in CSS",
        color: "#264de4",
        aos: "flip-up",
        aosDelay: 300,
    },
    {
        id: 3,
        percent: 80,
        name: "js",
        description: "Hands On Experience in Javascript",
        color: "#f0db4f",
        aos: "flip-up",
        aosDelay: 500,
    },
    {
        id: 4,
        percent: 60,
        name: "react",
        description: "Hands On Experience in React",
        color: "#61dafb",
        aos: "flip-up",
        aosDelay: 700,
    },
    {
        id: 5,
        percent: 40,
        name: "php",
        description: "Hands On Experience in PHP",
        color: "#8993be",
        aos: "flip-up",
        aosDelay: 900,
    },
    {
        id: 6,
        percent: 40,
        name: "mysql",
        description: "Hands On Experience in Mysql",
        color: "#f29221",
        aos: "flip-up",
        aosDelay: 1100,
    },
    {
        id: 7,
        percent: 80,
        name: "bootstrap",
        description: "Hands On Experience in Bootstrap",
        color: "#6610f2",
        aos: "flip-up",
        aosDelay: 1300,
    },
    {
        id: 8,
        percent: 20,
        name: "wordpress",
        description: "Hands On Experience in Wordpress",
        color: "#016087",
        aos: "flip-up",
        aosDelay: 1500,
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
