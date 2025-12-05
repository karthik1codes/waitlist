-- Create waitlist table in Supabase
-- This table stores user submissions from the waitlist form

CREATE TABLE IF NOT EXISTS public.waitlist (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at);

-- Add a trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_waitlist_updated_at ON public.waitlist;
CREATE TRIGGER update_waitlist_updated_at BEFORE UPDATE
    ON public.waitlist FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Enable Row Level Security (RLS) - adjust policies as needed
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist;
DROP POLICY IF EXISTS "Allow public reads" ON public.waitlist;

-- Create a policy to allow inserts (for form submissions)
-- Note: You may need to adjust this policy based on your security requirements
CREATE POLICY "Allow public inserts" ON public.waitlist
    FOR INSERT
    WITH CHECK (true);

-- Create a policy to allow reads (optional - adjust as needed)
CREATE POLICY "Allow public reads" ON public.waitlist
    FOR SELECT
    USING (true);

