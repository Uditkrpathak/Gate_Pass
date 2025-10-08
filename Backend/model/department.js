import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
    depart_Name:{
        type:String,
        required:true
    },

    Semester:{
        type:String,
        required:true
    },
     student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
})

export const Department = mongoose.model("Department",DepartmentSchema);

