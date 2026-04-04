import mongoose from 'mongoose';

const SiteConfigSchema = new mongoose.Schema({
  section: {
    type: String,
    required: [true, 'Please provide a section name.'],
    unique: true,
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: [true, 'Please provide the content for this section.'],
  },
}, {
  timestamps: true,
});

export default mongoose.models.SiteConfig || mongoose.model('SiteConfig', SiteConfigSchema);
