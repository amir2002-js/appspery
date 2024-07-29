import Navbar from "./Nav/Navbar";
import Items from "./Items/Items";
import GroupBtn from "../RepeatingComponents/GroupBtn";

export default function Header({ cls }) {
	return (
		<div className="shadow-md ">
			<Navbar cls={cls} />
			<div className="bg-[url('../src/images/teamDev.jpg')] bg-cover bg-center h-[600px] flex justify-center items-center relative brightness-10">
				<div className="absolute bg-black/70 size-full z-10"></div>
				<div className="flex flex-col justify-center items-center text-gray-100 z-20 max-w-[500px] mx-10 text-center gap-3">
					<h1 className="text-3xl font-vazir-bold">
						قالب html لندینگ اپسپری
					</h1>

					<span className="py-0.5 px-2 text-sm bg-red-500 rounded-lg">
						نسخه 1.0
					</span>

					<p>
						قالب اپسپری ، یک قالب لندینگ کلین، انعطاف پذیر و کاملاً
						واکنشگرا است و با بوتسترپ نسخه 5.1.3 ساخته شده است.و
						مناسب هرگونه صفحه لندینگ میباشد
					</p>

					{/* button */}
					<GroupBtn />
					<div className="absolute top-[96%]">
						<Items />
					</div>
				</div>
			</div>
		</div>
	);
}
