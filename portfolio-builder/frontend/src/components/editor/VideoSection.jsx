import React from 'react';
import { Video, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const VideoSection = ({ section, onUpdate, onDelete, onMoveUp, onMoveDown }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Video className="w-5 h-5 text-purple-600" />
          <span className="font-semibold text-gray-700">Video</span>
        </div>
        <div className="flex gap-2">
          <button onClick={onMoveUp} className="text-gray-400 hover:text-gray-600">
            <ChevronUp className="w-5 h-5" />
          </button>
          <button onClick={onMoveDown} className="text-gray-400 hover:text-gray-600">
            <ChevronDown className="w-5 h-5" />
          </button>
          <button onClick={onDelete} className="text-red-500 hover:text-red-700">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          value={section.content.title}
          onChange={(e) => onUpdate({ ...section.content, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Video Title"
        />
        <input
          type="text"
          value={section.content.url}
          onChange={(e) => onUpdate({ ...section.content, url: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Video URL (YouTube, Vimeo, etc.)"
        />
        <textarea
          value={section.content.description || ''}
          onChange={(e) => onUpdate({ ...section.content, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="3"
          placeholder="Video Description (optional)"
        />
      </div>
    </div>
  );
};

export default VideoSection;