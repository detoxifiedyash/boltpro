import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, AlertCircle } from 'lucide-react';

interface StatusStepProps {
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming' | 'warning';
  icon: React.ReactNode;
  deadline?: string;
}

function StatusStep({ title, description, status, icon, deadline }: StatusStepProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full
        ${status === 'completed' ? 'bg-green-500' : 
          status === 'current' ? 'bg-blue-500' : 
          status === 'warning' ? 'bg-amber-500' :
          'bg-gray-200'}`}>
        {icon}
      </div>
      <div className="ml-4 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {deadline && (
            <span className="text-sm text-gray-500">Deadline: {deadline}</span>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        {status === 'current' && (
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-blue-500 h-2 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ApplicationStatus() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Application Status</h2>
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          In Progress
        </span>
      </div>
      
      <div className="space-y-4">
        <StatusStep
          title="Personal Information"
          description="Basic details and contact information"
          status="completed"
          icon={<FileText className="h-6 w-6 text-white" />}
        />
        
        <StatusStep
          title="Academic Records"
          description="Upload transcripts and test scores"
          status="current"
          icon={<Clock className="h-6 w-6 text-white" />}
          deadline="March 15, 2024"
        />
        
        <StatusStep
          title="Letters of Recommendation"
          description="2 of 3 recommendations received"
          status="warning"
          icon={<AlertCircle className="h-6 w-6 text-white" />}
          deadline="March 20, 2024"
        />
        
        <StatusStep
          title="Final Review"
          description="Application review by admissions committee"
          status="upcoming"
          icon={<CheckCircle className="h-6 w-6 text-white" />}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200"
      >
        <h4 className="text-sm font-medium text-amber-800">Important Notice</h4>
        <p className="mt-1 text-sm text-amber-700">
          Please ensure all documents are submitted by March 20, 2024. Late submissions may affect your application review.
        </p>
      </motion.div>
    </div>
  );
}