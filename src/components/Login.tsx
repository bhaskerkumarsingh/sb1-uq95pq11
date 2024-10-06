import React, { useState } from 'react';
import { User } from 'lucide-react';

interface LoginProps {
  onUserCreated: (userId: string) => void;
}

const Login: React.FC<LoginProps> = ({ onUserCreated }) => {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId.trim()) {
      onUserCreated(userId.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Create User ID</h2>
      <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
        <div className="bg-indigo-500 p-3">
          <User className="text-white w-6 h-6" />
        </div>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your unique ID"
          className="flex-grow px-4 py-2 bg-transparent focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Create User
      </button>
    </form>
  );
};

export default Login;