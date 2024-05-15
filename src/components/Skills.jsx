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
        color: "#069aed",
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
        color: "#feffff"
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
        name: "Express",
        icon: <SiExpress />,
        color: "#feffff",
    },
    {
        name: "Mongo DB",
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
        <div className="px-2 py-10 skills-container dark:bg-slate-900 dark:text-slate-200" style={{ fontFamily: "Montserrat" }} id="skills" >
            <h2 className="px-10 py-12 text-3xl font-bold leading-relaxed text-center">Skills</h2>

            <h3 className="p-4 m-2 text-2xl font-bold text-center dark:text-blue-400">Programming languages</h3>

            <div className="flex items-center p-2 m-auto languages-container justify-evenly lg:w-1/2">
                {programmingLanguages.map((language, index) => (
                    <div key={index} className="flex flex-col items-center justify-center skill">
                        <span
                            className="text-6xl techhnology-icon"
                            style={{ color: language.color }}
                        >
                            {language.icon}
                        </span>
                        <p className="p-2 text-lg skill-name">{language.name}</p>
                    </div>
                ))}
            </div>

            <h3 className="p-4 m-2 text-2xl font-bold text-center dark:text-blue-400">Web technologies</h3>
            <div className="flex flex-wrap items-center justify-center p-2 web-technologies-container">
                {webTechnologies.map((technology, index) => (
                    <div key={index} className="flex flex-col items-center justify-center px-4 py-2 text-xl skill">
                        <div
                            className="m-auto text-6xl text-center techhnology-icon" style={{ color: technology.color }}
                        >
                            {technology.icon}
                        </div>
                        <p className="p-2 skill-name">{technology.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
