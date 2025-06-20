import {
	SiCss3,
	SiExpress,
	SiHtml5,
	SiJavascript,
	SiNodedotjs,
	SiPython,
	SiReact,
	SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const projects = [
	{
		id: 1,
		title: "Play Monitor",
		coverImage: "",
		description: `During the Gemini Hackathon, I found myself thinking about the disconnect between app developers and their users. Play Monitor emerged from this realization - a tool that uses Gemini 1.5 Pro to bridge this gap by transforming scattered user feedback into structured insights. It helps teams truly understand what their users are asking for, what frustrates them, and what they appreciate in the design.`,
		category: "Web",
		technologies: [
			{ name: "React", color: "#069", icon: <SiReact /> },
			{ name: "Node.js", color: "green", icon: <SiNodedotjs /> },
			{ name: "Express.js", color: "gray", icon: <SiExpress /> },
			{ name: "Tailwind CSS", color: "#069aed", icon: <SiTailwindcss /> },
		],
		githubSource: "https://www.github.com/santhoshmani1/Play-Monitor",
		liveLink: "https://playmonitor.vercel.app",
	},
	{
		id: 3,
		title: "Clear space",
		coverImage: "",
		description:
			"Clear Space was born from my personal struggle with digital distraction. As someone who found it increasingly difficult to maintain focus online, I built this extension as a solution for myself first. It was my first open-source project. I would definitely recommend to try it out :> and share your experience on how it felt.",
		category: "Web",
		technologies: [
			{ name: "Javascript", color: "yellow", icon: <SiJavascript /> },
			{ name: "HTML", color: "orange", icon: <SiHtml5 /> },
			{ name: "CSS", color: "blue", icon: <SiCss3 /> },
		],
		githubSource: "https://www.github.com/santhoshmani1/Clear-space",
		liveLink: "",
	},
	{
		id: 4,
		title: "EncodeX",
		coverImage: "",
		description:
			"EncodeX emerged from countless hours of manually encoding and decoding data during security research projects. I grew tired of jumping between web tools.  Drawing inspiration from the Unix philosophy of building simple tools, I created EncodeX as a easy to use toolkit that would stay in my terminal & get the job done quickly.",
		category: "CLI",
		technologies: [{ name: "Python", color: "#069", icon: <SiPython /> }],
		githubSource: "https://github.com/Santhoshmani1/encodex",
		liveLink: "",
	},
	{
		id: 2,
		title: "Inferhub",
		coverImage: "",
		description:
			"Inferhub began with my fascination for how AI could transform creative expression. I remebered the day I fumbled in second grade where I fumbled to complete the drawing of a boat just by drawing a large triangle. I used stable diffusion's SDXL inference API to generate images from simple text prompts.",
		category: "Web",
		githubSource: "https://www.github.com/santhoshmani1/Inferhub",
		liveLink: "https://inferhub.vercel.app/",
		technologies: [
			{ name: "HF Inference API", color: "white", icon: "🤗" },
			{ name: "React", color: "#069", icon: <SiReact /> },
			{ name: "Tailwind", color: "#069aed", icon: <SiTailwindcss /> },
		],
	},
	{
		id: 5,
		title: "Canvas",
		description:
			"Canvas began as a learning project when I was first exploring graphical interfaces in Java. What started as academic exercise evolved into something more meaningful as I found myself returning to this simple drawing tool when I needed to quickly sketch ideas. ",
		category: "GUI",
		technologies: [{ name: "Java", color: "#069", icon: <FaJava /> }],
		githubSource: "https://github.com/Santhoshmani1/Canvas",
		liveLink: "",
	},
];

export default projects;
