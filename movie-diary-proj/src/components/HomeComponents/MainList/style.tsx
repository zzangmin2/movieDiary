import styled from "styled-components";

export const MainList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 10px 0;
  margin: 100px 60px;
`;

export const MainListItemWrapper = styled.div`
  width: 200px;
  margin-right: 19px;
  margin-bottom: 30px;

  &:nth-child(5n) {
    margin-right: 0;
  }
`;
