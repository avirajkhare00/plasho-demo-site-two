'use client';

import { PlashoSDK, PlashoCamera } from '@plasho/sdk';
import { PlashoForm } from '@/components/PlashoForm';
import { useState } from 'react';

export default function VerificationPage() {
  const [showCamera, setShowCamera] = useState(false);
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<string>('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  
  const plasho = new PlashoSDK({
    apiKey: process.env.NEXT_PUBLIC_PLASHO_API_KEY || 'your-api-key',
  });

  const handleSubmit = async (data: any) => {
    try {
      setEmail(data.collegeEmail);
      await plasho.requestEmailVerification(data);
      setVerificationStatus('Please check your email for OTP');
      setShowOTPInput(true);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      setVerificationStatus('Error submitting form. Please try again. ' + errorMessage);
      console.error('Form submission error:', errorMessage);
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await plasho.verifyEmailOTP(email, otp);
      setVerificationStatus('Email verified successfully. Please capture your ID images.');
      setShowOTPInput(false);
      setShowCamera(true);
    } catch (error: unknown) {
      const errorMessage = typeof error === 'object' && error !== null && 'error' in error
        ? (error as { error: string }).error
        : 'An unexpected error occurred';
      setVerificationStatus(`OTP verification failed. ${errorMessage}`);
      console.error('OTP verification error:', error);
    }
  };

  const handleImagesCapture = async (images: string[]) => {
    try {
      const result = await plasho.verifyId(images);
      setVerificationStatus('ID verification successful!');
      console.log('Verification result:', result);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setVerificationStatus(`ID verification failed: ${errorMessage}`);
      console.error('Verification error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Plasho Verification Demo
        </h1>
        
        {verificationStatus && (
          <div className="mb-6 p-4 rounded bg-blue-50 text-blue-700">
            {verificationStatus}
          </div>
        )}

        {!showCamera && !showOTPInput && (
          <PlashoForm
            onSubmit={handleSubmit}
            onError={(error: unknown) => {
              const errorMessage = error instanceof Error ? error.message : String(error);
              setVerificationStatus('Error: ' + errorMessage);
              console.error('Form error:', errorMessage);
            }}
          />
        )}

        {showOTPInput && (
          <form onSubmit={handleOTPSubmit} className="space-y-4">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Verify OTP
            </button>
          </form>
        )}

        {showCamera && (
          <div className="mt-6">
            <PlashoCamera
              onImagesCapture={handleImagesCapture}
              onError={(error: unknown) => {
                const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
                setVerificationStatus('Camera error: ' + errorMessage);
                console.error('Camera error:', errorMessage);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
