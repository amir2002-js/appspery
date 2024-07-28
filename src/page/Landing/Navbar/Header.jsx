import Navbar from "./Nav/Navbar";

export default function Header({ cls }) {
	return (
		<div>
			<Navbar cls={cls} />
			<img src="../src/images/Untitled-1.png" alt="" className="brightness-[.4] z-0 shadow" />
		</div>
	);
}
