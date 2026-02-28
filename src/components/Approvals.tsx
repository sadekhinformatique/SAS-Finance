import React from 'react';
import { PENDING_APPROVALS } from '../mockData';
import { Check, X, ZoomIn } from 'lucide-react';
import { motion } from 'motion/react';

export const Approvals: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden max-w-md mx-auto w-full">
      {/* Tabs */}
      <nav className="flex gap-2 px-4 border-b border-slate-200 dark:border-slate-800">
        <button className="flex-1 text-center py-3 px-1 border-b-2 border-primary text-primary font-semibold text-sm">
          En attente
        </button>
        <button className="flex-1 text-center py-3 px-1 border-b-2 border-transparent text-slate-500 dark:text-slate-400 font-medium text-sm hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
          Approuvées
        </button>
        <button className="flex-1 text-center py-3 px-1 border-b-2 border-transparent text-slate-500 dark:text-slate-400 font-medium text-sm hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
          Rejetées
        </button>
      </nav>

      <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Demandes en attente ({PENDING_APPROVALS.length})
          </h2>
        </div>

        {PENDING_APPROVALS.map((req, idx) => (
          <motion.div
            key={req.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
          >
            <details className="group" open={idx === 0}>
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {req.member?.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">{req.member}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{req.date} • {req.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-lg">{Math.abs(req.amount).toFixed(2)}€</p>
                </div>
              </summary>
              <div className="px-4 pb-4 space-y-4">
                <div className="h-px bg-slate-200 dark:bg-slate-800 w-full"></div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tight">Description</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{req.description}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tight">Justificatif</p>
                  <div className="aspect-video w-full rounded-lg overflow-hidden relative border border-slate-200 dark:border-slate-700">
                    <img alt="Receipt" className="w-full h-full object-cover" src={req.receiptUrl} />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <ZoomIn className="text-white" size={32} />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950/30 text-slate-900 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-400 rounded-lg font-bold transition-all border border-transparent hover:border-red-200 dark:hover:border-red-900/50">
                    <X size={20} />
                    Rejeter
                  </button>
                  <button className="flex-2 grow-[2] flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold shadow-lg shadow-primary/20 transition-all">
                    <Check size={20} />
                    Approuver
                  </button>
                </div>
              </div>
            </details>
          </motion.div>
        ))}
      </main>
    </div>
  );
};
