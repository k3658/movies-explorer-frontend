const statusCodes = {
	ERROR_BAD_REQUEST: 400,
	ERROR_NOT_FOUND: 404,
	ERROR_DEFAULT: 500,
	ERR0R_UNAUTHORIZED: 401,
	ERROR_FORBIDDEN: 403,
	ERROR_CONFLICT: 409,
};

const errorMessages = {
	MESSAGE_ERROR_NOT_FOUND: "Страница по указанному маршруту не найдена.",
	MESSAGE_ERROR_DEFAULT: "На сервере произошла ошибка.",
	MESSAGE_ERROR_SEARCH: "Во время запроса произошла ошибка. ",
	MESSAGE_ERROR_REGISTER: "При регистрации пользователя произошла ошибка.",
	MESSAGE_ERROR_EXISTING_EMAIL: "Пользователь с таким email уже существует.",
	MESSAGE_ERROR_LOGIN: "При авторизации произошла ошибка.",
	MESSAGE_ERROR_BAD_DATA: "Вы ввели неправильный логин или пароль.",
	MESSAGE_ERROR_UPDATE_PROFILE: "При обновлении профиля произошла ошибка.",
};

const searchMessages = {
	emptyInputSearch: "Нужно ввести ключевое слово.",
	notFoundSearch: "Ничего не найдено.",
};

module.exports = { statusCodes, errorMessages, searchMessages };
