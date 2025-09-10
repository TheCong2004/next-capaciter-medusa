import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.mycapacitorapp',
  appName: 'My Capacitor App',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;