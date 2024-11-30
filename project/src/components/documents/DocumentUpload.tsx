import React from 'react';
import { motion } from 'framer-motion';
import { Upload, File, CheckCircle, AlertTriangle } from 'lucide-react';

const documents = [
  {
    type: 'Transcript',
    status: 'uploaded',
    fileName: 'transcript_2023.pdf',
    uploadDate: '2024-02-15',
  },
  {
    type: 'Essay',
    status: 'pending',
    required: true,
  },
  {
    type: 'Recommendation',
    status: 'partial',
    count: 2,
    required: 3,
  },
];

export function DocumentUpload() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Required Documents</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 py-2 bg-sky text-white rounded-lg hover:bg-sky/90 transition-colors"
        >
          <Upload className="h-5 w-5 mr-2" />
          Upload New
        </motion.button>
      </div>

      <div className="space-y-4">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.type}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-fog rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <File className="h-6 w-6 text-stone" />
              <div>
                <h3 className="font-medium text-gray-900">{doc.type}</h3>
                {doc.fileName && (
                  <p className="text-sm text-gray-500">{doc.fileName}</p>
                )}
                {doc.status === 'partial' && (
                  <p className="text-sm text-amber-600">
                    {doc.count} of {doc.required} received
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {doc.status === 'uploaded' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Uploaded
                </span>
              )}
              {doc.status === 'pending' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  Required
                </span>
              )}
              {doc.uploadDate && (
                <span className="text-sm text-gray-500">
                  Uploaded {doc.uploadDate}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 bg-sky/10 rounded-lg"
      >
        <h4 className="text-sm font-medium text-sky">Document Guidelines</h4>
        <ul className="mt-2 text-sm text-gray-600 space-y-1">
          <li>• Maximum file size: 10MB</li>
          <li>• Accepted formats: PDF, DOC, DOCX</li>
          <li>• Ensure all documents are clearly legible</li>
        </ul>
      </motion.div>
    </div>
  );
}