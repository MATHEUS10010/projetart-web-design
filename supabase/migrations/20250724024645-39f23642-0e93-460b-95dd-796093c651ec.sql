-- Fix security issues by recreating the function with search_path
DROP TRIGGER IF EXISTS update_quote_submissions_updated_at ON public.quote_submissions;
DROP FUNCTION IF EXISTS public.update_updated_at_column() CASCADE;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

-- Recreate the trigger
CREATE TRIGGER update_quote_submissions_updated_at
  BEFORE UPDATE ON public.quote_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();