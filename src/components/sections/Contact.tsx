'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_OPTIONS, FAQS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useContactForm } from '@/hooks/useContactForm';
import { generateWhatsAppUrl, generateTelUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { ContactFormData } from '@/types';
import { StickyMobileActionBar } from '@/components/sections/StickyMobileActionBar';

export function Contact() {
  const { form, handleSubmit, resetForm, errors, isSubmitting } = useContactForm();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle');
    
    // In production, this would send to your backend/API
    // For demo purposes, we'll simulate a successful submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate WhatsApp message
      const whatsappMessage = `Hi, I'd like to book a service:\n\nName: ${data.name}\nPhone: ${data.phone}\nVehicle: ${data.vehicleModel}\nService: ${data.service}\nPreferred Date: ${data.preferredDate || 'Not specified'}\nMessage: ${data.message}`;
      
      // Open WhatsApp with pre-filled message
      window.open(generateWhatsAppUrl(BUSINESS_INFO.whatsapp, whatsappMessage), '_blank', 'noopener,noreferrer');
      
      setSubmitStatus('success');
      setSubmitMessage('Your enquiry has been prepared! WhatsApp will open with your details pre-filled. Send the message to complete your booking.');
      resetForm();
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again or contact us directly via phone or WhatsApp.');
    }
  };

  return (
    <>
      <section
        id="contact"
        className="section-py-mobile bg-surface-muted pb-32 lg:pb-0"
        aria-labelledby="contact-heading"
      >
        <div className="container-premium">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10 lg:mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-body-sm font-medium mb-3">
              Get In Touch
            </span>
            <h2
              id="contact-heading"
              className="font-display font-bold text-heading-mobile text-text-primary mb-3"
            >
              Ready to Give Your Car{' '}
              <span className="text-gradient">the Best Care?</span>
            </h2>
            <p className="text-body text-text-secondary leading-relaxed">
              Book an appointment, ask a question, or just say hello. We&apos;re here to help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Contact Info & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="bordered" className="h-full">
                <CardContent className="pt-4 lg:pt-6">
                  <h3 className="font-display font-bold text-heading-lg text-text-primary mb-4 lg:mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-5 mb-6 lg:mb-8">
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                        <MapPin className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-text-primary mb-1">Visit Us</h4>
                        <address className="not-italic text-text-secondary leading-relaxed text-body-sm">
                          {BUSINESS_INFO.address}
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                        <Phone className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-text-primary mb-1">Call Us</h4>
                        <a
                          href={generateTelUrl(BUSINESS_INFO.phone)}
                          className="text-text-secondary hover:text-primary transition-colors"
                        >
                          {BUSINESS_INFO.phone}
                        </a>
                        <p className="text-body-sm text-text-muted mt-1">
                          Available 8 AM - 10 PM daily
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-accent/10 rounded-xl text-accent flex-shrink-0">
                        <MessageCircle className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-text-primary mb-1">WhatsApp Enquiry</h4>
                        <a
                          href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2"
                        >
                          <span>Chat on WhatsApp</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                        <Mail className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-text-primary mb-1">Email Us</h4>
                        <a
                          href={`mailto:${BUSINESS_INFO.email}`}
                          className="text-text-secondary hover:text-primary transition-colors"
                        >
                          {BUSINESS_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Buttons - Mobile optimized */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <Button
                      variant="primary"
                      className="w-full justify-center gap-2 touch-target-lg"
                      onClick={() => window.open(generateTelUrl(BUSINESS_INFO.phone), '_self')}
                    >
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      Call Now
                    </Button>
                    <Button
                      variant="accent"
                      className="w-full justify-center gap-2 touch-target-lg"
                      onClick={() => window.open(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`, '_blank', 'noopener,noreferrer')}
                    >
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                      WhatsApp Enquiry
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-center gap-2 touch-target-lg"
                      onClick={() => window.open(BUSINESS_INFO.location.mapsUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card variant="bordered">
                <CardContent className="pt-4 lg:pt-6">
                  <h3 className="font-display font-bold text-heading-lg text-text-primary mb-4 lg:mb-6">
                    Send an Enquiry
                  </h3>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Your Name *"
                        placeholder="John Doe"
                        {...form.register('name')}
                        error={errors.name?.message}
                      />
                      <Input
                        label="Phone Number *"
                        placeholder="+91 98765 43210"
                        type="tel"
                        {...form.register('phone')}
                        error={errors.phone?.message}
                      />
                    </div>

                    <Input
                      label="Vehicle Model *"
                      placeholder="e.g., Honda City 2022, Toyota Fortuner"
                      {...form.register('vehicleModel')}
                      error={errors.vehicleModel?.message}
                    />

                    <Select
                      label="Required Service *"
                      placeholder="Select a service"
                      options={SERVICE_OPTIONS}
                      {...form.register('service')}
                      error={errors.service?.message}
                    />

                    <Input
                      label="Preferred Date (Optional)"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      {...form.register('preferredDate')}
                      error={errors.preferredDate?.message}
                    />

                    <Textarea
                      label="Additional Message *"
                      placeholder="Tell us about your requirements, any specific concerns, or preferred time..."
                      {...form.register('message')}
                      error={errors.message?.message}
                    />

                    {/* Submit Status */}
                    <AnimatePresence mode="wait">
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-4 bg-success/10 border border-success/20 rounded-xl flex items-start gap-3"
                          role="alert"
                        >
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div className="text-success">
                            <p className="font-medium">Enquiry Prepared!</p>
                            <p className="text-body-sm mt-1">{submitMessage}</p>
                          </div>
                        </motion.div>
                      )}
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-4 bg-accent/10 border border-accent/20 rounded-xl flex items-start gap-3"
                          role="alert"
                        >
                          <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div className="text-accent">
                            <p className="font-medium">Submission Failed</p>
                            <p className="text-body-sm mt-1">{submitMessage}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full touch-target-lg"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </Button>

                    <p className="text-center text-body-sm text-text-muted">
                      By submitting, you agree to be contacted via phone/WhatsApp regarding your enquiry.
                      This is a demo form — submissions open WhatsApp with pre-filled details.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 lg:mt-12"
          >
            <h3 className="font-display font-bold text-heading-lg text-text-primary mb-3 text-center">
              Our Location
            </h3>
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                src={BUSINESS_INFO.location.embedUrl}
                width="100%"
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KWICK N' KLEAN CAR SERVICES Location"
              />
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 lg:mt-16"
          >
            <h3 className="font-display font-bold text-heading-lg text-text-primary mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {FAQS.map((faq, index) => (
                <Card key={index} variant="bordered" className="p-4 lg:p-6">
                  <h4 className="font-medium text-text-primary mb-2">{faq.question}</h4>
                  <p className="text-text-secondary">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile Action Bar */}
      <StickyMobileActionBar hiddenIds={['call', 'whatsapp', 'directions']} />
    </>
  );
}