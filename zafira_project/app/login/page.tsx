export default function StaffLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-950">
      <div className="max-w-md w-full bg-slate-900/50 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-xl text-center">
        <div className="w-14 h-14 bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 rounded-2xl mx-auto flex items-center justify-center text-2xl mb-6 shadow-inner">
          🛡️
        </div>
        <h2 className="text-2xl font-bold mb-2">Accesso Staff</h2>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          Autenticati con le credenziali autorizzate o tramite Discord per accedere al pannello di controllo dello staff.
        </p>
        <button 
          onClick={() => alert('Connessione OAuth2 Discord...')}
          className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-3.5 rounded-2xl font-semibold transition flex items-center justify-center gap-3 shadow-lg shadow-[#5865F2]/20"
        >
          <span>Accedi con Discord</span>
        </button>
        <div className="mt-8 border-t border-slate-800/60 pt-6">
          <a href="/" className="text-xs text-slate-500 hover:text-slate-400 transition font-medium">
            ← Torna alla Home principale
          </a>
        </div>
      </div>
    </div>
  );
}