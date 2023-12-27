import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loginState, setLoginState] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = useCallback(
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
  const handleConfirmPasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.target.value);
    },
    [confirmPassword]
  );
  const handleUserNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    },
    [userName]
  );

  const handleSignUp = useCallback(() => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    for (let i = 0; i < localStorage.length; i++) {
      const userData = localStorage.getItem(`userData${i}`);

      if (userData) {
        const parsedUserData = JSON.parse(userData);
        if (parsedUserData.email === email) {
          alert("이미 사용 중인 이메일입니다.");
          return;
        }
        if (parsedUserData.userName === userName) {
          alert("이미 사용 중인 닉네임입니다.");
          return;
        }
      }
    }

    if (!email) {
      alert("이메일을 입력해주세요");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    if (!confirmPassword) {
      alert("비밀번호 확인을 입력해주세요");
      return;
    }

    if (!userName) {
      alert("닉네임을 입력해주세요");
      return;
    }

    const userData = {
      email,
      password,
      userName,
      loginState,
    };

    const numberOfLocalStorageKeys = localStorage.length;

    localStorage.setItem(
      `userData${numberOfLocalStorageKeys}`,
      JSON.stringify(userData)
    );

    alert("회원가입 완료!");
    navigate("/login");
  }, [email, password, confirmPassword, userName, navigate]);

  const myStyle = {
    margin: "30px",
  };
  return (
    <S.SignUp>
      <div>
        <h1>회원가입</h1>
        <S.InputWrapper>
          <div>이메일</div>
          <input type="email" value={email} onChange={handleEmailChange} />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>비밀번호</div>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>비밀번호 확인</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>사용자명</div>
          <input type="text" value={userName} onChange={handleUserNameChange} />
        </S.InputWrapper>
        <S.Button onClick={handleSignUp}>회원가입</S.Button>
      </div>
    </S.SignUp>
  );
};

export default SignUp;
