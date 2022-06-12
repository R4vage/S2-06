import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Card";
import "./RatingCard.css";

const DealsCard = () => {
  const [gameRating, setGameRating] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5&pageNumber=1&sortBy=metacritic";

      const { data } = await axios(url);

      setGameRating(data);
    };
    consultarApi();
  }, []);
  console.log(gameRating);
  return (
    <>
      <div className="container-rating">
        <p className="text-RatingCard">Most Popular</p>
        <div className="container-RatingCard">
          {gameRating.map((item) => (
            <Cards
              steam={item.steamAppID}
              name={item.title}
              key={item.id}
              salePrice={item.salePrice}
              normalPrice={item.normalPrice}
              savings={item.savings}
              steamApiId={item.steamApiId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DealsCard;
