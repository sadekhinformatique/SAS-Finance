import React from 'react';
import { MOCK_AUDIT_LOGS } from '../mockData';
import { User, Bell, HelpCircle, ChevronRight, CheckCircle, Edit2, AlertTriangle, LogOut } from 'lucide-react';
import { motion } from 'motion/react';

export const Settings: React.FC<{ isAdmin?: boolean }> = ({ isAdmin }) => {
  return (
    <div className="flex-1 overflow-y-auto pb-24 max-w-md mx-auto w-full">
      {/* Profile Section */}
      <div className="p-4">
        <div className="flex w-full flex-col gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex gap-4 items-center">
            <div className="rounded-full h-16 w-16 border-2 border-primary overflow-hidden">
              <img src="https://picsum.photos/seed/jean/100/100" alt="Profile" className="size-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight">Jean Dupont</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{isAdmin ? 'Administrateur SAS' : 'Membre SAS'}</p>
              <p className="text-primary text-xs font-mono mt-1">ID: SAS-45892</p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Groups */}
      <div className="px-4 py-2">
        <h3 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider pb-3 pt-4">Général</h3>
        <div className="flex flex-col gap-1">
          {[
            { label: 'Mon profil', icon: User },
            { label: 'Notifications', icon: Bell },
            { label: 'Aide & Support', icon: HelpCircle },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-4 bg-white dark:bg-slate-900/40 p-3 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
                  <Icon size={20} />
                </div>
                <p className="text-slate-900 dark:text-slate-100 text-base font-medium flex-1">{item.label}</p>
                <ChevronRight className="text-slate-400" size={20} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Audit Log Section */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between pb-3 pt-6">
          <h3 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Journal d'Audit</h3>
          <button className="text-primary text-xs font-semibold">Voir tout</button>
        </div>
        <div className="bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          {MOCK_AUDIT_LOGS.map((log, idx) => {
            const Icon = log.type === 'success' ? CheckCircle : log.type === 'info' ? Edit2 : AlertTriangle;
            const colorClass = log.type === 'success' ? 'bg-green-500/10 text-green-500' : log.type === 'info' ? 'bg-primary/10 text-primary' : 'bg-amber-500/10 text-amber-500';
            
            return (
              <div key={log.id} className={`flex items-start gap-3 p-4 ${idx !== MOCK_AUDIT_LOGS.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}`}>
                <div className={`${colorClass} p-2 rounded-full shrink-0`}>
                  <Icon size={14} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-slate-900 dark:text-slate-100 leading-tight">
                    <span className="font-bold">{log.user}</span> {log.action} <span className="text-primary font-medium">{log.target}</span>
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-tight">{log.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-4 pt-10 pb-6">
        <button className="w-full flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 font-bold py-4 rounded-xl transition-colors border border-red-500/20">
          <LogOut size={20} />
          Se déconnecter
        </button>
        <p className="text-center text-slate-400 dark:text-slate-600 text-[10px] mt-4 uppercase tracking-[0.2em]">SAS Financial v2.4.1</p>
      </div>
    </div>
  );
};
