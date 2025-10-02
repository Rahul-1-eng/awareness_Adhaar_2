import React, { useState } from 'react';
import HomeTab from './components/HomeTab';
import LearnTab from './components/LearnTab';
import ScholarshipTab from './components/ScholarshipTab';
import CommunityTab from './components/CommunityTab';
import Chatbot from './components/Chatbot';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md sticky top-0 z-40 p-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">DBT Scholarship Portal</h1>
      </header>
      <main className="container mx-auto px-4 py-8 pb-24">
        {activeTab === 'home' && <HomeTab setActiveTab={setActiveTab} />}
        {activeTab === 'learn' && <LearnTab />}
        {activeTab === 'scholarship' && <ScholarshipTab />}
        {activeTab === 'community' && <CommunityTab />}
      </main>
      <Chatbot />
    </div>
  );
}
