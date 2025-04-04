import mongoose from "mongoose";

<<<<<<< HEAD
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null } 
}
async function connectdb(){
    if(cached.conn) {
        return cached.conn
    }

    if(!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`,opts).then(mongoose => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectdb;
=======
let cached = global._mongoose;

if (!cached) {
    cached = global._mongoose = { conn: null, Promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.Promise) {
        const opts = {
            bufferCommands: false
        };
        cached.Promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then(mongoose => {
            return mongoose;
        });
    }

    cached.conn = await cached.Promise;
    return cached.conn;
}

export default connectDB;
>>>>>>> 343e6e5cc96736f5511fa9f76ac4a20626a73396
