import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

interface HeaderProps {
  ishome?: boolean;
}

export const Header = styled.div<HeaderProps>`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: hidden;
  background-color: #2b3499;
  font-size: 1rem;

  ${(props) =>
    props.ishome
      ? css`
          background-color: #2b3499;
          color: #fff;
        `
      : css`
          background-color: #fff;
          color: #2b3499;
          border-bottom: 1px solid #eee;
        `}
  & > div > div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px 20px 0px;
  }

  @media (max-width: 575px) {
    width: 100vw;

    & > div {
      width: 90vw;
      display: flex;
      align-items: center;
      margin: 0 auto;
    }

    & > div > div {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 20px 0px 20px 0px;
    }
  }
`;

export const Logo = styled.div`
  font-weight: 900;
  cursor: pointer;
`;

export const Title = styled.div`
  @media (max-width: 575px) {
    margin-top: 20px;
    font-size: 1.5rem;
  }
`;

export const MypageBtn = styled.div`
  float: right;
  cursor: pointer;

  & div {
    display: inline-block;
    margin-right: 10px;
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (max-width: 575px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 575px) {
    display: block;
    cursor: pointer;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
  display: none;

  @media (max-width: 575px) {
    display: block;
  }
`;

// modal
export const Modal = styled.div`
  position: fixed;
  top: 5%;
  right: 1%;
  transform: translate(-7%, -1%);
  width: 200px;
  height: 140px;
  background-color: #fff;
  color: #2b3499;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  z-index: 999;

  & div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 50%;
    background-color: #eeeeee;
  }

  & div:nth-child(3) {
    margin-top: 20px;
    color: #919191;
    cursor: pointer;
  }
`;

export const mobileMenu = styled.div`
  display: none;
  width: 60% !important;

  @media (max-width: 575px) {
    display: block;
    height: 100vh;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 40px 100px 0px,
      rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
    color: black;
    position: fixed;

    top: 0;
    right: 0;
    z-index: 999;

    & > div:nth-child(1) {
      width: 100%;
      padding: 30px;
      box-sizing: border-box;
    }

    & > div:nth-child(1) > div:nth-child(1) {
      font-size: 1.25rem;
      color: #2b3499;
      margin-bottom: 20px;
    }

    & > div:nth-child(1) > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 50%;
      background-color: #eeeeee;
    }

    & > div:nth-child(1) > div:nth-child(3) {
      color: #2b3499;
      font-size: 1.25rem;
    }

    & > div:nth-child(1) > div:nth-child(4) {
      margin-top: 20px;
      color: #919191;
      cursor: pointer;
    }
  }
`;
