// frontend/src/components/editor/ProjectSection.js
import React from "react";

export default function ProjectSection({ data, onChange }) {
  const update = (patch) => onChange({ ...data, ...patch });

  return (
    <div>
      <input
        type="text"
        placeholder="Project Title"
        value={data.title || ""}
        onChange={(e) => update({ title: e.target.value })}
        className="w-full px-3 py-2 border rounded mb-2"
      />
      <textarea
        placeholder="Project Description"
        value={data.description || ""}
        onChange={(e) => update({ description: e.target.value })}
        className="w-full px-3 py-2 border rounded mb-2"
        rows={4}
      />
      <input
        type="text"
        placeholder="Project Link (optional)"
        value={data.link || ""}
        onChange={(e) => update({ link: e.target.value })}
        className="w-full px-3 py-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={data.image || ""}
        onChange={(e) => update({ image: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  );
}
