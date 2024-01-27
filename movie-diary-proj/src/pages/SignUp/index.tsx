import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { parse } from "path";
import axios from "axios";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword || !userName) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(credentials.user);
      await updateProfile(credentials.user, { displayName: userName });
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.SignUp>
      <div>
        <h1>회원가입</h1>
        <S.InputWrapper>
          <div>이메일</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>비밀번호</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>비밀번호 확인</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>사용자명</div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </S.InputWrapper>
        <S.Button onClick={handleSignUp}>회원가입</S.Button>
      </div>
    </S.SignUp>
  );
};

export default SignUp;
