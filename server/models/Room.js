import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    hotel: {
      type: String, // Clerk or your string-based hotel IDs
      ref: "Hotel",
      required: true,
    },
    roomType: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    amenities: [{ type: String, required: true }],
    images: [{ type: String, required: true }],
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
