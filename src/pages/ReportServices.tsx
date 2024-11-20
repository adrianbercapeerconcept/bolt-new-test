import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FileText, CheckCircle, Download, AlertCircle } from 'lucide-react';

export function ReportServices() {
  const { companyId } = useParams();
  const [selectedReport, setSelectedReport] = useState<'basic' | 'advanced' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reports = [
    {
      id: 'basic',
      name: 'Basic Report',
      price: 1000,
      features: [
        'Corporate details verification',
        'Key personnel information',
        'Company accounts overview',
        'Basic compliance check'
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced Report',
      price: 5000,
      features: [
        'All Basic Report features',
        'Location verification',
        'Detailed officer report',
        'Comprehensive financial assessment',
        'Complete trading history',
        'Market reputation analysis',
        'Risk assessment'
      ]
    }
  ];

  const handleRequestReport = async () => {
    if (!selectedReport) return;
    
    try {
      setIsLoading(true);
      setError(null);
      // Handle report request
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Navigate to payment or confirmation
    } catch (err) {
      setError('Failed to process report request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Company Report Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            Get comprehensive verification and assessment reports
          </p>
        </div>

        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reports.map((report) => (
            <div
              key={report.id}
              className={`bg-white rounded-lg shadow-sm border-2 transition-colors ${
                selectedReport === report.id ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">{report.name}</h2>
                <p className="mt-2 text-3xl font-bold text-gray-900">${report.price}</p>
                
                <ul className="mt-6 space-y-4">
                  {report.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedReport(report.id as 'basic' | 'advanced')}
                  className={`mt-8 w-full flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedReport === report.id
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Select {report.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Sample Reports</h3>
          <div className="space-y-4">
            <a
              href="/samples/basic-report.pdf"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Basic Report Sample
            </a>
            <a
              href="/samples/advanced-report.pdf"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Advanced Report Sample
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleRequestReport}
            disabled={!selectedReport || isLoading}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Request Selected Report'}
          </button>
        </div>
      </div>
    </div>
  );
}