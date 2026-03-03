import React from 'react';

const NotebookPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Notebook</h2>
      <p className="mt-2">Here you can find all your chat summaries organized by project and topic.</p>
      <div className="mt-4">
        <h3 className="font-bold">Recent Summaries:</h3>
        <ul className="list-disc list-inside">
          <li>Summary of Project Alpha</li>
          <li>Summary of Project Beta</li>
          <li>Summary of Project Gamma</li>
        </ul>
      </div>
    </div>
  );
};

export default NotebookPage;