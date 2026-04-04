'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaSave, FaSignOutAlt, FaBriefcase, FaGraduationCap, FaUserTie, FaCode, FaCog, FaAddressBook, FaCommentDots, FaLink, FaCheck, FaStar } from 'react-icons/fa';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [siteConfig, setSiteConfig] = useState({});
  const [loading, setLoading] = useState(true);

  // Form states
  const [projectForm, setProjectForm] = useState({ title: '', category: '', description: '', techStack: '', image: '', link: '', featured: false });
  const [clientForm, setClientForm] = useState({ title: '', subtitle: '', description: '', link: '', tags: '' });
  const [experienceForm, setExperienceForm] = useState({ role: '', company: '', location: '', period: '', description: '' });
  const [educationForm, setEducationForm] = useState({ school: '', degree: '', period: '', description: '', grade: '' });
  const [skillForm, setSkillForm] = useState({ title: '', description: '', iconName: '' });
  const [testimonialForm, setTestimonialForm] = useState({ name: '', feedback: '', rating: 5, websiteLink: '', isApproved: false });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/mahajan/admin/login');
    } else if (status === 'authenticated') {
      fetchData();
    }
  }, [status, router]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [projectsRes, clientsRes, expRes, eduRes, skillsRes, configRes, contactsRes, testimonialsRes] = await Promise.all([
        fetch('/api/projects'),
        fetch('/api/clients'),
        fetch('/api/experience'),
        fetch('/api/education'),
        fetch('/api/skills'),
        fetch('/api/site-config'),
        fetch('/api/contact'),
        fetch('/api/testimonials'),
      ]);
      
      const [projectsData, clientsData, expData, eduData, skillsData, configData, contactsData, testimonialsData] = await Promise.all([
        projectsRes.json(), clientsRes.json(), expRes.json(), eduRes.json(), skillsRes.json(), configRes.json(), contactsRes.json(), testimonialsRes.json()
      ]);

      if (projectsData.success) setProjects(projectsData.data);
      if (clientsData.success) setClients(clientsData.data);
      if (expData.success) setExperience(expData.data);
      if (eduData.success) setEducation(eduData.data);
      if (skillsData.success) setSkills(skillsData.data);
      if (configData.success) setSiteConfig(configData.data);
      if (contactsData.success) setContacts(contactsData.data);
      if (testimonialsData.success) setTestimonials(testimonialsData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleSubmit = async (e, type, form, setForm, initialForm) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/${type}/${editingId}` : `/api/${type}`;

    let payload = { ...form };
    if (type === 'projects' && typeof form.techStack === 'string') {
      payload.techStack = form.techStack.split(',').map(s => s.trim());
    }
    if (type === 'clients' && typeof form.tags === 'string') {
      payload.tags = form.tags.split(',').map(s => s.trim());
    }

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setForm(initialForm);
        setEditingId(null);
        fetchData();
      }
    } catch (error) {
      console.error(`Error saving ${type}:`, error);
    }
  };

  const handleEdit = (item, setForm, type) => {
    setEditingId(item._id);
    
    // Initial states for each type to ensure all fields are defined
    const initialStates = {
      projects: { title: '', category: '', description: '', techStack: '', image: '', link: '', featured: false },
      clients: { title: '', subtitle: '', description: '', link: '', tags: '' },
      experience: { role: '', company: '', location: '', period: '', description: '' },
      education: { school: '', degree: '', period: '', description: '', grade: '' },
      skills: { title: '', description: '', iconName: '' },
      testimonials: { name: '', feedback: '', rating: 5, websiteLink: '', isApproved: false }
    };

    const initial = initialStates[type];
    const formData = { ...initial };
    
    // Only copy properties that exist in the initial state and handle nulls
    Object.keys(initial).forEach(key => {
      if (item[key] !== undefined && item[key] !== null) {
        formData[key] = item[key];
      }
    });
    
    if (type === 'projects' && Array.isArray(item.techStack)) {
      formData.techStack = item.techStack.join(', ');
    }
    if (type === 'clients' && Array.isArray(item.tags)) {
      formData.tags = item.tags.join(', ');
    }
    
    setForm(formData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id, type) => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;
    try {
      const res = await fetch(`/api/${type}/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) fetchData();
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };

  const handleToggleApproval = async (id, currentStatus) => {
    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isApproved: !currentStatus }),
      });
      const data = await res.json();
      if (data.success) fetchData();
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  const handleConfigUpdate = async (section, content) => {
    try {
      const res = await fetch('/api/site-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, content }),
      });
      const data = await res.json();
      if (data.success) fetchData();
    } catch (error) {
      console.error('Error updating config:', error);
    }
  };

  const handleSeedData = async () => {
    if (!confirm('This will delete all current database entries and replace them with the original hardcoded data. Proceed?')) return;
    setLoading(true);
    try {
      const res = await fetch('/api/seed');
      const data = await res.json();
      if (data.success) {
        alert('Database seeded successfully!');
        fetchData();
      } else {
        alert('Error seeding data: ' + data.error);
      }
    } catch (error) {
      console.error('Error seeding data:', error);
    }
    setLoading(false);
  };

  const copyReviewLink = () => {
    const link = `${window.location.origin}/mahajan/review`;
    
    // Fallback for non-secure contexts (http) or older browsers
    if (!navigator.clipboard) {
      const textArea = document.createElement("textarea");
      textArea.value = link;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        alert('Review link copied to clipboard!');
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        alert('Could not copy link. Please manually copy: ' + link);
      }
      document.body.removeChild(textArea);
      return;
    }

    navigator.clipboard.writeText(link)
      .then(() => alert('Review link copied to clipboard!'))
      .catch(err => {
        console.error('Async: Could not copy text: ', err);
        alert('Could not copy link. Please manually copy: ' + link);
      });
  };

  if (status === 'loading' || loading) {
    return <div className="min-h-screen flex items-center justify-center font-bold uppercase tracking-widest">Loading Admin...</div>;
  }

  const TabButton = ({ id, label, icon: Icon }) => (
    <button 
      onClick={() => { setActiveTab(id); setEditingId(null); }}
      className={`text-[10px] font-black uppercase tracking-widest pb-2 px-4 transition-all flex items-center gap-2 whitespace-nowrap ${activeTab === id ? 'border-b-2 border-black opacity-100' : 'opacity-40 hover:opacity-100'}`}
    >
      <Icon size={12} /> {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <header className="bg-black text-white p-6 sticky top-0 z-50 flex justify-between items-center shadow-xl">
        <h1 className="text-2xl font-black tracking-tighter uppercase">Admin Panel</h1>
        <div className="flex items-center gap-6">
          <button 
            onClick={handleSeedData}
            className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-all rounded"
          >
            Seed Data
          </button>
          <span className="text-xs font-bold uppercase tracking-widest opacity-60 hidden md:block">Logged in as {session?.user?.name}</span>
          <button onClick={() => signOut()} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-red-400 transition-colors">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:p-12">
        <div className="flex flex-wrap gap-2 mb-12 border-b border-black/10 pb-4 overflow-x-auto">
          <TabButton id="projects" label="Projects" icon={FaCode} />
          <TabButton id="clients" label="Clients" icon={FaUserTie} />
          <TabButton id="experience" label="Experience" icon={FaBriefcase} />
          <TabButton id="education" label="Education" icon={FaGraduationCap} />
          <TabButton id="skills" label="Skills" icon={FaCog} />
          <TabButton id="contacts" label="Inquiries" icon={FaAddressBook} />
          <TabButton id="testimonials" label="Reviews" icon={FaCommentDots} />
          <TabButton id="config" label="Settings" icon={FaCog} />
        </div>

        {activeTab === 'projects' && (
          <div className="space-y-12">
            <div className="bg-white p-8 border border-black/5 shadow-sm rounded-lg">
              <h2 className="text-xl font-black uppercase tracking-tight mb-8">{editingId ? 'Edit Project' : 'Add Project'}</h2>
              <form onSubmit={(e) => handleSubmit(e, 'projects', projectForm, setProjectForm, { title: '', category: '', description: '', techStack: '', image: '', link: '', featured: false })} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="admin-input" placeholder="Title" value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} required />
                <input className="admin-input" placeholder="Category" value={projectForm.category} onChange={e => setProjectForm({...projectForm, category: e.target.value})} required />
                <textarea className="admin-input md:col-span-2" placeholder="Description" value={projectForm.description} onChange={e => setProjectForm({...projectForm, description: e.target.value})} required />
                <input className="admin-input" placeholder="Tech Stack (comma separated)" value={projectForm.techStack} onChange={e => setProjectForm({...projectForm, techStack: e.target.value})} required />
                <input className="admin-input" placeholder="Image URL" value={projectForm.image} onChange={e => setProjectForm({...projectForm, image: e.target.value})} required />
                <input className="admin-input" placeholder="Link" value={projectForm.link} onChange={e => setProjectForm({...projectForm, link: e.target.value})} required />
                <div className="flex items-center gap-3"><input type="checkbox" checked={projectForm.featured} onChange={e => setProjectForm({...projectForm, featured: e.target.checked})} /> <label className="text-[10px] font-bold uppercase tracking-widest">Featured</label></div>
                <button type="submit" className="admin-submit md:col-span-2">{editingId ? 'Update' : 'Add'}</button>
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(item => (
                <div key={item._id} className="admin-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-black uppercase tracking-tight">{item.title}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(item, setProjectForm, 'projects')} className="text-blue-500"><FaEdit /></button>
                      <button onClick={() => handleDelete(item._id, 'projects')} className="text-red-500"><FaTrash /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="space-y-12">
            <div className="bg-white p-8 border border-black/5 shadow-sm rounded-lg">
              <h2 className="text-xl font-black uppercase tracking-tight mb-8">{editingId ? 'Edit Client Work' : 'Add Client Work'}</h2>
              <form onSubmit={(e) => handleSubmit(e, 'clients', clientForm, setClientForm, { title: '', subtitle: '', description: '', link: '', tags: '' })} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="admin-input" placeholder="Title" value={clientForm.title} onChange={e => setClientForm({...clientForm, title: e.target.value})} required />
                <input className="admin-input" placeholder="Subtitle" value={clientForm.subtitle} onChange={e => setClientForm({...clientForm, subtitle: e.target.value})} required />
                <textarea className="admin-input md:col-span-2" placeholder="Description" value={clientForm.description} onChange={e => setClientForm({...clientForm, description: e.target.value})} required />
                <input className="admin-input" placeholder="Link" value={clientForm.link} onChange={e => setClientForm({...clientForm, link: e.target.value})} required />
                <input className="admin-input" placeholder="Tags (comma separated)" value={clientForm.tags} onChange={e => setClientForm({...clientForm, tags: e.target.value})} required />
                <button type="submit" className="admin-submit md:col-span-2">{editingId ? 'Update' : 'Add'}</button>
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clients.map(item => (
                <div key={item._id} className="admin-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-black uppercase tracking-tight">{item.title}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(item, setClientForm, 'clients')} className="text-blue-500"><FaEdit /></button>
                      <button onClick={() => handleDelete(item._id, 'clients')} className="text-red-500"><FaTrash /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-12">
            <div className="bg-white p-8 border border-black/5 shadow-sm rounded-lg">
              <h2 className="text-xl font-black uppercase tracking-tight mb-8">{editingId ? 'Edit Experience' : 'Add Experience'}</h2>
              <form onSubmit={(e) => handleSubmit(e, 'experience', experienceForm, setExperienceForm, { role: '', company: '', location: '', period: '', description: '' })} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="admin-input" placeholder="Role" value={experienceForm.role} onChange={e => setExperienceForm({...experienceForm, role: e.target.value})} required />
                <input className="admin-input" placeholder="Company" value={experienceForm.company} onChange={e => setExperienceForm({...experienceForm, company: e.target.value})} required />
                <input className="admin-input" placeholder="Location" value={experienceForm.location} onChange={e => setExperienceForm({...experienceForm, location: e.target.value})} required />
                <input className="admin-input" placeholder="Period" value={experienceForm.period} onChange={e => setExperienceForm({...experienceForm, period: e.target.value})} required />
                <textarea className="admin-input md:col-span-2" placeholder="Description" value={experienceForm.description} onChange={e => setExperienceForm({...experienceForm, description: e.target.value})} required />
                <button type="submit" className="admin-submit md:col-span-2">{editingId ? 'Update' : 'Add'}</button>
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map(item => (
                <div key={item._id} className="admin-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-black uppercase tracking-tight">{item.role} @ {item.company}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(item, setExperienceForm, 'experience')} className="text-blue-500"><FaEdit /></button>
                      <button onClick={() => handleDelete(item._id, 'experience')} className="text-red-500"><FaTrash /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-12">
            <div className="bg-white p-8 border border-black/5 shadow-sm rounded-lg">
              <h2 className="text-xl font-black uppercase tracking-tight mb-8">{editingId ? 'Edit Education' : 'Add Education'}</h2>
              <form onSubmit={(e) => handleSubmit(e, 'education', educationForm, setEducationForm, { school: '', degree: '', period: '', description: '', grade: '' })} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="admin-input" placeholder="School" value={educationForm.school} onChange={e => setEducationForm({...educationForm, school: e.target.value})} required />
                <input className="admin-input" placeholder="Degree" value={educationForm.degree} onChange={e => setEducationForm({...educationForm, degree: e.target.value})} required />
                <input className="admin-input" placeholder="Period" value={educationForm.period} onChange={e => setEducationForm({...educationForm, period: e.target.value})} required />
                <input className="admin-input" placeholder="Grade/CGPA" value={educationForm.grade} onChange={e => setEducationForm({...educationForm, grade: e.target.value})} required />
                <textarea className="admin-input md:col-span-2" placeholder="Description" value={educationForm.description} onChange={e => setEducationForm({...educationForm, description: e.target.value})} required />
                <button type="submit" className="admin-submit md:col-span-2">{editingId ? 'Update' : 'Add'}</button>
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map(item => (
                <div key={item._id} className="admin-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-black uppercase tracking-tight">{item.school}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(item, setEducationForm, 'education')} className="text-blue-500"><FaEdit /></button>
                      <button onClick={() => handleDelete(item._id, 'education')} className="text-red-500"><FaTrash /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-12">
            <div className="bg-white p-8 border border-black/5 shadow-sm rounded-lg">
              <h2 className="text-xl font-black uppercase tracking-tight mb-8">{editingId ? 'Edit Skill' : 'Add Skill'}</h2>
              <form onSubmit={(e) => handleSubmit(e, 'skills', skillForm, setSkillForm, { title: '', description: '', iconName: '' })} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="admin-input" placeholder="Title" value={skillForm.title} onChange={e => setSkillForm({...skillForm, title: e.target.value})} required />
                <input className="admin-input" placeholder="Icon Name (e.g. Cpu, Layers, Database)" value={skillForm.iconName} onChange={e => setSkillForm({...skillForm, iconName: e.target.value})} required />
                <textarea className="admin-input md:col-span-2" placeholder="Description" value={skillForm.description} onChange={e => setSkillForm({...skillForm, description: e.target.value})} required />
                <button type="submit" className="admin-submit md:col-span-2">{editingId ? 'Update' : 'Add'}</button>
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map(item => (
                <div key={item._id} className="admin-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-black uppercase tracking-tight">{item.title}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(item, setSkillForm, 'skills')} className="text-blue-500"><FaEdit /></button>
                      <button onClick={() => handleDelete(item._id, 'skills')} className="text-red-500"><FaTrash /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="space-y-6">
            <h2 className="text-xl font-black uppercase tracking-tight">Recent Inquiries</h2>
            <div className="grid grid-cols-1 gap-6">
              {contacts.map(item => (
                <div key={item._id} className="admin-card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-black uppercase tracking-tight text-lg">{item.name}</h3>
                      <p className="text-xs font-bold text-black/40">{item.email} • {new Date(item.createdAt).toLocaleDateString()}</p>
                    </div>
                    <button onClick={() => handleDelete(item._id, 'contact')} className="text-red-500 hover:scale-110 transition-transform"><FaTrash /></button>
                  </div>
                  <p className="text-sm bg-gray-50 p-4 rounded-md border border-black/5 italic">"{item.message}"</p>
                </div>
              ))}
              {contacts.length === 0 && <p className="text-center opacity-40 py-12 font-bold uppercase tracking-widest">No inquiries yet.</p>}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="space-y-12">
            <div className="bg-white p-8 border border-black/5 shadow-sm rounded-lg">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-black uppercase tracking-tight">
                  {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
                </h2>
                {editingId && (
                  <button 
                    onClick={() => { setEditingId(null); setTestimonialForm({ name: '', feedback: '', rating: 5, websiteLink: '', isApproved: false }); }}
                    className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition-all"
                  >
                    Cancel Editing
                  </button>
                )}
              </div>

              <form onSubmit={(e) => handleSubmit(e, 'testimonials', testimonialForm, setTestimonialForm, { name: '', feedback: '', rating: 5, websiteLink: '', isApproved: false })} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Client Name</label>
                  <input className="admin-input" placeholder="Name" value={testimonialForm.name} onChange={e => setTestimonialForm({...testimonialForm, name: e.target.value})} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Project / Website Link</label>
                  <input className="admin-input" placeholder="e.g. google.com" value={testimonialForm.websiteLink} onChange={e => setTestimonialForm({...testimonialForm, websiteLink: e.target.value})} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Feedback Content</label>
                  <textarea className="admin-input min-h-[100px]" placeholder="Feedback" value={testimonialForm.feedback} onChange={e => setTestimonialForm({...testimonialForm, feedback: e.target.value})} required />
                </div>
                <div className="flex items-center gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 block">Rating</label>
                    <input type="number" min="1" max="5" className="admin-input w-24" value={testimonialForm.rating} onChange={e => setTestimonialForm({...testimonialForm, rating: parseInt(e.target.value)})} />
                  </div>
                  <div className="flex items-center gap-2 pt-6">
                    <input 
                      type="checkbox" 
                      id="isApproved"
                      checked={testimonialForm.isApproved} 
                      onChange={e => setTestimonialForm({...testimonialForm, isApproved: e.target.checked})} 
                      className="w-4 h-4"
                    />
                    <label htmlFor="isApproved" className="text-[10px] font-bold uppercase tracking-widest cursor-pointer">Approved & Live</label>
                  </div>
                </div>
                <button type="submit" className="admin-submit md:col-span-2">
                  {editingId ? 'Update Testimonial' : 'Save Testimonial'}
                </button>
              </form>
            </div>

            <div className="bg-black text-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight mb-2">Public Review Link</h2>
                <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Share this with clients to collect reviews automatically.</p>
              </div>
              <button 
                onClick={copyReviewLink}
                className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all"
              >
                <FaLink /> Copy Review Link
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map(item => {
                // Format URL for display in admin panel
                let displayUrl = item.websiteLink;
                if (displayUrl && !displayUrl.startsWith('http')) {
                  displayUrl = `https://${displayUrl}`;
                }

                return (
                  <div key={item._id} className={`admin-card border-l-4 ${item.isApproved ? 'border-l-green-500' : 'border-l-yellow-500'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-black uppercase tracking-tight">{item.name}</h3>
                        {item.websiteLink && (
                          <a href={displayUrl} target="_blank" rel="noopener noreferrer" className="text-[8px] font-bold text-blue-500 uppercase tracking-widest hover:underline mb-1 block">
                            Visit Project <FaLink className="inline ml-1" size={8} />
                          </a>
                        )}
                        <div className="flex text-xs text-yellow-500 mt-1">
                          {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button 
                          onClick={() => handleToggleApproval(item._id, item.isApproved)} 
                          className={`text-lg transition-colors ${item.isApproved ? 'text-green-500' : 'text-gray-300 hover:text-green-500'}`}
                          title={item.isApproved ? 'Unapprove' : 'Approve'}
                        >
                          <FaCheck />
                        </button>
                        <button onClick={() => handleEdit(item, setTestimonialForm, 'testimonials')} className="text-blue-500 hover:scale-110 transition-transform"><FaEdit /></button>
                        <button onClick={() => handleDelete(item._id, 'testimonials')} className="text-red-500 hover:scale-110 transition-transform"><FaTrash /></button>
                      </div>
                    </div>
                    <p className="text-sm bg-gray-50 p-4 rounded-md border border-black/5 italic">"{item.feedback}"</p>
                  </div>
                );
              })}
              {testimonials.length === 0 && <p className="text-center opacity-40 py-12 font-bold uppercase tracking-widest md:col-span-2">No reviews yet.</p>}
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div className="space-y-12">
            <h2 className="text-xl font-black uppercase tracking-tight">Site Content Management</h2>
            
            <div className="bg-white p-8 border border-black/5 shadow-sm rounded-lg">
              <h3 className="text-xs font-black uppercase tracking-widest mb-6 opacity-40">Hero Section</h3>
              <div className="space-y-6">
                <textarea className="admin-input font-mono" placeholder="Heading" defaultValue={siteConfig.hero?.heading} id="hero-heading" />
                <textarea className="admin-input" placeholder="Subheading" defaultValue={siteConfig.hero?.subheading} id="hero-subheading" />
                <input className="admin-input" placeholder="Tech Tags (comma separated)" defaultValue={siteConfig.hero?.tags?.join(', ')} id="hero-tags" />
                <button onClick={() => handleConfigUpdate('hero', {
                  heading: document.getElementById('hero-heading').value,
                  subheading: document.getElementById('hero-subheading').value,
                  tags: document.getElementById('hero-tags').value.split(',').map(s => s.trim())
                })} className="admin-submit w-fit px-8"><FaSave /> Save Hero</button>
              </div>
            </div>

            <div className="bg-white p-8 border border-black/5 shadow-sm rounded-lg">
              <h3 className="text-xs font-black uppercase tracking-widest mb-6 opacity-40">About Section</h3>
              <textarea className="admin-input min-h-[200px]" defaultValue={siteConfig.about?.content} id="about-content" />
              <button onClick={() => handleConfigUpdate('about', { content: document.getElementById('about-content').value })} className="admin-submit w-fit px-8 mt-4"><FaSave /> Save About</button>
            </div>

            <div className="bg-white p-8 border border-black/5 shadow-sm rounded-lg">
              <h3 className="text-xs font-black uppercase tracking-widest mb-6 opacity-40">Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="admin-input" placeholder="Email" defaultValue={siteConfig.contact?.email} id="contact-email" />
                <input className="admin-input" placeholder="Phone" defaultValue={siteConfig.contact?.phone} id="contact-phone" />
                <input className="admin-input" placeholder="Location" defaultValue={siteConfig.contact?.location} id="contact-location" />
                <input className="admin-input" placeholder="LinkedIn URL" defaultValue={siteConfig.contact?.linkedin} id="contact-linkedin" />
                <input className="admin-input" placeholder="GitHub URL" defaultValue={siteConfig.contact?.github} id="contact-github" />
                <input className="admin-input" placeholder="Twitter URL" defaultValue={siteConfig.contact?.twitter} id="contact-twitter" />
              </div>
              <button onClick={() => handleConfigUpdate('contact', {
                email: document.getElementById('contact-email').value,
                phone: document.getElementById('contact-phone').value,
                location: document.getElementById('contact-location').value,
                linkedin: document.getElementById('contact-linkedin').value,
                github: document.getElementById('contact-github').value,
                twitter: document.getElementById('contact-twitter').value,
              })} className="admin-submit w-fit px-8 mt-6"><FaSave /> Save Contact</button>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .admin-input {
          width: 100%;
          padding: 1rem;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 0.5rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .admin-input:focus {
          border-color: #000;
        }
        .admin-submit {
          background: #000;
          color: #fff;
          padding: 1rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background 0.2s;
        }
        .admin-submit:hover {
          background: #333;
        }
        .admin-card {
          background: #fff;
          padding: 1.5rem;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 0.5rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}
