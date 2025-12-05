# Quick Fix: Create the Waitlist Table

## The Error
"Could not find the table 'public.waitlist' in the schema cache"

This means the table hasn't been created in Supabase yet.

## Solution: Create the Table in Supabase

### Step 1: Open Supabase SQL Editor

1. Go to https://supabase.com/dashboard
2. Select your project (the one with URL: ttnywlhqbiqzofaduefk.supabase.co)
3. Click on **SQL Editor** in the left sidebar
4. Click **New Query**

### Step 2: Run This SQL Code

Copy and paste this entire SQL script into the SQL Editor:

```sql
-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at);

-- Create function for updating updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
DROP TRIGGER IF EXISTS update_waitlist_updated_at ON public.waitlist;
CREATE TRIGGER update_waitlist_updated_at 
    BEFORE UPDATE ON public.waitlist 
    FOR EACH ROW 
    EXECUTE FUNCTION public.update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist;
DROP POLICY IF EXISTS "Allow public reads" ON public.waitlist;

-- Create policies
CREATE POLICY "Allow public inserts" ON public.waitlist
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow public reads" ON public.waitlist
    FOR SELECT
    USING (true);
```

### Step 3: Run the Query

1. Click the **Run** button (or press Ctrl+Enter / Cmd+Enter)
2. You should see "Success. No rows returned" or similar success message

### Step 4: Verify the Table Was Created

1. Go to **Table Editor** in the left sidebar
2. You should see the `waitlist` table listed
3. Click on it to see the table structure

### Step 5: Test Your Form

1. Go back to your website (http://localhost:3000)
2. Fill out the form with a name and email
3. Click "Sign Up"
4. The error should be gone!

## Alternative: Create Table via Table Editor (Simpler)

If SQL doesn't work, you can create it manually:

1. Go to **Table Editor** in Supabase
2. Click **New Table**
3. Name it: `waitlist`
4. Add these columns:
   - `id` - Type: int8, Primary Key, Default: auto-increment
   - `username` - Type: varchar, Nullable: Yes
   - `email` - Type: varchar, Nullable: No, Unique: Yes
   - `created_at` - Type: timestamptz, Default: now()
   - `updated_at` - Type: timestamptz, Default: now()
5. Click **Save**
6. Go to **Authentication** → **Policies**
7. Create a policy for INSERT that allows public access

