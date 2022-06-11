import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { axiosDB, setHeaders } from "../../../services/axiosDB";
import "./PrivateProfile.css";
import logo from "../../../assets/logo.svg";

function PrivateProfile() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const auth = useSelector((state) => state.token);
  const [alert, setAlert] = useState();

  const getUser = async () => {
    try {
      const { data } = await axiosDB(`/user/profile`, setHeaders());
      console.log(data);
      setName(data.name);
      setUserName(data.userName);
      setEmail(data.email);
      setBirthday(data.birthday.split("T")[0]);
    } catch (error) {
      setAlert({ msg: error.response.data.msg, error: true });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!auth) return <Navigate to="/login" />;
  return (
    <>
      <div className="container-profile">
        <div className="container-header">
          <div className="profile-header">
            <img className="" src={logo} alt="logo" />
            <h1 className="title">Your Profile</h1>
            <h1 className="hidden">Up</h1>
          </div>
        </div>

        <form className="profile-form">
          <div className="control-form">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input id="name" type="text" placeholder="Name" value={name} />
          </div>
          <div className="control-form">
            <label className="label" htmlFor="userName">
              UserName
            </label>
            <input id="userName" type="text" placeholder="UserName" value={userName} />
          </div>
          <div className="control-form">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input id="email" type="email" placeholder="Email Address" value={email} />
          </div>

          <div className="control-form">
            <label className="label" htmlFor="birthday">
              Birthday
            </label>
            <input id="birthday" type="date" placeholder="Birthday" value={birthday} />
          </div>

          <input className="submit-register" type="submit" value="Edit Your Profile" />
        </form>
      </div>
    </>
  );
}

export default PrivateProfile;
