import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true },
  grade: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Education || mongoose.model('Education', EducationSchema);
