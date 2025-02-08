import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
}, { timestamps: true });
// // Hash password before saving user
// userSchema.pre('save', async function(next) {
//     if (this.isModified('password')) {
//       this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
//   });
  
//   // Method to compare password (for login)
//   userSchema.methods.comparePassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
//   };
  
//   // Method to generate JWT token
//   userSchema.methods.generateAuthToken = function() {
//     const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     return token;
//   };

export default mongoose.model('User', userSchema);
