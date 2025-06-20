const Footer = () => {
	return (
		<>
			<footer>
				<div className="flex flex-col items-center p-8 leading-relaxed tracking-tight border-t text-slate-400 bg-slate-950 footer-wrapper justify-evenly border-t-slate-500">
					<div className="py-2 copyright-info">
						<span>&copy; {new Date().getFullYear()} Santhosh Mani. </span>
						<span className="pl-5">All rights reserved.</span>
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
