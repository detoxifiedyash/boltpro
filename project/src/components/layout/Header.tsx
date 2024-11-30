import React from 'react';
import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </a>
                <a href="/application" className="text-indigo-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Application
                </a>
                <a href="/status" className="text-indigo-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Status
                </a>
                <a href="/documents" className="text-indigo-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Documents
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-800">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}