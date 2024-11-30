import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Building, Globe } from 'lucide-react';

const stats = [
  { id: 1, name: 'Students Enrolled', value: '15,000+', icon: Users },
  { id: 2, name: 'Graduation Rate', value: '94%', icon: GraduationCap },
  { id: 3, name: 'Campus Buildings', value: '120+', icon: Building },
  { id: 4, name: 'International Students', value: '2,500+', icon: Globe },
];

export function Stats() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-indigo-50 px-4 py-5 shadow rounded-lg overflow-hidden sm:p-6"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  {React.createElement(stat.icon, { className: "h-6 w-6 text-white" })}
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500 truncate">{stat.name}</p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}