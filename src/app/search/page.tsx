import React, { useState } from 'react';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implement search logic with Fuse.js here
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Search Summaries</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchPage;