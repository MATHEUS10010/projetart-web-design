-- Create table for storing quote form submissions
CREATE TABLE public.quote_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  budget TEXT NOT NULL,
  contact_time TEXT NOT NULL,
  areas TEXT[] NOT NULL DEFAULT '{}',
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a public form)
CREATE POLICY "Anyone can insert quote submissions" 
ON public.quote_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow only authenticated users to view submissions (for admin)
CREATE POLICY "Authenticated users can view quote submissions" 
ON public.quote_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');

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