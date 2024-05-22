import Header from "../../components/Header";
import RecordEditor from "../../components/RecordComponents/RecordEditor";
import * as S from "./style";

const Record = () => {
  return (
    <S.Record>
      <Header title={"본 영화 기록하기"}></Header>
      <RecordEditor pageType={"record"} />
    </S.Record>
  );
};

export default Record;
