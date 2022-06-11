import Library from "../models/Library.js";


export const addGame = async (req, res) => {
  const {user, logged , body} = req;
  const gameID = body.gameID
  const library = await Library.findOne(user._id)
  if (!library) {
    const error = new Error("Library not found");
    return res.status(400).json({ msg: error.message });
  }
  if (gameID) {
    library.product.push({gameID})
    console.log(library)
    console.log(gameID)
    try {
      await library.save();
      res.json({ msg: "Games added succesfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
};


export const getLibrary = async (req, res) => {
    const {user, logged} = req;
    console.log(user) //Este user ya lo buscamos en la auth, no hace falta buscarlo de vuelta, sencillamente agarramos el user id decodeado que nos mando el middleware
    const library = await Library.findOne(user._id)
    if (!library) {
      const error = new Error("Library not found");
      return res.status(400).json({ msg: error.message });
    }
   
    console.log(library.product)
    console.log("logged in profile =" + logged)
    res.json(library)
  };