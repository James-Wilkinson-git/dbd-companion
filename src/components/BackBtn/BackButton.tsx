import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./BackButton.scss";
export const BackButton: FC = () => {
  return (
    <span className="backBtn">
      <Link to="/">
        <div id="chevron-arrow-left"></div> Back
      </Link>
    </span>
  );
};
