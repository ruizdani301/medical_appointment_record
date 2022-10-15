import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  DocumentID: { type: Number, required: true, unique: true },
  Name: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true }
});

export const User = mongoose.model("User", UserSchema); // TODO: registra la coleccion en la base de datos