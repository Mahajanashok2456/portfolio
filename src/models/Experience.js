import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);
