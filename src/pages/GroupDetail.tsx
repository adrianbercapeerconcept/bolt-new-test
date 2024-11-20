import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Users, MessageSquare, Share2, Plus, Building, MapPin } from 'lucide-react';
import { CreatePostModal } from '../components/groups/CreatePostModal';

interface Post {
  id: number;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  image?: string;
}

const samplePosts: Post[] = [
  {
    id: 1,
    author: {
      name: "Amara Okafor",
      role: "Pharmaceutical Research Lead",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=facearea&facepad=2&w=256&h=256"
    },
    content: "Just published our latest research on local pharmaceutical manufacturing capabilities in West Africa. Would love to get the group's thoughts on scaling production.",
    timestamp: "2h ago",
    likes: 24,
    comments: 8,
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: 2,
    author: {
      name: "Kwame Mensah",
      role: "Regulatory Affairs Director",
      avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?fit=facearea&facepad=2&w=256&h=256"
    },
    content: "Important update on new pharmaceutical regulations in Ghana. This will affect all manufacturers and importers.",
    timestamp: "5h ago",
    likes: 45,
    comments: 12
  }
];

export function GroupDetail() {
  const { id } = useParams();
  const [showCreatePost, setShowCreatePost] = useState(false);

  // In a real app, fetch group details based on id
  const group = {
    id: Number(id),
    name: "African Pharma Innovation",
    description: "Connecting pharmaceutical professionals across Africa to discuss innovation, regulation, and market access.",
    sector: "Healthcare",
    country: "Pan-African",
    members: 1250,
    posts: 324,
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=1920",
    isJoined: true
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Group Header */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="h-64 relative">
          <img
            src={group.image}
            alt={group.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl font-bold text-white mb-2">{group.name}</h1>
            <div className="flex items-center space-x-4 text-white">
              <span className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                {group.members.toLocaleString()} members
              </span>
              <span className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-1" />
                {group.posts} posts
              </span>
              <span className="flex items-center">
                <Building className="w-5 h-5 mr-1" />
                {group.sector}
              </span>
              <span className="flex items-center">
                <MapPin className="w-5 h-5 mr-1" />
                {group.country}
              </span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">{group.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {group.isJoined ? 'Leave Group' : 'Join Group'}
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Create Post Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowCreatePost(true)}
          className="w-full flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Post
        </button>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {samplePosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {post.author.name}
                      </h3>
                      <p className="text-sm text-gray-500">{post.author.role}</p>
                      <p className="text-sm text-gray-500">{post.timestamp}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post content"
                      className="mt-4 rounded-lg max-h-96 w-full object-cover"
                    />
                  )}
                  <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                    <button className="flex items-center hover:text-blue-600">
                      <MessageSquare className="w-5 h-5 mr-1" />
                      {post.comments} Comments
                    </button>
                    <button className="flex items-center hover:text-blue-600">
                      <Share2 className="w-5 h-5 mr-1" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCreatePost && (
        <CreatePostModal
          isOpen={showCreatePost}
          onClose={() => setShowCreatePost(false)}
          groupId={group.id}
        />
      )}
    </div>
  );
}