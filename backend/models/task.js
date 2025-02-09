import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['TODO', 'IN PROGRESS', 'DONE'],
    default: 'TODO',
  },
  priority:{
    type: String,
    enum: ['Low', 'Medium', 'High'],
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
