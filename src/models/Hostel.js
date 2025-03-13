// models/Hostel.js
import mongoose from 'mongoose';

const HostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  locationname: { type: String, required: true },
  image: { type: String, required: true },
  locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
});

export default mongoose.models.Hostel || mongoose.model('Hostel', HostelSchema);
