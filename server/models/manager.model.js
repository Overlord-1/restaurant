import mongoose from "mongoose";

const managerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true,
            select: false
        }
    }
);

export const Manager = mongoose.model('Manager', managerSchema);

export const getAllManagers = () => Manager.find();
export const getManagerByEmail = (email) => Manager.findOne({email});
export const createManager = (manager)=> Manager.create(manager);
