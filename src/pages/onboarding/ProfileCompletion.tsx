import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Link as LinkIcon, AlertCircle, HelpCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const industries = [
  'Agriculture',
  'Energy',
  'Healthcare',
  'Technology',
  'Finance',
  'Education',
  'Manufacturing',
  'Consulting',
  'Infrastructure',
  'Telecommunications',
  'Mining',
  'Tourism',
  'Transportation',
  'Environmental',
  'Fashion',
  'Media'
].sort();

const languages = [
  'English',
  'French',
  'Arabic',
  'Swahili',
  'Portuguese',
  'Amharic',
  'Yoruba',
  'Zulu',
  'Hausa',
  'Igbo'
].sort();

export function ProfileCompletion() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [showLinkedInHelp, setShowLinkedInHelp] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    company: '',
    industry: '',
    yearsOfExperience: '',
    bio: '',
    skills: [] as string[],
    languages: [] as string[],
    location: '',
    countryExpertise: [] as { country: string; level: 'Beginner' | 'Intermediate' | 'Expert' }[]
  });

  const handleLinkedInImport = async () => {
    try {
      setIsLoading(true);
      // LinkedIn import logic here
      setProgress(65);
    } catch (err) {
      setError('Failed to import LinkedIn profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // Save profile data
      navigate('/onboarding/network');
    } catch (err) {
      setError('Failed to save profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Profile</h1>
          <div className="mt-4">
            <div className="relative">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
                />
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Profile completion: {progress}%
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        <div className="bg-white shadow rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Import from LinkedIn</h2>
            <p className="mt-1 text-sm text-gray-600">
              Save time by importing your professional details from LinkedIn
            </p>
            
            <div className="mt-4 space-y-4">
              <div className="relative">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={linkedInUrl}
                    onChange={(e) => setLinkedInUrl(e.target.value)}
                    placeholder="Paste your LinkedIn profile URL"
                    className="block w-full pr-10 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLinkedInHelp(!showLinkedInHelp)}
                    className="absolute right-3 text-gray-400 hover:text-gray-500"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </div>
                
                {showLinkedInHelp && (
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-900">How to get your LinkedIn URL:</h4>
                    <ol className="mt-2 text-sm text-gray-600 list-decimal list-inside space-y-1">
                      <li>Go to your LinkedIn profile</li>
                      <li>Click 'Edit public profile & URL'</li>
                      <li>Copy the URL from the address bar</li>
                    </ol>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleLinkedInImport}
                disabled={isLoading || !linkedInUrl}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <LinkIcon className="w-5 h-5 mr-2" />
                Import from LinkedIn
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile Photo
              </label>
              <div className="mt-1 flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name || ''}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <Upload className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Change Photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Professional Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                  Industry
                </label>
                <select
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select an industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="experience"
                  min="0"
                  max="50"
                  value={formData.yearsOfExperience}
                  onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Professional Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                maxLength={500}
              />
              <p className="mt-2 text-sm text-gray-500">
                {formData.bio.length}/500 characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Languages
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {languages.map((language) => (
                  <label
                    key={language}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      formData.languages.includes(language)
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-700'
                    } cursor-pointer hover:bg-blue-50`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={formData.languages.includes(language)}
                      onChange={(e) => {
                        const newLanguages = e.target.checked
                          ? [...formData.languages, language]
                          : formData.languages.filter((l) => l !== language);
                        setFormData({ ...formData, languages: newLanguages });
                      }}
                    />
                    {language}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}