import styled from "styled-components";

export const RecordedMovieDiary = styled.div`
  width: 950px;

  @media (max-width: 575px) {
    width: 90vw;
  }
`;

export const reviewDataWrapper = styled.div`
  padding: 10px;

  & > :nth-child(1) {
    margin-bottom: 10px;
    font-size: 0.75rem;
    color: #aaa;
  }

  & > :nth-child(2) {
    font-size: 1.25rem;
  }
`;

export const RecordMovieMyInfo = styled.div`
  display: flex;
  justify-content: space-between;

  & > div > button {
    height: 100%;
    border: none;
    background: none;
    font-size: 0.75rem;
    color: #aaa;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 575px) {
    & > div:nth-child(2) {
      position: fixed;
      width: 90vw;
      bottom: 4%;
      left: 50%;
      transform: translateX(-50%);

    }
    & > div:nth-child(2) > button {
      padding: 20px 65px;
      background-color: #ff6c22;
      text-decoration: none;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      z-index: 999;
    }

    & > div:nth-child(2) > button:first-child {
      margin-right: 10px;
      border: 1px solid #ff6c22;
      background-color: white;
      color: #ff6c22;
    }

    & > div:nth-child(2) > button:nth-child(2) {
      color: white;

  }
`;

export const RecordedMovieReview = styled.div`
  padding: 10px;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    margin-bottom: 20px;
    background-color: #eee;
  }
  & > :nth-child(1) {
    margin-bottom: 10px;
    font-size: 0.75rem;
    color: #aaa;
  }

  & > :nth-child(2) {
    line-height: 1.6;
    font-weight: 400;
  }
`;
