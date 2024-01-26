import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { parse } from "path";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";
import { checkLoginState, login } from "../../redux/authSlice";
import axios from "axios";
import { log } from "console";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  // const [user, setUser] = useState({ email: "", password: "", userName: "" });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  // const loggedInUserData = useSelector((state: RootState) => state.auth);

  // useEffect(() => {
  //   const loginState = dispatch(checkLoginState());
  //   console.log(loginState);
  //   if (checkLoginState()) {
  //     navigate("/");
  //   }
  // // }, []);

  // useEffect(() => {
  //   if (loggedInUserData.user) {
  //     navigate("/");
  //   }
  // }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      console.log(e);
    } finally {
      console.log(email, password);
    }
    // try {
    //   const response = await axios.post("http://localhost:4000/user", {
    //     email: email,
    //     password: password,
    //   });
    //   const user = response.data;
    //   if (user) {
    //     // localStorage.setItem("authUser", JSON.stringify(user));
    //     dispatch(login(user));
    //     console.log("axios 로그인 성공");
    //     navigate("/");
    //   } else {
    //     alert("이메일 또는 비밀번호를 확인해주세요!");
    //   }
    // } catch (err) {
    //   console.log("로그인 실패", err);
    // }
    // axios
    //   .get("http://localhost:4000/user")
    //   .then((response) => {
    //     const user = response.data.find(
    //       (userData: any) =>
    //         userData.email === email && userData.password === password
    //     );
    //     if (user) {
    //       localStorage.setItem("authUser", JSON.stringify(user));
    //       dispatch(login(user));
    //       console.log("axios 로그인 성공");
    //       navigate("/");
    //     } else {
    //       alert("이메일 또는 비밀번호를 확인해주세요!");
    //     }
    //   })
    //   .catch((err) => {
    //     console.error("로그인 실패", err);
    //   });
  };
  // const handleLogin = () => {
  //   axios
  //     .post("http://localhost:4000/user", {
  //       email: user.email,
  //       password: user.password,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       // localStorage.clear();
  //       // localStorage.setItem("userEmail", res.data.email);
  //       // window.location.replace("http://localhost:3000/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   const storedUserData = localStorage.getItem("user");
  //   const userArray = storedUserData ? JSON.parse(storedUserData) : {};

  //   for (let i = 0; i < userArray.length; i++) {
  //     const userData = userArray[i];
  //     if (
  //       userData.email === user.email &&
  //       userData.password === user.password
  //     ) {
  //       alert("로그인 성공!!");
  //       localStorage.setItem("authUser", JSON.stringify(userData));
  //       dispatch(login(userData));
  //       navigate("/");
  //       return;
  //     }
  //   }

  //   alert("이메일 또는 비밀번호를 확인해주세요!");
  // };

  return (
    <S.SignUp>
      <div>
        <h1>로그인</h1>
        <S.InputWrapper>
          <div>이메일</div>
          <input
            type="email"
            // onChange={(e) => setUser({ ...user, email: e.target.value })}
            onChange={(e) => setEmail(e.target.value)}
            value="test2@gmail.com"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <div>비밀번호</div>
          <input
            type="password"
            // onChange={(e) => setUser({ ...user, password: e.target.value })}
            onChange={(e) => setPassword(e.target.value)}
            value="abcd1234"
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
