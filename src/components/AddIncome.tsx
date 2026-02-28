import React from 'react';
import { Save, Info, Euro, User, FileText, Bell } from 'lucide-react';
import { motion } from 'motion/react';

export const AddIncome: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="flex-1 overflow-y-auto pb-24 max-w-md mx-auto w-full">
      <div className="px-5 py-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Enregistrer un Revenu</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Assurez la transparence financière de la SAS.</p>
        </div>

        <div className="space-y-5">
          {/* Type Selection */}
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Type d'entrée</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                <FileText size={20} />
              </div>
              <select defaultValue="" className="w-full h-14 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all outline-none">
                <option disabled value="">Choisir un type</option>
                <option value="cotisation">Cotisation membre</option>
                <option value="don">Don ponctuel</option>
                <option value="sponsoring">Sponsoring / Partenariat</option>
                <option value="vente">Vente de goodies / tickets</option>
              </select>
            </div>
          </div>

          {/* Amount Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Montant</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                <Euro size={20} />
              </div>
              <input
                className="w-full h-14 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-lg font-medium"
                placeholder="0.00"
                type="number"
              />
            </div>
          </div>

          {/* Source/Member Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Source / Membre</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                <User size={20} />
              </div>
              <input
                className="w-full h-14 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                placeholder="Ex: Jean Dupont ou Sponsor SAS"
                type="text"
              />
            </div>
          </div>

          {/* Comment Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Commentaire (Optionnel)</label>
            <div className="relative">
              <div className="absolute left-4 top-4 text-primary">
                <FileText size={20} />
              </div>
              <textarea
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                placeholder="Détails supplémentaires..."
                rows={3}
              ></textarea>
            </div>
          </div>

          {/* Toggle Switch Notification */}
          <div className="flex items-center justify-between p-4 bg-primary/10 dark:bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bell className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm">Notifier les membres</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Envoi d'un récapitulatif via app</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
            <Save size={20} />
            Enregistrer l'entrée
          </button>
          <p className="text-center text-[10px] mt-4 text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1 uppercase tracking-widest">
            <ShieldCheck size={12} />
            Sécurisé par SAS Finance
          </p>
        </div>
      </div>
    </div>
  );
};

const ShieldCheck = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
