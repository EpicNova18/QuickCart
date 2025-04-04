import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{ type : String, required: true},
    name: { type: String, required: true },
    email: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    cartItems: { type: Object, default: {} }
},{minimized: false})

const User = mongoose.models.user || mongoose.model('User', userSchema);

export default User