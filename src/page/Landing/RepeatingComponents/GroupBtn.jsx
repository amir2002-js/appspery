import { CiDesktop, CiShoppingCart } from "react-icons/ci";

export default function GroupBtn() {
	return (
		<div className="flex flex-wrap justify-center gap-5">
			<button className="py-1 px-3 rounded-md bg-blue-500 text-white flex gap-2 hover:bg-blue-600 transition-all duration-300">
				<CiShoppingCart className="text-xl" />
				هم اکنون بخرید
			</button>
			<button className="py-1 px-3 rounded-md bg-gray-200 text-black flex gap-2  hover:bg-white transition-all duration-300">
				<CiDesktop className="text-xl" />
				مشاهده دموها
			</button>
		</div>
	);
}
