import React from 'react';
import { Camera, Send, Info, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

export const AddExpense: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="flex-1 overflow-y-auto pb-24 max-w-md mx-auto w-full">
      <div className="px-5 pt-6 space-y-6">
        {/* Summary Card */}
        <div className="bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-xl p-4 flex items-center gap-4">
          <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white">
            <Wallet size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Budget Association</p>
            <p className="text-xl font-bold text-primary">SAS - Exercice 2024</p>
          </div>
        </div>

        {/* Amount Input */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold px-1">Montant</label>
          <div className="relative">
            <input
              className="flex w-full rounded-xl text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary h-14 pl-4 pr-12 text-lg font-bold placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none"
              placeholder="0.00"
              type="number"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-lg">€</span>
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold px-1">Catégorie</label>
          <select defaultValue="" className="flex w-full rounded-xl text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary h-14 px-4 text-base font-medium outline-none appearance-none">
            <option disabled value="">Choisir une catégorie</option>
            <option value="transport">Transport (Train, Uber, Essence)</option>
            <option value="food">Nourriture & Boissons</option>
            <option value="supplies">Fournitures & Matériel</option>
            <option value="events">Événementiel</option>
            <option value="other">Autre</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold px-1">Description</label>
          <textarea
            className="flex w-full rounded-xl text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary min-h-[120px] p-4 text-base placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none outline-none"
            placeholder="Décrivez l'objet de la dépense (ex: Pizza pour AG)"
          ></textarea>
        </div>

        {/* Receipt Upload Section */}
        <div className="flex flex-col gap-3">
          <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold px-1">Justificatif</label>
          <div className="flex flex-col items-center justify-center w-full min-h-[160px] border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group cursor-pointer">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Camera className="text-primary mb-3" size={40} />
              <p className="mb-1 text-sm text-slate-700 dark:text-slate-300 font-semibold text-center px-4">Ajouter un justificatif</p>
              <p className="text-xs text-slate-500 dark:text-slate-500">PNG, JPG ou PDF (max. 5MB)</p>
            </div>
          </div>
        </div>

        {/* Information Tip */}
        <div className="flex gap-3 items-start bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl">
          <Info className="text-slate-500 shrink-0" size={20} />
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Toutes les dépenses soumises sont examinées par le trésorier de l'association. Assurez-vous que le justificatif est lisible.
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
            <span>Soumettre la demande</span>
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
