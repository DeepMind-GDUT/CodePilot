// components/ReviewResult.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Feedback {
  line: number;
  message: string;
  severity: 'info' | 'warning' | 'error';
}

export default function ReviewResult({ taskId }: { taskId: string }) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/code-review/result/${taskId}`).then(res => {
      setFeedbacks(res.data);
      setLoading(false);
    });
  }, [taskId]);

  if (loading) return <div>正在获取评阅结果…</div>;

  return (
    <div className="space-y-2">
      {feedbacks.map((f, idx) => (
        <div
          key={idx}
          className={`p-2 rounded border-l-4 ${
            f.severity === 'error'
              ? 'border-red-500 bg-red-50'
              : f.severity === 'warning'
              ? 'border-yellow-500 bg-yellow-50'
              : 'border-blue-500 bg-blue-50'
          }`}
        >
          <strong>第 {f.line} 行：</strong> {f.message}
        </div>
      ))}
    </div>
  );
}
