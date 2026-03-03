import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Welcome to the Chat-to-Project Notebook</h2>
      <p className="mt-2">Effortlessly convert chat conversations into organized summaries.</p>
      <h3 className="mt-4 font-bold">Features:</h3>
      <ul className="list-disc list-inside">
        <li><Link href="/notebook" className="text-blue-600">Browse organized notebook pages</Link></li>
        <li>Search across all chat summaries</li>
        <li>View extracted code snippets</li>
        <li>Manage TODOs and action items</li>
      </ul>
    </div>
  );
};

export default HomePage;