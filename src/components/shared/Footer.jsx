const Footer = () => {
	return (
		<>
			<footer>
				<div className="flex flex-col items-center p-8 font-light leading-relaxed tracking-tight border-t text-slate-400 bg-slate-950 footer-wrapper justify-evenly border-t-slate-500">
					<div className="flex flex-col py-2 leading-relaxed tracking-tight text-center md:items-center md:flex-row">
						<span>&copy; {new Date().getFullYear()} Santhosh Mani. </span>
						<span className="py-2 pl-5">All rights reserved.</span>
					</div>
					<div>
						<span>
							Made with <span className="text-blue-500">❤</span> using React
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
