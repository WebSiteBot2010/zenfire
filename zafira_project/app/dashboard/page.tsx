export default function DashboardPage() {
  const servers = [
    { id: '1', name: 'Community Italiana', members: '1.4k', role: 'Amministratore' },
    { id: '2', name: 'Gaming Lounge', members: '520', role: 'Moderatore' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 border-b border-slate-900 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-extrabold tracking-tight">Dashboard</h2>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                Online
              </span>
            </div>
            <p className="text-slate-400 text-sm mt-1">Seleziona un server per configurare i moduli di sicurezza e i ticket.</p>
          </div>
          <a href="/" className="text-xs text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl transition font-medium">
            Esci dalla Dashboard
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map((server) => (
            <div key={server.id} className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <div className="w-12 h-12 bg-indigo-600/20 text-indigo-400 rounded-2xl mb-4 flex items-center justify-center font-bold text-lg border border-indigo-500/20">
                  {server.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold mb-1">{server.name}</h3>
                <p className="text-xs text-slate-500 font-medium">Membri: {server.members} • Ruolo: {server.role}</p>
              </div>
              <a 
                href={`/dashboard/${server.id}`}
                className="mt-8 w-full text-center bg-indigo-600/10 hover:bg-indigo-600 text-indigo-300 hover:text-white py-3 rounded-2xl transition text-sm font-semibold border border-indigo-500/20 hover:border-transparent block"
              >
                Configura Moduli
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}