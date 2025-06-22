import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const socials = [
	{
		name: "Email",
		url: "mailto:santhoshmani1@wearehackerone.com",
		icon: <SiGmail />,
	},
	{
		name: "GitHub",
		url: "https://github.com/santhoshmani1",
		icon: <FaGithub />,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/santhoshmanip",
		icon: <FaLinkedinIn />,
	},
	{
		name: "X",
		url: "https://x.com/santhoshmani1",
		icon: <FaSquareXTwitter />,
	},
];

export default socials;
