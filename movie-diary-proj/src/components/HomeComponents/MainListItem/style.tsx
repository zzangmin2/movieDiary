import styled from "styled-components";

export const ItemWrapper = styled.div`
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
`;

export const ItemMovieImg = styled.div`
  & img {
    width: 200px;
    height: 300px;

    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;

export const ItemMovieInfo = styled.div`
  padding: 1rem;

  & > div:nth-child(1) {
    font-size: 0.75rem;
    color: rgb(131, 131, 131);
    margin-bottom: 5px;
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 1rem;
    font-size: 1rem;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & div:nth-child(3) > div {
    display: inline-block;
    margin-right: 5px;
    font-size: 0.75rem;
  }
`;
