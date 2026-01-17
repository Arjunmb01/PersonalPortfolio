import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export const useContactForm = () => {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const { error } = await supabase
        .from('contact_messages')
        .insert([data]);
      
      if (error) throw error;
      return true;
    },
    onSuccess: () => {
      toast.success('Transmission sent successfully!');
    },
    onError: (error) => {
      toast.error('Failed to send transmission: ' + error.message);
    },
  });
};
