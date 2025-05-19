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
}
