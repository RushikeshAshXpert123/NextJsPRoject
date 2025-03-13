// models/Location.js
import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  count: { type: String, required: true },

});

export default mongoose.models.Location || mongoose.model('Location', LocationSchema);
