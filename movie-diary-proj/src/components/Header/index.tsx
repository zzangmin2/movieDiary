import React, { useCallback } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

interface Props {
  title: string;
  userName?: string;
  isHome?: boolean;
}

const Header: React.FC<Props> = ({ title, userName, isHome }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const storedUserData = localStorage.getItem("user");
    const userArray = storedUserData ? JSON.parse(storedUserData) : {};

    for (let i = 0; i < userArray.length; i++) {
      const userData = userArray[i];
      if (userData.userName === userName) {
        dispatch(logout());

        alert("로그아웃!!");
        navigate("/login");
        return;
      }
    }
  };

  return (
    <S.Header isHome={isHome}>
      <div>
        <S.Logo>
          <Link to="/">MOViE</Link>
        </S.Logo>
        <div>{title}</div>
        <S.MypageBtn>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          {userName}
        </S.MypageBtn>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </S.Header>
  );
};

export default Header;
