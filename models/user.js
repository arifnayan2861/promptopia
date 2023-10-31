import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "E-mail already exists!"],
    required: [true, "E-mail is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;
