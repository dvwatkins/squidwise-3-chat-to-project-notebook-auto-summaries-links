import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Welcome to the Chat-to-Project Notebook</h2>
      <p>This app automatically converts chat conversations into structured summaries.</p>
      <ul className="mt-4">
        <li><Link href="/notebook" className="text-blue-600">View Notebook</Link></li>
        <li><Link href="/features" className="text-blue-600">Explore Features</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;