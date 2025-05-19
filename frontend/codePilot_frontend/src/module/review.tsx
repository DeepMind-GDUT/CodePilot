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

  
}
