import mongoose  from "mongoose";
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name must be less than 50 characters long"],
        trim: true
    },
    price: {
        type: Number, 
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
        max: [1000000000000, "Price must be less than 1 trillion"]
    },
    description: String
},{
    timestamps: true
})

 const Item = new mongoose.model("items", itemSchema)

export default Item;