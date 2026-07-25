export default function MainSite() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="border-b border-slate-900 px-8 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
        <h1 className="font-extrabold text-xl text-indigo-400 tracking-wider">ZenFire</h1>
        <div className="space-x-4">
          <a href="/login" className="text-sm font-medium text-slate-400 hover:text-white transition">Login Staff</a>
          <a href="/dashboard" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-semibold transition shadow-lg shadow-indigo-600/20">Dashboard</a>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full mb-6 font-semibold">
          Protezione Avanzata Discord
        </span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Gestisci il tuo server con <span className="text-indigo-500">ZenFire</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Moduli di sicurezza intelligenti, sistema di ticket avanzato, registri di moderazione e una dashboard dedicata per il tuo staff.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a 
            href="/dashboard" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-xl shadow-indigo-600/20 text-center"
          >
            Accedi alla Dashboard
          </a>
          <a 
            href="/login" 
            className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 px-8 py-4 rounded-2xl font-semibold transition text-center"
          >
            Area Staff (Login)
          </a>
        </div>
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} ZenFire Bot. Tutti i diritti riservati.
      </footer>
    </div>
  );
}