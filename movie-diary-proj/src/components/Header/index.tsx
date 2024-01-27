import React, { useCallback, useEffect } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { auth } from "../../firebase";
import { getLoginCookie } from "../../utils/cookieUtils";

interface Props {
  title: string;
  isHome?: boolean;
}

const Header: React.FC<Props> = ({ title, isHome }) => {
  // const user = auth.currentUser;
  const navigate = useNavigate();
  const cookieUser = getLoginCookie();

  const handleLogout = async () => {
    await auth.signOut();
    alert("로그아웃!");
    navigate("/login");
    return;
  };

  return (
    <S.Header isHome={isHome}>
      <div>
        <S.Logo
          onClick={() => {
            navigate("/");
          }}
        >
          MOVIEDIARY
        </S.Logo>
        <div>{title}</div>
        <S.MypageBtn>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          {/* {user?.displayName} */}
          {cookieUser && cookieUser.userName
            ? cookieUser.userName
            : "로그인해줘"}
        </S.MypageBtn>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </S.Header>
  );
};

export default Header;
