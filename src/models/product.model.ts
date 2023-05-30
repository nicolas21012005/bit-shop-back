import mongoose, { Schema } from "mongoose";

//schema of the  collection 

const Product = new Schema({
    name: { type: String, required: true },
    price : { type : Number, required : true },
    stock : {  type : Number, required : true  },
    category : { type : Array, default : []  },
    description : { type : String },
    images : { type : String, required : true  }
}, {
    timestamps: true,
    versionKey: false,
})
export default mongoose.model("product", Product)