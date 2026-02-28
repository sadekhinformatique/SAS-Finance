import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { MOCK_TRANSACTIONS, MOCK_MEMBERS, MOCK_AUDIT_LOGS, PENDING_APPROVALS } from '../mockData';
import { Transaction, Member, AuditLog } from '../types';

export const financeService = {
  async getTransactions(): Promise<Transaction[]> {
    if (!isSupabaseConfigured()) {
      console.warn('Supabase not configured, using mock data');
      return MOCK_TRANSACTIONS;
    }

    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.warn('Error fetching transactions from Supabase (maybe table missing?):', error.message);
      return MOCK_TRANSACTIONS;
    }

    return data as Transaction[];
  },

  async getMembers(): Promise<Member[]> {
    if (!isSupabaseConfigured()) {
      return MOCK_MEMBERS;
    }

    const { data, error } = await supabase
      .from('members')
      .select('*');

    if (error) {
      console.error('Error fetching members:', error);
      return MOCK_MEMBERS;
    }

    return data as Member[];
  },

  async getPendingApprovals(): Promise<Transaction[]> {
    if (!isSupabaseConfigured()) {
      return PENDING_APPROVALS;
    }

    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('status', 'En attente');

    if (error) {
      console.error('Error fetching approvals:', error);
      return PENDING_APPROVALS;
    }

    return data as Transaction[];
  },

  async createTransaction(transaction: Partial<Transaction>) {
    if (!isSupabaseConfigured()) {
      console.log('Mock: Transaction created', transaction);
      return { data: transaction, error: null };
    }

    return await supabase
      .from('transactions')
      .insert([transaction]);
  }
};
