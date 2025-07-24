-- Create table for quote submissions
CREATE TABLE public.quote_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  description TEXT,
  budget TEXT NOT NULL,
  contact_time TEXT NOT NULL,
  areas TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for public form)
CREATE POLICY "Allow public inserts" 
ON public.quote_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading all submissions (if needed for admin)
CREATE POLICY "Allow read access" 
ON public.quote_submissions 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_quote_submissions_updated_at
  BEFORE UPDATE ON public.quote_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();