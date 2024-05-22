import Header from "../../components/Header";
import * as S from "./style";
import RecordEditor from "../../components/RecordComponents/RecordEditor";

const Edit = () => {
  return (
    <S.Edit>
      <Header title="게시물 수정" />
      <RecordEditor pageType={"edit"} />
    </S.Edit>
  );
};

export default Edit;
