// components/CommunityFeed.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: string;
  author: string;
  title: string;
  content: string;
  likes: number;
}

export default function CommunityFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('/api/community/feed').then(res => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="space-y-4">
      {posts.map(p => (
        <div key={p.id} className="p-4 border rounded">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-600">by {p.author}</p>
          <p className="mt-2">{p.content}</p>
          <div className="mt-2 text-sm">👍 {p.likes}</div>
        </div>
      ))}
    </div>
  );
}
