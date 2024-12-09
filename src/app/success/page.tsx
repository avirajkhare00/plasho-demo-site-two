'use client';

import styles from './success.module.css';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className={styles['success-checkmark']}>
          <div className={styles['check-icon']}>
            <span className={`${styles['icon-line']} ${styles['line-tip']}`}></span>
            <span className={`${styles['icon-line']} ${styles['line-long']}`}></span>
            <div className={styles['icon-circle']}></div>
            <div className={styles['icon-fix']}></div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Verification Successful!</h2>
          <p className="mt-2 text-gray-600">
            Your student status has been verified. You can now enjoy exclusive student benefits!
          </p>
          <a 
            href="/"
            className="inline-block mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
