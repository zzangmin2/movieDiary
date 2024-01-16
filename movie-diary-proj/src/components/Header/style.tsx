import styled, { css } from "styled-components";

interface HeaderProps {
  isHome?: boolean;
}

export const Header = styled.div<HeaderProps>`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: hidden;
  background-color: #2b3499;
  font-size: 1rem;

  ${(props) =>
    props.isHome
      ? css`
          background-color: #2b3499;
          color: #fff;
        `
      : css`
          background-color: #fff;
          color: #2b3499;
          border-bottom: 1px solid #eee;
        `}
  & > div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px 20px 0px;
  }
`;

export const Logo = styled.div`
  font-weight: 900;
  cursor: pointer;
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
`;
