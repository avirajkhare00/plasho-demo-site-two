'use client';

import { PlashoSDK, PlashoForm, PlashoCamera } from '@plasho/sdk';
import { useState } from 'react';

export default function VerificationPage() {
  const [showCamera, setShowCamera] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<string>('');
  
  const plasho = new PlashoSDK({
    apiKey: process.env.NEXT_PUBLIC_PLASHO_API_KEY || 'your-api-key',
  });

  const handleSubmit = async (data: any) => {
    try {
      await plasho.requestEmailVerification(data);
      setVerificationStatus('Form submitted successfully. Please capture your ID images.');
      setShowCamera(true);
    } catch (error) {
      setVerificationStatus('Error submitting form. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  const handleImagesCapture = async (images: string[]) => {
    try {
      const result = await plasho.verifyId(images);
      setVerificationStatus('ID verification successful!');
      console.log('Verification result:', result);
    } catch (error) {
      setVerificationStatus('ID verification failed. Please try again.');
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

        {!showCamera ? (
          <PlashoForm
            onSubmit={handleSubmit}
            onError={(error) => {
              setVerificationStatus('Error: ' + error.message);
              console.error('Form error:', error);
            }}
          />
        ) : (
          <div className="mt-6">
            <PlashoCamera
              onImagesCapture={handleImagesCapture}
              onError={(error) => {
                setVerificationStatus('Camera error: ' + error.message);
                console.error('Camera error:', error);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
