import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this project.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category for this project.'],
    maxlength: [40, 'Category cannot be more than 40 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this project.'],
  },
  techStack: {
    type: [String],
    required: [true, 'Please provide a tech stack for this project.'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image for this project.'],
  },
  link: {
    type: String,
    required: [true, 'Please provide a link for this project.'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
