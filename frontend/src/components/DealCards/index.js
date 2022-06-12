import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Card";
import "./DealCards.css";

const DealsCard = () => {
  const [gameDeals, setGameDeals] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5&pageNumber=0&onSale=1";

      const { data } = await axios(url);

      setGameDeals(data);
      console.log(gameDeals);
    };
    consultarApi();
  }, []);

  return (
    <>
      <div className="container-deals">
        <p className="text-DealsCard">Deals</p>
        <div className="container-dealsCard">
          {gameDeals.map((item) => (
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
