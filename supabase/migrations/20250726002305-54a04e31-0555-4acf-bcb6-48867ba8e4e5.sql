-- Alterar a coluna email para ser opcional na tabela quote_submissions
ALTER TABLE quote_submissions ALTER COLUMN email DROP NOT NULL;