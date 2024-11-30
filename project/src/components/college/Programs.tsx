import React from 'react';
import { motion } from 'framer-motion';
import { Book, Star, Users, Clock } from 'lucide-react';

const programs = [
  {
    id: 1,
    name: 'Computer Science',
    description: 'Learn software development, algorithms, and artificial intelligence.',
    duration: '4 years',
    icon: Book,
    rating: 4.8,
    students: 1200,
  },
  {
    id: 2,
    name: 'Business Administration',
    description: 'Study management, finance, and entrepreneurship.',
    duration: '4 years',
    icon: Users,
    rating: 4.7,
    students: 1500,
  },
  {
    id: 3,
    name: 'Engineering',
    description: 'Explore mechanical, electrical, and civil engineering.',
    duration: '4 years',
    icon: Star,
    rating: 4.9,
    students: 1000,
  },
];

export function Programs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Featured Programs</h2>
          <p className="mt-4 text-lg text-gray-600">Discover your path to success with our diverse academic programs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <program.icon className="h-8 w-8 text-indigo-600" />
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{program.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{program.students} students</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}