import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["company", "user"],
      required: true,
      default: "user",
    },
    twitterId: {
      // Add this field
      type: String,
      unique: true,
    },
    facebookId: {
      // Add this field
      type: String,
      unique: true,
    },
    username: {
      // Add this field
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
