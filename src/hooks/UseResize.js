import { useState, useEffect } from "react";

function UseResize() {
	const [screenWidth, setScreenWidth] = useState(null);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return screenWidth;
}

export default UseResize;
