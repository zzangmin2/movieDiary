import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { login } from "../../redux";
import { parse } from "path";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "", userName: "" });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loggedInUserData = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // 이미 로그인되어 있다면 홈 페이지로 리다이렉션
    if (loggedInUserData.loginState) {
      navigate("/");
    }
  }, [loggedInUserData, navigate]);
  // const handleIdChange = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setEmail(e.target.value);
  //   },
  //   [email]
  // );
  // const handlePasswordChange = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setPassword(e.target.value);
  //   },
  //   [password]
  // );

  const handleLogin = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const userData = localStorage.getItem(`userData${i}`);

      if (userData) {
        const parsedUserData = JSON.parse(userData);

        console.log(parsedUserData);
        console.log(user.email, user.password);
        if (
          parsedUserData.email === user.email &&
          parsedUserData.password === user.password
        ) {
          // parsedUserData.loginState = true;
          // localStorage.setItem(`userData${i}`, JSON.stringify(parsedUserData));

          alert("로그인 성공!!");
          dispatch(login(parsedUserData));
          navigate("/");
          return;
        }
      }
    }
    alert("이메일 또는 비밀번호를 확인해주세요!");
  };

  return (
    <S.SignUp>
      <div>
        <h1>로그인</h1>
        <S.InputWrapper>
          <div>이메일</div>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>비밀번호</div>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
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
