export interface ChatMessage {
  id: string
  user: string
  content: string
  timestamp: Date
}

export interface NotebookData {
  summary: string
  decisions: string[]
  todos: string[]
  codeSnippets: CodeSnippet[]
  tags: string[]
}

export interface CodeSnippet {
  language: string
  code: string
  filename?: string
  description?: string
}

export interface ConversationWithNotebook {
  id: string
  title: string
  platform: string
  channelName: string
  originalUrl: string | null
  createdAt: Date
  notebook: {
    id: string
    summary: string
    decisions: string | null
    todos: string | null
    codeSnippets: string | null
    tags: string | null
  } | null
}