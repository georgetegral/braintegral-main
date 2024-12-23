import type { Metadata, Viewport } from 'next';

import { Provider } from '@/components/ui/provider';
import { Layout } from '@/lib/layout/index';
import { GeolocationProvider } from '@/components/GeolocationContext';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Braintegral';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '' },
  description: 'Braintegral main',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <GeolocationProvider>
            <Layout>{children}</Layout>
          </GeolocationProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
