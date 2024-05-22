import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./userSlice";
import { IUser } from "../typings/db";
import { RootState } from "./rootReducer";
import { useEffect } from "react";

const useAuth = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleReduxLogin = (user: IUser) => {
    dispatch(login(user));
  };

  const handleReduxLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (isLoggedIn && !user) {
    }
  }, []);

  return { isLoggedIn, user, handleReduxLogin, handleReduxLogout };
};

export default useAuth;
