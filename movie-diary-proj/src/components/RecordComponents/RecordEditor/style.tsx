import styled from "styled-components";
import theme from "../../theme";

export const RecordEditor = styled.div`
  margin-top: 30px;

  & > textarea {
    width: 100%;
    height: 300px;
    padding: 30px 50px;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  & > button {
    float: right;
    padding: 0.75rem 1rem;
    margin-top: 20px;
    background-color: #ff6c22;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
`;

export const RecordEditorTopSection = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding: 30px 50px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  & > div {
    margin-right: 50px;
  }
  & > button {
    height: 50px;
    background-color: ${() => theme.colors.Main};
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 1rem;
    color: black;
    cursor: pointer;
  }
`;
export const InputWrapper = styled.div`
  display: inline-block;
  font-size: 1.25rem;
  margin-right: 50px;

  & > div {
    margin-bottom: 10px;
    font-size: 0.75rem;
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
