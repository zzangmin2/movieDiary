import { deleteDoc, doc } from "firebase/firestore";
import * as S from "./style";
import { db } from "../../../firebase";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  postId: number;
  date: string;
  starRating: number;
  movieReview: string;
}
const RecordedMovieDiary: React.FC<Props> = ({
  id,
  postId,
  date,
  starRating,
  movieReview,
}) => {
  const navigate = useNavigate();

  const renderStars = (score: number) => {
    const roundedScore = Math.round(score);
    const stars = Array.from({ length: roundedScore }, (_, index) => (
      <span>⭐️ </span>
    ));
    return stars;
  };

  const onDelete = async () => {
    try {
      const ok = window.confirm("정말 게시물을 삭제하시겠습니까?");
      if (!ok) return;
      await deleteDoc(doc(db, "posts", id));
      navigate("/");
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  const onEdit = async () => {
    navigate(`/edit/${postId}`);
  };
  return (
    <S.RecordedMovieDiary>
      <S.RecordMovieMyInfo>
        <div>
          <S.reviewDataWrapper>
            <div>시청 날짜</div>
            <div>{date}</div>
          </S.reviewDataWrapper>
          <S.reviewDataWrapper>
            <div>나의 평점</div>
            <div>{renderStars(starRating)}</div>
          </S.reviewDataWrapper>
        </div>
        <div>
          <button onClick={onEdit}>수정하기</button>
          <button onClick={onDelete}>삭제하기</button>
        </div>
      </S.RecordMovieMyInfo>
      <S.RecordedMovieReview>
        <div>나의 영화 후기</div>
        <div>{movieReview}</div>
      </S.RecordedMovieReview>
    </S.RecordedMovieDiary>
  );
};

export default RecordedMovieDiary;
