import Layout from '@/layouts/Layout';
import { type Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/assets/scss/ui.scss';

export const metadata: Metadata = {
  title: 'Meta Title',
  description: 'Meta Disription',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
