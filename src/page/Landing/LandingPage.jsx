import Demo from "./Demoes/Demo";
import Footer from "./Footer/Footer";
import Header from "./Navbar/Header";
import Possibilities from "./Possibilities/Possibilities";

function LandingPage({ cls }) {
	return (
		<div>
			{/* <----- header -----> */}
			<Header cls={cls} />

			{/* <----- light demo -----> */}
			<Demo />

			{/* <----- Possibilities site -----> */}
			<Possibilities />

			{/* <----- footer -----> */}
			<Footer />
			
		</div>
	);
}

export default LandingPage;
