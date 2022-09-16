import mongoose from 'mongoose'

import User from '../user/user.model'

const PostSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 256 },
  createdDate: { type: Date, required: true },
  createdBy: { type: mongoose.Schema.Type.ObjectId, required: true, ref: 'User' }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)