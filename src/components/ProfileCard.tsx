import { useState } from 'react';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string; 
};

export default function ProfileCard({ name, role, bio, avatarUrl }: ProfileCardProps) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(prev => prev + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white p-6 border border-gray-300 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto">
      {avatarUrl && <img src={avatarUrl} alt="Avatar" className="w-32 h-32 rounded-full object-cover border-4 border-blue-200" />}
      <div>
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-500 mb-2">{role}</p>
        <p className="text-gray-700 mb-4">{bio}</p>
        <button 
          onClick={handleLike} 
          className={`px-4 py-2 rounded transition ${isLiked ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          {isLiked ? `Liked (${likes})` : `Like (${likes})`}
        </button>
      </div>
    </div>
  );
}