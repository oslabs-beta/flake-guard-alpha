import {createClient} from '@supabase/supabase-js';

const supabaseClient = createClient(
  'https://ezrzvlhfxhfzkdsimvma.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6cnp2bGhmeGhmemtkc2ltdm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3MjM5NzksImV4cCI6MjAzMzI5OTk3OX0.lHxlBwDgaSdGYORzspbNkJumfMvHgHv4eXcnE5FTE1s'
);

export {supabaseClient};
