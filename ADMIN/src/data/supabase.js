import {createClient} from "@supabase/supabase-js";

const SUPABASE_URL = "https://tupqzncqqidtudruhenq.supabase.co"
const SUPABASE_KEY = "sb_publishable_OWW0hlXW6BuqQkZ6HDmvjA_7-sfR3Q3"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)