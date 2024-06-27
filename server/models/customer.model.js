import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
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

});


export const Customer = mongoose.model('Customer', customerSchema);

export const getAllCustomers = () => Customer.find();
export const getCustomerByEmail = (email) => Customer.findOne({email});
export const createCustomer = (customer)=>Customer.create(customer);

