// URL
const URL_BASE_API = "https://api.nomoreparties.co";
const URL_BEATFILM_MOVIES_API = "api.filmskk36.nomoreparties.co";

// RESIZE
const SCREEN_SIZE_MAP = {
	desktop: { cards: 12 },
	tablet: { cards: 8 },
	mob: { cards: 5 },
};

const findScreenSize = (screenWidth) => {
	if (screenWidth >= 1200) {
		return SCREEN_SIZE_MAP.desktop;
	} else if (screenWidth >= 768) {
		return SCREEN_SIZE_MAP.tablet;
	} else {
		return SCREEN_SIZE_MAP.mob;
	}
};

export { URL_BEATFILM_MOVIES_API, URL_BASE_API, findScreenSize };
