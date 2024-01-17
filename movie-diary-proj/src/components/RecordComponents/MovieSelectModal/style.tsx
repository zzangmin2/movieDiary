import styled from "styled-components";

export const MovieSelectModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 600px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 50px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  z-index: 999;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div > span {
    font-size: 2rem;
    cursor: pointer;
  }

  & input {
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #000;
  }
`;

export const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const MovieList = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    height: 350px;
    padding: 10px;

    overflow-y: scroll;
    overflow-x: hidden;
  }

  & ul > li {
    width: 150px;
    padding: 10px;
    margin-right: 7px;
    margin-bottom: 10px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    font-size: 0.75rem;
    list-style-type: none;
  }

  & ul > li:nth-child(5n) {
    margin-right: 0;
  }

  & ul > li input[type="radio"] {
    appearance: none;
    border: 2px solid gray;
    border-radius: 50%;
    width: 10px;
    cursor: pointer;
  }

  & ul > li input[type="radio"]:checked {
    background-color: #ff6c22;
    border: 2px solid #ff6c22;
  }

  & ul > li > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
  }

  & ul > li div img {
    width: 150px;
    height: 200px;
    object-fit: cover;
  }

  & ul > li > div > div {
    width: 100%;
    padding: 10px 20px;
  }

  & ul > li div div > div:nth-child(1) {
    margin-bottom: 5px;
    font-size: 0.75rem;
    color: gray;
  }

  & ul > li div div > div:nth-child(2) {
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  float: right;
  padding: 0.75rem 1rem;

  background-color: #ff6c22;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;
