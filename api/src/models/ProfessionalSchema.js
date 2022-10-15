import mongoose from "mongoose";

const ProfessionalSchema = new mongoose.Schema({
    Name:{ type: String, required: true},
    LastName:{ type: String, required: true},
    Speciality:{ type: String, required: true},
    availability:{ type: String, required: true}
});

export const Professional = mongoose.model("Professional", ProfessionalSchema);
