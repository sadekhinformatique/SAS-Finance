import React, { useState } from 'react';
import { Landmark, BadgeCheck, Lock, Fingerprint, ShieldCheck, LogIn, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { supabase } from '../lib/supabase';

export const Login: React.FC<{ onLogin: (user: any) => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!supabase) {
      setError("La base de données n'est pas configurée. Veuillez ajouter les clés API dans les Secrets.");
      setLoading(false);
      return;
    }

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;
      
      if (data.user) {
        onLogin(data.user);
      }
    } catch (err: any) {
      setError(err.message || 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto w-full bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="size-12 flex items-center justify-start">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">Connexion SAS</h2>
      </div>

      <div className="px-6 pt-8">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-xl shadow-primary/20"
          >
            <Landmark className="text-white" size={48} />
          </motion.div>
          <h2 className="tracking-tight text-[28px] font-bold leading-tight text-center pb-2">Bienvenue sur SAS Finance</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-8 text-center max-w-[300px]">
            Connectez-vous avec votre compte association.
          </p>
        </div>
      </div>

      <form onSubmit={handleSignIn} className="flex flex-col gap-6 px-6 py-3 w-full">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}
        <label className="flex flex-col w-full">
          <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-normal pb-2 ml-1">Email</p>
          <div className="relative">
            <BadgeCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              className="flex w-full rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal transition-all"
              placeholder="votre@email.com"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </label>
        <label className="flex flex-col w-full">
          <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-normal pb-2 ml-1">Mot de passe</p>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              className="flex w-full rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal transition-all"
              placeholder="••••••••"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </label>
        <div className="flex justify-end -mt-2">
          <button type="button" className="text-primary text-sm font-medium hover:underline">Mot de passe oublié ?</button>
        </div>
        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 mt-4 active:scale-[0.98]"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <span>Se connecter</span>
              <LogIn size={20} />
            </>
          )}
        </button>
      </form>

      <div className="mt-auto pb-10 px-6 text-center">
        <p className="text-slate-500 dark:text-slate-500 text-xs">
          Pas encore de compte ? Contactez l'administrateur.
        </p>
        <div className="mt-6 flex justify-center gap-8">
          <div className="flex flex-col items-center gap-1 opacity-60">
            <Fingerprint className="text-slate-400" size={24} />
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Biométrie</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-60">
            <ShieldCheck className="text-slate-400" size={24} />
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Sécurisé</span>
          </div>
        </div>
      </div>
    </div>
  );
};
