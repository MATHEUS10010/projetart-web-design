-- Drop the existing insert policy
DROP POLICY IF EXISTS "Anyone can insert quote submissions" ON public.quote_submissions;

-- Create a new policy that allows anonymous users to insert
CREATE POLICY "Allow anonymous inserts on quote_submissions" 
ON public.quote_submissions 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Also allow authenticated users to insert
CREATE POLICY "Allow authenticated inserts on quote_submissions" 
ON public.quote_submissions 
FOR INSERT 
TO authenticated
WITH CHECK (true);