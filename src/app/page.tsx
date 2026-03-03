import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome to the Chat-to-Project Notebook</h2>
      <p>Quickly access your chat summaries and project notes.</p>
      <div className="space-y-2">
        <Link href="/notebooks" className="text-blue-500 underline">
          View Notebooks
        </Link>
        <Link href="/search" className="text-blue-500 underline">
          Search Summaries
        </Link>
        <Link href="/todos" className="text-blue-500 underline">
          View TODO List
        </Link>
      </div>
    </div>
  );
};

export default HomePage;