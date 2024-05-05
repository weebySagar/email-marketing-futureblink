import mongoose from "mongoose";

// email sequence model
const emailSequenceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nodes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Node'
    }],
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });


const EmailSequence = mongoose.model(emailSequenceSchema, 'EmailSequence');

export default EmailSequence;