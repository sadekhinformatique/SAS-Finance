import React from 'react';
import { MOCK_MEMBERS } from '../mockData';
import { Search, UserPlus, Edit2, ShieldCheck, Wallet, User } from 'lucide-react';
import { motion } from 'motion/react';

export const Members: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden max-w-md mx-auto w-full">
      {/* Search and Action Area */}
      <div className="px-4 py-4 space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="text-slate-400 dark:text-slate-500" size={20} />
          </div>
          <input
            className="block w-full pl-11 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-primary focus:outline-none text-sm"
            placeholder="Rechercher un membre ou un ID..."
            type="text"
          />
        </div>
        <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3.5 px-4 rounded-xl font-bold transition-colors shadow-lg shadow-primary/20">
          <UserPlus size={20} />
          <span>Ajouter un membre</span>
        </button>
      </div>

      {/* List Header */}
      <div className="px-4 pt-2 pb-2">
        <h3 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">Membres de la SAS ({MOCK_MEMBERS.length})</h3>
      </div>

      {/* Member List */}
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <div className="space-y-3">
          {MOCK_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800"
            >
              <div className={`size-12 rounded-full flex items-center justify-center overflow-hidden ${
                member.role === 'TRÉSORIER' ? 'bg-primary/10 text-primary' : 
                member.role === 'PRÉSIDENTE' ? 'bg-emerald-500/10 text-emerald-500' : 
                'bg-slate-200 dark:bg-slate-700'
              }`}>
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} className="size-full object-cover" />
                ) : member.role === 'TRÉSORIER' ? (
                  <Wallet size={24} />
                ) : member.role === 'PRÉSIDENTE' ? (
                  <ShieldCheck size={24} />
                ) : (
                  <User size={24} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-slate-900 dark:text-slate-100 font-semibold truncate">{member.name}</p>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                    member.role === 'TRÉSORIER' ? 'bg-primary/20 text-primary' : 
                    member.role === 'PRÉSIDENTE' ? 'bg-emerald-500/20 text-emerald-500' : 
                    'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}>
                    {member.role}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs">ID: {member.id}</p>
              </div>
              <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                <Edit2 size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
