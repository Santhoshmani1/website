import React from "react";

import {
    SiCplusplus,
    SiCss3,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiSolidity,
} from "react-icons/si";

const programmingLanguages = [
    {
        name: "C++",
        icon: <SiCplusplus />,
        color: "blue",
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "yellow",
    },
    {
        name: "Python",
        icon: <SiPython />,
        color: "#069",
    },
    {
        name: "Solidity",
        icon: <SiSolidity />,
        color: "black"
    }
];

const webTechnologies = [
    {
        name: "React",
        icon: <SiReact />,
        color: "skyblue",
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: "green",
    },
    {
        name: "Express.js",
        icon: <SiExpress />,
        color: "black",
    },
    {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#00ff11"
    },
    {
        name: "HTML",
        icon: <SiHtml5 />,
        color: "#ff5711",
    },
    {
        name: "CSS",
        icon: <SiCss3 />,
        color: "blue",
    },
];

const Skills = () => {
    return (
        <div className="skills-container my-2 py-10 px-2" style={{ fontFamily: "Montserrat" }} id="skills" >
            <h2 className="text-3xl text-center py-12 px-10  leading-relaxed font-bold">Skills</h2>

            <h3 className="text-xl font-bold text-center p-4 m-2">Programming languages</h3>

            <div className="languages-container flex justify-evenly lg:w-1/2 m-auto items-center">
                {programmingLanguages.map((language, index) => (
                    <div key={index} className="skill flex items-center justify-center flex-col">
                        <span
                            className="techhnology-icon text-4xl"
                            style={{ color: language.color }}
                        >
                            {language.icon}
                        </span>
                        <p className="skill-name text-lg p-2">{language.name}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-bold text-center p-4 m-2">Web technologies</h3>
            <div className="web-technologies-container flex justify-center items-center flex-wrap">
                {webTechnologies.map((technology, index) => (
                    <div key={index} className="skill px-4 py-2 text-xl flex items-center justify-center flex-col">
                        <div
                            className="techhnology-icon text-4xl m-auto text-center" style={{ color: technology.color }}
                        >
                            {technology.icon}
                        </div>
                        <p className="skill-name p-2">{technology.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
