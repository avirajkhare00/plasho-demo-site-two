import { PlashoSDK } from '@plasho/sdk';

export const plasho = new PlashoSDK({
  apiKey: process.env.NEXT_PUBLIC_PLASHO_API_KEY || 'your-api-key',
});
