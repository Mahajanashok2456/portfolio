import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  feedback: { type: String, required: true },
  websiteLink: { type: String, default: '' },
  rating: { type: Number, default: 5 },
  isApproved: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
