import React from 'react';
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ChakraProvider>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl">Chat-to-Project Notebook</h1>
        </header>
        <main className="flex-grow p-4">{children}</main>
        <footer className="bg-gray-200 text-center p-4">
          © {new Date().getFullYear()} Chat-to-Project Notebook
        </footer>
      </div>
    </ChakraProvider>
  );
};

export default Layout;