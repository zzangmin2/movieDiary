import styled, { css } from "styled-components";

interface HeaderProps {
  isHome?: boolean;
}

export const Header = styled.div<HeaderProps>`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: hidden;
  background-color: #2b3499;

  ${(props) =>
    props.isHome
      ? css`
          background-color: #2b3499;
          color: #fff;
        `
      : css`
          background-color: #fff;
          color: #2b3499;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
            rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        `}
  & > div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
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
