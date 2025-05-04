import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false,
    },
    role: {
        type: String,
        enum: ["admin", "student"],
        default: "student",
    },
    department: {
        type: String,
        trim: true
      },
      studentId: {
        type: String,
        unique: true,
        trim: true
      },
      group: {
        type: String,
        trim: true
      },
      section: {
        type: String,
        trim: true
      },
    isActive: {
        type: Boolean,
        default: true,
    },
    }, {
    timestamps: true,
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;