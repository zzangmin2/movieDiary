import React from "react";
import * as S from "./style";
import Header from "../../Header";

const RecordEditor = () => {
  return (
    <>
      <Header title={"본 영화 기록하기"}></Header>
      <S.RecordEditor>
        <S.RecordEditorTopSection>
          <S.InputWrapper>
            <div>시청 날짜 </div>
            <input type="date"></input>
          </S.InputWrapper>
          <S.InputWrapper>
            <div>나의 평점: </div>
            <S.ScoreSelect>
              <select>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
              <div> /5</div>
            </S.ScoreSelect>
          </S.InputWrapper>
          <S.InputWrapper>
            <div>본 영화</div>
            <button>영화 선택하기</button>
          </S.InputWrapper>
        </S.RecordEditorTopSection>
        <textarea placeholder="본 영화에 대해서 느낀 점을 기록해 보세요." />
        <button>등록하기</button>
      </S.RecordEditor>
    </>
  );
};

export default RecordEditor;
