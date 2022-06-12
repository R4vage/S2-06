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
    return ( 
        <>
            <h1>{gameData.name}</h1>
            <h3>{gameData.type}</h3>
            <Carousel imgArray={gameData.screenshots}/>
            <div className="dangerouslyFather" dangerouslySetInnerHTML={{__html: gameData.detailed_description}}></div>
        
        </> 
     );
}

export default View;