// URLS
const URL_BASE_API = "https://api.filmskk36.nomoreparties.co";
const URL_BEATFILM_MOVIES_API = "https://api.nomoreparties.co";

// MOVIE CARDS
const SCREEN_SIZE_MAP = {
	desktop: { cards: 12 },
	tablet: { cards: 8 },
	mob: { cards: 5 },
};

const findScreenSize = (screenWidth) => {
	if (screenWidth >= 1024) {
		return SCREEN_SIZE_MAP.desktop;
	} else if (screenWidth >= 768) {
		return SCREEN_SIZE_MAP.tablet;
	} else {
		return SCREEN_SIZE_MAP.mob;
	}
};

// DURATION
function convertDuration(movie) {
	const minutes = movie.duration % 60;
	const hours = Math.floor(movie.duration / 60);
	return `${hours}ч ${minutes}м`;
}

const SHORT_MOVIE_DURATION = 40;

export {
	URL_BASE_API,
	URL_BEATFILM_MOVIES_API,
	SCREEN_SIZE_MAP,
	findScreenSize,
	convertDuration,
	SHORT_MOVIE_DURATION,
};
