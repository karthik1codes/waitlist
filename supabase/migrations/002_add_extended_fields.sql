-- Add extended fields to waitlist table for comprehensive user information
-- This migration adds fields for usage type (personal/school), disability, and school information

ALTER TABLE public.waitlist
ADD COLUMN IF NOT EXISTS usage_type VARCHAR(50), -- 'personal' or 'school'
ADD COLUMN IF NOT EXISTS disability VARCHAR(50), -- stores disability type
ADD COLUMN IF NOT EXISTS cognitive_issue TEXT, -- stores cognitive issue details if applicable
ADD COLUMN IF NOT EXISTS school_name VARCHAR(255), -- school name if usage_type is 'school'
ADD COLUMN IF NOT EXISTS school_address TEXT; -- school address if usage_type is 'school'

-- Update the username column to be nullable (we use single name field)
ALTER TABLE public.waitlist
ALTER COLUMN username DROP NOT NULL;

-- Add indexes for filtering
CREATE INDEX IF NOT EXISTS idx_waitlist_usage_type ON public.waitlist(usage_type);
CREATE INDEX IF NOT EXISTS idx_waitlist_disability ON public.waitlist(disability);
CREATE INDEX IF NOT EXISTS idx_waitlist_school_name ON public.waitlist(school_name);
