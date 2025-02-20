import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xqwtrejktfnfkkgfejwv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhxd3RyZWprdGZuZmtrZ2Zland2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMzMzMzAsImV4cCI6MjA0ODcwOTMzMH0.ts9eikIVGmaoBqoSvk0nrrE6_oii8-bs-vrer22nR6s'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;