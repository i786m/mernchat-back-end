import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

//collection
export default mongoose.model('messages', messageSchema);
