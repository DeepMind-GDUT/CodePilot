// components/TagCloud.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Tag {
  name: string;
  weight: number; // 用于字体大小
}


export default function TagCloud() {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    axios.get('/api/community/tags').then(res => setTags(res.data));
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span
          key={tag.name}
          style={{ fontSize: `${Math.max(12, tag.weight * 8)}px` }}
          className="bg-gray-100 px-2 py-1 rounded"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}
