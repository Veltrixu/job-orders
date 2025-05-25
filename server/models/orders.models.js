import mongoose from 'mongoose'

const JobOrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    serviceType: {
        type: String,
        enum: ['Machining', 'Metal Fabrication'],
        required: true
    },
    laborCost: {
        type: String,
        required: true,
    },
    materialCost: {
        type: String,
        required: true,
    },
    urgency: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected', 'In Progress', 'Cancelled', 'Completed'],
        default: 'Pending'
    },
    requestedDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: true
    }
})

export default mongoose.model("JobOrder", JobOrderSchema);