import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Stats } from './components/features/Stats';
import { Programs } from './components/college/Programs';
import { CampusLife } from './components/college/CampusLife';
import { VirtualTour } from './components/college/VirtualTour';
import { ApplicationStatus } from './components/dashboard/ApplicationStatus';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Hero />
          <Stats />
          <Programs />
          <VirtualTour />
          <CampusLife />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ApplicationStatus />
                
                {/* Quick Links */}
                <div className="space-y-4">
                  {['Upload Documents', 'Application Fee', 'Contact Support'].map((title, index) => (
                    <div key={index} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {title === 'Upload Documents' && 'Submit your transcripts, essays, and letters of recommendation.'}
                          {title === 'Application Fee' && 'Complete your application by paying the required fee.'}
                          {title === 'Contact Support' && 'Need help? Our admissions team is here to assist you.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;