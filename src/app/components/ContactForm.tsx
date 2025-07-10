"use client";
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getLocationFromIP = async (): Promise<string> => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return `${data.city}, ${data.country_name}`;
    } catch (error) {
      console.error('Error getting location:', error);
      return 'Unknown';
    }
  };

  const getIPAddress = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error getting IP:', error);
      return 'Unknown';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get IP and location
      const [ipAddress, location] = await Promise.all([
        getIPAddress(),
        getLocationFromIP()
      ]);

      const submissionData = {
        ...formData,
        ip_address: ipAddress,
        location: location
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 w-full max-w-lg">
      {/* Full Name */}
      <input 
        type="text" 
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-5 py-3 bg-transparent border border-white rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition" 
      />

      {/* Phone + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-5 py-3 bg-transparent border border-white rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition" 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 bg-transparent border border-white rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition" 
        />
      </div>

      {/* Message */}
      <textarea 
        rows={4} 
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-5 py-3 bg-transparent border border-white rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition resize-none" 
      />

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
          submitStatus === 'success' 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : submitStatus === 'error'
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-zinc-800 hover:bg-zinc-700 text-white'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Submitting...
          </div>
        ) : submitStatus === 'success' ? (
          'Message Sent!'
        ) : submitStatus === 'error' ? (
          'Error - Try Again'
        ) : (
          'Submit'
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="text-green-400 text-sm text-center">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="text-red-400 text-sm text-center">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
} 