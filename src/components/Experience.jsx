import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import SpaceContainer from "./SpaceContainer.jsx";

const Experience = () => {
	return (
		<section id="experience">
			<SpaceContainer />
			<h2 className="py-4 text-4xl tracking-tighter text-center lg:text-5xl">
				Experience
			</h2>
			<div className="w-16 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
			<VerticalTimeline
				animate={true}
				layout="1-column-left"
				lineColor="#069aed"
				className="w-5/6 lg:w-3/5">
				{experiences.map((experience) => (
					<VerticalTimelineElement
						key={experience.id}
						date={
							<div className="flex items-center justify-center text-center text-white">
								<span className="px-1 md:px-2 material-icons">schedule</span>
								{experience.date}
							</div>
						}
						iconStyle={{ background: "rgb(255,255,255)" }}
						icon={
							<img
								src={experience?.icon}
								alt={experience?.title}
								className="rounded-full"
							/>
						}
						contentStyle={{ background: "none" }}>
						<div className="text-gray-200">
							<h3 className="text-lg font-bold leading-relaxed tracking-tight md:text-xl text-sky-500">
								{experience.title}
							</h3>
							<h4 className="italic tracking-tight md:text-lg text-slate-100">
								{experience.role}
							</h4>
							<ul className="py-4 text-sm font-light leading-relaxed md:px-2 lg:px-8">
								{experience.description.map((desc, index) => (
									<li
										key={index}
										className="m-2 text-sm leading-relaxed tracking-tight text-white list-disc md:text-lg">
										{desc}
									</li>
								))}
							</ul>
						</div>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</section>
	);
};

export default Experience;
