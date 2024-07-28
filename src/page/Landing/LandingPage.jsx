import LightDemo from "./LightDemo/LightDemo";
import Header from "./Navbar/Header";

function LandingPage({ cls }) {
	return (
		<div>
			<Header cls={cls} />
			<LightDemo />
		</div>
	);
}

export default LandingPage;
