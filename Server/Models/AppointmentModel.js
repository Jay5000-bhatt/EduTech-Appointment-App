import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  TeacherId: {
    type: String,
    required: true,
  },
  slotDate: {
    type: String,
    required: true,
  },
  slotTime: {
    type: String,
    required: true,
  },
  userData: {
    type: Object,
    required: true,
  },
  TeachersData: {
    type: Object,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  cancelled: {
    type: Boolean,
    default: false,
  },
  payment: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
