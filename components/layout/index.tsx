import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { LayoutContainer } from './Layout.styles';
import { Toaster } from 'react-hot-toast';

interface LayoutProp {
  children: ReactNode;
  title: string;
}

const Layout: FC<LayoutProp> = ({ children, title }: LayoutProp) => {
  return (
    <LayoutContainer>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, maximum-scale=1' />
        <link rel='shortcut icon' href='/assets/logo.svg' />
      </Head>

      {children}

      <Toaster
        position='top-right'
        toastOptions={{
          // Define default options
          style: {
            // background: '#363636',
            color: '#fff',
            zIndex: 1,
          },
          duration: 5000,
          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              background: '#DCF8E7',
              border: '0.8px solid #279058',
              borderRadius: '8px',
              color: '#279058',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontSize: '14px',
            },
          },
          error: {
            duration: 3000,
            style: {
              background: '#FFE4E4',
              border: '0.8px solid #B44445',
              borderRadius: '8px',
              color: '#B44445',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontSize: '14px',
            },
          },
          loading: {
            duration: 3000,
            style: {
              background: '#FAFAFA',
              border: '0.8px solid #BDBDBD',
              borderRadius: '8px',
              color: '#828282',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontSize: '14px',
            },
          },
        }}
      />
    </LayoutContainer>
  );
};

export default Layout;
