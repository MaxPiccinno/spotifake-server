import mongoose from "mongoose";

enum Roles {
  Standard = "ROLE_STANDARD",
  Artist = "ROLE_ARTIST",
  Admin = "ROLE_ADMIN",
}

interface IUser {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  surname: string;
  mail: string;
  password: string;
  role: Roles;
  followed: IUser["_id"][];
}

const userSchema = new mongoose.Schema<IUser>({
  _id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  followed: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
