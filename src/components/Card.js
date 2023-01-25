import React from "react";

const Card = ({ email, id, name }) => {
  return (
    <div className="tc bg-light-green dib br3 раз ma2 grow bw2 shadow-5">
      <img alt="photo1" src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
