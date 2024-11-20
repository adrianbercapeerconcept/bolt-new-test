import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Link as LinkIcon, AlertCircle, Users } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface InvitationEmail {
  email: string;
  note: string;
}

export function NetworkInitialization() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emails, setEmails] = useState<InvitationEmail[]>([{ email: '', note: '' }]);

  const handleEmailChange = (index: number, field: keyof InvitationEmail, value: string) => {
    const newEmails = [...emails];
    newEmails[index][field] = value;
    setEmails(newEmails);
  };

  const addEmailField = () => {
    setEmails([...emails, { email: '', note: '' }]);
  };

  const removeEmailField = (index: number) => {
    const newEmails = emails.filter((_, i) => i !== index);
    setEmails(newEmails);
  };

  const handleLinkedInImport = async () => {
    try {
      setIsLoading(true);
      // Simulate LinkedIn import
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/home');
    } catch (err) {
      setError('Failed to import LinkedIn connections');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // Simulate sending invitations
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/home');
    } catch (err) {
      setError('Failed to send invitations');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Build Your Network</h1>
          <p className="mt-2 text-gray-600">
            Connect with professionals in your industry to expand your network
          </p>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Import LinkedIn Connections
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Quickly connect with your professional network from LinkedIn
                </p>
              </div>
              <button
                onClick={handleLinkedInImport}
                disabled={isLoading}
                className="flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <LinkIcon className="w-5 h-5 mr-2" />
                {isLoading ? 'Importing...' : 'Import Connections'}
              </button>
            </div>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Invite Connections
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Invite colleagues and industry peers to join your network
                </p>
              </div>

              <div className="space-y-4">
                {emails.map((email, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-1 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <div className="mt-1 relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            value={email.email}
                            onChange={(e) => handleEmailChange(index, 'email', e.target.value)}
                            className="block w-full pl-10 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="colleague@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Personal note
                        </label>
                        <textarea
                          value={email.note}
                          onChange={(e) => handleEmailChange(index, 'note', e.target.value)}
                          rows={2}
                          className="block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Add a personal message to your invitation..."
                        />
                      </div>
                    </div>
                    {emails.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeEmailField(index)}
                        className="mt-6 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Remove</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={addEmailField}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  + Add another email
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send Invitations'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}