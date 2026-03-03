import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Chat-to-Project Notebook',
  description: 'Automatically convert chat conversations into structured summaries.'
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="p-4 bg-blue-600 text-white text-center">
          <h1 className="text-2xl font-bold">Chat-to-Project Notebook</h1>
        </header>
        <main className="p-4">
          {children}
        </main>
        <footer className="p-4 text-center">
          <p>&copy; 2023 Chat-to-Project Notebook</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;