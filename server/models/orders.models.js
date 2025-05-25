import mongoose from 'mongoose'

const JobOrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    department: {
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
    machineCost: {
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
        enum: ['Pending', 'Approved', 'Rejected', 'In Progress', 'Cancelled', 'Completed', 'Incomplete'],
        default: 'Pending'
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    deliveryStatus: {
        type: String,
        enum: ['Pending', 'Delivered', 'Not Delivered'],
        default: 'Pending'
    },
    requestedDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: true
    },
    remarks: {
        type: String,
        default: ''
    }
})

export default mongoose.model("JobOrder", JobOrderSchema);