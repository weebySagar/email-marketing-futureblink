import mongoose from "mongoose";


// Node model for Email Sequence
const nodeSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['SendMail', 'Wait', 'Decision'],
        required: true,
    },
    parameters: {
        type: String
    },

}, { timestamps: true })

const Node = mongoose.model(nodeSchema, 'Node');

export default Node;