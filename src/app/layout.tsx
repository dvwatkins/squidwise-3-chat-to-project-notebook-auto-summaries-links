import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Chat-to-Project Notebook',
  description: 'Automatically convert chat conversations into structured summaries.'
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-blue-600 text-white">
          <h1 className="text-2xl">Chat-to-Project Notebook</h1>
        </header>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;