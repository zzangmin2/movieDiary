import styled from "styled-components";
import theme from "../../theme";

export const RecordEditor = styled.div`
  margin-top: 30px;

  & > textarea {
    width: 100%;
    height: 300px;
    padding: 30px 50px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  & > button {
    float: right;
    padding: 0.75rem 1rem;
    margin-top: 10px;
    background-color: #ff6c22;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 575px) {
    & > textarea {
      height: 400px;
      padding: 30px 30px;
    }
    & > button {
      position: fixed;
      bottom: 4%;
      left: 50%;
      transform: translateX(-50%);
      width: 90vw;
      padding: 20px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      z-index: 999;
    }
  }
`;

export const RecordEditorTopSection = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding: 30px 50px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  & > div {
    margin-right: 50px;
  }

  @media (max-width: 575px) {
    padding: 30px 30px;
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  font-size: 1.25rem;
  margin-right: 50px;

  & > div:nth-child(1) {
    margin-bottom: 10px;
    font-size: 0.75rem;
    color: #9c9c9c;
  }
  & > div:nth-child(2) {
    display: flex;
  }
  & > div:nth-child(2) button {
    padding: 0;
    margin-left: 15px;
    background: none;
    text-decoration: underline;
    color: #9c9c9c;
  }
  & input {
    width: 100%;
    border: none;
    background-color: #f7f7f7;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
  }
  & button {
    background-color: #f7f7f7;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    color: #ff6c22;
    cursor: pointer;
  }
  button:hover {
  }

  @media (max-width: 575px) {
    margin-bottom: 20px;
  }
`;

export const ScoreSelect = styled.div`
  display: flex;
  align-items: center;

  & select {
    width: 100%;
    border: none;
    background-color: #f7f7f7;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
  }
  & div {
    margin-left: 10px;
    font-size: 1rem;
    color: #000;
  }
`;
