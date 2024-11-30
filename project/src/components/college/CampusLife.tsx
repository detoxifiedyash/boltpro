import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Music, Book } from 'lucide-react';

const activities = [
  {
    title: 'Student Clubs',
    description: 'Join over 50+ student-led organizations',
    icon: Heart,
    color: 'bg-pink-500',
  },
  {
    title: 'Campus Cafes',
    description: '24/7 study spaces with coffee shops',
    icon: Coffee,
    color: 'bg-amber-500',
  },
  {
    title: 'Arts & Culture',
    description: 'Regular concerts and cultural events',
    icon: Music,
    color: 'bg-purple-500',
  },
  {
    title: 'Library',
    description: 'Modern library with digital resources',
    icon: Book,
    color: 'bg-blue-500',
  },
];

export function CampusLife() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Campus Life</h2>
          <p className="mt-4 text-lg text-gray-600">Experience a vibrant community beyond academics</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative p-6 bg-white rounded-lg shadow-md">
                <div className={`${activity.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <activity.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}