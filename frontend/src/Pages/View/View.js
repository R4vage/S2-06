import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import { axiosDB } from "../../services";

import "./View.css"

function View() {
    const [gameData, setGameData] = useState()
    const {steamAppId} = useParams();

    const getGameData = async () => {
        try {
          const { data } = await axiosDB(
            `/games/${steamAppId}`
          );
          console.log(data[steamAppId].data)
          setGameData(data[steamAppId].data)
        } catch (error) {
            console.log(error)
         /*  setAlert({ msg: error.response.data.msg, error: true }); */
        }
      };
      useEffect(() => {
        getGameData()
      }, [])      
      if(!gameData){return <div> No hay juego</div>}
      const description = gameData.detailed_description.replace(/<br>/gi,"")
      console.log(description)
    return ( 
        <div className="View">
            <div className="View--titleSection">
              <h1>{gameData.name}</h1>
            </div>
            <div className="View--carouselcontainer">
                <Carousel imgArray={gameData.screenshots}/>
                <div className="absolute">
                  <div className="View--carouselcontainer--column">
                    <div>
                    <h3>Developer: {gameData.developers[0]}</h3>
                    <h3>Publisher: {gameData.publishers[0]}</h3>
                    {gameData.release_date.coming_soon?<h3>Coming soon: {gameData.release_date.date}</h3>:<h3>Release date: {gameData.release_date.date}</h3> }
                    <div className="View--pricecontainer"><p className="View--discount">{gameData.price_overview.discount_percent}</p><p className="View--initialprice">{gameData.price_overview.initial_formatted}</p><p className="View--finalprice">{gameData.price_overview.final_formatted}</p></div>
                    </div>
                    <button className="View--buyButton">Buy</button>
                  </div>
                </div>
            </div>
            <div className="dangerouslyFather" dangerouslySetInnerHTML={{__html: description}}></div>
        
        </div> 
     );
}

export default View;