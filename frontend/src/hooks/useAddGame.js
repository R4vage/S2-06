import { useCallback, useEffect, useState } from "react";
import { axiosDB, setHeaders } from "../services/axiosDB";

export function useAddGame() {
  const [alert, setAlert] = useState();

  const addGame = async (steamAppID, game) => {
    try {
    const { data } = await axiosDB.post(
      `/library`, 
    {
      gameID: steamAppID,
      gameName: game  
    },
    setHeaders());

        setAlert({ msg: data.msg, error: false });
       
      } catch (error) {
        setAlert({ msg: error.response.data.msg, error: true });
      }
    }
   

  return { alert, addGame };
}