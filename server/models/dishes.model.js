import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

export const Dish = mongoose.model('Dish', dishSchema);

export const getAllDishes = () => Dish.find();
export const createDish = (dish) => Dish.create(dish);
