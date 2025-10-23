import React from 'react';
import { Image, Trash2, ChevronUp, ChevronDown, Plus } from 'lucide-react';

const ImageSection = ({ section, onUpdate, onDelete, onMoveUp, onMoveDown }) => {
  const addImage = () => {
    const images = [...(section.content.images || []), ''];
    onUpdate({ ...section.content, images });
  };

  const updateImage = (index, value) => {
    const images = [...section.content.images];
    images[index] = value;
    onUpdate({ ...section.content, images });
  };

  const removeImage = (index) => {
    const images = section.content.images.filter((_, i) => i !== index);
    onUpdate({ ...section.content, images });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-purple-600" />
          <span className="font-semibold text-gray-700">Image Gallery</span>
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
          placeholder="Gallery Title"
        />

        <div className="space-y-2">
          {section.content.images?.map((img, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={img}
                onChange={(e) => updateImage(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Image URL"
              />
              <button
                onClick={() => removeImage(index)}
                className="px-3 py-2 text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addImage}
          className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-purple-500 hover:text-purple-600 flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Image
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
