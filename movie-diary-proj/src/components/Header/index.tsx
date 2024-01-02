import React, { useCallback } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { logout } from "../../redux";

interface Props {
  title: string;
  userName?: string;
  isHome?: boolean;
}

const Header: React.FC<Props> = ({ title, userName, isHome }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const userData = localStorage.getItem(`userData${i}`);

      if (userData) {
        const parsedUserData = JSON.parse(userData);
        if (parsedUserData.userName === userName) {
          // console.log(parsedUserData.userName);
          // parsedUserData.loginState = false;
          // localStorage.setItem(`userData${i}`, JSON.stringify(parsedUserData));

          dispatch(logout());

          alert("로그아웃!!");
          navigate("/login");
          return;
        }
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
