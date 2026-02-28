import React, { useState } from 'react';
import { MOCK_TRANSACTIONS } from '../mockData';
import { Search, ChevronDown, Plus, Receipt, Utensils, Bus, Package, Megaphone } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, any> = {
  'Entrée': Receipt,
  'Nourriture': Utensils,
  'Fournitures': Package,
  'Transport': Bus,
  'Communication': Megaphone,
};

export const Transactions: React.FC<{ onAdd: () => void }> = ({ onAdd }) => {
  const [search, setSearch] = useState('');

  const filteredTransactions = MOCK_TRANSACTIONS.filter(tx => 
    tx.title.toLowerCase().includes(search.toLowerCase()) || 
    tx.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden max-w-md mx-auto w-full">
      {/* Search Bar */}
      <div className="px-4 py-3 shrink-0">
        <div className="relative flex items-center rounded-xl bg-slate-200/50 dark:bg-slate-800/50 h-12 overflow-hidden">
          <Search className="ml-4 text-slate-500 dark:text-slate-400" size={20} />
          <input
            className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white px-3 text-base"
            placeholder="Rechercher une transaction"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 p-3 px-4 overflow-x-auto no-scrollbar shrink-0">
        {['Date', 'Membre', 'Catégorie'].map(filter => (
          <button key={filter} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 px-4 hover:bg-primary/10 transition-colors">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{filter}</span>
            <ChevronDown size={14} />
          </button>
        ))}
      </div>

      {/* Transaction List */}
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <div className="space-y-6">
          {['Aujourd\'hui', 'Hier', '15 Octobre'].map(dateGroup => {
            const groupTxs = filteredTransactions.filter(tx => tx.date === dateGroup);
            if (groupTxs.length === 0) return null;

            return (
              <div key={dateGroup}>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">{dateGroup}</p>
                <div className="space-y-4">
                  {groupTxs.map(tx => {
                    const Icon = iconMap[tx.category] || Receipt;
                    const isIncome = tx.type === 'REVENU';
                    return (
                      <motion.div
                        key={tx.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between p-1"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`size-12 rounded-xl flex items-center justify-center ${
                            isIncome ? 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400' : 
                            tx.category === 'Nourriture' ? 'bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400' :
                            tx.category === 'Transport' ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' :
                            'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400'
                          }`}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <h4 className="text-slate-900 dark:text-white font-semibold">{tx.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">{tx.category} • {tx.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${isIncome ? 'text-emerald-500' : 'text-red-500'}`}>
                            {isIncome ? '+' : '-'} {Math.abs(tx.amount).toFixed(2)} €
                          </p>
                          <p className="text-slate-400 dark:text-slate-500 text-xs font-medium">
                            {tx.member ? `Par ${tx.member}` : `Via ${tx.source}`}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={onAdd}
        className="fixed bottom-24 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-transform z-10"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};
