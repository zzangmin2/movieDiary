import styled from "styled-components";

export const RecordedMovieDiary = styled.div`
  width: 950px;
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

  & > button {
    height: 100%;
    border: none;
    background: none;
    font-size: 0.75rem;
    color: #aaa;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RecordedMovieReview = styled.div`
  padding: 10px;

  &: before {
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
