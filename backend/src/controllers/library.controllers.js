import Library from "../models/Library.js";



export const getLibrary = async (req, res) => {
    const {user, logged} = req;
    console.log(user)
    const library = await Library.findOne(user._id)
    console.log(library)
    console.log("logged in profile =" + logged)
    res.json(library)
  };