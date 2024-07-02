import {createClient} from '@supabase/supabase-js';

const supabaseClient = createClient(
  'https://loaqgsdpuktznsvfjtbr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvYXFnc2RwdWt0em5zdmZqdGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNjUyMTEsImV4cCI6MjAzMjg0MTIxMX0.2dYTwTgfLhw9A9ACngtYZva0_nNy3-QwnzYPdX_dBHk'
);

export {supabaseClient};
