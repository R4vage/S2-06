import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="conteiner-Card">
      <div>
        <img
          className="img"
          src={`https://steamcdn-a.akamaihd.net/steam/apps/${props.steam}/header.jpg`}
          alt="image"
        />
      </div>
      <p className="text-card">{props.name}</p>
      {Math.round(props.savings) ? (
        <div className="details">
          <p className="discount">{props.salePrice}</p>
          <p className="price">{props.normalPrice}</p>
          <p className="percentage">-{Math.round(props.savings)}%</p>
        </div>
      ) : (
        <p className="discount">{props.normalPrice}</p>
      )}
    </div>
  );
};

export default Card;
