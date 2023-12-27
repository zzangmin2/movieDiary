import React from "react";
import "./style.css";
import MainListItem from "../MainListItem";
import { dummy } from "../../../movieDummy";

const MainList = () => {
  return (
    <div className="Main-List">
      {dummy.results.map((e) => {
        return (
          <div className="main-item-wrapper">
            <MainListItem
              title={e.title}
              posterPath={e.poster_path}
              releaseDate={e.release_date}
              score={5}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MainList;
