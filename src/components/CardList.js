import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((users, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            usernmae={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </>
  );
};

export default CardList;
