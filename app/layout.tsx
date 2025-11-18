import './globals.css'
import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Blog Palmeiras',
  description: 'Notícias e análises sobre o Palmeiras'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="bg-green-800 text-white">
          <div className="container mx-auto p-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">Blog Palmeiras</Link>
            <nav className="space-x-4">
              <Link href="/noticias">Notícias</Link>
              <Link href="/posts">Artigos</Link>
              <Link href="/ia">IA</Link>
              <Link href="/admin" className="ml-4 bg-white text-green-800 px-3 py-1 rounded">Admin</Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-6">
          {children}
        </main>

        <footer className="bg-slate-100 mt-12">
          <div className="container mx-auto p-6 text-sm text-slate-600">
            © {new Date().getFullYear()} Blog Palmeiras — Fontes: GE, UOL, onossopalestra, etc.
          </div>
        </footer>
      </body>
    </html>
  )
}
