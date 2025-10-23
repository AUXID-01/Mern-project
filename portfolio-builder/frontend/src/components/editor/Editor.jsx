import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Eye, Download, ArrowLeft } from 'lucide-react';
import ProjectSection from './ProjectSection';
import ImageSection from './ImageSection';
import VideoSection from './VideoSection';
import BlogSection from './BlogSection';
import { usePortfolio } from '../../context/PortfolioContext';

const Editor = ({ portfolioId }) => {
  const navigate = useNavigate();
  const { currentPortfolio, updatePortfolio } = usePortfolio();
  const [sections, setSections] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('modern');
  const [view, setView] = useState('edit');

  useEffect(() => {
    if (currentPortfolio) {
      setSections(currentPortfolio.sections || []);
      setSelectedTheme(currentPortfolio.theme || 'modern');
    }
  }, [currentPortfolio]);

  const addSection = (type) => {
    const newSection = {
      id: Date.now(),
      type,
      content: getDefaultContent(type),
      order: sections.length
    };
    setSections([...sections, newSection]);
  };

  const updateSection = (id, content) => {
    setSections(sections.map(s => s.id === id ? { ...s, content } : s));
  };

  const deleteSection = (id) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const moveSection = (id, direction) => {
    const index = sections.findIndex(s => s.id === id);
    if (direction === 'up' && index > 0) {
      const newSections = [...sections];
      [newSections[index], newSections[index - 1]] = [newSections[index - 1], newSections[index]];
      setSections(newSections);
    } else if (direction === 'down' && index < sections.length - 1) {
      const newSections = [...sections];
      [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
      setSections(newSections);
    }
  };

  const handleSave = async () => {
    try {
      await updatePortfolio(currentPortfolio._id, {
        sections,
        theme: selectedTheme
      });
      alert('Portfolio saved successfully!');
    } catch (error) {
      alert('Error saving portfolio');
    }
  };

  const getDefaultContent = (type) => {
    switch (type) {
      case 'project':
        return { title: '', description: '', link: '', image: '' };
      case 'image':
        return { title: '', images: [] };
      case 'video':
        return { title: '', url: '' };
      case 'blog':
        return { title: '', content: '' };
      default :
        return {};
    }
  };

  const renderSection = (section) => {
    const props = {
      section,
      onUpdate: (content) => updateSection(section.id, content),
      onDelete: () => deleteSection(section.id),
      onMoveUp: () => moveSection(section.id, 'up'),
      onMoveDown: () => moveSection(section.id, 'down')
    };

    switch (section.type) {
      case 'project':
        return <ProjectSection key={section.id} {...props} />;
      case 'image':
        return <ImageSection key={section.id} {...props} />;
      case 'video':
        return <VideoSection key={section.id} {...props} />;
      case 'blog':
        return <BlogSection key={section.id} {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <h1 className="text-2xl font-bold">{currentPortfolio?.name}</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setView('edit')}
                className={`px-4 py-2 rounded-lg transition ${
                  view === 'edit' ? 'bg-white shadow' : ''
                }`}
              >
                Edit
              </button>
              <button
                onClick={() => setView('preview')}
                className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                  view === 'preview' ? 'bg-white shadow' : ''
                }`}
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {view === 'edit' && (
          <div className="w-64 bg-white border-r border-gray-200 p-6 min-h-screen">
            <h3 className="font-bold text-gray-700 mb-4">Add Sections</h3>
            <div className="space-y-2 mb-8">
              {['project', 'image', 'video', 'blog'].map(type => (
                <button
                  key={type}
                  onClick={() => addSection(type)}
                  className="w-full px-4 py-3 bg-gray-50 hover:bg-purple-50 rounded-lg text-left capitalize transition"
                >
                  {type}
                </button>
              ))}
            </div>

            <h3 className="font-bold text-gray-700 mb-4">Theme</h3>
            <div className="space-y-2">
              {['modern', 'minimal', 'creative'].map(theme => (
                <button
                  key={theme}
                  onClick={() => setSelectedTheme(theme)}
                  className={`w-full px-4 py-2 rounded-lg capitalize transition ${
                    selectedTheme === theme
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex-1 p-8">
          {view === 'edit' ? (
            <div className="max-w-4xl mx-auto space-y-4">
              {sections.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                  <p>Add sections from the sidebar to start building</p>
                </div>
              ) : (
                sections.map(renderSection)
              )}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-12">{currentPortfolio?.name}</h1>
              <div className="space-y-8">
                {sections.map(section => (
                  <div key={section.id} className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">{section.content.title}</h2>
                    {section.type === 'project' && (
                      <div>
                        <p className="text-gray-600 mb-4">{section.content.description}</p>
                        {section.content.link && (
                          <a href={section.content.link} className="text-purple-600 hover:underline">
                            View Project →
                          </a>
                        )}
                      </div>
                    )}
                    {section.type === 'blog' && (
                      <p className="text-gray-700 whitespace-pre-wrap">{section.content.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;