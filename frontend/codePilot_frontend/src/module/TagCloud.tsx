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
}
