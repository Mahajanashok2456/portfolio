import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  tags: { type: [String], default: [] },
}, { timestamps: true });

export default mongoose.models.Client || mongoose.model('Client', ClientSchema);
