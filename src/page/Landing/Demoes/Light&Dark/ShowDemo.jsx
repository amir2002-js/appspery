export default function ShowDemo({ dataImg, dataText }) {
	return (
		<>
			<div className="mt-32 flex flex-col gap-10 justify-center items-center">
				{/* <----- headText -----> */}
				<p className="font-vazir-bold text-3xl">{dataText.head}</p>

				<span className="w-32 h-[1px] rounded-full bg-gradient-to-r from-blue-400/0 via-blue-600 to-blue-400/0"></span>

				{/* <----- caption Text -----> */}
				<figcaption className="text-slate-600 text-sm text-center container max-w-[800px]">
					{dataText.par}
				</figcaption>
			</div>
			<div className="mt-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-10">

					{/* <----- show images -----> */}
					{dataImg.map((img, index) => (
						<div
							className="flex flex-col justify-center items-center gap-5 shadow-lg p-4 hover:cursor-pointer  hover:-translate-y-4 transition-all duration-300 rounded-md"
							key={index}
						>
							{/* <----- img landing page -----> */}
							<img src={img.url} alt="" className="" />

							{/* <----- cap of img landing page -----> */}
							<p>{img.name}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
