import Header from "../../components/Header";
import RecordEditor from "../../components/RecordComponents/RecordEditor";
import * as S from "./style";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";

const Record = () => {
  const loggedInUserData = useSelector((state: RootState) => state.auth);

  return (
    <S.Record>
      <Header
        title={"본 영화 기록하기"}
        userName={loggedInUserData.user?.userName || "로그인이 필요해"}
      ></Header>
      <RecordEditor
        userEmail={loggedInUserData.user?.email || "로그인이 필요해"}
      />
    </S.Record>
  );
};

export default Record;
