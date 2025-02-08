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
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Reference to the user who created the task
}, { timestamps: true });

// Virtual method to check if task is overdue
// taskSchema.virtual('isOverdue').get(function() {
//   return this.dueDate < Date.now() && this.status !== 'completed';
// });

export default mongoose.model('Task', taskSchema);
