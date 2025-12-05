# Supabase Setup Instructions

## Step 1: Create the Table in Supabase

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase/migrations/001_create_waitlist_table.sql`
4. Run the SQL script to create the `waitlist` table

## Step 2: Get Your Supabase API Key

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **anon/public** key (this is safe to use in frontend code)
3. This key starts with `eyJ...` and is used for public API access

## Step 3: Configure the API Key

1. Open `src/services/supabase.js`
2. Replace `YOUR_SUPABASE_ANON_KEY` with your actual Supabase anon key:

```javascript
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Your actual key
```

## Step 4: Test the Integration

1. Start your development server: `npm start`
2. Fill out the waitlist form with a name and email
3. Click "Sign Up"
4. Check your Supabase table to verify the data was inserted

## Table Structure

The `waitlist` table has the following columns:
- `id` (BIGSERIAL) - Primary key, auto-incrementing
- `username` (VARCHAR) - User's name (optional)
- `email` (VARCHAR) - User's email (required, unique)
- `created_at` (TIMESTAMP) - When the record was created
- `updated_at` (TIMESTAMP) - When the record was last updated

## Security Notes

- The table uses Row Level Security (RLS) with policies that allow public inserts
- The anon key is safe to use in frontend code as it's limited by RLS policies
- For production, consider adding additional security policies as needed

## Troubleshooting

### Error: "Failed to submit to Supabase"
- Check that your API key is correct
- Verify the table was created successfully
- Check browser console for detailed error messages
- Ensure RLS policies allow inserts

### Error: "This email is already registered"
- The email uniqueness constraint prevents duplicate entries
- This is expected behavior to prevent spam

### CORS Errors
- Supabase REST API should handle CORS automatically
- If you see CORS errors, check your Supabase project settings

