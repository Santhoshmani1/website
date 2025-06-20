import { socials } from "../../constants";

const Contact = () => {
	return (
		<section id="contact" className="py-12 mx-2 bg-black">
			<div className="max-w-5xl px-4 mx-auto">
				<div className="mb-20 text-center">
					<span className="inline-block mb-2 text-xs font-light tracking-widest uppercase text-sky-400">
						Contact
					</span>
					<h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl">
						Get in{" "}
						<span className="font-normal text-transparent bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text">
							Touch
						</span>
					</h2>
					<div className="w-16 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>

					<p className="text-sm font-light text-gray-400">
						Whether you have a question, want to collaborate, or just want to
						say hi, feel free to drop me a message from my socials. While I
						maintain a minimal social media presence, I respond via email
						relatively faster.
					</p>
				</div>

				<div className="flex items-center w-2/3 mx-auto mb-2 md:w-1/2 justify-evenly">
					{socials.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center justify-center p-2 mb-4 text-lg font-light text-center text-gray-300 transition-colors duration-300 border rounded-full hover:text-sky-400 lg:text-2xl hover:border-sky-400 hover:bg-gray-800">
							{social.icon}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Contact;
