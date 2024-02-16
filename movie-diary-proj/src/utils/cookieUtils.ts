import Cookies from "js-cookie";

const COOKIE_NAME = "user";

export const setLoginCookie = (userData: object) => {
  Cookies.set(COOKIE_NAME, JSON.stringify(userData), { expires: 7 });
};

export const removeLoginCookie = () => {
  Cookies.remove(COOKIE_NAME);
};

export const getLoginCookie = () => {
  const cookieValue = Cookies.get(COOKIE_NAME);
  return cookieValue ? JSON.parse(cookieValue) : null;
};
