import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">SafeBot</h1>
          <p className="mt-4">Application de test - version simplifiée</p>
        </div>
      </main>
    </div>
  );
}

export default App;
