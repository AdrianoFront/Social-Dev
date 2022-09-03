import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, maxLength: 50 },
  lastName: { type: String, required: true, maxLength: 50},
  user: { type: String, required: true, maxLength: 30, unique: true },
  email: { type: String, required: true, maxLength: 100, unique: true },
  password: { type: String, required: true}
})

export default mongoose.model.User || mongoose.model('User', UserSchema)