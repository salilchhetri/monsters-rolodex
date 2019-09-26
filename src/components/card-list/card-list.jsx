import React from "react";
import { Card } from "../card/card";

import "./card-list.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map((monster, index) => (
        <Card monster={monster} key={index} />
      ))}
    </div>
  );
};
