import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';

export function ReportCTA() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Reports</h2>
        <p className="text-gray-600 mb-6">
          Get detailed insights and verification reports about this company
        </p>
        
        <Link
          to="/reports"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <FileText className="w-5 h-5 mr-2" />
          Request Report
        </Link>

        <div className="mt-4 space-y-2">
          <a
            href="/samples/basic-report.pdf"
            className="flex items-center text-sm text-gray-600 hover:text-blue-600"
          >
            <Download className="w-4 h-4 mr-1" />
            Sample Basic Report
          </a>
          <a
            href="/samples/advanced-report.pdf"
            className="flex items-center text-sm text-gray-600 hover:text-blue-600"
          >
            <Download className="w-4 h-4 mr-1" />
            Sample Advanced Report
          </a>
        </div>
      </div>
    </div>
  );
}