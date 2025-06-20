import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
	Header,
	Projects,
	Footer,
	Experience,
	Quote,
	PrimaryBtn,
	SpaceContainer,
	RecentPosts,
} from "../components";
import { socials } from "../constants";
import ScrollProgress from "../components/shared/ScrollProgress";
import Contact from "../components/shared/Contact";

const Home = () => {
	const getSocialLink = (name) =>
		socials.find((s) => s.name.toLowerCase() === name.toLowerCase())?.url ||
		"#";

	return (
		<section
			id="home"
			className="min-h-screen bg-black bg-grid-12-s-2-neutral-950">
			<ScrollProgress />
			<Header />
			<SpaceContainer />
			<main className="flex flex-col justify-start px-4 text-sm bg-black text-slate-300 bg-grid-12-s-2-neutral-950 md:text-xl">
				<section className="z-10 w-11/12 mx-auto leading-relaxed sm:w-2/3">
					<h2 className="py-6 text-3xl font-semibold tracking-tighter md:text-6xl">
						Hi, I&apos;m Santhosh
					</h2>

					<Quote
						content={
							"🔥 Learn to build. Learn to sell. If you can do both, you will be unstoppable. – Naval"
						}
					/>

					<p className="pt-6">
						I’m a software engineer and security researcher from India,
						passionate about web and Android security. I started coding to
						overcome attention issues—my first project was a small open-source
						<a
							href="https://github.com/santhoshmani1/Clear-Space"
							className="ml-1 italic underline hover:text-blue-400">
							browser extension
						</a>
						.
					</p>

					<p className="pt-4">
						I deeply value the{" "}
						<a
							href="https://en.wikipedia.org/wiki/Unix_philosophy"
							target="_blank"
							rel="noreferrer"
							className="italic underline hover:text-blue-400">
							Unix philosophy
						</a>{" "}
						and the
						<a
							href="https://peps.python.org/pep-0020/#the-zen-of-python"
							target="_blank"
							rel="noreferrer"
							className="ml-1 italic underline hover:text-blue-400">
							Zen of Python
						</a>
						.
					</p>

					<p className="pt-4">
						I enjoy reading books on{" "}
						<span className="italic">
							technology, psychology, and philosophy
						</span>
						. Check out some of my notes at my{" "}
						<a
							href="/blog?category=books"
							className="ml-1 italic underline hover:text-blue-400">
							blog
						</a>
						.
					</p>

					<section id="hero-contact" className="lg:pt-8">
						<h3 className="py-4 text-2xl text-white sm:text-3xl lg:text-4xl ">
							Connect with Me
						</h3>
						<div className="flex flex-row gap-4">
							<PrimaryBtn
								label={"Github"}
								icon={<FaGithub />}
								link={getSocialLink("github")}
							/>
							<PrimaryBtn
								label={"Email"}
								icon={<SiGmail />}
								link={getSocialLink("email")}
							/>
						</div>
					</section>
				</section>
			</main>
			<Experience />
			<Projects />
			<RecentPosts />
			<Contact />
			<Footer />
		</section>
	);
};

export default Home;
