import ShowDemo from "./Light&Dark/ShowDemo";

export default function Demo() {
	const dataImgsLight = [
		{ name: "لندینگ 1", url: "../../src/images/index-1.png" },
		{ name: "لندینگ 2", url: "../../src/images/index-2.png" },
		{ name: "لندینگ 3", url: "../../src/images/index-3.png" },
		{ name: "لندینگ 4", url: "../../src/images/index-4.png" },
		{ name: "لندینگ 5", url: "../../src/images/index-5.png" },
		{ name: "لندینگ 6", url: "../../src/images/index-6.png" },
	];
	const dataImgsdark = [
		{ name: "لندینگ 1", url: "../../src/images/index-7.png" },
		{ name: "لندینگ 2", url: "../../src/images/index-8.png" },
		{ name: "لندینگ 3", url: "../../src/images/index-9.png" },
		{ name: "لندینگ 4", url: "../../src/images/index-10.png" },
		{ name: "لندینگ 5", url: "../../src/images/index-11.png" },
		{ name: "لندینگ 6", url: "../../src/images/index-12.png" },
	];

	const dataText = [
		{
			head: "دموهای حالت روشن",
			par: "اپسپری یک قالب لندینگ مینیمال و کلین است که برای مواردی مثل صفحه اصلی ، صفحات لندینگ و معرفی و نمونه کار برای کسب و کار ها و وب سایت های حرفه ایی مناسب است.",
		},
		{
			head: "دموهای حالت تاریک",
			par: "اپسپری یک قالب لندینگ مینیمال و کلین است که برای مواردی مثل صفحه اصلی ، صفحات لندینگ و معرفی و نمونه کار برای کسب و کار ها و وب سایت های حرفه ایی مناسب است.",
		},
	];
	return (
		<div className="container max-w-maxWidth">
			{/* <----- light demo -----> */}
			<ShowDemo dataText={dataText[0]} dataImg={dataImgsLight}/>

			{/* <----- dark demo -----> */}
			<ShowDemo dataText={dataText[1]} dataImg={dataImgsdark}/>
		</div>
	);
}
