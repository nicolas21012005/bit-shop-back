// import mongoose, { Schema } from "mongoose";

import mongoose from "mongoose";

// Schema

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true,
    },
    username: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
    },
    dateBirth: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: Array,
        default: []
    },
    phoneNumber: {
        type: String,
        required: true
    }
    },
    {
        timestamp: true,
        versionKey: false
    })

    
export default mongoose.model("user",User)

// //schema of the  collection 

// const User = new Schema({
//     name: { type: String, required: true, unique: true, },
//     email: { type: String, required: true },
//     age: { type: Number, min: 18 },
//     lastName: { type: String, required: true },
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     role: { type: String, required: true },
//     active: { type: Boolean, default: false },
//     dateBirth: { type: String, required: true },
//     address: { type: String, required: true },
//     PaymentMethods: { type: Array, default: [] },
//     phoneNumber: { type: String, required: true }
// }, {
//     timestamps: true,
//     versionKey: false,
// });

// User.path('age').validate(function (value) {
//     return value >= 18; 
//   });

// export default mongoose.model("user", User)