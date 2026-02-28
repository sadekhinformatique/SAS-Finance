
export type Role = 'TRÉSORIER' | 'MEMBRE' | 'PRÉSIDENTE' | 'ADMIN';

export interface Member {
  id: string;
  name: string;
  role: Role;
  avatar?: string;
}

export type TransactionType = 'REVENU' | 'DÉPENSE' | 'VIREMENT';
export type Category = 'Nourriture' | 'Transport' | 'Fournitures' | 'Communication' | 'Entrée' | 'Événement' | 'Autre';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  time: string;
  type: TransactionType;
  category: Category;
  member?: string;
  source?: string;
  description?: string;
  receiptUrl?: string;
  status?: 'En attente' | 'Approuvée' | 'Rejetée';
}

export interface AuditLog {
  id: string;
  user: string;
  action: string;
  target?: string;
  timestamp: string;
  type: 'success' | 'info' | 'warning' | 'error';
}
