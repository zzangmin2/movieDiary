import styled from "styled-components";

export const MainOption = styled.div`
  position: relative;
`;
export const Banner = styled.div`
  height: 70px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: hidden;
  background-color: #2b3499;

  @media (max-width: 575px) {
  }
`;

export const OptionWrapper = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 30px 50px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  & div {
    display: flex;
  }

  @media (max-width: 575px) {
    flex-direction: column;
    align-items: start;
    padding: 20px 30px;

    & div {
      flex-direction: column;
    }
  }
`;

export const Filter = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 5px;
  background-color: #f7f7f7;
  border: none;

  @media (max-width: 575px) {
    margin-bottom: 15px;
  }
`;

export const MovieCountText = styled.div`
  align-items: center;

  &::before {
    content: "";
    height: 70%;
    width: 1px;
    margin: auto 30px;
    background-color: #000;
    display: inline-block;
  }
`;

export const RecordBtn = styled.button`
  padding: 0.75rem 1rem;
  margin-top: 20px;
  margin: 0;
  background-color: #ff6c22;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  cursor: pointer;

  @media (max-width: 575px) {
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
`;
