import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom"

const Card = (props) => {
const navigate = useNavigate()


  function onClick (){
    navigate(`/games/${props.steamAppID}`)
  }
  return (
    <div className="conteiner-Card" onClick={()=>onClick()}>
      <div>
        <img
          className="img"
          src={`https://steamcdn-a.akamaihd.net/steam/apps/${props.steam}/header.jpg`}
          alt="image"
        />
      </div>
      <p className="text-card">{props.name}</p>
      
      {props.isOwned?<button className="isOwnedButton">Instalar</button>:
      (Math.round(props.savings) ? (
        <div className="details">
          <p className="discount">{props.salePrice}</p>
          <p className="price">{props.normalPrice}</p>
          <p className="percentage">-{Math.round(props.savings)}%</p>
        </div>
      ) : (
        <p className="discount">{props.normalPrice}</p>
      ))
      
      }
    </div>
  );
};

export default Card;
