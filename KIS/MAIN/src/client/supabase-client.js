import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://tupqzncqqidtudruhenq.supabase.co"
const supabaseKey = "sb_publishable_OWW0hlXW6BuqQkZ6HDmvjA_7-sfR3Q3"

export const supabase = createClient(supabaseUrl, supabaseKey);