export default function Items() {
	return (
		<div className="flex gap-4 flex-wrap justify-center mx-5">
			{/* <----- tailwind log -----> */}
			<div className="p-2 rounded-lg shadow-lg shadow-black/60 w-16 bg-white ">
				<img src="../../src/images/tailwind.png" alt="" />
			</div>

			{/* <----- js log -----> */}
			<div className="p-2 rounded-lg shadow-lg shadow-black/60 w-16 bg-white ">
				<img src="../../src/images/Js.png" alt="" />
			</div>

			{/* <----- css log -----> */}
			<div className="p-2 rounded-lg shadow-lg shadow-black/60 w-16 bg-white ">
				<img src="../../src/images/CSS.png" alt="" />
			</div>

			{/* <----- html log -----> */}
			<div className="p-2 rounded-lg shadow-lg shadow-black/60 w-16 bg-white ">
				<img src="../../src/images/html.png" alt="" />
			</div>
		</div>
	);
}
