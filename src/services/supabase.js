import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dknmpbufzlzzixssxffc.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrbm1wYnVmemx6eml4c3N4ZmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzOTY1NzQsImV4cCI6MjAxNDk3MjU3NH0.Km-skEskOtstUoi-GRE0wmlEOKEyZrb2Qk1bxeCJXtE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
