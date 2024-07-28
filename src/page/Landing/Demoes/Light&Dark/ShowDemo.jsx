import BlueLine from "../../RepeatingComponents/BlueLine";
import ShowText from "../../RepeatingComponents/ShowText";

export default function ShowDemo({ dataImg, dataText }) {
	return (
		<>
			<ShowText par={dataText.par} head={dataText.head} cap={null} />
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
