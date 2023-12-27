import styled from "styled-components";

export const SignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;

  & > div {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    width: 400px;
    padding: 40px;
    border-radius: 20px;
    background-color: #fff;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  & > div {
    font-size: 0.75rem;
    margin-bottom: 5px;
    color: #9c9c9c;
  }

  & > input {
    width: 100%;
    margin-bottom: 15px;
    border: none;
    background-color: #f7f7f7;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
  }
`;

export const Button = styled.div`
  width: 100%;
  padding: 15px;
  margin-top: 20px;

  background-color: #ff6c22;
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;
