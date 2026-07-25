import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZenFire Bot',
  description: 'Sicurezza e gestione avanzata per Discord',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}