import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as S from "./style";

import { useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { IPost } from "../../typings/db";
import { getLoginCookie } from "../../utils/cookieUtils";
import { db } from "../../firebase";
import { match } from "assert";
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
