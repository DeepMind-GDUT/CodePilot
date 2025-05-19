// components/LearningPathCarousel.tsx
import React, { useEffect, useState } from 'react';
import { Card, Button } from '@/components/ui/card';
import axios from 'axios';

interface Path {
  id: string;
  title: string;
  description: string;
  progress: number; // 0~100
}

export default function LearningPathCarousel() {
  const [paths, setPaths] = useState<Path[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 请求 AI 推荐
    axios.get('/api/ai/learning-paths').then(res => {
      setPaths(res.data);
    });
  }, []);

  if (paths.length === 0) return <div>加载中…</div>;

  const current = paths[currentIndex];
  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold">{current.title}</h2>
      <p className="mt-2">{current.description}</p>
      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded overflow-hidden">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${current.progress}%` }}
          />
        </div>
        <span className="text-sm">{current.progress}% 完成</span>
      </div>
      <div className="mt-4 flex justify-between">
        <Button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(i => i - 1)}
        >
          上一个
        </Button>
        <Button
          disabled={currentIndex === paths.length - 1}
          onClick={() => setCurrentIndex(i => i + 1)}
        >
          下一个
        </Button>
      </div>
    </Card>
  );
}
