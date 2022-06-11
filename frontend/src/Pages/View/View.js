import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosDB, axiosSteam } from "../../services";

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
      function getDescription (raw){
        raw.substring(0, raw.length-2)
      }
      const fullDescription = () => getDescription(gameData?.detailed_description)
      console.log(fullDescription)
      console.log(gameData?.detailed_description.substring(0, gameData.detailed_description.length))


      
      if(!gameData){return <div> No hay juego</div>}
    return ( 
        <>
            <h1>{gameData.name}</h1>
            <h3>{gameData.type}</h3>
            <img src={gameData?.screenshots[0].path_full}/>
            <div className="dangerouslyFather" dangerouslySetInnerHTML={{__html: gameData.detailed_description}}>{}</div>
        
        </> 
     );
}

export default View;