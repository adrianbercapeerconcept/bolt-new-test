import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Image, Link, Smile, Send, ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

interface Post {
  id: number;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  hasLiked?: boolean;
}

export function ContentStream() {
  const { user } = useAuth();
  const [postText, setPostText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: {
        name: "Amara Okafor",
        role: "Energy Policy Advisor",
        company: "AfriEnergy Solutions",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=facearea&facepad=2&w=256&h=256"
      },
      content: "Excited to announce our new renewable energy initiative in West Africa! This project will bring sustainable power to over 100,000 households. #CleanEnergy #Sustainability",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1024",
      likes: 142,
      comments: 28,
      shares: 15,
      timestamp: "2h ago"
    },
    {
      id: 2,
      author: {
        name: "Kwame Mensah",
        role: "AgriTech Innovator",
        company: "FarmTech Ghana",
        avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?fit=facearea&facepad=2&w=256&h=256"
      },
      content: "Just wrapped up an amazing AgriTech conference in Accra. The future of African agriculture is tech-enabled! 🌱🚜",
      likes: 89,
      comments: 12,
      shares: 8,
      timestamp: "4h ago"
    }
  ]);

  const handlePost = () => {
    if (!postText.trim() && !selectedImage) return;

    const newPost: Post = {
      id: posts.length + 1,
      author: {
        name: user?.name || 'Anonymous',
        role: 'Professional',
        company: 'Company',
        avatar: user?.avatar || 'https://via.placeholder.com/150'
      },
      content: postText,
      image: selectedImage ? URL.createObjectURL(selectedImage) : undefined,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: 'Just now'
    };

    setPosts([newPost, ...posts]);
    setPostText('');
    setSelectedImage(null);
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.hasLiked ? post.likes - 1 : post.likes + 1,
          hasLiked: !post.hasLiked
        };
      }
      return post;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex space-x-4">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full border-none focus:ring-0 resize-none"
              rows={3}
            />
            {selectedImage && (
              <div className="relative mt-2">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="max-h-48 rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 p-1 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div className="flex space-x-4">
            <label className="cursor-pointer text-gray-500 hover:text-gray-700 flex items-center space-x-2">
              <Image className="w-5 h-5" />
              <span className="text-sm">Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
            <button className="text-gray-500 hover:text-gray-700 flex items-center space-x-2">
              <Link className="w-5 h-5" />
              <span className="text-sm">Link</span>
            </button>
            <button
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="text-gray-500 hover:text-gray-700 flex items-center space-x-2"
            >
              <Smile className="w-5 h-5" />
              <span className="text-sm">Emoji</span>
            </button>
          </div>
          <button
            onClick={handlePost}
            disabled={!postText.trim() && !selectedImage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Post</span>
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow">
            <div className="p-4">
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
                      <p className="text-sm text-gray-500">
                        {post.author.role} at {post.author.company}
                      </p>
                      <p className="text-sm text-gray-500">{post.timestamp}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="mt-2 text-gray-600 whitespace-pre-wrap">{post.content}</p>
                </div>
              </div>

              {post.image && (
                <div className="mt-4">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="rounded-lg max-h-96 w-full object-cover"
                  />
                </div>
              )}

              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-1 ${
                      post.hasLiked ? 'text-blue-600' : 'text-gray-500'
                    } hover:text-blue-600`}
                  >
                    <ThumbsUp className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                    <Share2 className="w-5 h-5" />
                    <span>{post.shares}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}