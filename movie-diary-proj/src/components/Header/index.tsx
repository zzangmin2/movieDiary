import React, { useCallback, useEffect } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { auth } from "../../firebase";
import { getLoginCookie } from "../../utils/cookieUtils";

interface Props {
  title: string;
  ishome?: boolean;
}

const Header: React.FC<Props> = ({ title, ishome }) => {
  const navigate = useNavigate();
  const cookieUser = getLoginCookie();

  const handleLogout = async () => {
    await auth.signOut();
    alert("로그아웃!");
    navigate("/login");
    return;
  };

  return (
    <S.Header ishome={ishome}>
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
