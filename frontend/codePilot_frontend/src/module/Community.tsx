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

  
}
