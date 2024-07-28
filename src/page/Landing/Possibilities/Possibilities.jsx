import ShowText from "../RepeatingComponents/ShowText";
import PossibilityItems from "./possibilityBox/PossibilityItems";

export default function Possibilities() {
	const text = {
		cap: "امکانات",
		par: "قالب لندینگ اپسپری در دو حالت روشن و تاریک ارائه میشود و برای هر صفحه میتوانید 18 رنگ مختلف انتخاب کنید. همچنین نسخه های راست چین و چپ چین به صورت جداگانه ارائه میشوند.",
		head: "امکانات قالب لندینگ اپسپری",
	};

	const items = [
		{
			url: "../../src/images/img-04.png",
			cap: "قالب لندینگ اپسپری با نسخه تیلویند 3 نوشته شده و برای قالب از طراحی کلین استفاده شده است.",
			head: "تیلویند",
		},
		{
			url: "../../src/images/customize.png",
			cap: "تمام امکانات براحتی قابل سفارشی سازی هستند.همچنین براحتی میتوانید رنگها یا فونت های جدید اضافه کنید.که در مستندات به آن اشاره شده است.",
			head: "سفارشی سازی آسان",
		},
		{
			url: "../../src/images/responsive-design.png",
			cap: "قالب اپسپری به خوبی با دستگاه ها با اندازه های مختلف سازگار است.",
			head: "کاملاً واکنشگرا",
		},
		{
			url: "../../src/images/code.png",
			cap: "در قالب اپسپری از طراحی کلین استفاده شده و در همه جا از کامنت گذاری استفاده شده است و براحتی قابل فهم است.",
			head: "کد کلین",
		},
	];
	const last = {
		url: "../../src/images/task.png",
		cap: "مستندات قالب به خوبی تمام موارد را برای شما توضیح میدهد",
		head: "مستندات",
	};
	return (
		<div className="container max-w-maxWidth">
			<ShowText cap={text.cap} head={text.head} par={text.par} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-3 mt-20 justify-center items-start mb-6">
				{items.map((item, i) => (
					<PossibilityItems
						key={i}
						url={item.url}
						head={item.head}
						caption={item.cap}
					/>
				))}
			</div>
			<div className="max-w-[660px] mx-auto">
				<PossibilityItems
					url={last.url}
					head={last.head}
					caption={last.cap}
				/>
			</div>
		</div>
	);
}
