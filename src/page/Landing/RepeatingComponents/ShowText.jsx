import BlueLine from "./BlueLine";

export default function ShowText({ par, head, cap , clsPar , clsHead , mt}) {
	return (
		<div className={`${!mt ? "mt-32" : ""} flex flex-col gap-10 justify-center items-center`}>

            {/* <----- head & cap -----> */}
			<div className="flex flex-col gap-5 items-center justify-center">
				<p className={` text-slate-300 text-sm`}>{cap}</p>
				{/* <----- headText -----> */}
				<h1 className={`${clsHead? clsHead : "font-vazir-bold text-3xl"}`}>{head}</h1>
			</div>

			<BlueLine />

			{/* <----- caption Text -----> */}
			<figcaption className={`${clsPar? clsPar : "text-gray-500"} text-sm text-center max-w-[800px]`}>
				{par}
			</figcaption>
		</div>
	);
}
