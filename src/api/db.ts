import { createClient } from "@supabase/supabase-js";

export const URI = import.meta.env.VITE_API_URI;
export const API_URL = `${URI}/rest/v1/`;

const TOKEN = import.meta.env.VITE_TOKEN;

export const supabase = createClient(URI, TOKEN);

export const headers = {
  apikey: TOKEN,
  Authorization: `Bearer ${TOKEN}`,
};
