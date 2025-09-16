import mongoose from "mongoose";

const gatePassSchema = mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  formDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  daysRequested: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    
  },

  workingDays:{
    type:String,
    enum:["yes","no"]

  },

  location:{
    type:String,
    required:true

  },

  fatherContactNo:{
    type:String,
    required:true

  },

  approval: {
    hod: {
      type: String,
      enum: ["pending", "approved", "rejected"],
    },
    hodDate: {
      type: Date,
    },

    warden: {
      type: String,
      enum: ["pending", "approved", "rejected"],
    },
    wardenDate: {
      type: Date,
    }
  },
}, { timestamps: true });


export const GatePass = mongoose.model("GatePass", gatePassSchema);
