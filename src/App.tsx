import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Transactions } from './components/Transactions';
import { Members } from './components/Members';
import { Approvals } from './components/Approvals';
import { Settings } from './components/Settings';
import { Reports } from './components/Reports';
import { AddExpense } from './components/AddExpense';
import { AddIncome } from './components/AddIncome';
import { BottomNav } from './components/BottomNav';
import { Header } from './components/Header';

type Screen = 'login' | 'dashboard' | 'transactions' | 'members' | 'approvals' | 'reports' | 'settings' | 'addExpense' | 'addIncome';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (userData: any) => {
    setUser(userData);
    // Check if user is admin (you can set this in Supabase user metadata or a profiles table)
    const adminStatus = userData.app_metadata?.role === 'admin' || userData.user_metadata?.role === 'admin';
    setIsAdmin(adminStatus);
    setCurrentScreen('dashboard');
  };

  const handleTabChange = (tab: string) => {
    setCurrentScreen(tab as Screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'dashboard':
        return <Dashboard isAdmin={isAdmin} onAction={(action) => setCurrentScreen(action as Screen)} />;
      case 'transactions':
        return <Transactions onAdd={() => setCurrentScreen('addExpense')} />;
      case 'members':
        return <Members />;
      case 'approvals':
        return <Approvals />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings isAdmin={isAdmin} />;
      case 'addExpense':
        return <AddExpense onBack={() => setCurrentScreen('transactions')} />;
      case 'addIncome':
        return <AddIncome onBack={() => setCurrentScreen('dashboard')} />;
      default:
        return <Dashboard isAdmin={isAdmin} onAction={(action) => setCurrentScreen(action as Screen)} />;
    }
  };

  const getTitle = () => {
    switch (currentScreen) {
      case 'dashboard': return 'SAS Dashboard';
      case 'transactions': return 'Historique SAS';
      case 'members': return 'Gestion des membres';
      case 'approvals': return 'Approbations SAS';
      case 'reports': return 'Export de Rapports';
      case 'settings': return 'Paramètres & Audit';
      case 'addExpense': return 'Nouvelle dépense';
      case 'addIncome': return 'Nouvelle Entrée';
      default: return '';
    }
  };

  const showHeader = user !== null && currentScreen !== 'login';
  const showBottomNav = user !== null && !['addExpense', 'addIncome'].includes(currentScreen);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark max-w-md mx-auto shadow-2xl border-x border-slate-200 dark:border-slate-800 relative overflow-hidden">
      {showHeader && (
        <Header 
          title={getTitle()} 
          onBack={['addExpense', 'addIncome'].includes(currentScreen) ? () => setCurrentScreen('dashboard') : undefined}
          rightAction={currentScreen === 'dashboard' ? 'info' : 'more'}
        />
      )}

      <main className="flex-1 flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {showBottomNav && (
        <BottomNav activeTab={currentScreen} onTabChange={handleTabChange} />
      )}
    </div>
  );
}
