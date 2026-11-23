import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContactFormData } from '@/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15, 'Phone number is too long'),
  vehicleModel: z.string().min(1, 'Please enter your vehicle model'),
  service: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function useContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      vehicleModel: '',
      service: '',
      preferredDate: '',
      message: '',
    },
    mode: 'onBlur',
  });

  const resetForm = () => {
    form.reset();
  };

  return {
    form,
    handleSubmit: form.handleSubmit,
    resetForm,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    isValid: form.formState.isValid,
  };
}