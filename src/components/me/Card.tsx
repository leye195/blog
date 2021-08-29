import React from "react";

type CardType = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardType) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
