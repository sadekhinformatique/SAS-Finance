import React from 'react';
import { FileDown, Calendar, FileText, Shield, Info, FileSpreadsheet } from 'lucide-react';
import { motion } from 'motion/react';

export const Reports: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto pb-24 max-w-md mx-auto w-full">
      {/* Hero / Preview Section */}
      <div className="px-4 py-6">
        <div className="relative w-full aspect-[16/9] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-xl">
          <div className="absolute inset-0 flex flex-col p-6 bg-white dark:bg-slate-900">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="text-primary" size={32} />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Rapport Officiel</p>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">SAS Étudiant</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-slate-100 dark:bg-slate-800 rounded"></div>
              <div className="h-3 w-1/2 bg-slate-50 dark:bg-slate-800/50 rounded"></div>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <div className="h-3 w-16 bg-slate-100 dark:bg-slate-800 rounded"></div>
              <div className="h-3 w-16 bg-slate-100 dark:bg-slate-800 rounded"></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/20 to-transparent pointer-events-none"></div>
        </div>
        <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400 italic">Aperçu de l'en-tête du document</p>
      </div>

      {/* Configuration Section */}
      <div className="px-4 space-y-6">
        <section>
          <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-3 flex items-center gap-2">
            <Calendar className="text-primary" size={20} />
            Période du rapport
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-start p-3 rounded-xl border-2 border-primary bg-primary/5 dark:bg-primary/10">
              <span className="text-[10px] font-bold uppercase text-primary/70">Début</span>
              <span className="text-sm font-semibold">01 Jan. 2024</span>
            </button>
            <button className="flex flex-col items-start p-3 rounded-xl border-2 border-transparent bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <span className="text-[10px] font-bold uppercase text-slate-400">Fin</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">31 Mars 2024</span>
            </button>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-medium whitespace-nowrap">Ce mois</span>
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold whitespace-nowrap">Trimestre actuel</span>
            <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-medium whitespace-nowrap">Année civile</span>
          </div>
        </section>

        <section>
          <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-3 flex items-center gap-2">
            <FileText className="text-primary" size={20} />
            Format d'export
          </h3>
          <div className="space-y-2">
            <label className="flex items-center justify-between p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-transparent hover:border-primary/30 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Document PDF</p>
                  <p className="text-xs text-slate-500">Idéal pour impression et archivage</p>
                </div>
              </div>
              <input type="radio" name="format" defaultChecked className="text-primary focus:ring-primary h-5 w-5 bg-transparent border-slate-300" />
            </label>
            <label className="flex items-center justify-between p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-transparent hover:border-primary/30 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <FileSpreadsheet size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Feuille Excel (XLSX)</p>
                  <p className="text-xs text-slate-500">Pour analyse approfondie des données</p>
                </div>
              </div>
              <input type="radio" name="format" className="text-primary focus:ring-primary h-5 w-5 bg-transparent border-slate-300" />
            </label>
          </div>
        </section>

        <section className="bg-primary/5 dark:bg-primary/10 p-4 rounded-xl border border-primary/20">
          <div className="flex gap-3">
            <Shield className="text-primary shrink-0" size={20} />
            <div>
              <p className="text-xs font-bold text-primary uppercase">Confidentialité</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Ce rapport contient des données sensibles. En l'exportant, vous engagez votre responsabilité en tant que membre du bureau (SAS).</p>
            </div>
          </div>
        </section>
      </div>

      {/* Export Button */}
      <div className="p-4 mt-4">
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
          <FileDown size={20} />
          Exporter le rapport
        </button>
      </div>
    </div>
  );
};
