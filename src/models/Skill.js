import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  iconName: { type: String, required: true }, // Store the name of the icon from lucide-react
}, { timestamps: true });

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
