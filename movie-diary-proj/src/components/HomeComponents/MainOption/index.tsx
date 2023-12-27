import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";

const MainOption = () => {
  const navigate = useNavigate();
  const handleRecordButton = () => {
    navigate("/record");
  };
  return (
    <S.MainOption>
      <S.Banner />
      <S.OptionWrapper>
        <div>
          <S.Filter>
            <option> 최근 작성 순</option>
            <option> 오래된 작성 순</option>
            <option> 최근 시청 순</option>
            <option> 오래된 시청 순</option>
          </S.Filter>
          <S.MovieCountText>총 8개의 영화 기록이 있습니다.</S.MovieCountText>
        </div>
        <S.RecordBtn onClick={handleRecordButton}>본 영화 기록하기</S.RecordBtn>
      </S.OptionWrapper>
    </S.MainOption>
  );
};

export default MainOption;
