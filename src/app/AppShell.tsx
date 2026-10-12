import { Outlet } from 'react-router'

export function AppShell() {
  return (
    <div className="app min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <header className="border-b border-slate-200 dark:border-slate-800">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Portfolio</div>
          <div className="flex gap-6">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/work" className="hover:text-blue-500">Work</a>
            <a href="/about" className="hover:text-blue-500">About</a>
            <a href="/contact" className="hover:text-blue-500">Contact</a>
          </div>
        </nav>
      </header>
      <main id="main" className="app-main">
        <div className="app-main__inner">
          <Outlet />
        </div>
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 dark:text-slate-400">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
