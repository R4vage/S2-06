import mongoose from "mongoose";

const librarySchema = mongoose.Schema({
  product: [
    {
      productId: {
        type: Number,
        unique: false,
      },
    },
  ],
  userID: {
    type: String,
    required:true,
    ref: "User",
  },
});

const Library = mongoose.model("Library", librarySchema);
export default Library;