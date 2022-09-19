import mongoose, { Model, Types } from "mongoose";

enum Roles {
  Standard = "ROLE_STANDARD",
  Artist = "ROLE_ARTIST",
  Admin = "ROLE_ADMIN",
}

export interface IUser {
  name: string;
  surname?: string;
  mail: string;
  password: string;
  role: Roles;
  followed: string[];
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  surname: { type: String, required: false },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  followed: [String],
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
