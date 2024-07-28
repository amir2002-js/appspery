export default function Navbar({ cls }) {
	return (
		<nav
			className={`${cls} fixed top-0 w-full transition-all duration-300 z-50`}
		>
			<div className="max-w-maxWidth container flex justify-between py-5">
				{/* <----- menu -----> */}
				<ul className="flex flex-row-reverse text-gray-100 gap-6">
					<li>
						<button className="hover:text-blue-400 transition-all duration-300">
							خانه
						</button>
					</li>
					<li>
						<button className="hover:text-blue-400 transition-all duration-300">
							دمو
						</button>
					</li>
					<li>
						<button className="hover:text-blue-400 transition-all duration-300">
							امکانات
						</button>
					</li>
				</ul>

				{/* <----- logo -----> */}
				<img
					src="../src/images/logo-light.png"
					alt=""
					width={"120px"}
				/>
			</div>
		</nav>
	);
}
