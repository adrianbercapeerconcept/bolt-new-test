import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BadgeCheck, Upload, Camera, Link as LinkIcon, AlertCircle, 
  CheckCircle, Clock, Shield, FileText, Video
} from 'lucide-react';
import { useTrust } from '../../contexts/TrustContext';

type VerificationStep = 'id' | 'linkedin' | 'documents' | 'video';

interface VerificationStatus {
  id: boolean;
  linkedin: boolean;
  documents: boolean;
  video: boolean;
}

export function VerifyIdentity() {
  const navigate = useNavigate();
  const { metrics } = useTrust();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<VerificationStep>('id');
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>({
    id: false,
    linkedin: false,
    documents: false,
    video: false
  });

  const steps = [
    {
      id: 'id',
      title: 'ID Verification',
      description: 'Verify your identity with a government-issued ID',
      icon: Shield,
      status: verificationStatus.id
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profile',
      description: 'Connect your professional LinkedIn profile',
      icon: LinkIcon,
      status: verificationStatus.linkedin
    },
    {
      id: 'documents',
      title: 'Professional Documents',
      description: 'Upload professional credentials and certificates',
      icon: FileText,
      status: verificationStatus.documents
    },
    {
      id: 'video',
      title: 'Video Verification',
      description: 'Record a short video verification',
      icon: Video,
      status: verificationStatus.video
    }
  ];

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setVerificationStatus(prev => ({
        ...prev,
        [activeStep]: true
      }));

      // Move to next step if available
      const currentIndex = steps.findIndex(step => step.id === activeStep);
      if (currentIndex < steps.length - 1) {
        setActiveStep(steps[currentIndex + 1].id as VerificationStep);
      }
    } catch (err) {
      setError('Failed to upload file. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLinkedInVerification = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate LinkedIn verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setVerificationStatus(prev => ({
        ...prev,
        linkedin: true
      }));
      
      setActiveStep('documents');
    } catch (err) {
      setError('Failed to verify LinkedIn profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVideoVerification = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate video verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setVerificationStatus(prev => ({
        ...prev,
        video: true
      }));
      
      // Navigate to profile on completion
      navigate('/profile');
    } catch (err) {
      setError('Failed to complete video verification. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getVerificationProgress = () => {
    const completed = Object.values(verificationStatus).filter(Boolean).length;
    return (completed / steps.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <BadgeCheck className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Verify Your Identity</h1>
          <p className="mt-2 text-gray-600">
            Complete the verification steps to build trust with potential connections
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="relative">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${getVerificationProgress()}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
              />
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Verification Progress: {Math.round(getVerificationProgress())}%
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        {/* Verification Steps */}
        <div className="space-y-6">
          {steps.map((step) => {
            const StepIcon = step.icon;
            const isActive = activeStep === step.id;
            const isCompleted = verificationStatus[step.id as keyof VerificationStatus];

            return (
              <div
                key={step.id}
                className={`bg-white rounded-lg shadow-sm border-2 transition-colors ${
                  isActive ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${
                        isCompleted ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <StepIcon className={`w-6 h-6 ${
                          isCompleted ? 'text-green-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500">{step.description}</p>
                      </div>
                    </div>
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Clock className="w-6 h-6 text-gray-400" />
                    )}
                  </div>

                  {isActive && !isCompleted && (
                    <div className="mt-6">
                      {step.id === 'id' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-center">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                <p className="text-sm text-gray-500">
                                  Upload a photo of your government-issued ID
                                </p>
                              </div>
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e.target.files)}
                              />
                            </label>
                          </div>
                        </div>
                      )}

                      {step.id === 'linkedin' && (
                        <button
                          onClick={handleLinkedInVerification}
                          disabled={isLoading}
                          className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                        >
                          <LinkIcon className="w-5 h-5 mr-2" />
                          Connect LinkedIn Profile
                        </button>
                      )}

                      {step.id === 'documents' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-center">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                <p className="text-sm text-gray-500">
                                  Upload professional certificates or credentials
                                </p>
                              </div>
                              <input
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                multiple
                                onChange={(e) => handleFileUpload(e.target.files)}
                              />
                            </label>
                          </div>
                        </div>
                      )}

                      {step.id === 'video' && (
                        <div className="space-y-4">
                          <button
                            onClick={handleVideoVerification}
                            disabled={isLoading}
                            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                          >
                            <Camera className="w-5 h-5 mr-2" />
                            Start Video Verification
                          </button>
                          <p className="text-xs text-gray-500 text-center">
                            You'll be asked to record a short video following simple instructions
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need help with verification?{' '}
            <button className="text-blue-600 hover:text-blue-500">
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}