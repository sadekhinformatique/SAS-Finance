import { createClient } from '@supabase/supabase-js';

// These variables should be defined in your environment (.env)
// For client-side Vite apps, they must start with VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper to check if Supabase is properly configured
 */
export const isSupabaseConfigured = () => {
  return supabaseUrl.length > 0 && supabaseAnonKey.length > 0;
};
