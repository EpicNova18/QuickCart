import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    _id:{ type : String, required: true},
    name: { type: String, required: true },
    email: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    cartItems: { type: Object, default: {} }
},{minimized: false})

const User = mongoose.models.user || mongoose.model('User', userSchema);

export default User
=======
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    cartItems: { type: Object, default: {} }
}, { minimize: false });

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;
>>>>>>> 343e6e5cc96736f5511fa9f76ac4a20626a73396
