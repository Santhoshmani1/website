import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../constants";
import { SpaceContainer } from "../components";
import { PsyduckAtWorkImg } from "../assets";

const Projects = () => {
	return (
		<section id="projects" className="relative py-16 text-slate-200">
			<SpaceContainer />

			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center justify-center mb-12">
					<h2 className="my-6 text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text">
						Projects
					</h2>
					<div className="w-16 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
					<p className="max-w-2xl text-lg text-center text-gray-300">
						I like to work on side projects in my free time
					</p>
				</div>

				<div className="max-w-6xl mx-auto">
					<img
						src={PsyduckAtWorkImg}
						alt="work"
						className="object-cover w-32 h-32 p-1 mx-auto mb-10 border-2 rounded-full md:w-auto md:h-36 border-indigo-500/30"
					/>

					<div className="grid max-w-3xl grid-cols-1 gap-8 mx-auto">
						{projects.map((project) => {
							const {
								id,
								coverImage,
								title,
								description,
								githubSource,
								technologies,
								liveLink,
							} = project;

							return (
								<div
									key={id}
									className="overflow-hidden transition-all duration-300 border border-t-8 shadow-lg border-t-sky-100 border-gray-950 backdrop-blur-sm bg-gray-900/30 rounded-xl hover:shadow-2xl hover:border-sky-500 group">
									<div className="p-6">
										<h3 className="mb-3 font-mono text-2xl font-semibold text-white transition-colors group-hover:text-blue-400">
											{title}
										</h3>

										<div className="mb-4">
											{coverImage && (
												<img
													src={coverImage}
													alt={title}
													className="object-cover w-full h-48 mb-4 transition-opacity rounded-lg hover:opacity-90"
												/>
											)}

											<p className="p-2 text-sm font-light leading-relaxed text-gray-300 md:text-base">
												{description}
											</p>
										</div>

										<div className="flex flex-wrap gap-2 mb-5">
											{technologies.map((tech, index) => (
												<span
													key={index}
													className="inline-flex items-center px-3 py-1 font-mono text-xs font-medium text-gray-200 border border-gray-700 rounded-full bg-gray-800/80">
													<span
														className="mr-1.5"
														style={{ color: tech.color }}>
														{tech.icon}
													</span>
													{tech.name}
												</span>
											))}
										</div>

										<div className="flex justify-start pt-2 space-x-4">
											{liveLink && (
												<a
													className="flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300 hover:scale-105 hover:underline"
													href={liveLink}
													target="_blank"
													rel="noreferrer">
													<FaExternalLinkAlt className="text-xs" />
													<span>View Live</span>
												</a>
											)}

											<a
												href={githubSource}
												target="_blank"
												rel="noreferrer"
												className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white hover:underline hover:scale-105">
												<FaGithub />
												<span>Source Code</span>
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
