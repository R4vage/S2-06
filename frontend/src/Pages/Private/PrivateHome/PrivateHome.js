import "./PrivateHome.css"

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosDB, setHeaders } from "../../../services/axiosDB";
import { useEffect, useState } from "react";

function PrivateHome() {
    const auth = useSelector((state) => state.token);
    const [alert, setAlert] = useState();

    const getLibrary = async () => {
      try {
        const { data } = await axiosDB(
          `/library`, setHeaders()
        );
        console.log(data)
       
      } catch (error) {
        setAlert({ msg: error.response.data.msg, error: true });
      }
    };
    const addGameClick = async () => {
      try {
      const { data } = await axiosDB.post(
        `/library`, 
      {
        gameID: 123456,  
      },
      setHeaders());
       
          console.log(data)
         
        } catch (error) {
          setAlert({ msg: error.response.data.msg, error: true });
        }
      };
    
  
    useEffect(() => {
        getLibrary();
    }, []);

    if (!auth) return <Navigate to="/login" />; 
    return ( 
    <div>
        PrivateHome
        <button onClick={()=>addGameClick()}>Add Game</button>
    </div> );
}

export default PrivateHome;