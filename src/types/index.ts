export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface NotebookEntry {
  id: string;
  title: string;
  summary: string;
  decisions: string[];
  todos: string[];
  codeSnippets: string[];
  fileLinks: string[];
  createdAt: Date;
  updatedAt: Date;
}