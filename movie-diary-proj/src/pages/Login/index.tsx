import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleIdChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [email]
  );
  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const handleLogin = useCallback(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const userData = localStorage.getItem(`userData${i}`);

      if (userData) {
        const parsedUserData = JSON.parse(userData);

        if (
          parsedUserData.email === email &&
          parsedUserData.password === password
        ) {
          parsedUserData.loginState = true;
          localStorage.setItem(`userData${i}`, JSON.stringify(parsedUserData));

          alert("로그인 성공!!");
          navigate("/");
          return;
        }
      }
    }

    alert("이메일 또는 비밀번호를 확인해주세요!");
  }, [email, password]);

  const myStyle = {
    margin: "30px",
  };
  return (
    <S.SignUp>
      <div>
        <h1>로그인</h1>
        <S.InputWrapper>
          <div>이메일</div>
          <input type="email" onChange={handleIdChange} />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>비밀번호</div>
          <input type="password" onChange={handlePasswordChange} />
        </S.InputWrapper>
        <S.Button onClick={handleLogin}>로그인</S.Button>
        <S.SignUpButton>
          <Link to="/SignUp">회원가입</Link>
        </S.SignUpButton>
      </div>
    </S.SignUp>
  );
};

export default Login;
