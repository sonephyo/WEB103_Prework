import { createClient } from "@supabase/supabase-js";

const URL = "https://lyxaycetcfvpwhrvdmmg.supabase.co";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGF5Y2V0Y2Z2cHdocnZkbW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNjAyMDQsImV4cCI6MjA3MDkzNjIwNH0.mCAx21fMeumjaAs_OxevxB8tjz3vMEc_5Neju9UKyPA";

export const supabase = createClient(URL, API_KEY);
