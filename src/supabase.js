// import { createClient } from '@supabase/supabase-js';

// // Access environment variables using import.meta.env for Vite
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   console.error("Supabase URL:", supabaseUrl);
//   console.error("Supabase Anon Key:", supabaseKey);
//   throw new Error("Supabase URL and Anon Key are required. Check your .env file and ensure they are prefixed with VITE_ and the dev server was restarted.");
// }

// export const supabase = createClient(supabaseUrl, supabaseKey);
import { createClient } from '@supabase/supabase-js';

// Tạm thời dán trực tiếp để kiểm tra kết nối
const supabaseUrl = 'https://vhqgrskokwohbntderxa.supabase.co'; 
const supabaseKey = 'sb_publishable_C8iWRPz-JTCW3VEjba6aaA_WeILA-mh';

export const supabase = createClient(supabaseUrl, supabaseKey);