import Landings from "./Landings/Landings";

export default function LightDemo() {
	return (
		<div className="container max-w-maxWidth">
			<div className="mt-32 flex flex-col gap-10 justify-center items-center">
				<p className="font-vazir-bold text-3xl">دموهای حالت روشن</p>
				<span className="w-32 h-[1px] rounded-full bg-gradient-to-r from-blue-400/0 via-blue-600 to-blue-400/0"></span>
				<figcaption className="text-slate-600 text-sm text-center container max-w-[800px]">
					اپسپری یک قالب لندینگ مینیمال و کلین است که برای مواردی مثل
					صفحه اصلی ، صفحات لندینگ و معرفی و نمونه کار برای کسب و کار
					ها و وب سایت های حرفه ایی مناسب است.
				</figcaption>
			</div>
            <Landings />
		</div>
	);
}
