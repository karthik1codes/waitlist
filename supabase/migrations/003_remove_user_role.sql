-- Remove user_role column from waitlist table
-- This field has been replaced with 'disability' field

ALTER TABLE public.waitlist
DROP COLUMN IF EXISTS user_role;

-- Drop the index if it exists
DROP INDEX IF EXISTS idx_waitlist_user_role;

