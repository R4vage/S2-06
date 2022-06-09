import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { axiosDB, setHeaders } from "../../../services/axiosDB";
import "./PrivateProfile.css"

function PrivateProfile() {
    const auth = useSelector((state) => state.token);
    const [alert, setAlert] = useState();

    const getUser = async () => {
      try {
        const { data } = await axiosDB(
          `/user/profile`, setHeaders()
        );
        console.log(data)
       
      } catch (error) {
        setAlert({ msg: error.response.data.msg, error: true });
      }
    };
  
    useEffect(() => {
      getUser();
    }, []);

    if (!auth) return <Navigate to="/login" />; 
    return (
        <div>
            PrivateProfile
        </div>
      );
}

export default PrivateProfile;