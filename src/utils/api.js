import { URL_BASE_API } from "./constants";

const apiConfig = {
	baseUrl: URL_BASE_API,
	headers: {
		"Content-Type": "application/json",
	},
};

class Api {
	constructor(apiConfig) {
		this._baseUrl = apiConfig.baseUrl;
		this._headers = apiConfig.headers;
	}

	_statusCheck(res) {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(`Ошибка: ${res.status}`);
	}

	getMovies() {
		return fetch(this._baseUrl, {
			headers: this._headers,
		}).then(this._statusCheck);
	}
}

const api = new Api(apiConfig);
export default api;
