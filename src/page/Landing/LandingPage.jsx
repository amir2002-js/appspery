import Demo from "./Demoes/Demo";
import Header from "./Navbar/Header";

function LandingPage({ cls }) {
	return (
		<div>
			{/* <----- header -----> */}
			<Header cls={cls} />

			{/* <----- light demo -----> */}
			<Demo />
		</div>
	);
}

export default LandingPage;
