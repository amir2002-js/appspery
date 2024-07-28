import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar({ cls }) {
	const [tof, setTof] = useState(true);
	const [clsState, setCls] = useState("hidden -translate-y-6");
	return (
		<nav
			className={`${cls} fixed top-0 w-full transition-all duration-300 z-50`}
		>
			<div className="max-w-maxWidth container flex justify-between items-center py-5">
				{/* <----- logo -----> */}
				<img
					src="../src/images/logo-light.png"
					alt=""
					width={"120px"}
				/>

				{/* <----- menu -----> */}
				<ul className="text-white sm:hidden flex justify-end">
					<li className="relative w-10 text-end z-20">
						<button
						className="hover:text-blue-400"
							onClick={() => {
								setTof(!tof);
								if (tof) {
									setCls("block transform-cpu");
									setTimeout(() => {
										setCls("block translate-y-0)");
									});
								} else {
									setCls("block transform-gpu");
									setTimeout(() => {
										setCls("hidden transform-gpu")
									});
								}
							}}
						>
							<CiMenuBurger />
						</button>
						<ul className={`absolute transition-all left-3 w-32 duration-300 ${clsState} -z-10 p-5 border-y-[3px] border-blue-400 bg-gray-200 flex flex-col gap-3 items-start rounded-md text-black `}>
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
					</li>
				</ul>

				<ul className="flex text-gray-100 gap-6 max-sm:hidden">
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
			</div>
		</nav>
	);
}
