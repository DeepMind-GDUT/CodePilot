// components/SimilarUsers.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  sharedInterests: string[];
}

export default function SimilarUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('/api/community/similar-users').then(res => setUsers(res.data));
  }, []);
  return (
    <ul className="space-y-2">
      {users.map(u => (
        <li key={u.id} className="p-2 border rounded">
          <strong>{u.name}</strong>
          <p className="text-sm">共同兴趣：{u.sharedInterests.join('，')}</p>
        </li>
      ))}
    </ul>
  );
}
