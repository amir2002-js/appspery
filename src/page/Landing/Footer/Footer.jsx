import { CiBasketball, CiFacebook, CiMail } from "react-icons/ci";
import GroupBtn from "../RepeatingComponents/GroupBtn";

export default function Footer() {
	return (
		<div className="">
			<div className="bg-[url(../../src/images/bg.png)] bg-cover bg-center flex flex-col gap-10 mt-28 justify-center items-center md:p-28 p-16 text-center">
				<h1 className="text-2xl font-vazir-bold">
					اپسپری - قالب لندینگ تیلویند 3
				</h1>

				<p className="text-sm text-gray-600">
					با قالب اپسپری به سرعت صفحات لندینگ و صفحه اصلی خود را طراحی
					کنید.
				</p>

				<GroupBtn />
			</div>
			<div className="bg-slate-900">
				<div className=" p-5 max-w-[800px] mx-auto text-slate-400 flex justify-between">
					<p className="text-sm font-vazir-bold">
						© 1402 طراحی توسط amir.null
					</p>

                    <div className="*:text-[40px] *:rounded *:border *:p-2 flex gap-3">
                        <CiMail />
                        <CiBasketball />
                        <CiFacebook />
                    </div>
				</div>
			</div>
		</div>
	);
}
