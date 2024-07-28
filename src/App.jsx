import { useState } from "react";
import LandingPage from "./page/Landing/LandingPage";

function App() {
	const [addBg, setAddBg] = useState("");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 32) {
			setAddBg("bg-slate-900");
		} else {
			setAddBg("");
		}
	});
	return (
		<div className="font-vazir " dir="rtl">
			<LandingPage cls={addBg} />
		</div>
	);
}

export default App;
