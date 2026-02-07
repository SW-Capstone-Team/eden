import { createClient } from '@supabase/supabase-js';
import { SB_URL, SB_KEY } from '@env';

type SupabaseConfig = {
    supabaseUrl: string;
    supabaseKey: string;
};

const supabaseConfig: SupabaseConfig = {
    supabaseUrl: SB_URL || '',
    supabaseKey: SB_KEY || ''
};

const supabase = createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseKey);

export default supabase;