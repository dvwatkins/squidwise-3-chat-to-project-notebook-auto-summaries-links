export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Chat-to-Project Notebook (Auto-Summaries + Links)
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          A lightweight “notebook” that automatically converts each chat into a structured page: summary, decisions, TODOs, code snippets, and links to related files/commits. Users browse the notebook instead of raw chat logs and can reopen the original thread from any note.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Built with SquidWise • One-click deploy
        </p>
      </div>
    </main>
  );
}
