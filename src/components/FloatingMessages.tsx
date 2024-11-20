import React, { useState } from 'react';
import { MessageSquare, X, ChevronDown, ChevronUp } from 'lucide-react';
import { WhatsAppMessage } from './WhatsAppMessage';

interface Chat {
  id: number;
  name: string;
  avatar: string;
  phoneNumber: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

export function FloatingMessages() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const chats: Chat[] = [
    {
      id: 1,
      name: "Chioma Okafor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256",
      phoneNumber: "+2348012345678",
      lastMessage: "Thanks for the introduction!",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Babajide Adeleke",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256",
      phoneNumber: "+2348023456789",
      lastMessage: "Let's schedule a call to discuss the project",
      time: "1h ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Aisha Mohammed",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?fit=facearea&facepad=2&w=256&h=256",
      phoneNumber: "+2348034567890",
      lastMessage: "I've reviewed your portfolio",
      time: "3h ago",
      unread: 0,
      online: true,
    },
  ];

  const totalUnread = chats.reduce((sum, chat) => sum + chat.unread, 0);

  return (
    <div className="fixed bottom-0 right-4 z-50">
      <div className="bg-white rounded-t-lg shadow-lg w-80">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between border-b border-gray-200"
        >
          <div className="flex items-center">
            <MessageSquare className="w-5 h-5 text-gray-600 mr-2" />
            <span className="font-medium text-gray-900">Messages</span>
            {totalUnread > 0 && (
              <span className="ml-2 bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                {totalUnread}
              </span>
            )}
          </div>
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          )}
        </button>

        {isExpanded && (
          <div className="max-h-96 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="p-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors border-b border-gray-200"
              >
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-10 h-10 rounded-full"
                  />
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {chat.name}
                    </p>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                </div>
                <WhatsAppMessage
                  phoneNumber={chat.phoneNumber}
                  className="!px-2 !py-1 text-xs"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}