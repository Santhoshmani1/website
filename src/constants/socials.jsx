import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
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
		icon: <FaTwitter />,
	},
];

export default socials;
