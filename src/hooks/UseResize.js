import { useState, useEffect } from "react";

function useResize() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = (evt) => {
			setScreenWidth(evt.target.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return screenWidth;
}

export default useResize;
