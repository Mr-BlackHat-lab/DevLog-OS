import mongoose, { Schema, model, models } from "mongoose";

const DevLogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      enum: [
        "productive",
        "learning",
        "struggling",
        "breakthrough",
        "reflecting",
      ],
      default: "productive",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const DevLog = models.DevLog || model("DevLog", DevLogSchema);
