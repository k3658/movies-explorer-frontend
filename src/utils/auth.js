import { URL_BASE_API } from "./constants";

const statusCheck = (res) => {
	if (res.ok) {
		return res.json();
	}

	return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = ({ name, email, password }) => {
	return fetch(`${URL_BASE_API}/signup`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name, email, password }),
	}).then((res) => statusCheck(res));
};

export const authorize = ({ email, password }) => {
	return fetch(`${URL_BASE_API}/signin`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	}).then((res) => statusCheck(res));
};

export const checkToken = (token) => {
	return fetch(`${URL_BASE_API}/users/me`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	}).then((res) => statusCheck(res));
};
