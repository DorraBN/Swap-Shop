import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ecommerce.app',
  appName: 'e-commerce',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
