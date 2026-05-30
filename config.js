/**
 * GIC — Supabase configuration
 * Credentials from Project Settings → API
 */
export const GIC_CONFIG = {
  supabase: {
    url: import.meta?.env?.VITE_SUPABASE_URL ?? "https://itihkglyvxkwgiisenbe.supabase.co",
    anonKey: import.meta?.env?.VITE_SUPABASE_ANON_KEY ?? "sb_publishable_JiDl4bwgM1-RhN8t9TRM-Q_qGF2lHMk",
  },
  auth: {
    redirectAfterLogin: "./index.html",
    rememberMeKey: "gic_remember",
  },
};

export function getSupabaseConfig() {
  return {
    url: GIC_CONFIG.supabase.url || window.GIC_SUPABASE_URL || "",
    anonKey: GIC_CONFIG.supabase.anonKey || window.GIC_SUPABASE_ANON_KEY || "",
  };
}
