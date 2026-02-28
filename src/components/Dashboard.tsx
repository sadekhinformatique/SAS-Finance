import React, { useEffect, useState } from 'react';
import { financeService } from '../services/financeService';
import { Transaction } from '../types';
import { isSupabaseConfigured } from '../lib/supabase';
import { TrendingUp, AlertTriangle, Plus, Minus, ArrowLeftRight, Receipt, Wallet, ShoppingCart, Utensils, Megaphone, HeartHandshake, Database } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, any> = {
  'Entrée': Wallet,
  'Nourriture': Utensils,
  'Fournitures': ShoppingCart,
  'Transport': ShoppingCart,
  'Communication': Megaphone,
  'Événement': HeartHandshake,
};

export const Dashboard: React.FC<{ isAdmin?: boolean; onAction: (action: string) => void }> = ({ isAdmin, onAction }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await financeService.getTransactions();
      setTransactions(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto pb-24 max-w-md mx-auto w-full">
      {/* Balance Section */}
      <section className="px-4 py-8 text-center bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="absolute top-2 right-4">
          {isSupabaseConfigured() ? (
            <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <Database size={10} />
              <span>LIVE DB</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-[10px] text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full">
              <Database size={10} />
              <span>MOCK DATA</span>
            </div>
          )}
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Solde actuel</p>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">€4,250.00</h1>
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
          <TrendingUp size={14} />
          <span>+12.5% ce mois</span>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Alertes</h3>
          <button className="text-primary text-sm font-medium">Tout voir</button>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <AlertTriangle className="text-amber-500 mt-0.5 shrink-0" size={20} />
            <div>
              <p className="font-semibold text-sm">Budget Soirée Intégration</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Dépassement de 15% prévu selon les factures en attente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 mb-8 grid grid-cols-4 gap-2">
        <button onClick={() => onAction('addIncome')} className="flex flex-col items-center gap-2 group">
          <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-active:scale-95 transition-transform">
            <Plus size={24} />
          </div>
          <span className="text-[10px] font-medium text-center">Revenu</span>
        </button>
        <button onClick={() => onAction('addExpense')} className="flex flex-col items-center gap-2 group">
          <div className="size-12 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-active:scale-95 transition-transform">
            <Minus size={24} />
          </div>
          <span className="text-[10px] font-medium text-center">Dépense</span>
        </button>
        <button className="flex flex-col items-center gap-2 group">
          <div className="size-12 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-active:scale-95 transition-transform">
            <ArrowLeftRight size={24} />
          </div>
          <span className="text-[10px] font-medium text-center">Virement</span>
        </button>
        <button className="flex flex-col items-center gap-2 group">
          <div className="size-12 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-active:scale-95 transition-transform">
            <Receipt size={24} />
          </div>
          <span className="text-[10px] font-medium text-center">Factures</span>
        </button>
      </section>

      {/* Transactions Section */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Transactions récentes</h3>
          <button className="text-primary text-sm font-medium">Voir tout</button>
        </div>
        <div className="space-y-1">
          {loading ? (
            <div className="p-8 text-center text-slate-400">Chargement...</div>
          ) : transactions.slice(0, 5).map((tx) => {
            const Icon = iconMap[tx.category] || Receipt;
            return (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`size-10 rounded-full flex items-center justify-center ${tx.type === 'REVENU' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{tx.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{tx.date}, {tx.time}</p>
                  </div>
                </div>
                <p className={`font-bold text-sm ${tx.type === 'REVENU' ? 'text-emerald-500' : 'text-slate-900 dark:text-slate-100'}`}>
                  {tx.type === 'REVENU' ? '+' : '-'} €{Math.abs(tx.amount).toFixed(2)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
