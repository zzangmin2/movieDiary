import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { setLoginCookie } from "../../utils/cookieUtils";
import useAuth from "../../redux/useAuth";

const Login: React.FC = () => {
  const { handleReduxLogin, isLoggedIn } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      const userName = user?.displayName;
      setLoginCookie({ email, password, userName });
      handleReduxLogin({ email, password, userName });
      navigate("/");
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <S.SignUp>
      <div>
        <img src="/images/logo-blue.svg" alt="로고 이미지" width="70px" />
        <h1>로그인</h1>
        <S.InputWrapper>
          <div>이메일</div>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>비밀번호</div>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
