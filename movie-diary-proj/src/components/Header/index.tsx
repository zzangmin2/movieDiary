import React, { useCallback, useEffect, useState } from "react";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
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
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileModalHovered, setProfileModalHovered] = useState(false);

  const handleLogout = async () => {
    await auth.signOut();
    alert("로그아웃!");
    navigate("/login");
    return;
  };

  const handleMoblieModal = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <S.Header ishome={ishome}>
      <div>
        <div>
          <S.Logo
            onClick={() => {
              navigate("/");
            }}
          >
            MOVIEDIARY
          </S.Logo>
          <S.Title>{title}</S.Title>
          <S.MypageBtn
            onMouseEnter={() => setProfileModalHovered(true)}
            onMouseLeave={() => setProfileModalHovered(false)}
          >
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            {cookieUser && cookieUser.userName
              ? cookieUser.userName
              : "로그인해줘"}
          </S.MypageBtn>
          {profileModalHovered && (
            <S.Modal
              onMouseEnter={() => setProfileModalHovered(true)}
              onMouseLeave={() => setProfileModalHovered(false)}
            >
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div>
                {cookieUser.userName}님, <br /> 반갑습니다
              </div>
              <div onClick={handleLogout}>로그아웃</div>
            </S.Modal>
          )}
        </div>
        <S.StyledFontAwesomeIcon icon={faBars} onClick={handleMoblieModal} />

        {mobileMenu && (
          <>
            <S.mobileMenu>
              <div onClick={handleMoblieModal}>닫기</div>
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div>
                {cookieUser.userName}님, <br /> 반갑습니다
              </div>
              <div onClick={() => handleLogout()}>로그아웃</div>
            </S.mobileMenu>
          </>
        )}
      </div>
    </S.Header>
  );
};

export default Header;
